import { DataAncestralLegacyRealm } from '../../../model/content/data/data-ancestral-legacy-realm';

export const INITIAL_NODES: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ANCESTRAL_LEGACY_REALMS: Array<DataAncestralLegacyRealm> = [
    
    { nodes: [0, 10, 11, 31], realm: 0 },   // Elemental Boost
    { nodes: [1, 12, 13, 34], realm: 1 },   // Pain Weaver
    { nodes: [2, 14, 15, 37], realm: 2 },   // Air Conditioner
    { nodes: [3, 16, 17, 40], realm: 3 },   // Frost Quake
    { nodes: [4, 18, 19, 43], realm: 4 },   // The Slormitologist
    { nodes: [5, 20, 21, 46], realm: 5 },   // Scorched Earth
    { nodes: [6, 22, 23, 49], realm: 6 },   // Flashing Darts
    { nodes: [7, 24, 25, 52], realm: 7 },   // Seasoned Hunter
    { nodes: [8, 26, 27, 55], realm: 8 },   // Elemental Emergency
    { nodes: [9, 28, 29, 58], realm: 9 },   // Burning Shadow

    { nodes: [11, 12, 32, 33], realm: 10 },         // Burning Trail
    { nodes: [13, 14, 35, 36, 66], realm: 11 },     // Elemental Lock
    { nodes: [15, 16, 38, 39], realm: 12 },         // Neriya's Shield
    { nodes: [17, 18, 41, 42, 71], realm: 13 },     // Hex Commander
    { nodes: [19, 20, 44, 45], realm: 14 },         // The Viper
    { nodes: [21, 22, 47, 48, 76], realm: 15 },     // Inner Radiance
    { nodes: [23, 24, 50, 51], realm: 16 },         // Defensive Stance
    { nodes: [25, 26, 53, 54, 81], realm: 17 },     // Risk of Pain
    { nodes: [27, 28, 56, 57], realm: 18 },         // Vengeful Hero
    { nodes: [10, 29, 30, 59, 61], realm: 19 },     // Paladin's Fervor

    { nodes: [30, 31, 32, 62, 63, 87], realm: 20 }, // Heart of the Wizard
    { nodes: [33, 34, 35, 64, 65, 89], realm: 21 }, // Elemental Boost
    { nodes: [36, 37, 38, 67, 68, 92], realm: 22 }, // Elemental Boost
    { nodes: [39, 40, 41, 69, 70, 94], realm: 23 }, // Cold Snap
    { nodes: [42, 43, 44, 72, 73, 97], realm: 24 }, // Calm Weather / Elemental Temper
    { nodes: [45, 46, 47, 74, 75, 99], realm: 25 }, // Thunderstruck
    { nodes: [48, 49, 50, 77, 78, 102], realm: 26 },// Agent of Shield
    { nodes: [51, 52, 53, 79, 80, 104], realm: 27 },// Elemental Swap / Reapersmith's Legacy
    { nodes: [54, 55, 56, 82, 83, 107], realm: 28 },// Soul Bond
    { nodes: [57, 58, 59, 60, 84, 109], realm: 29 },// Elemental Boost

    { nodes: [60, 61, 62, 85, 86], realm: 30 },     // Auramancer
    { nodes: [63, 64, 88], realm: 31 },             // Ardent Strike
    { nodes: [65, 66, 67, 90, 91], realm: 32 },     // Focus
    { nodes: [68, 69, 93], realm: 33 },             // Elusive Dancer
    { nodes: [70, 71, 72, 95, 96], realm: 34 },     // Shaman's Herald
    { nodes: [73, 74, 98], realm: 35 },             // Twitching Warp
    { nodes: [75, 76, 77, 100, 101], realm: 36 },   // Elemental Spirit
    { nodes: [78, 79, 103], realm: 37 },            // Regenerative Strike
    { nodes: [80, 81, 82, 105, 106], realm: 38 },   // Balance of the Manabender
    { nodes: [83, 84, 108], realm: 39 },            // Bastion
    
    { nodes: [87, 112, 113], realm: 41 },     // Scorching Area
    { nodes: [89, 114, 115], realm: 42 },     // Arming the Bomb
    { nodes: [92, 118, 119], realm: 45 },     // Exceptional Accuracy
    { nodes: [94, 120, 121], realm: 46 },     // Elemental Resources
    { nodes: [97, 124, 125], realm: 49 },     // Power Surge
    { nodes: [99, 126, 127], realm: 50 },     // Electrify
    { nodes: [102, 130, 131], realm: 53 },    // Light Powder
    { nodes: [104, 132, 133], realm: 54 },    // Light Wave
    { nodes: [107, 136, 137], realm: 57 },    // The Reaper
    { nodes: [109, 138, 139], realm: 58 },    // Elemental Reward

    { nodes: [86, 111, 112, 162], realm: 40 },   // Optimal Path
    { nodes: [90, 115, 116, 169], realm: 43 },   // Burning Rage
    { nodes: [91, 117, 118, 173], realm: 44 },   // Elemental Sorcerer
    { nodes: [95, 121, 122, 180], realm: 47 },   // Tower Defense
    { nodes: [96, 123, 124, 184], realm: 48 },   // Relentless
    { nodes: [100, 127, 128, 191], realm: 51 },  // Kah Rooj's Power Plant
    { nodes: [101, 129, 130, 195], realm: 52 },  // Shield of the Champion of Light
    { nodes: [105, 133, 134, 202], realm: 55 },  // Glittering Silence
    { nodes: [106, 135, 136, 206], realm: 56 },  // Ancestral Backlash
    { nodes: [85, 110, 139, 158], realm: 59 },   // Shadow Spawn

    { nodes: [88, 140, 141, 142], realm: 60 },    // Fire Resistance / Fiery Weapons
    { nodes: [93, 143, 144, 145], realm: 61 },    // Ice Resistance / Icy Weapons
    { nodes: [98, 146, 147, 148], realm: 62 },    // Lightning Resistance / Electric Overcharge
    { nodes: [103, 149, 150, 151], realm: 63 },   // Aegis of Light
    { nodes: [108, 152, 153, 154], realm: 64 },   // Dark Ritual

    { nodes: [113, 140, 163, 165], realm: 66 },   // Elemental Aura
    { nodes: [114, 142, 168, 166], realm: 67 },   // Crawling Disaster
    { nodes: [119, 143, 174, 176], realm: 69 },   // Frost Spikes
    { nodes: [120, 145, 178, 177], realm: 70 },   // Icy Veins
    { nodes: [125, 146, 185, 187], realm: 72 },   // Elemental Boost
    { nodes: [126, 148, 190, 188], realm: 73 },   // Lightning Rod
    { nodes: [131, 149, 196, 198], realm: 75 },   // Aurelon's Teachings
    { nodes: [132, 151, 201, 199], realm: 76 },   // Elemental Synergy / Diamond Skin
    { nodes: [137, 152, 207, 209], realm: 78 },   // Glyph of Darkness
    { nodes: [138, 157, 154, 155], realm: 79 },   // Obscure Retribution / Elemental Warrior

    { nodes: [110, 111], realm: 65 },   // Shadow Shield
    { nodes: [116, 117], realm: 68 },   // Frostfire Armor
    { nodes: [122, 123], realm: 71 },   // Totemic Infusion
    { nodes: [128, 129], realm: 74 },   // Aurelon's Bargain
    { nodes: [134, 135], realm: 77 },   // Inextinguishable Light

    { nodes: [157, 158], realm: 80 },   // Enduring Blorms
    { nodes: [162, 163], realm: 82 },   // Danger Zone!
    { nodes: [168, 169], realm: 83 },   // Inner Sanctum
    { nodes: [173, 174], realm: 85 },   // Lethal Force
    { nodes: [178, 180], realm: 86 },   // Ice Field
    { nodes: [184, 185], realm: 88 },   // Spark Machine
    { nodes: [190, 191], realm: 89 },   // Cleansing Surge
    { nodes: [195, 196], realm: 91 },   // Agile Adventurer
    { nodes: [201, 202], realm: 92 },   // Wild Slap
    { nodes: [206, 207], realm: 94 },   // Flawless Defense

    { nodes: [141], realm: 96 },   // More Fire!
    { nodes: [144], realm: 99 },   // Ice Prison
    { nodes: [147], realm: 102 },  // Charging up!
    { nodes: [150], realm: 105 },  // Aurelon's Punishment
    { nodes: [153], realm: 108 },  // And Together Bind Them

    { nodes: [165], realm: 95 },   // Living Inferno / Duelist
    { nodes: [166], realm: 97 },   // Comfort Zone
    { nodes: [176], realm: 98 },   // Slaughter
    { nodes: [177], realm: 100 },  // Melting Ice / The Merchant
    { nodes: [187], realm: 101 },  // Ancestral Aberration
    { nodes: [188], realm: 103 },  // Elemental Wizard
    { nodes: [198], realm: 104 },  // Wavering Glow
    { nodes: [199], realm: 106 },  // Shadowlight Bulwark
    { nodes: [209], realm: 107 },  // Shadow Bargain
    { nodes: [155], realm: 109 },  // Armor of Kings / Sturdy Blorms


]