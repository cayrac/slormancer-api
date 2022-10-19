import { GameDataRune } from '@slormancer/model/content/game/data/game-data-rune';

import { GameDataActivable } from '../../../model/content/game/data/game-data-activable';
import { GameDataAncestralLegacy } from '../../../model/content/game/data/game-data-ancestral-legacy';
import { GameDataAttribute } from '../../../model/content/game/data/game-data-attribute';
import { GameDataBuff } from '../../../model/content/game/data/game-data-buff';
import { GameDataLegendary } from '../../../model/content/game/data/game-data-legendary';
import { GameDataReaper } from '../../../model/content/game/data/game-data-reaper';
import { GameDataSkill } from '../../../model/content/game/data/game-data-skill';
import { GameDataStat } from '../../../model/content/game/data/game-data-stat';
import { GameDataTranslation } from '../../../model/content/game/data/game-data-translation';
import { GameHeroesData } from '../../../model/parser/game/game-save';
import * as ACTIVABLE from './data/dat_act.json';
import * as ATTRIBUTES from './data/dat_att.json';
import * as BUFF from './data/dat_buf.json';
import * as WARRIOR_SKILL from './data/dat_cla_0.json';
import * as HUNTRESS_SKILL from './data/dat_cla_1.json';
import * as MAGE_SKILL from './data/dat_cla_2.json';
import * as ANCESTRAL_LEGACY from './data/dat_ele.json';
import * as LEGENDARY from './data/dat_leg.json';
import * as REAPER from './data/dat_rea.json';
import * as RUNE from './data/dat_run.json';
import * as STAT from './data/dat_sta.json';
import * as TRANSLATION from './data/dat_str.json';

export const GAME_DATA = {
    REAPER: <Array<GameDataReaper>> Array.from(REAPER),
    STAT: <Array<GameDataStat>> Array.from(STAT),
    LEGENDARY: <Array<GameDataLegendary>> Array.from(LEGENDARY),
    RUNE: <Array<GameDataRune>> Array.from(RUNE),
    ACTIVABLE: <Array<GameDataActivable>> Array.from(ACTIVABLE),
    SKILL: <GameHeroesData<Array<GameDataSkill>>> {
        0: <Array<GameDataSkill>>Array.from(WARRIOR_SKILL),
        1: <Array<GameDataSkill>>Array.from(HUNTRESS_SKILL),
        2: <Array<GameDataSkill>>Array.from(MAGE_SKILL)
    },
    TRANSLATION: <Array<GameDataTranslation>>Array.from(TRANSLATION),
    BUFF: <Array<GameDataBuff>>Array.from(BUFF),
    ANCESTRAL_LEGACY: <Array<GameDataAncestralLegacy>>Array.from(ANCESTRAL_LEGACY),
    ATTRIBUTES: <Array<GameDataAttribute>>Array.from(ATTRIBUTES)
};