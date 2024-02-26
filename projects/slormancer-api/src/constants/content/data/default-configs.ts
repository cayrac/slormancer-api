import { CharacterConfig } from '../../../model/character-config';
import { SkillGenre } from '../../../model/content/enum/skill-genre';
import { MAX_HERO_LEVEL } from '../../common';

export const DEFAULT_CONFIG: CharacterConfig = {
    attunment_pulse_current_school: SkillGenre.Arcanic,
    completed_achievements: 0,
    elder_slorms: 0,
    active_inner_fire: 0,
    mana_lost_last_second: 0,
    mana_gained_last_second: 0,
    knight_other_level: MAX_HERO_LEVEL,
    enemy_under_command: 0,
    enemies_in_breach_range: 0,
    elite_under_command: 0,
    totems_under_control: 0,
    traps_nearby: 0,
    serenity: 0,
    arcanic_emblems: 0,
    temporal_emblems: 0,
    obliteration_emblems: 0,
    last_cast_tormented: false,
    last_cast_delighted: false,
    next_cast_is_fortunate: false,
    next_cast_is_perfect: false,
    next_cast_is_new_emblem: true,
    use_enemy_state: false,
    enemy_percent_missing_health: 0,
    percent_missing_health: 0,
    percent_missing_mana: 0,
    overall_reputation: 0,
    crit_recently: false,
    dodge_recently: false,
    hits_taken_recently: 0,
    skill_cast_recently: 0,
    frostbolt_shot_recently: 0,
    slormocide_60: 0,
    goldbane_5: 0,
    rebounds_before_hit: 0,
    pierces_before_hit: 0,
    enemies_in_rain_of_arrow: 0,
    enemies_affected_by_latent_storm: 0,
    clone_is_in_breach_range: false,
    target_is_close: false,
    target_is_isolated: false,
    target_is_tracked: false,
    target_is_time_locked: false,
    target_is_in_breach_range: false,
    target_is_burning: false,
    enemy_is_poisoned: false,
    enemy_has_military_oppression: false,
    target_negative_effects: 0,
    target_is_skewered: false,
    enemy_splintered_stacks: 0,
    revengeance_stacks: 0,
    target_has_broken_armor: false,
    target_has_remnant_vulnerability: false,
    target_has_arcane_discordance: false,
    target_has_temporal_discordance: false,
    target_has_obliteration_discordance: false,
    is_first_arrow_shot_hit: false,
    is_hit_blocked: false,
    is_last_volley: false,
    is_channeling_whirlwind: false,
    is_channeling_arcane_barrier: false,
    is_channeling_ray_of_obliteration: false,
    is_channeling_focus: false,
    is_remnant: false,
    is_triggered_by_book_smash: false,
    is_curving_time_or_time_shifting: false,
    ray_of_obliteration_is_short: false,
    void_arrow_fully_charged: false,
    rift_nova_fully_charged: false,
    elites_in_radius: 0,
    ennemies_in_radius: 0,
    negative_effects_on_ennemies_in_radius: 0,
    enfeeble_stacks_in_radius: 0,
    poison_enemies: 0,
    trap_triggered_recently: false,
    took_elemental_damage_recently: false,
    took_physical_damage_recently: false,
    cast_support_before_next_cast: false,
    victims_reaper_104: 0,
    banners_nearby: 0,
    controlled_minions: 0,
    has_elemental_prowess_buff: false,
    totem_dexterity_stacks: 0,
    greed_stacks: 0,
    strider_stacks: 0,
    merchant_stacks: 0,
    nimble_champion_stacks: 0,
    ancestral_legacy_stacks: 0,
    conquest_stacks: 0,
    stability_stacks: 0,
    enlightenment_stacks: 0,
    delightful_rain_stacks: 0,
    target_latent_storm_stacks: 0,
    exhilerating_senses_stacks: 0,
    impatient_arrow_stacks: 0,
    frenzy_stacks: 0,
    oak_bark_armor_stacks: 0,
    enemy_bleed_stacks: 0,
    enemy_enfeeble_stacks: 0,
    enemy_horrified_stacks: 0,
    block_stacks: 0,
    melee_defense_stacks: 0,
    projectile_defense_stacks: 0,
    aoe_defense_stacks: 0,
    vitality_stacks: 0,
    cosmic_stacks: 0,
    invigorate_stacks: 0,
    arcane_stacks: 0,
    ray_of_obliteration_grow_stacks: 0,
    high_spirit_stacks: 0,
    chrono_manamorphosis_stacks: 0,
    chrono_armor_stacks: 0,
    chrono_empower_stacks: 0,
    chrono_speed_stacks: 0,
    enemy_traumatized_stacks: 0,
    arcane_flux_stacks: 0,
    arcane_breach_collision_stacks: 0,
    temporal_breach_collision_stacks: 0,
    obliteration_breach_collision_stacks: 0,
    elemental_weakness_stacks: 0,
    high_voltage_stacks: 0,
    elemental_spirit_stacks: 0,
    fulgurorn_dedication_stacks: 0,
    enemy_inner_weakness_stacks: 0,
    apex_predator_stacks: 0,
    effective_rune_stacks: 0,
    aurelon_bargain_stacks: 0,
    cleansing_surge_stacks: 0,
    overcharged_stacks: 0,
    indirect_defense_stacks: 0,
    support_streak_stacks: 0,
    bloodthirst_stacks: 0,
    elemental_fury_stacks: 0,
    mage_bane_stacks: 0,
    fighter_bane_stacks: 0,
    moonlight_stacks: 0,
    sunlight_stacks: 0,
    ancestral_wrath_stacks: 0,
    moonlight_side: true,
    life_orbs_count: 0,
    distance_with_target: 0,
    has_elemental_temper_buff: false,
    has_splash_splash_buff: false,
    has_burning_shadow_buff: false,
    has_gold_armor_buff: false,
    has_soul_bound_buff: false,
    has_adam_blessing_buff: false,
    has_manabender_buff: false,
    has_nimble_buff: false,
    has_ancient_recognition_buff: false,
    has_elemental_fervor_buff: false,
    has_ancestral_fervor_buff: false,
    has_assassin_haste_buff: false,
    has_smoke_screen_buff: false,
    has_ancestral_stab_slash_buff: false,
    has_banner_regeneration_buff: false,
    has_banner_haste_buff: false,
    has_enduring_protector_buff: false,
    has_speed_gate_buff: false,
    has_shadow_repercussion_buff: false,
    has_booster_max_buff: false,
    has_electrify_buff: false,
    has_living_inferno_buff: false,
    has_shadow_shield_buff: false,
    has_shadow_bargain_buff: false,
    has_flawless_defense_buff: false,
    has_frostfire_buff: false,
    has_ancestral_instability_buff: false,
    has_avatar_of_shadow_buff: false,
    concentration_buff: false,
    ultima_momentum_buff: false,
    exposed_armor_buff: false,
    efficiency_buff: false,
    has_blood_frenzy_buff: false,
    all_other_characters_level: MAX_HERO_LEVEL * 2,
    highest_same_type_reaper_level: 100,
    ancestral_instability_buff_duration: 0,
    idle: false,
    damage_stored: 0,
    overdrive_bounces_left: 0,
    time_spend_channeling: 0,
    overdrive_last_bounce: false,
    hero_close_to_turret_syndrome: false,
    turret_syndrome_on_cooldown: false,
    projectile_passed_through_wall_of_omen: false,
    summoned_skeleton_squires: 0,
    always_summon_maximum_skeleton_squires: false,
    minimum_unreserved_mana: 0,
    add_totem_tag_to_prime_totem_skills: false,
    highest_slorm_temple_floor: 0,
    show_temple_keeper_as_totem: false,
    show_elder_inner_fire_damage: false,
    chilled_enemy_nearby: 0,
    in_combat: false,
    is_rune_active: false,
    effect_rune_affinity: 100,
    other_characters_mastery_total: 10 * 15,
    victims_combo: 0,
}

