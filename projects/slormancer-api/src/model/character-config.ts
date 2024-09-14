import { SkillGenre } from './content/enum/skill-genre';

export interface CharacterConfig {
    attunment_pulse_current_school: SkillGenre;
    completed_achievements: number;
    elder_slorms: number;
    active_inner_fire: number;
    mana_lost_last_second: number;
    mana_gained_last_second: number;
    knight_other_level: number;
    serenity: number;
    arcanic_emblems: number;
    temporal_emblems: number;
    obliteration_emblems: number;
    enemy_under_command: number;
    enemies_in_breach_range: number;
    elite_under_command: number;
    last_cast_tormented: boolean;
    last_cast_delighted: boolean;
    recent_delighted_arrow_shot: boolean;
    next_cast_is_fortunate: boolean;
    next_cast_is_perfect: boolean;
    next_cast_is_new_emblem: boolean;
    percent_missing_health: number;
    percent_missing_mana: number;
    use_enemy_state: boolean;
    enemy_percent_missing_health: number;
    enemy_is_poisoned: boolean;
    enemy_is_chill_or_frozen: boolean;
    enemy_has_military_oppression: boolean;
    overall_reputation: number;
    totems_under_control: number;
    traps_nearby: number;
    slormocide_60: number;
    goldbane_5: number;
    hits_taken_recently: number;
    skill_cast_recently: number;
    frostbolt_shot_recently: number;
    rebounds_before_hit: number;
    pierces_before_hit: number;
    enemies_in_rain_of_arrow: number;
    enemies_affected_by_latent_storm: number;
    clone_is_in_breach_range: boolean;
    target_is_close: boolean;
    target_is_isolated: boolean;
    target_is_tracked: boolean;
    target_is_skewered: boolean;
    target_is_time_locked: boolean;
    target_is_in_breach_range: boolean;
    target_is_burning: boolean;
    target_has_broken_armor: boolean;
    target_negative_effects: number;
    target_has_remnant_vulnerability: boolean;
    target_has_arcane_discordance: boolean;
    target_has_temporal_discordance: boolean;
    target_has_obliteration_discordance: boolean;
    is_first_arrow_shot_hit: boolean;
    is_hit_blocked: boolean;
    is_last_volley: boolean;
    is_remnant: boolean;
    is_channeling_whirlwind: boolean;
    is_channeling_arcane_barrier: boolean;
    is_channeling_ray_of_obliteration: boolean;
    is_channeling_focus: boolean;
    is_triggered_by_book_smash: boolean;
    is_curving_time_or_time_shifting: boolean;
    ray_of_obliteration_is_short: boolean;
    void_arrow_fully_charged: boolean;
    rift_nova_fully_charged: boolean;
    negative_effects_on_ennemies_in_radius: number;
    ennemies_in_radius: number;
    elites_in_radius: number;
    enfeeble_stacks_in_radius: number;
    poison_enemies: number;
    trap_triggered_recently: boolean;
    took_elemental_damage_recently: boolean;
    took_physical_damage_recently: boolean;
    damage_stored: number;
    cast_support_before_next_cast: boolean;
    crit_recently: boolean;
    dodge_recently: boolean;
    banners_nearby: number;
    controlled_minions: number;
    has_elemental_prowess_buff: boolean;
    greed_stacks: number;
    strider_stacks: number;
    merchant_stacks: number;
    totem_dexterity_stacks: number;
    nimble_champion_stacks: number;
    ancestral_legacy_stacks: number;
    conquest_stacks: number;
    stability_stacks: number;
    enlightenment_stacks: number;
    delightful_rain_stacks: number;
    target_latent_storm_stacks: number;
    exhilerating_senses_stacks: number;
    impatient_arrow_stacks: number;
    frenzy_stacks: number;
    oak_bark_armor_stacks: number;
    block_stacks: number;
    melee_defense_stacks: number;
    projectile_defense_stacks: number;
    aoe_defense_stacks: number;
    vitality_stacks: number;
    cosmic_stacks: number;
    invigorate_stacks: number;
    arcane_stacks: number;
    ray_of_obliteration_power: number;
    high_spirit_stacks: number;
    chrono_manamorphosis_stacks: number,
    chrono_armor_stacks: number,
    chrono_empower_stacks: number,
    chrono_speed_stacks: number,
    enemy_bleed_stacks: number;
    enemy_traumatized_stacks: number;
    enemy_enfeeble_stacks: number;
    enemy_horrified_stacks: number;
    arcane_flux_stacks: number;
    arcane_breach_collision_stacks: number;
    temporal_breach_collision_stacks: number;
    obliteration_breach_collision_stacks: number;
    elemental_weakness_stacks: number;
    high_voltage_stacks: number;
    enemy_splintered_stacks: number;
    revengeance_stacks: number;
    elemental_spirit_stacks: number;
    fulgurorn_dedication_stacks: number;
    enemy_inner_weakness_stacks: number;
    apex_predator_stacks: number;
    effective_rune_stacks: number;
    aurelon_bargain_stacks: number;
    cleansing_surge_stacks: number;
    overcharged_stacks: number;
    indirect_defense_stacks: number;
    support_streak_stacks: number;
    bloodthirst_stacks: number;
    elemental_fury_stacks: number;
    mage_bane_stacks: number;
    fighter_bane_stacks: number;
    moonlight_stacks: number;
    sunlight_stacks: number;
    ancestral_wrath_stacks: number;
    ancestral_preparation_stacks: number;
    wreak_havoc_stacks: number;
    unrelenting_stacks: number;
    moonlight_side: boolean;
    life_orbs_count: number;
    has_elemental_temper_buff: boolean;
    has_splash_splash_buff: boolean;
    has_soul_bound_buff: boolean;
    has_burning_shadow_buff: boolean;
    has_adam_blessing_buff: boolean;
    has_gold_armor_buff: boolean;
    has_manabender_buff: boolean;
    has_nimble_buff: boolean;
    has_elemental_fervor_buff: boolean;
    has_ancestral_fervor_buff: boolean;
    has_ancient_recognition_buff: boolean;
    has_assassin_haste_buff: boolean;
    has_smoke_screen_buff: boolean;
    has_ancestral_stab_slash_buff: boolean;
    has_banner_regeneration_buff: boolean;
    has_banner_haste_buff: boolean;
    has_enduring_protector_buff: boolean;
    has_speed_gate_buff: boolean;
    has_shadow_repercussion_buff: boolean;
    has_booster_max_buff: boolean;
    has_electrify_buff: boolean;
    has_living_inferno_buff: boolean;
    has_shadow_shield_buff: boolean;
    has_shadow_bargain_buff: boolean;
    has_flawless_defense_buff: boolean;
    has_frostfire_buff: boolean;
    has_ancestral_instability_buff: boolean;
    has_avatar_of_shadow_buff: boolean;
    has_blood_frenzy_buff: boolean;
    has_life_bargain_buff: boolean;
    concentration_buff: boolean;
    ultima_momentum_buff: boolean;
    exposed_armor_buff: boolean;
    efficiency_buff: boolean;
    distance_with_target: number;
    all_other_characters_level: number;
    highest_same_type_reaper_level: number;
    ancestral_instability_buff_duration: number;
    victims_reaper_104: number;
    idle: boolean;
    overdrive_bounces_left: number;
    time_spend_channeling: number;
    overdrive_last_bounce: boolean;
    hero_close_to_turret_syndrome: boolean;
    turret_syndrome_on_cooldown: boolean;
    projectile_passed_through_wall_of_omen: boolean;
    summoned_skeleton_squires: number;
    always_summon_maximum_skeleton_squires: boolean;
    add_skeletons_to_controlled_minions: boolean;
    minimum_unreserved_mana: number;
    add_totem_tag_to_prime_totem_skills: boolean;
    highest_slorm_temple_floor: number;
    show_temple_keeper_as_totem: boolean;
    show_elder_inner_fire_damage: boolean;
    chilled_enemy_nearby: number;
    in_combat: boolean;
    is_rune_active: boolean;
    effect_rune_affinity: number;
    other_characters_mastery_total: number;
    victims_combo: number;
    unity_level_0_47: number;
    unity_level_0_48: number;
    unity_level_0_49: number;
    unity_level_0_50: number;
    unity_level_0_51: number;
    unity_level_0_52: number;
    unity_level_1_47: number;
    unity_level_1_48: number;
    unity_level_1_49: number;
    unity_level_1_50: number;
    unity_level_1_51: number;
    unity_level_1_52: number;
    unity_level_2_47: number;
    unity_level_2_48: number;
    unity_level_2_49: number;
    unity_level_2_50: number;
    unity_level_2_51: number;
    unity_level_2_52: number;
    unity_level_0_47_p: number;
    unity_level_0_48_p: number;
    unity_level_0_49_p: number;
    unity_level_0_50_p: number;
    unity_level_0_51_p: number;
    unity_level_0_52_p: number;
    unity_level_1_47_p: number;
    unity_level_1_48_p: number;
    unity_level_1_49_p: number;
    unity_level_1_50_p: number;
    unity_level_1_51_p: number;
    unity_level_1_52_p: number;
    unity_level_2_47_p: number;
    unity_level_2_48_p: number;
    unity_level_2_49_p: number;
    unity_level_2_50_p: number;
    unity_level_2_51_p: number;
    unity_level_2_52_p: number;
    absorbed_damage_wrath: number;
    maxed_upgrades: number | null;
}

