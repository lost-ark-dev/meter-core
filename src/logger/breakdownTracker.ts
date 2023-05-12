import { Breakdown } from "./data";

export class BreakdownTracker {
  private entityToSkillBreakdown: Map<bigint, Map<number, Breakdown[]>>;

  constructor() {
    this.entityToSkillBreakdown = new Map()
  }


  public reset() {
    this.entityToSkillBreakdown.clear();
  }


  /**
   * Adds an entry for the given entity if it doesn't exist yet.
   *
   * @param entityId
   * @returns The entry for the given entity.
   */
  public addOrGetEntity(entityId: bigint): Map<number, Breakdown[]> {
    if (!this.entityToSkillBreakdown.has(entityId)) {
      this.entityToSkillBreakdown.set(entityId, new Map());
    }
    return this.entityToSkillBreakdown.get(entityId)!;
  }


  /**
   * Removes the entry for the given entity.
   *
   * @param entityId The ID of the entity to remove the entry for.
   */
  public removeEntry(entityId: bigint) {
    this.entityToSkillBreakdown.delete(entityId);
  }


  /**
   * Adds a breakdown to the given entity and skill.
   *
   * @param entityId The ID of the entity to add the breakdown for.
   * @param skillId The ID of the skill to add the breakdown for.
   * @param breakdown The breakdown to add.
   */
  public addBreakdown(entityId: bigint, skillId: number, breakdown: Breakdown) {
    const entityBreakdown = this.addOrGetEntity(entityId);
    if (!entityBreakdown.has(skillId)) {
      const skill = new Array<Breakdown>(breakdown);
      entityBreakdown.set(skillId, skill);
    } else {
      entityBreakdown.get(skillId)!.push(breakdown);
    }
  }


/**
 * Returns the breakdowns for the given entity and skill, or undefined if none exist.
 *
 * @param entityId The ID of the entity to get the breakdowns for.
 * @param skillId The ID of the skill to get the breakdowns for.
 * @returns The breakdowns for the given entity and skill, or undefined if none exist.
 */
  public getBreakdowns(entityId: bigint, skillId: number): Breakdown[] | undefined {
    const entityBreakdown = this.entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown) return undefined;

    return entityBreakdown.get(skillId);
  }


  /**
   * Clears the breakdowns for the given entity and skill.
   *
   * @param entityId The ID of the entity to clear the breakdowns for.
   * @param skillId The ID of the skill to clear the breakdowns for.
   */
  public clearBreakdowns(entityId: bigint, skillId: number) {
    const entityBreakdown = this.entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown) return;

    entityBreakdown.delete(skillId);
  }
}