import { Injectable } from '@angular/core';

import { Character } from '../../model/character';
import { Bits } from '../../model/export/bits';
import { binaryToNumber, numberToBinary, takeBitsChunk } from '../../util/bits.util';
import { CharacterConfig } from '../../model';
import { UNITY_REAPERS } from '../../constants';

@Injectable()
export class SlormancerBinaryConfigurationService {
    
    constructor() { }

    public configurationToBinary(config: CharacterConfig, character: Character): Bits {
        let result: Bits = [];

        if (UNITY_REAPERS.includes(character.reaper.id)) {
            result.push(...numberToBinary(config.unity_level_0_47, 7));
            result.push(...numberToBinary(config.unity_level_0_48, 7));
            result.push(...numberToBinary(config.unity_level_0_49, 7));
            result.push(...numberToBinary(config.unity_level_0_50, 7));
            result.push(...numberToBinary(config.unity_level_0_51, 7));
            result.push(...numberToBinary(config.unity_level_0_52, 7));
            result.push(...numberToBinary(config.unity_level_1_47, 7));
            result.push(...numberToBinary(config.unity_level_1_48, 7));
            result.push(...numberToBinary(config.unity_level_1_49, 7));
            result.push(...numberToBinary(config.unity_level_1_50, 7));
            result.push(...numberToBinary(config.unity_level_1_51, 7));
            result.push(...numberToBinary(config.unity_level_1_52, 7));
            result.push(...numberToBinary(config.unity_level_2_47, 7));
            result.push(...numberToBinary(config.unity_level_2_48, 7));
            result.push(...numberToBinary(config.unity_level_2_49, 7));
            result.push(...numberToBinary(config.unity_level_2_50, 7));
            result.push(...numberToBinary(config.unity_level_2_51, 7));
            result.push(...numberToBinary(config.unity_level_2_52, 7));
            result.push(...numberToBinary(config.unity_level_0_47_p, 7));
            result.push(...numberToBinary(config.unity_level_0_48_p, 7));
            result.push(...numberToBinary(config.unity_level_0_49_p, 7));
            result.push(...numberToBinary(config.unity_level_0_50_p, 7));
            result.push(...numberToBinary(config.unity_level_0_51_p, 7));
            result.push(...numberToBinary(config.unity_level_0_52_p, 7));
            result.push(...numberToBinary(config.unity_level_1_47_p, 7));
            result.push(...numberToBinary(config.unity_level_1_48_p, 7));
            result.push(...numberToBinary(config.unity_level_1_49_p, 7));
            result.push(...numberToBinary(config.unity_level_1_50_p, 7));
            result.push(...numberToBinary(config.unity_level_1_51_p, 7));
            result.push(...numberToBinary(config.unity_level_1_52_p, 7));
            result.push(...numberToBinary(config.unity_level_2_47_p, 7));
            result.push(...numberToBinary(config.unity_level_2_48_p, 7));
            result.push(...numberToBinary(config.unity_level_2_49_p, 7));
            result.push(...numberToBinary(config.unity_level_2_50_p, 7));
            result.push(...numberToBinary(config.unity_level_2_51_p, 7));
            result.push(...numberToBinary(config.unity_level_2_52_p, 7));
        }

        return result;
    }

    public binaryToConfiguration(bits: Bits, character: Character): Partial<CharacterConfig> {
        const config: Partial<CharacterConfig> = { }

        if (UNITY_REAPERS.includes(character.reaper.id)) {
            config.unity_level_0_47 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_48 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_49 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_50 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_51 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_52 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_47 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_48 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_49 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_50 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_51 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_52 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_47 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_48 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_49 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_50 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_51 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_52 = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_47_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_48_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_49_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_50_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_51_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_0_52_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_47_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_48_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_49_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_50_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_51_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_1_52_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_47_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_48_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_49_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_50_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_51_p = binaryToNumber(takeBitsChunk(bits, 7));
            config.unity_level_2_52_p = binaryToNumber(takeBitsChunk(bits, 7));
        }

        return config;
    }
}