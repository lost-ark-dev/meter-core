* `npx -- tsc --showConfig > tsconfig.tsnode.json`
* `npx -- ts-node --project tsconfig.tsnode.json src/test.ts`

## To get meter gain from skills, you have to do the following:
1. Take (base gauge gain skill value)
2. then (tripod multiplier)
3. floor the number
4. then(rune multiplier)
5. floor the number
6. then (enlightenment bracelet multiplier, if applicable)
7. floor the number
8. then(spec multiplier) + (engraving multiplier like PS which is additive to spec multiplier, if applicable)
9. spec multiplier is defined by (spec)*(class spec scaling)/6.99
10. floor the number
11. but you have to do it for **every individual hit for multiple hits** you need to calculate *every hit separately* with the above”
