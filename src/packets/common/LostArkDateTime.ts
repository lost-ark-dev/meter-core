import type { Read, Write } from "../stream";

const daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function IsLeapYear(y: number) {
  return !(y % 4 || (!(y % 100) && y % 400));
}

function isValidDate(year: number, month: number, day: number) {
  if (year > 99) {
    if (year < 1752 || (year == 1752 && (month < 9 || (month == 9 && day << 14)))) {
      return false;
    }
  } else {
    year += 1900;
  }
  return (
    day > 0 &&
    /* 
  month > 0 &&*/ month <= 12 &&
    (day <= daysInMonths[month]! || (day == 29 && month == 2 && IsLeapYear(year)))
  );
}

function bigintToDate(value: bigint): LostArkDateTime {
  let LODWORD = Number(value & 0xffffffffn);
  let HIDWORD = Number((value >> 32n) & 0xffffffffn);
  let year = LODWORD & 0xfff; //12bit
  let month = (LODWORD & 0xffff) >> 12; //16-12 = 4bit
  let day = (LODWORD >> 16) & 0x1f; //5bit
  //let julianDay = 0;
  if (isValidDate(year, month, day)) {
    //julianDay = UtToJulianDay(year, month, day);
  } else {
    year = month = day = 0;
  }

  let h = (LODWORD >> 21) & 0x1f; //5bit
  let m = (LODWORD >> 26) & 0x3f; // 6bit
  let s = HIDWORD & 0x3f; //6bit
  let ms = (HIDWORD >> 6) & 0x3fff; //14bit
  //let dayTicks = 86400000;
  if (h < 24 && m < 60 && s < 60 && ms < 1000) {
    //dayTicks = ms + 1000 * (s + 60 * (m + 60 * h));
  } else {
    h = 24;
    m = s = ms = 0;
  }
  return new Date(Date.UTC(year <= 99 ? year + 1900 : year, month - 1, day, h, m, s, ms));
}
function dateToBigint(date: LostArkDateTime): bigint {
  let result = 0n;
  result |= BigInt(date.getUTCMilliseconds()) << 38n;
  result |= BigInt(date.getUTCSeconds()) << 32n;
  result |= BigInt(date.getUTCMinutes()) << 26n;
  result |= BigInt(date.getUTCHours()) << 21n;
  result |= BigInt(date.getUTCDate()) << 16n;
  result |= BigInt(date.getUTCMonth() + 1) << 12n;
  result |= BigInt(date.getUTCFullYear() < 2000 ? date.getUTCFullYear() - 1900 : date.getUTCFullYear());
  return result;
}
export type LostArkDateTime = Date;

/*bigintBits
s: ms, S: seconds, m: minutes, h: hours, M: month, D: day, Y: year
ssssssssssssssSSSSSSmmmmmmhhhhhDDDDDMMMMYYYYYYYYYYYY -> 52bit
14bit         6bit  6bit  5bit 5bit 4bit    12bit
*/
//TODO: in some cases, there is data in the 12 first bits -> understand what
export function read(reader: Read, version: number = 0): LostArkDateTime {
  const s = reader.u16();
  if ((s & 0xfff) < 0x81f) {
    reader.o -= 2;
    return bigintToDate(reader.i64()); //Full dateTime
  } else {
    return bigintToDate((BigInt(s) & 0xfffn) | 0x11000n); //1st jan [Year]
  }
}
export function write(writer: Write, date: LostArkDateTime = bigintToDate(0x1181fn)) {
  if (date.getUTCFullYear() >= 2079) {
    /**
     * We should be writing:
     * writer.u16(date.getUTCFullYear()  & 0xfffn));
     * here, as this is what the game processes, But the servers seems to do that mistake, so we'll do the same
     */
    writer.u16(Number(dateToBigint(date) & 0xffffn));
  } else writer.i64(dateToBigint(date)); //TODO: hotfixed to signed, we might need to check the output
}