export const COMBAT_CONFIG: CharacterConfig = {
    attunment_pulse_current_school: SkillGenre.Arcanic,
    completed_achievements: 0,
    elder_slorms: 0,
    active_inner_fire: 0,
    mana_lost_last_second: 0,
    mana_gained_last_second: 0,
    knight_other_level: MAX_HERO_LEVEL,
    enemy_under_command: 0,
    enemies_in_breach_range: 0,
    elite_under_command: 0,
    totems_under_control: 0,
    traps_nearby: 0,
    serenity: 6,
    arcanic_emblems: 0,
    temporal_emblems: 0,
    obliteration_emblems: 0,
    last_cast_tormented: false,
    last_cast_delighted: false,
    next_cast_is_fortunate: false,
    next_cast_is_perfect: false,
    next_cast_is_new_emblem: true,
    use_enemy_state: false,
    enemy_percent_missing_health: 0,
    percent_missing_health: 0,
    percent_missing_mana: 0,
    overall_reputation: 0,
    crit_recently: false,
    dodge_recently: false,
    hits_taken_recently: 0,
    skill_cast_recently: 0,
    frostbolt_shot_recently: 0,
    slormocide_60: 0,
    goldbane_5: 0,
    rebounds_before_hit: 0,
    pierces_before_hit: 0,
    enemies_in_rain_of_arrow: 0,
    enemies_affected_by_latent_storm: 1,
    clone_is_in_breach_range: true,
    target_is_close: false,
    target_is_isolated: false,
    target_is_tracked: false,
    target_is_time_locked: false,
    target_is_in_breach_range: true,
    target_is_burning: true,
    enemy_is_poisoned: false,
    enemy_has_military_oppression: true,
    target_negative_effects: 0,
    target_is_skewered: false,
    enemy_splintered_stacks: 3,
    target_has_broken_armor: false,
    target_has_remnant_vulnerability: false,
    target_has_arcane_discordance: true,
    target_has_temporal_discordance: true,
    target_has_obliteration_discordance: true,
    is_first_arrow_shot_hit: false,
    is_hit_blocked: false,
    is_last_volley: false,
    is_channeling_whirlwind: true,
    is_channeling_arcane_barrier: false,
    is_channeling_ray_of_obliteration: true,
    is_channeling_focus: false,
    is_remnant: false,
    is_triggered_by_book_smash: true,
    is_curving_time_or_time_shifting: true,
    ray_of_obliteration_is_short: false,
    void_arrow_fully_charged: false,
    rift_nova_fully_charged: false,
    elites_in_radius: 0,
    ennemies_in_radius: 0,
    negative_effects_on_ennemies_in_radius: 0,
    enfeeble_stacks_in_radius: 0,
    poison_enemies: 0,
    trap_triggered_recently: true,
    took_elemental_damage_recently: true,
    took_physical_damage_recently: false,
    cast_support_before_next_cast: false,
    victims_reaper_104: 0,
    banners_nearby: 0,
    controlled_minions: 0,
    has_elemental_prowess_buff: true,
    totem_dexterity_stacks: 200,
    greed_stacks: 0,
    strider_stacks: 0,
    merchant_stacks: 0,
    nimble_champion_stacks: 10,
    ancestral_legacy_stacks: 0,
    conquest_stacks: 100,
    stability_stacks: 100,
    enlightenment_stacks: 999,
    delightful_rain_stacks: 100,
    target_latent_storm_stacks: 0,
    exhilerating_senses_stacks: 0,
    impatient_arrow_stacks: 20,
    frenzy_stacks: 15,
    oak_bark_armor_stacks: 10,
    enemy_bleed_stacks: 0,
    enemy_enfeeble_stacks: 0,
    enemy_horrified_stacks: 0,
    block_stacks: 0,
    melee_defense_stacks: 0,
    projectile_defense_stacks: 0,
    aoe_defense_stacks: 0,
    vitality_stacks: 10,
    cosmic_stacks: 0,
    invigorate_stacks: 5,
    arcane_stacks: 5,
    ray_of_obliteration_grow_stacks: 3,
    high_spirit_stacks: 10,
    chrono_manamorphosis_stacks: 25,
    chrono_armor_stacks: 25,
    chrono_empower_stacks: 25,
    chrono_speed_stacks: 25,
    enemy_traumatized_stacks: 8,
    arcane_flux_stacks: 25,
    arcane_breach_collision_stacks: 10,
    temporal_breach_collision_stacks: 10,
    obliteration_breach_collision_stacks: 10,
    elemental_weakness_stacks: 12,
    high_voltage_stacks: 0,
    revengeance_stacks: 0,
    elemental_spirit_stacks: 0,
    fulgurorn_dedication_stacks: 165,
    enemy_inner_weakness_stacks: 10,
    apex_predator_stacks: 0,
    effective_rune_stacks: 225,
    aurelon_bargain_stacks: 10,
    cleansing_surge_stacks: 10,
    overcharged_stacks: 50,
    indirect_defense_stacks: 0,
    support_streak_stacks: 50,
    bloodthirst_stacks: 500,
    elemental_fury_stacks: 500,
    mage_bane_stacks: 30,
    fighter_bane_stacks: 30,
    moonlight_stacks: 0,
    sunlight_stacks: 0,
    ancestral_wrath_stacks: 0,
    moonlight_side: true,
    life_orbs_count: 10,
    distance_with_target: 0,
    has_elemental_temper_buff: true,
    has_splash_splash_buff: true,
    has_burning_shadow_buff: true,
    has_gold_armor_buff: true,
    has_soul_bound_buff: true,
    has_adam_blessing_buff: true,
    has_manabender_buff: true,
    has_nimble_buff: true,
    has_ancient_recognition_buff: true,
    has_elemental_fervor_buff: true,
    has_ancestral_fervor_buff: true,
    has_assassin_haste_buff: true,
    has_smoke_screen_buff: true,
    has_ancestral_stab_slash_buff: true,
    has_banner_regeneration_buff: true,
    has_banner_haste_buff: true,
    has_enduring_protector_buff: true,
    has_speed_gate_buff: true,
    has_shadow_repercussion_buff: true,
    has_booster_max_buff: true,
    has_electrify_buff: true,
    has_living_inferno_buff: true,
    has_shadow_shield_buff: true,
    has_shadow_bargain_buff: true,
    has_flawless_defense_buff: true,
    has_ancestral_instability_buff: true,
    has_avatar_of_shadow_buff: true,
    has_frostfire_buff: true,
    concentration_buff: true,
    ultima_momentum_buff: true,
    exposed_armor_buff: true,
    efficiency_buff: true,
    has_blood_frenzy_buff: false,
    all_other_characters_level: MAX_HERO_LEVEL * 2,
    highest_same_type_reaper_level: 100,
    ancestral_instability_buff_duration: 0,
    idle: true,
    damage_stored: 0,
    overdrive_bounces_left: 0,
    time_spend_channeling: 20,
    overdrive_last_bounce: false,
    hero_close_to_turret_syndrome: true,
    turret_syndrome_on_cooldown: true,
    projectile_passed_through_wall_of_omen: true,
    summoned_skeleton_squires: 0,
    always_summon_maximum_skeleton_squires: true,
    minimum_unreserved_mana: 0,
    add_totem_tag_to_prime_totem_skills: true,
    highest_slorm_temple_floor: 0,
    show_temple_keeper_as_totem: false,
    show_elder_inner_fire_damage: true,
    chilled_enemy_nearby: 0,
    in_combat: true,
    is_rune_active: true,
    effect_rune_affinity: 100,
    other_characters_mastery_total: 10 * 15,
    victims_combo: 0,
}