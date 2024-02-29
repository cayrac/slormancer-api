import { Injectable } from '@angular/core';

import {
    GLOBAL_MERGED_STATS_MAPPING,
    HERO_MERGED_STATS_MAPPING,
    SKILL_MERGED_STATS_MAPPING,
} from '../../constants/content/data/data-character-stats-mapping';
import { Character, CharacterSkillAndUpgrades } from '../../model/character';
import { CharacterConfig } from '../../model/character-config';
import { Activable } from '../../model/content/activable';
import { AncestralLegacy } from '../../model/content/ancestral-legacy';
import { AttributeTraits } from '../../model/content/attribute-traits';
import { MergedStat, SynergyResolveData } from '../../model/content/character-stats';
import { ClassMechanic } from '../../model/content/class-mechanic';
import { HeroClass } from '../../model/content/enum/hero-class';
import { SkillCostType } from '../../model/content/enum/skill-cost-type';
import { SkillGenre } from '../../model/content/enum/skill-genre';
import { EquipableItem } from '../../model/content/equipable-item';
import { Mechanic } from '../../model/content/mechanic';
import { Reaper } from '../../model/content/reaper';
import { Rune } from '../../model/content/rune';
import { Skill } from '../../model/content/skill';
import { SkillUpgrade } from '../../model/content/skill-upgrade';
import { MinMax } from '../../model/minmax';
import { isDamageType, isEffectValueSynergy, valueOrDefault } from '../../util/utils';
import { SlormancerMergedStatUpdaterService } from './slormancer-merged-stat-updater.service';
import { SlormancerStatMappingService } from './slormancer-stat-mapping.service';
import { ExtractedStatMap, ExtractedStats, SlormancerStatsExtractorService } from './slormancer-stats-extractor.service';
import { SlormancerSynergyResolverService } from './slormancer-synergy-resolver.service';

export interface CharacterStatsBuildResult {
    unlockedAncestralLegacies: Array<number>;
    unresolvedSynergies: Array<SynergyResolveData>;
    resolvedSynergies: Array<SynergyResolveData>;
    extractedStats: ExtractedStatMap,
    stats: Array<MergedStat>,
    changed:  {
        items: Array<EquipableItem>;
        ancestralLegacies: Array<AncestralLegacy>;
        skills: Array<Skill>;
        upgrades: Array<SkillUpgrade>;
        reapers: Array<Reaper>;
        attributes: Array<AttributeTraits>;
        activables: Array<Activable>;
        mechanics: Array<Mechanic>;
        classMechanic: Array<ClassMechanic>;
        runes: Array<Rune>;
    }
}

export interface SkillStatsBuildResult {
    unresolvedSynergies: Array<SynergyResolveData>;
    extractedStats: ExtractedStatMap,
    stats: Array<MergedStat>,
    changed: {
        skills: Array<Skill>;
        upgrades: Array<SkillUpgrade>;
    }
}

@Injectable()
export class SlormancerStatsService {

    constructor(private slormancerStatsExtractorService: SlormancerStatsExtractorService,
                private slormancerSynergyResolverService: SlormancerSynergyResolverService,
                private slormancerStatUpdaterService: SlormancerMergedStatUpdaterService,
                private slormancerStatMappingService: SlormancerStatMappingService) { }

    private addSkillStats(stats: Array<MergedStat>, skills: Array<CharacterSkillAndUpgrades>) {
        for (const sau of skills) {
            stats.push({
                allowMinMax: false,
                readonly: false,
                precision: 0,
                displayPrecision: undefined,
                stat: 'based_on_mastery_' + sau.skill.id,
                total: sau.skill.level,
                totalDisplayed: sau.skill.level,
                suffix: '',
                values: {
                    flat: [ { value: sau.skill.level, extra: false, source: { skill: sau.skill }  }],
                    max: [],
                    percent: [],
                    maxPercent: [],
                    multiplier: [],
                    maxMultiplier: [],
                }
            });
        }
    }

    private hasSynergyValueChanged(synergy: SynergyResolveData): boolean {
        let result = true;

        if (typeof synergy.originalValue === typeof synergy.effect.displaySynergy) {
            if (typeof synergy.originalValue === 'number') {
                result = synergy.originalValue !== synergy.effect.displaySynergy;
            } else {
                result = synergy.originalValue.min !== (<MinMax>synergy.effect.displaySynergy).min
                      || synergy.originalValue.max !== (<MinMax>synergy.effect.displaySynergy).max;
            }
        }

        return result;
    }

    private applyReaperSpecialChanges(character: Character, config: CharacterConfig) {
        if (character.reaper.id === 84) {
            const activable = character.reaper.activables.find(activable => activable.id === 21);
            
            if (activable !== undefined) {
                const hasTotem = activable.genres.includes(SkillGenre.Totem);

                if (config.show_temple_keeper_as_totem && !hasTotem) {
                    activable.genres.push(SkillGenre.Totem);
                } else if (!config.show_temple_keeper_as_totem && hasTotem) {
                    activable.genres.splice(activable.genres.indexOf(SkillGenre.Totem), 1);
                }

            }
        }
    }

