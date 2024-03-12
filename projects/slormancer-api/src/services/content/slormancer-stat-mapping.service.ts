import { Injectable } from '@angular/core';

import { MergedStatMapping, MergedStatMappingSource } from '../../constants/content/data/data-character-stats-mapping';
import { CharacterConfig } from '../../model/character-config';
import { MergedStat } from '../../model/content/character-stats';
import { Ultimatum } from '../../model/content/ultimatum';
import { Entity } from '../../model/entity';
import { MinMax } from '../../model/minmax';
import { round } from '../../util/math.util';
import { valueOrDefault } from '../../util/utils';
import { ExtractedStatMap } from './slormancer-stats-extractor.service';
import { BASE_MOVEMENT_SPEED } from '../../constants';

@Injectable()
export class SlormancerStatMappingService {

    constructor() { }
    
    private getMappingValues(sources: Array<MergedStatMappingSource>, stats: ExtractedStatMap, config: CharacterConfig): Array<{ value: number | MinMax, source: Entity, extra: boolean }>  {
        return sources
            .filter(source => source.condition === undefined || source.condition(config, stats))
            .map(source => {
                let result = stats[source.stat];
                if (result && source.multiplier) {
                    const mult = source.multiplier(config, stats);
                    result = result.map(entry => ({ source: entry.source, value: entry.value * mult }));
                }
                return result ? result.map(data => ({ ...data, extra: source.extra === true })) : [];
            })
            .flat();
    }

    public buildMergedStat<T extends number | MinMax>(stats: ExtractedStatMap, mapping: MergedStatMapping, config: CharacterConfig): MergedStat<T> {
        return {
            stat: mapping.stat,
            total: 0,
            precision: mapping.precision,
            displayPrecision: mapping.displayPrecision,
            allowMinMax: mapping.allowMinMax,
            suffix: mapping.suffix,
            maximum: mapping.maximum,
            values: {
                flat: this.getMappingValues(mapping.source.flat, stats, config),
                max: this.getMappingValues(mapping.source.max, stats, config),
                percent: this.getMappingValues(mapping.source.percent, stats, config),
                maxPercent: this.getMappingValues(mapping.source.maxPercent, stats, config),
                multiplier: this.getMappingValues(mapping.source.multiplier, stats, config),
                maxMultiplier: this.getMappingValues(mapping.source.maxMultiplier, stats, config),
            }
        } as MergedStat<T>;
    }

    public buildMergedStats(stats: ExtractedStatMap, mappings: Array<MergedStatMapping>, config: CharacterConfig): Array<MergedStat> {
        return mappings.map(mapping => this.buildMergedStat(stats, mapping, config));
    }

    public applyUltimatum(stats: Array<MergedStat>, mappings: Array<MergedStatMapping>, ultimatum: Ultimatum, config: CharacterConfig, extractedStats: ExtractedStatMap) {
        let stat = stats.find(stat => stat.stat === ultimatum.value.stat);

        if (stat === undefined) {
            const mapping = mappings.find(mapping => mapping.stat === ultimatum.value.stat);
            if (mapping) {
                stat = {
                    stat: mapping.stat,
                    total: 0,
                    totalDisplayed: 0,
                    precision: mapping.precision,
                    displayPrecision: mapping.displayPrecision,
                    allowMinMax: mapping.allowMinMax,
                    readonly: false,
                    suffix: mapping.suffix,
                    values: {
                        flat: [],
                        max: [],
                        percent: [],
                        maxPercent: [],
                        multiplier: [],
                        maxMultiplier: [],
                    }
                } as MergedStat;
                stats.push(stat);
            }
        }

        if (stat) {
            stat.readonly = true;
            
            const multipliers: Array<{ extra: boolean, value: number, source: Entity }> = [];

            multipliers.push(...valueOrDefault(extractedStats['ultimatum_increased_effect'], []).map(mult => ({ ...mult, extra: true })));

            if (config.ultima_momentum_buff) {
                multipliers.push(...valueOrDefault(extractedStats['ultimatum_increased_effect_momentum_buff'], []).map(mult => ({ ...mult, extra: true })));
            }

            // Ultima momentum bug on movement speed
            stat.values.flat = [];
            if (stat.stat === 'movement_speed') {
                stat.values.flat.push({ value: round(ultimatum.value.value - BASE_MOVEMENT_SPEED, 2), extra: false, source: { ultimatum }});
                stat.values.flat.push({ value: BASE_MOVEMENT_SPEED, extra: true, source: { ultimatum }});
                stat.precision = 2;
            } else {
                stat.values.flat.push({ value: ultimatum.value.value, extra: false, source: { ultimatum }});
            }
            stat.values.max = [];
            stat.values.percent = multipliers;
            stat.values.maxPercent = [];
            stat.values.multiplier = [];
            stat.values.maxMultiplier = [];
        }
    }

    public addUniqueValueToStat(stat: string, value: number | MinMax, mergedStat: MergedStat, mapping: MergedStatMapping, config: CharacterConfig, extractedStats: ExtractedStatMap, source: Entity) {
        let mappingSource: MergedStatMappingSource | undefined;
        let array: Array<{ value: number | MinMax, extra: boolean, source: Entity }> | null = null;

        if (!mergedStat.readonly) {
            if (mappingSource = mapping.source.flat.find(v => v.stat === stat)) {
                array = mergedStat.values.flat;
            } else if (mappingSource = mapping.source.max.find(v => v.stat === stat)) {
                array = mergedStat.values.max;
            } else if (mappingSource = mapping.source.percent.find(v => v.stat === stat)) {
                array = mergedStat.values.percent;
            } else if (mappingSource = mapping.source.maxPercent.find(v => v.stat === stat)) {
                array = mergedStat.values.maxPercent;
            } else if (mappingSource = mapping.source.multiplier.find(v => v.stat === stat)) {
                array = mergedStat.values.multiplier;
            } else if (mappingSource = mapping.source.maxMultiplier.find(v => v.stat === stat)) {
                array = mergedStat.values.maxMultiplier;
            }
    
            if (mappingSource && array !== null && (mappingSource.condition === undefined || mappingSource.condition(config, extractedStats))) {
                if (mappingSource.multiplier) {
                    const mult = mappingSource.multiplier(config, extractedStats);
                    value = typeof value === 'number'  ? value * mult : { min: value.min * mult, max: value.max * mult };
                }
                array.push({ value, extra: mappingSource.extra === true, source });
            }
        }
    }
}