import { Injectable } from '@angular/core';

import { API_VERSION } from '../../constants/common';
import { Character } from '../../model/character';
import { Bits } from '../../model/export/bits';
import { binaryToNumber, numberToBinary, takeBitsChunk } from '../../util/bits.util';
import { SlormancerBinaryCharacterService } from './slormancer-binary-character.service';
import { SlormancerCompressorService } from './slormancer-compressor.service';

@Injectable()
export class SlormancerShortDataService {

    constructor(private slormancerBinaryService: SlormancerBinaryCharacterService,
                private slormancerCompressorService: SlormancerCompressorService) { }

    private versionToBinary(version: string): Bits {
        const [ major, minor, fix ] = version.split('.');

        return [
            ...numberToBinary(major ? parseInt(major, 10) : 0, 4),
            ...numberToBinary(minor ? parseInt(minor, 10) : 0, 4),
            ...numberToBinary(fix ? parseInt(fix, 10) : 0, 6)
        ];
    }

    private binaryToVersion(bits: Bits): string {
        return [
            binaryToNumber(takeBitsChunk(bits, 4)),
            binaryToNumber(takeBitsChunk(bits, 4)),
            binaryToNumber(takeBitsChunk(bits, 6))
        ].join('.')
    }

    public characterToShortData(character: Character): string {
        const bits = [ ...this.versionToBinary(API_VERSION), ...this.slormancerBinaryService.characterToBinary(character) ];
        return this.slormancerCompressorService.compressBinary(bits);
    }
    
    public shortDataToCharacter(data: string): Character | null {
        let character: Character | null = null;

        try {
            const bits = this.slormancerCompressorService.decompressBinary(data);
            const version = this.binaryToVersion(bits);
            character = this.slormancerBinaryService.binaryToCharacter(bits, version);
        } catch (e) {
            console.error(e)
        }

        return character;
    }
}