    public updateCharacterStats(character: Character, config: CharacterConfig, additionalItem: EquipableItem | null = null, additionalRunes: Array<Rune> = [], additionalStats: ExtractedStatMap = {}): CharacterStatsBuildResult {
        const result: CharacterStatsBuildResult = {
            unlockedAncestralLegacies: [],
            unresolvedSynergies: [],
            resolvedSynergies: [],
            extractedStats: {},
            stats: [],
            changed: {
                items: [],
                ancestralLegacies: [],
                skills: [],
                upgrades: [],
                reapers: [],
                attributes: [],
                activables: [],
                mechanics: [],
                classMechanic: [],
                runes: [],
            }
        }
        const mapping = [...GLOBAL_MERGED_STATS_MAPPING, ...HERO_MERGED_STATS_MAPPING[character.heroClass]];
        const extractedStats = this.slormancerStatsExtractorService.extractCharacterStats(character, config, additionalItem, additionalRunes, mapping, additionalStats);
        
        this.applyReaperSpecialChanges(character, config);

        result.extractedStats = extractedStats.stats;
        result.stats = this.slormancerStatMappingService.buildMergedStats(extractedStats.stats, mapping, config);
        
        if (character.ultimatum !== null && !character.ultimatum.locked) {
            this.slormancerStatMappingService.applyUltimatum(result.stats, mapping, character.ultimatum, config, result.extractedStats);
        }

        for (const stats of result.stats) {
            this.slormancerStatUpdaterService.updateStatTotal(stats);
        }

        const synergyResult = this.slormancerSynergyResolverService.resolveSynergies(extractedStats.synergies, result.stats, extractedStats.stats, config);
        result.unresolvedSynergies = synergyResult.unresolved;
        result.resolvedSynergies = synergyResult.resolved;
        result.unlockedAncestralLegacies = valueOrDefault(extractedStats.stats['unlock_ancestral_legacy_max_rank'], []).map(v => v.value);

        this.slormancerSynergyResolverService.resolveIsolatedSynergies(extractedStats.isolatedSynergies, result.stats, extractedStats.stats);

        for (const synergy of [...extractedStats.synergies, ...extractedStats.isolatedSynergies]) {
            if (this.hasSynergyValueChanged(synergy)) {
                if ('ancestralLegacy' in synergy.objectSource) {
                    result.changed.ancestralLegacies.push(synergy.objectSource.ancestralLegacy);
                } else if ('attribute' in synergy.objectSource) {
                    result.changed.attributes.push(synergy.objectSource.attribute);
                } else if ('item' in synergy.objectSource) {
                    result.changed.items.push(synergy.objectSource.item);
                } else if ('reaper' in synergy.objectSource) {
                    result.changed.reapers.push(synergy.objectSource.reaper);
                } else if ('skill' in synergy.objectSource) {
                    result.changed.skills.push(synergy.objectSource.skill);
                } else if ('upgrade' in synergy.objectSource) {
                    result.changed.upgrades.push(synergy.objectSource.upgrade);
                } else if ('activable' in synergy.objectSource) {
                    result.changed.activables.push(synergy.objectSource.activable);
                } else if ('mechanic' in synergy.objectSource) {
                    result.changed.mechanics.push(synergy.objectSource.mechanic);
                } else if ('classMechanic' in synergy.objectSource) {
                    result.changed.classMechanic.push(synergy.objectSource.classMechanic);
                } else if ('rune' in synergy.objectSource) {
                    result.changed.runes.push(synergy.objectSource.rune);
                }
            }
        }

        return result;
    }

