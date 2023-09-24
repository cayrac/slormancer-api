import { Injectable } from '@angular/core';

import { UNLOCKED_ANCESTRAL_LEGACY_POINTS } from '../constants/common';
import { Character } from '../model/character';
import { Skill } from '../model/content/skill';
import { SkillUpgrade } from '../model/content/skill-upgrade';
import { isNotNullOrUndefined } from '../util/utils';
import { SlormancerAncestralLegacyService } from './content/slormancer-ancestral-legacy.service';

@Injectable()
export class SlormancerCharacterModifierService {

    constructor(private slormancerAncestralLegacyService: SlormancerAncestralLegacyService,
        ) { }

    public setPrimarySkill(character: Character, skill: Skill): boolean {
        let result = false;

        if (character.primarySkill !== skill) {
            if (character.secondarySkill === skill) {
                character.secondarySkill = character.primarySkill;
            }
            character.primarySkill = skill;

            result = true;
        }

        return result;
    }

    public setSecondarySkill(character: Character, skill: Skill): boolean {
        let result = false;

        if (character.secondarySkill !== skill) {
            if (character.primarySkill === skill) {
                character.primarySkill = character.secondarySkill;
            }
            character.secondarySkill = skill;

            result = true;
        }

        return result;
    }

    public setSupportSkill(character: Character, skill: Skill): boolean {
        let result = false;

        if (character.supportSkill !== skill) {
            character.supportSkill = skill;

            result = true;
        }

        return result;
    }
    
    public selectUpgrade(character: Character, selectedUpgrade: SkillUpgrade): boolean {
        let changed = false;
        
        const skill = character.skills.find(skill => skill.skill.id === selectedUpgrade.skillId);

        if (skill) {
            const sameLineId = skill.selectedUpgrades
                .map(id => skill.upgrades.find(upgrade => upgrade.id === id))
                .filter(isNotNullOrUndefined)
                .filter(upgrade => upgrade.line === selectedUpgrade.line)
                .map(upgrade => upgrade.id)[0];
    
            if (sameLineId !== undefined && sameLineId !== selectedUpgrade.id) {
                const sameLineIndex = skill.selectedUpgrades.indexOf(sameLineId);
                skill.selectedUpgrades.splice(sameLineIndex, 1);    
            }

            skill.selectedUpgrades.push(selectedUpgrade.id);

            changed = true;    
        }


        return changed;
    }

    public activateAncestralLegacyNode(character: Character, nodeId: number): boolean {
        let changed = false;

        if (character.ancestralLegacies.activeNodes.indexOf(nodeId) === -1
            && character.ancestralLegacies.activeNodes.length < UNLOCKED_ANCESTRAL_LEGACY_POINTS) {
            character.ancestralLegacies.activeNodes.push(nodeId);
            changed = true;
        } else if (character.ancestralLegacies.activeFirstNode === null) {
            character.ancestralLegacies.activeFirstNode = nodeId;
            changed = true;
        }

        return changed;
    }
    
    public disableAncestralLegacyNode(character: Character, nodeId: number): boolean {
        let changed = false;

        if (character.ancestralLegacies.activeNodes.indexOf(nodeId) !== -1) {
            character.ancestralLegacies.activeNodes = this.slormancerAncestralLegacyService.getValidNodes(character.ancestralLegacies.activeNodes.filter(id => id !== nodeId));
            changed = true;
        } else if (character.ancestralLegacies.activeFirstNode === nodeId) {
            character.ancestralLegacies.activeFirstNode = null;
            changed = true;
        }

        return changed;
    }
}