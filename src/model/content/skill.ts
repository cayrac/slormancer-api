import { AbstractEffectValue } from './effect-value';
import { HeroClass } from './enum/hero-class';
import { SkillCostType } from './enum/skill-cost-type';
import { SkillGenre } from './enum/skill-genre';
import { SkillElement } from './skill-element';
import { SkillType } from './skill-type';

export interface Skill {
    id: number;
    type: SkillType.Active | SkillType.Support;
    heroClass: HeroClass,
    unlockLevel: number | null;
    level: number;
    maxLevel: number;
    baseLevel: number;
    bonusLevel: number;
    name: string;
    specialization: number | null;
    specializationName: string | null;
    icon: string;
    levelIcon: string;
    iconLarge: string;
    description: string;
    baseCooldown: number;
    precastTime: number;
    castTime: number;
    cooldown: number;
    baseGenres: Array<SkillGenre>;
    genres: Array<SkillGenre>;
    damageTypes: Array<string>;
    locked: boolean;
    elements: Array<SkillElement>;

    initialManaCost: number;
    perLevelManaCost: number;
    baseManaCost: number;
    manaCost: number;
    baseLifeCost: number;
    lifeCost: number;
    baseCostType: SkillCostType;
    manaCostType: SkillCostType;
    lifeCostType: SkillCostType;
    hasLifeCost: boolean;
    hasManaCost: boolean;
    hasNoCost: boolean;

    nameLabel: string;
    genresLabel: string | null;
    costLabel: string | null;
    cooldownLabel: string | null;
    cooldownDetailsLabel: string | null;

    template: string;
    values: Array<AbstractEffectValue>;
}