    private applySkillSpecialChanges(character: Character, skillAndUpgrades: CharacterSkillAndUpgrades, config: CharacterConfig, extractedStats: ExtractedStats, result: SkillStatsBuildResult) {
        skillAndUpgrades.skill.manaCostType = skillAndUpgrades.skill.baseCostType;
        skillAndUpgrades.skill.genres = skillAndUpgrades.skill.baseGenres.slice(0);
        
        if (character.heroClass === HeroClass.Huntress && skillAndUpgrades.skill.id === 4) {
            const physicalDamage = extractedStats.stats['damage_type_to_elemental'] === undefined;
            
            const damageValues = skillAndUpgrades.skill.values
                .filter(isEffectValueSynergy)
                .filter(value => isDamageType(value.stat));

            for (const damageValue of damageValues) {
                damageValue.stat = physicalDamage ? 'physical_damage' : 'elemental_damage';
                damageValue.source = physicalDamage ? 'physical_damage' : 'elemental_damage';
            }
        }  

        let skillHasNoCost = false;
        
        if (extractedStats.stats['last_cast_tormented_remove_cost'] !== undefined && config.last_cast_tormented) {
            skillHasNoCost = true;
        }
        if (extractedStats.stats['no_cost_if_tormented'] !== undefined && config.serenity === 0) {
            skillHasNoCost = true;
        }
        if (extractedStats.stats['skill_has_no_cost_if_low_mana'] !== undefined && config.serenity === 0) {
            const treshold = extractedStats.stats['skill_has_no_cost_if_low_mana_treshold'];
            if (treshold !== undefined && treshold.length > 0) {
                const firstTreshold = treshold.map(v => v.value)[0];
                if (firstTreshold !== undefined && (100 - config.percent_missing_mana) < firstTreshold) {
                    skillHasNoCost = true;
                }
            }
        }

        if (skillHasNoCost) {
            skillAndUpgrades.skill.hasNoCost = true;
        } else {
            skillAndUpgrades.skill.hasNoCost = !skillAndUpgrades.skill.hasManaCost && !skillAndUpgrades.skill.hasLifeCost;
        }

        if (character.heroClass === HeroClass.Mage) {
            if (extractedStats.stats['cast_by_clone'] !== undefined) {
                skillAndUpgrades.skill.genres.push(SkillGenre.Totem);
            }

            let newMagicSchool: SkillGenre | null = null; // config
            if (character.heroClass === HeroClass.Mage && skillAndUpgrades.skill.id === 8) {
                newMagicSchool = config.attunment_pulse_current_school;
            } else if (extractedStats.stats['skill_is_now_temporal'] !== undefined) {
                newMagicSchool = SkillGenre.Temporal;
            } else if (extractedStats.stats['skill_is_now_obliteration'] !== undefined) {
                newMagicSchool = SkillGenre.Obliteration;
            }
    
            if (newMagicSchool !== null) {
                const index = skillAndUpgrades.skill.genres.findIndex(genre => genre === SkillGenre.Arcanic || genre === SkillGenre.Temporal || genre === SkillGenre.Obliteration)
                if (index !== -1) {
                    skillAndUpgrades.skill.genres.splice(index, 1, newMagicSchool);
                }
            }
        }

        if (skillAndUpgrades.skill.id === 3 && config.add_totem_tag_to_prime_totem_skills && [71, 72].includes(character.reaper.id) && !skillAndUpgrades.skill.genres.includes(SkillGenre.Totem)) {
            skillAndUpgrades.skill.genres.push(SkillGenre.Totem);
        }

        if (extractedStats.stats['no_longer_cost_per_second'] !== undefined) {
            if (skillAndUpgrades.skill.manaCostType === SkillCostType.ManaSecond) {
                skillAndUpgrades.skill.manaCostType = SkillCostType.Mana;
            }
            if (skillAndUpgrades.skill.lifeCostType === SkillCostType.LifeSecond) {
                skillAndUpgrades.skill.lifeCostType = SkillCostType.Life;
            }
        }
    }

    public updateSkillStats(character: Character, skillAndUpgrades: CharacterSkillAndUpgrades, config: CharacterConfig, characterStats: CharacterStatsBuildResult): SkillStatsBuildResult {
        const result: SkillStatsBuildResult = {
            unresolvedSynergies: [],
            extractedStats: {},
            stats: [],
            changed: {
                skills: [],
                upgrades: []
            }
        }
        const mapping = [...GLOBAL_MERGED_STATS_MAPPING, ...HERO_MERGED_STATS_MAPPING[character.heroClass], ...valueOrDefault(SKILL_MERGED_STATS_MAPPING[character.heroClass][skillAndUpgrades.skill.id], []) ];
        const extractedStats = this.slormancerStatsExtractorService.extractSkillStats(skillAndUpgrades, characterStats, mapping);
        this.applySkillSpecialChanges(character, skillAndUpgrades, config, extractedStats, result);
        this.slormancerStatsExtractorService.extractSkillInfoStats(character, skillAndUpgrades, extractedStats);

        result.extractedStats = extractedStats.stats;
        result.stats = this.slormancerStatMappingService.buildMergedStats(extractedStats.stats, mapping, config);
        this.addSkillStats(result.stats, character.skills);
        
        if (character.ultimatum !== null && !character.ultimatum.locked) {
            this.slormancerStatMappingService.applyUltimatum(result.stats, mapping, character.ultimatum, config, result.extractedStats);
        }
        
        for (const stats of result.stats) {
            this.slormancerStatUpdaterService.updateStatTotal(stats);
        }

        const synergyResult = this.slormancerSynergyResolverService.resolveSynergies(extractedStats.synergies, result.stats, extractedStats.stats, config);
        result.unresolvedSynergies = synergyResult.unresolved;

        this.slormancerSynergyResolverService.resolveIsolatedSynergies(extractedStats.isolatedSynergies, result.stats, extractedStats.stats);

        for (const synergy of [...extractedStats.synergies, ...extractedStats.isolatedSynergies]) {
            if (this.hasSynergyValueChanged(synergy)) {
                if ('skill' in synergy.objectSource) {
                    result.changed.skills.push(synergy.objectSource.skill);
                } else if ('upgrade' in synergy.objectSource) {
                    result.changed.upgrades.push(synergy.objectSource.upgrade);
                }
            }
        }

        return result;
    }
}