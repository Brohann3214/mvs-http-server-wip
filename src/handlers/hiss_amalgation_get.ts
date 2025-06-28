import { CHARACTER_SLUGS } from "../data/characters";
import { CRC, MATCHMAKING_CRC } from "../data/config";
import { EVENT_QUEUE_CONFIG } from "../data/eventQueue";
import { GAME_MODES_CONFIG } from "../data/gameModes";
import {  GEMS_CONFIG } from "../data/gems";
import { GEMS_BUFF_CONFIG } from "../data/gemsBuffs";
import { INVENTORY_DEFINITIONS } from "../data/inventoryDefs";
import { MAP_ROATATIONS } from "../data/maps";
import { MILESTONE_REWARDS } from "../data/milestones";
import { MISSION_CONTAINER } from "../data/missionContainers";
import { MISSION_CONTROLLERS } from "../data/missionControllers";
import { MISSION_LIST } from "../data/missionList";
import { MISSION_OBJECTIVES } from "../data/missionObjectives";
import { MISSIONS_CONFIG } from "../data/missions";
import { PERKS_CONFIG } from "../data/perks";
import { PERKS_SET_CONFIG } from "../data/perksSet";
import { RANK_SETTINGS } from "../data/rankSettings";
import { RIFTS_CONFIG } from "../data/rifts";
import { ENABLED_SKINS } from "../data/skins";
import { TAUNTS_DATA } from "../data/taunts";
import { XP_MULTIPLIER_CONFIG } from "../data/xpMultiplier";

export const hiss_amalgamation_get = {
  "body": {
    "Crc": CRC,
    "MatchmakingCrc": MATCHMAKING_CRC,
    "Data": {
 "game-mode-config": {
        "_hydra_compressed":GAME_MODES_CONFIG
      },
      "event-queue-config": {
        "_hydra_compressed": EVENT_QUEUE_CONFIG,
      },        
      "map-rotations": {
        "_hydra_compressed": MAP_ROATATIONS,
      },
      "milestone-reward-tracks": {
        "_hydra_compressed":MILESTONE_REWARDS,
      },
      "ranked-settings": {
        "_hydra_compressed": RANK_SETTINGS,
      },
      "rift-config": {
        "_hydra_compressed": RIFTS_CONFIG,
      },
      "xp-multiplier-components": {
        "_hydra_compressed": XP_MULTIPLIER_CONFIG,
      },
      "perk-config": {
        "_hydra_compressed": PERKS_CONFIG,
      },
      "gem-config": {
        "_hydra_compressed": GEMS_CONFIG,
      },
      "gem-buff-config": {
        "_hydra_compressed":GEMS_BUFF_CONFIG,
      },
      "perk-set-config": {
        "_hydra_compressed": PERKS_SET_CONFIG,
      },
      "mission-containers": {
        "_hydra_compressed": MISSION_CONTAINER
      },
      "mission-controlers": {
        "_hydra_compressed": MISSION_CONTROLLERS,
      },
        "mission-list": {
        "_hydra_compressed": MISSION_LIST,
        },
          "missions": {
        "_hydra_compressed": MISSIONS_CONFIG,
          },
             "mission-objectives": {
        "_hydra_compressed": MISSION_OBJECTIVES,
             },
      "prestige-lookup": {
        "_hydra_compressed": {
          "banner": {
            "Uncommon": 50,
            "Rare": 200,
            "Epic": 700,
            "Legendary": 3000,
            "Prestige": 3000,
            "Elusive": 200
          },
          "ring_out_vfx": {
            "Uncommon": 250,
            "Rare": 800,
            "Epic": 2400,
            "Legendary": 7200,
            "Prestige": 7200,
            "Elusive": 800
          },
          "skin": {
            "Uncommon": 300,
            "Rare": 960,
            "Epic": 3600,
            "Legendary": 9600,
            "Prestige": 9600,
            "Elusive": 960
          },
          "announcer_pack": {
            "Uncommon": 50,
            "Rare": 300,
            "Epic": 1200,
            "Legendary": 4800,
            "Prestige": 4800,
            "Elusive": 300
          },
          "profile_icon": {
            "Uncommon": 15,
            "Rare": 50,
            "Epic": 200,
            "Legendary": 800,
            "Prestige": 800,
            "Elusive": 50
          },
          "stat_tracking_bundle": {
            "Uncommon": 100,
            "Rare": 100,
            "Epic": 500,
            "Legendary": 2200,
            "Prestige": 2200,
            "Elusive": 100
          },
          "emote": {
            "Uncommon": 25,
            "Rare": 100,
            "Epic": 500,
            "Legendary": 2200,
            "Prestige": 2200,
            "Elusive": 100
          },
          "taunt": {
            "Uncommon": 100,
            "Rare": 350,
            "Epic": 1000,
            "Legendary": 4000,
            "Prestige": 4000,
            "Elusive": 350
          }
        }
      },
      "feature-toggles": {
        "_hydra_compressed": {
          "IsSpectatorEnabled": true,
          "IsRankedEnabled": false,
          "LoadoutValidation": true,
          "RetailMatchmakingCriteria": true,
          "Perks": true,
          "Gamelift": false,
          "Gamelift-1v1": false,
          "Gamelift-2v2": false,
          "Gamelift-PvE": false,
          "Gamelift-Custom": false,
          "FTUE": true,
          "TimedRiftDifficultyReleases": true,
          "QueuedGameplaySessionInvites": true,
          "RiftReleaseDates": true,
          "IsRankedUIEnabled": false,
          "IsRankedQueueEnabled": false,
          "AlwaysEnterBots": false,
          "FFA": true,
          "IsBattlepassTiersSkipsEnabled": true,
          "IsVariantMasteryEnabled": false,
          "EnableForceReloadHydraUsersInFaceoff": true,
          "EnableFeaturedBundlesInVariantSelect": true,
          "AllowSelectingUnownedCharactersLocalPlay": true,
          "IsFeaturedBundlesInCarouselEnabled": true,
          "EnableBoostedSkinSurfacing": true,
          "EndFtueOnCurrentSeason": true,
          "EnableMonitorSwitchingFix": true,
          "HissInvalidationKick": false,
          "BeginnerMode": true,
          "AutoParty": true,
          "S3EogBackwardsCompatibility": true,
          "EnableTileViewStoreArea": true,
          "evtq_colbyqueue": false,
          "SkipForceReloadingLocalPlayerProfile": true,
          "IsFighterRoadEnabled": false,
          "EnablePostMatchV2": true,
          "Arena": false,
          "IsStoreLayoutObjectPoolingEnabled": true,
          "IsStoreWidgetPoolingEnabled": true,
          "IsLabV2Enabled": true,
          "ArenaShopLocalOperations": true,
          "IsCustomGameGameModesEnabled": true,
          "AlwaysAllowSkippingEoG": true,
          "Carousel": true,
          "FighterRoadV2": false,
          "IsStoreBatchingEnabled": false,
          "IsCustomGameMutatorsEnabled": true,
          "GameServerMatchKeyFromNotify": true,
          "SscCriticalCallEnabled": true,
          "AreMissionNotificationsLimited": false,
          "IsLocalHydraSavingEnabled": true,
          "evtq_arena": false,
          "evtq_1v1testinggrounds": false,
          "evtq_2v2testinggrounds": false
        }
      },
      "inventory-item-definitions": {
        "_hydra_compressed": INVENTORY_DEFINITIONS,
      },
      "enabled-assets-data": {
        "_hydra_compressed": {
          "ClientAssetData": {
            "AssetsThatMaybeFilteredOut": {
              "CharacterSlugs": [],
              "EmoteSlugs": [],
              "BannerSlugs": [
                "banner_3rror_mvs",
                "banner_reward",
                "banner_deluxe_founders",
                "banner_standard_founders",
                "banner_evo_2022",
                "banner_premium_founders",
                "banner_foretold_champion_rare",
                "banner_foretold_champion_legendary",
                "banner_foretold_champion_epic5",
                "banner_foretold_champion_epic4",
                "banner_foretold_champion_epic3",
                "banner_foretold_champion_epic2",
                "banner_foretold_champion_epic",
                "banner_presently_shocked_epic"
              ],
              "RingoutVfxSlugs": [
                "ring_out_vfx_pfg_team",
                "ring_out_vfx_pfg_multiversus",
                "ring_out_vfx_rising_stars",
                "ring_out_vfx_blue_diamond",
                "ring_out_vfx_snowman_sled"
              ],
              "ProfileIconSlugs": [],
              "AnnouncerPackSlugs": [],
              "StatTrackerSlugs": [
                "stat_tracking_bundle_evo2022_1st_place",
                "stat_tracking_bundle_evo2022_4th_place",
                "stat_tracking_bundle_evo2022_2nd_place",
                "stat_tracking_bundle_evo2022_3rd_place",
                "stat_tracking_bundle_evo2022_16th_place",
                "stat_tracking_bundle_evo2022_32nd_place",
                "stat_tracking_bundle_evo2022_64th_place",
                "stat_tracking_bundle_evo2022_8th_place",
                "stat_tracking_bundle_valentines_2023_currency",
                "stat_tracking_bundle_vote1team1",
                "stat_tracking_bundle_vote1team2",
                "stat_tracking_tt2_games_played",
                "stat_tracking_bundle_winter_2022_currency",
                "stat_tracking_bundle_arcade_hard_completions",
                "stat_tracking_bundle_S1_pvp_silver",
                "stat_tracking_bundle_S1_pvp_gold",
                "stat_tracking_bundle_S1_pvp_bronze",
                "stat_tracking_bundle_S2_pvp_silver",
                "stat_tracking_bundle_S2_pvp_gold",
                "stat_tracking_bundle_S2_pvp_bronze",
                "stat_tracking_bundle_arya_highest_damage_dealt",
                "stat_tracking_bundle_harley_highest_damage_dealt",
                "stat_tracking_bundle_garnet_highest_damage_dealt",
                "stat_tracking_bundle_finn_highest_damage_dealt",
                "stat_tracking_bundle_c023A_highest_damage_dealt",
                "stat_tracking_bundle_c021_highest_damage_dealt",
                "stat_tracking_bundle_c020_highest_damage_dealt",
                "stat_tracking_bundle_c019_highest_damage_dealt",
                "stat_tracking_bundle_marvin_highest_damage_dealt",
                "stat_tracking_bundle_iron_giant_highest_damage_dealt",
                "stat_tracking_bundle_lebron_highest_damage_dealt",
                "stat_tracking_bundle_c015_highest_damage_dealt",
                "stat_tracking_bundle_bugs_highest_damage_dealt",
                "stat_tracking_bundle_S4_pvp_silver",
                "stat_tracking_bundle_S4_pvp_gold",
                "stat_tracking_bundle_S4_pvp_bronze",
                "stattrackingbundle_arenatop4",
                "stattrackingbundle_arenatop1",
                "stattrackingbundle_arenaringouts",
                "stattracking_c029highestdamagedealt",
                "stattracking_c038highestdamagedealt",
                "stat_tracking_bundle_wonder_woman_highest_damage_dealt",
                "stat_tracking_bundle_velma_highest_damage_dealt",
                "stat_tracking_bundle_tom_and_jerry_highest_damage_dealt",
                "stat_tracking_bundle_superman_highest_damage_dealt",
                "stat_tracking_bundle_steven_highest_damage_dealt",
                "stat_tracking_bundle_shaggy_highest_damage_dealt",
                "stat_tracking_bundle_reindog_highest_damage_dealt",
                "stat_tracking_bundle_wonder_jake_highest_damage_dealt",
                "stat_tracking_bundle_c028_highest_damage_dealt",
                "stattracking_c036highestdamagedealt",
                "stattracking_c035highestdamagedealt",
                "stattracking_c034highestdamagedealt",
                "stat_tracking_bundle_batman_highest_damage_dealt"
              ],
              "GemSlugs": [],
              "PerkSlugs": [],
              "SkinSlugsByCharacter": {
                "character_wonder_woman": {
                  "Slugs": []
                },
                "character_velma": {
                  "Slugs": []
                },
                "character_tom_and_jerry": {
                  "Slugs": []
                },
                "character_superman": {
                  "Slugs": []
                },
                "character_steven": {
                  "Slugs": []
                },
                "character_shaggy": {
                  "Slugs": []
                },
                "character_jake": {
                  "Slugs": []
                },
                "character_harleyquinn": {
                  "Slugs": []
                },
                "character_garnet": {
                  "Slugs": []
                },
                "character_finn": {
                  "Slugs": []
                },
                "character_creature": {
                  "Slugs": []
                },
                "character_C028": {
                  "Slugs": []
                },
                "character_C023B": {
                  "Slugs": []
                },
                "character_C023A": {
                  "Slugs": []
                },
                "character_C021": {
                  "Slugs": []
                },
                "character_C020": {
                  "Slugs": []
                },
                "character_c019": {
                  "Slugs": []
                },
                "character_C018": {
                  "Slugs": []
                },
                "character_C017": {
                  "Slugs": []
                },
                "character_c16": {
                  "Slugs": []
                },
                "character_taz": {
                  "Slugs": []
                },
                "character_bugs_bunny": {
                  "Slugs": [
                    "skin_c007_s18"
                  ]
                },
                "character_Jason": {
                  "Slugs": []
                },
                "character_BananaGuard": {
                  "Slugs": []
                },
                "character_arya": {
                  "Slugs": []
                },
                "character_batman": {
                  "Slugs": []
                },
                "character_c036": {
                  "Slugs": []
                },
                "character_C030": {
                  "Slugs": []
                },
                "character_C027": {
                  "Slugs": []
                },
                "character_C026": {
                  "Slugs": []
                },
                "character_c024": {
                  "Slugs": []
                },
                "character_C025": {
                  "Slugs": []
                },
                "character_C031": {
                  "Slugs": []
                },
                "character_C029": {
                  "Slugs": []
                },
                "character_c038": {
                  "Slugs": []
                }
              },
              "TauntSlugsByCharacter": {
                "character_wonder_woman": {
                  "Slugs": []
                },
                "character_velma": {
                  "Slugs": []
                },
                "character_tom_and_jerry": {
                  "Slugs": []
                },
                "character_superman": {
                  "Slugs": []
                },
                "character_steven": {
                  "Slugs": []
                },
                "character_shaggy": {
                  "Slugs": []
                },
                "character_jake": {
                  "Slugs": []
                },
                "character_harleyquinn": {
                  "Slugs": []
                },
                "character_garnet": {
                  "Slugs": []
                },
                "character_finn": {
                  "Slugs": []
                },
                "character_creature": {
                  "Slugs": []
                },
                "character_C030": {
                  "Slugs": []
                },
                "character_C023B": {
                  "Slugs": []
                },
                "character_C023A": {
                  "Slugs": []
                },
                "character_C021": {
                  "Slugs": []
                },
                "character_C020": {
                  "Slugs": []
                },
                "character_c019": {
                  "Slugs": []
                },
                "character_C018": {
                  "Slugs": []
                },
                "character_C017": {
                  "Slugs": []
                },
                "character_c16": {
                  "Slugs": []
                },
                "character_taz": {
                  "Slugs": []
                },
                "character_bugs_bunny": {
                  "Slugs": []
                },
                "character_batman": {
                  "Slugs": []
                },
                "character_arya": {
                  "Slugs": []
                },
                "character_Jason": {
                  "Slugs": []
                },
                "character_c036": {
                  "Slugs": []
                },
                "": {
                  "Slugs": []
                },
                "character_C028": {
                  "Slugs": []
                },
                "character_BananaGuard": {
                  "Slugs": []
                },
                "character_C027": {
                  "Slugs": []
                },
                "character_C026": {
                  "Slugs": []
                },
                "character_C020B": {
                  "Slugs": []
                },
                "character_C025": {
                  "Slugs": []
                },
                "character_c024": {
                  "Slugs": []
                },
                "character_C031": {
                  "Slugs": []
                },
                "character_C029": {
                  "Slugs": []
                },
                "character_c038": {
                  "Slugs": []
                },
                "character_supershaggy": {
                  "Slugs": []
                }
              }
            },
            "DefaultVisibleAssets": {
              "CharacterSlugs": CHARACTER_SLUGS,
              "EmoteSlugs": [
                "emote_velma_surprised",
                "emote_steven_stars",
                "emote_shaggy_cry",
                "emote_jake_sweat",
                "emote_jake_wink",
                "emote_harley_crazy",
                "emote_harley_mad",
                "emote_garnet_stars",
                "emote_finn_happy",
                "emote_100",
                "emote_burnt_toast",
                "emote_generic_boom",
                "emote_generic_clap",
                "emote_generic_fire",
                "emote_generic_heart",
                "emote_generic_lightning_bolt",
                "emote_jackolanternflames",
                "emote_let_it_snow",
                "emote_poop_smile",
                "emote_toast",
                "emote_toast_butter",
                "emote_black_adam_angry",
                "emote_irongiant_smile",
                "emote_lebron_smile",
                "emote_bugs_bunny_hearts",
                "emote_batman_neutral",
                "emote_pass_the_salt",
                "emote_gg_spray",
                "emote_thanks",
                "emote_respects",
                "emote_bad_joke",
                "emote_batman_firsttry",
                "emote_rebound",
                "emote_reindog_trolldog",
                "emote_harleyww_BirthOfARival",
                "emote_snack_of_champs",
                "emote_question",
                "emote_exclamation",
                "emote_beckon",
                "emote_anger",
                "emote_reindog_pop",
                "emote_winter",
                "emote_c025_tentacles",
                "emote_rock_on",
                "emote_ginger_bat",
                "emote_c017_winter",
                "emote_a_plus",
                "emote_gift",
                "emote_c031_flirting",
                "emote_muscles_check",
                "emote_jake_itsfine",
                "emote_check",
                "emote_c029_fishfinder",
                "emote_c023a_mogwhy",
                "emote_c013_omgglob",
                "emote_c013_noooo",
                "emote_brokenheart"
              ],
              "BannerSlugs": [
                "banner_agent_red_dress_legendary",
                "banner_pizzaslices",
                "banner_jokerhaha",
                "banner_hole_sweet_hole",
                "banner_fromtheashes",
                "banner_zanifeers_last_hope",
                "banner_work_in_progress",
                "banner_wonderwoman_icon",
                "banner_whats_opera_doc",
                "banner_wayne_tower",
                "banner_tree_fort",
                "banner_tools_of_the_trade",
                "banner_the_power_of_love",
                "banner_themiscyra",
                "banner_test",
                "banner_waterfall",
                "banner_superman_icon",
                "banner_steven_planets",
                "banner_stark_icon",
                "banner_stark_banner",
                "banner_scooby_icon",
                "banner_scoobtober",
                "banner_scoobtober_bats",
                "banner_mogwai_knit",
                "banner_lunar_spire",
                "banner_lunarnewyear_23",
                "banner_lovestorm",
                "banner_loony_tunes",
                "banner_lannister_banner",
                "banner_lady_rainicorns_trail",
                "banner_its_harley_quinn_time",
                "banner_iron_giant_blueprint",
                "banner_iron_giant",
                "banner_ice_kingdom",
                "banner_ice_king",
                "banner_hunted_mansion",
                "banner_pfg_snowman",
                "banner_slushy_plushy",
                "banner_chestnuts_not_included",
                "banner_heart_zenifeer",
                "banner_harley_hyena",
                "banner_scarecrow",
                "banner_ghoulcave",
                "banner_deadmoon",
                "banner_ghosts_in_them_there_hills",
                "banner_ghosts_in_them_there_hills_gold",
                "banner_fortress_of_solitude",
                "banner_fire",
                "banner_extratoastie",
                "banner_encore_encore",
                "banner_danger_high_voltage",
                "banner_daily_planet",
                "banner_cupidsvolley",
                "banner_cheesy_temptations",
                "banner_bugs_bunny_tunnel",
                "banner_bravos",
                "banner_batman_icon",
                "banner_housetargaryen_01",
                "banner_valentineonvortex",
                "banner_groovy",
                "banner_arkham_asylum",
                "banner_marvin_wardrobe_v2",
                "banner_beachy_keen",
                "banner_once_a_crystal_gem",
                "banner_shark_teef",
                "banner_lurking_jason",
                "banner_volleyball_tourney",
                "banner_the_killing_juice",
                "banner_frenemies_of_the_deep",
                "banner_default",
                "banner_nitelite",
                "banner_grunge_match",
                "banner_sun",
                "banner_just_a_pitstop",
                "banner_tj_cyber_legendary",
                "banner_superman_cyber_legendary",
                "banner_rickmort_cyber_legendary",
                "banner_harley_cyber_legendary",
                "banner_arya_cyber_legendary",
                "banner_sea",
                "banner_naptime_for_lion",
                "banner_joker_card",
                "banner_bubbles_epic",
                "banner_s2_grandmaster",
                "banner_s1_platinum_pinnacle",
                "banner_s1_master_master",
                "banner_s1_golden_goliath",
                "banner_s1_diamond_destroyer",
                "banner_one_more_time",
                "S3PlatinumPinnacle_Banner",
                "S3MasterMaster_Banner",
                "S3Grandmaster_Banner",
                "S3GoldenGoliath_Banner",
                "S3DiamondDestroyer_Banner",
                "S3BronzeBrawler_Banner",
                "banner_pumpkin_party_rare",
                "banner_heart_legendary",
                "banner_crossover2",
                "banner_crossover1",
                "banner_goin_solo",
                "galaxy2_banner",
                "banner_galaxy1",
                "banner_dod1",
                "banner_dod2",
                "banner_cherry_blossom",
                "banner_ceiling_slammer",
                "banner_bat85",
                "banner_bat85_2",
                "banner_smoke",
                "Banner_Superman_Bulletproof_Leg",
                "banner_screensaver",
                "S3SilverStalwart_Banner",
                "banner_snowstorm",
                "banner_snowflakes_rare",
                "banner_ruben_epic",
                "banner_marcyshouse",
                "banner_magical_rare",
                "banner_hide_and_seek_kitty",
                "banner_balloonspopping",
                "banner_raven_legendary",
                "banner_cave",
                "banner_cavebat_rare",
                "banner_cavebat_legendary",
                "banner_cavebat_epic",
                "banner_cave_uncommon",
                "banner_snowflakes",
                "banner_ruben",
                "banner_raventhrone_rare",
                "banner_raventhrone_legendary",
                "banner_raventhrone_epic",
                "banner_raven_uncommon",
                "banner_raven_rare",
                "banner_marcyshouse_common",
                "banner_magical_uncommon",
                "s4silverstalwart_banner",
                "s4platinumpinnacle_banner",
                "s4mastermaster_banner",
                "s4grandmaster_banner",
                "s4goldengoliath_banner",
                "s4diamonddestroyer_banner",
                "s4bronzebrawler_banner",
                "banner_foghorn",
                "banner_academia_2",
                "banner_academia_1",
                "banner_trigon_2",
                "banner_trigon_1",
                "banner_winter_2",
                "banner_winter",
                "banner_ugly",
                "banner_ugly_2",
                "Banner_Wraithing_Around",
                "banner_wonders_of_themyscira",
                "banner_wbtower",
                "banner_wbtower_epic",
                "banner_smooches_for_grumpy",
                "banner_acid_uncommon",
                "banner_acid",
                "reindog_crystal_banner",
                "s5silverstalwart_banner",
                "s5platinumpinnacle_banner",
                "s5mastermaster_banner",
                "s5grandmaster_banner",
                "s5goldengoliath_banner",
                "s5diamonddestroyer_banner",
                "s5bronzebrawler_banner",
                "banner_perfectplan",
                "banner_old_school_clownin",
                "banner_nymeriaontheprowl_rare",
                "banner_nymeriaontheprowl_legendary",
                "banner_nymeriaontheprowl_epic",
                "banner_sweettunes_legendary",
                "banner_sweettunes_epic",
                "banner_mountainstars",
                "banner_mask_island",
                "banner_marvinstars_rare",
                "banner_marvinstars_legendary",
                "banner_marvinstars_epic",
                "marceline_nighttime_banner",
                "marceline_adventure_banner",
                "banner_like_bodacious",
                "banner_jokers_fun_house",
                "banner_i_am_vengeance",
                "banner_i_am_the_night",
                "banner_hungry_shaggy",
                "banner_he_seems_friendy",
                "banner_halls_of_knowledge",
                "banner_full_court",
                "banner_countingsheeps_uncommon",
                "banner_countingsheeps",
                "banner_contest_for_power",
                "banner_a_city_of_crime",
                "banner_a_chaotic_kinda_love",
                "banner_candykingdom_rare",
                "banner_candykingdom_legendary",
                "banner_candykingdom_epic",
                "banner_ace_chemical",
                "banner_doll",
                "banner_bunpower",
                "banner_s9silverstalwart",
                "banner_s9platinumpinnacle",
                "banner_s9mastermaster",
                "banner_s9grandmaster",
                "banner_s9goldengoliath",
                "banner_s9diamonddestroyer",
                "banner_s9bronzebrawler",
                "banner_s8silverstalwart",
                "banner_s8platinumpinnacle",
                "banner_s8mastermaster",
                "banner_s8grandmaster",
                "banner_s8goldengoliath",
                "banner_s8diamonddestroyer",
                "banner_s8bronzebrawler",
                "banner_s7silverstalwart",
                "banner_s7platinumpinnacle",
                "banner_s7mastermaster",
                "banner_s7grandmaster",
                "banner_s7goldengoliath",
                "banner_s7diamonddestroyer",
                "banner_s7bronzebrawler",
                "banner_s6silverstalwart",
                "banner_s6platinumpinnacle",
                "banner_s6mastermaster",
                "banner_s6grandmaster",
                "banner_s6goldengoliath",
                "banner_s6diamonddestroyer",
                "banner_s6bronzebrawler",
                "banner_s10silverstalwart",
                "banner_s10platinumpinnacle",
                "banner_s10mastermaster",
                "banner_s10grandmaster",
                "banner_s10goldengoliath",
                "banner_s10diamonddestroyer",
                "banner_s10bronzebrawler"
              ],
              "RingoutVfxSlugs": [
                "ring_out_vfx_black_adams_bolt",
                "ring_out_vfx_wildfire",
                "ring_out_vfx_joker_cards",
                "ring_out_vfx_adam_west",
                "ring_out_vfx_bat_signal",
                "ring_out_vfx_deploy_batwing",
                "ring_out_vfx_blade_of_grass",
                "ring_out_vfx_boom_tube",
                "ring_out_vfx_canonball",
                "ring_out_vfx_two_face_coin",
                "ring_out_vfx_dark_matter",
                "ring_out_vfx_firework_show",
                "ring_out_vfx_fp's_burning_love",
                "ring_out_vfx_gossamer",
                "ring_out_vfx_house_lannister",
                "ring_out_vfx_house_stark",
                "ring_out_vfx_house_Targeryen",
                "ring_out_vfx_green_lantern_finish",
                "ring_out_vfx_halloween_2022",
                "ring_out_vfx_pillar_of_ice",
                "ring_out_vfx_jellybean",
                "ring_out_vfx_king_shark",
                "ring_out_vfx_lasso_of_truth",
                "ring_out_vfx_lava_breath",
                "ring_out_vfx_lightning_ball",
                "ring_out_vfx_lotus_blossom",
                "ring_out_vfx_lunar_rabbit",
                "ring_out_vfx_marcelines_song",
                "ring_out_vfx_monster_tweety",
                "ring_out_vfx_mushroom_explosion",
                "ring_out_vfx_obsidian",
                "ring_out_vfx_omega_beam",
                "ring_out_vfx_oracles_reading",
                "ring_out_vfx_scoobtober_bats",
                "ring_out_vfx_shazam_final",
                "ring_out_vfx_soothing_energy",
                "ring_out_vfx_legendary_soothing_energy",
                "ring_out_vfx_space_kook",
                "ring_out_vfx_sparkler",
                "ring_out_vfx_spikes_bite",
                "ring_out_vfx_spiritual_awakening",
                "ring_out_vfx_gem_bubbles",
                "ring_out_vfx_shield_and_bubbles",
                "ring_out_vfx_stevens_lion",
                "ring_out_vfx_string_lights",
                "ring_out_vfx_sun_scream",
                "ring_out_vfx_supernova",
                "ring_out_vfx_thats_all_folks",
                "ring_out_vfx_toxic_explosion",
                "ring_out_vfx_happy_birday_tweetie",
                "ring_out_vfx_say_your_prayers_varmit",
                "ring_out_vfx_lady_rainicorn_and_rainbows",
                "ring_out_vfx_bitey_boi",
                "ring_out_vfx_ride_the_wave",
                "ring_out_vfx_yeragrandolflag",
                "ring_out_vfx_love_splosion",
                "ring_out_vfx_jungle_jam",
                "ring_out_vfx_default",
                "ring_out_vfx_chroma",
                "ring_out_vfx_split_the_guard",
                "ring_out_vfx_decompiled",
                "ring_out_vfx_slashed",
                "ring_out_vfx_here_comes_a_thought",
                "ring_out_vfx_scooby_snacks",
                "ring_out_vfx_paint_buckets",
                "ring_out_vfx_olympics_set_spike",
                "ring_out_vfx_olympics_the_breakaway",
                "ring_out_vfx_agentsmith_rage",
                "ring_out_vfx_smile",
                "ring_out_vfx_olympics_running",
                "ring_out_vfx_leave_me_alone",
                "ring_out_vfx_divine_dove",
                "ring_out_vfx_cyber_tower",
                "ring_out_vfx_cybercard",
                "ring_out_vfx_salt_shaker",
                "ring_out_vfx_star_explosion",
                "ring_out_vfx_smoke_bomb",
                "ring_out_vfx_sliced_cheese",
                "ring_out_vfx_poppin_out",
                "ring_out_vfx_comic_book_day",
                "ring_out_vfx_monster_reveal",
                "ring_out_vfx_laughing_fish_flood",
                "ROV_HOTD_GetTheWyrm",
                "ring_out_vfx_glitch",
                "ring_out_vfx_gaunt_lets_go",
                "ring_out_vfx_bif_bam_pow",
                "ring_out_vfx_batman_85_anniversary",
                "rov_zinthos",
                "ring_out_vfx_treasure_rabbit",
                "ring_out_vfx_taz_dynamite",
                "rov_rock_the_nightosphere",
                "rov_icebreaker",
                "rov_hypergalactic_energy",
                "rov_holy_night_sword",
                "rov_gone_in_a_slash",
                "ring_out_vfx_firework_ko",
                "ring_out_vfx_explosion",
                "ring_out_vfx_sentinel_capture",
                "ring_out_vfx_velma_getaclue",
                "ring_out_vfx_shaggy_therewolf",
                "ring_out_vfx_nubia",
                "ring_out_vfx_marceline_bat",
                "ring_out_vfx_ghost_train",
                "ring_out_vfx_aquaman_octopus",
                "ring_out_vfx_trident_of_atlan",
                "ring_out_vfx_aquaman",
                "ring_out_vfx_aku_fire",
                "ring_out_vfx_sugar_spice_everything_nice",
                "ring_out_vfx_slime_monster",
                "ring_out_vfx_mutation_arm",
                "ring_out_vfx_mindblower",
                "ring_out_vfx_black_adam",
                "ring_out_vfx_lazer_blast",
                "ring_out_vfx_red_toast_blue_toast"
              ],
              "ProfileIconSlugs": [
                "DC_BM_ProfileIcon_KingOfShadows",
                "DC_BM_ProfileIcon_QueenOfCalamity",
                "DC_BM_ProfileIcon_TheJoker_BottomOfTheDeck",
                "DC_BM_ProfileIcon_TheJoker_ClownPrinceOfCrime",
                "DC_SM_ProfileIcon_Superman_ManOfTomorrow",
                "HBO_GOT_ProfileIcon_GameofThronesAstrolabe",
                "PFG_MVS_ProfileIcon_AceOfFluff",
                "profile_icon_amb_gre_gizmo_1",
                "profile_icon_cn_at_finn_adventure_time",
                "WB_IG_ProfileIcon_C017_AGiantShadow",
                "profileicon_bugs_bunny_jack_of_carrots_doc",
                "LunarNewYear2023_PFG_ProfileIcon_GuardianReinddog",
                "LunarNewYear2023_PFG_ProfileIcon_LunarNewYear23",
                "LunarNewYear2023_PFG_ProfileIcon_ToastieLunarNewYear23",
                "LunarNewYear2023_PFG_ProfileIcon_YearOfTheRabbit",
                "profile_icon_as_ram_faces",
                "profile_icon_AS_RAM_Morty_Morty",
                "profile_icon_as_ram_pickle_rick_1",
                "as_ram_profileicon_morty_toxicmorty",
                "profile_icon_as_ram_rick_face_1",
                "profile_icon_bugsbunny_thewabbit",
                "profile_icon_caped_crusader",
                "profile_icon_capstone_arya",
                "profile_icon_capstone_harley",
                "profile_icon_capstone_jake",
                "profile_icon_capstone_reindog",
                "profile_icon_capstone_shaggy",
                "profile_icon_capstone_steven",
                "profile_icon_cn_at_fin_1",
                "profile_icon_cn_at_lady_rainicorn_1",
                "profile_icon_cn_su_star_1",
                "profile_icon_dc_bat_batlogo_1",
                "profile_icon_dc_ba_flyingblackadam",
                "dc_bm_profileicon_harley_niceshotpuddin",
                "dc_sm_profileicon_superman_hope",
                "dc_ww_profileicon_princessdiana",
                "profile_icon_dc_ww_wwlogo_1",
                "profile_icon_default_gold",
                "profile_icon_evo_2022",
                "profile_icon_halloween_2022_black_lantern_superman",
                "profile_icon_halloween_2022_black_lantern_wonderwoman",
                "profile_icon_halloween_2022_HB_SD_Boo",
                "profile_icon_halloween_2022_Scoobtober",
                "profile_icon_halloween_2022_pumpkin_patch",
                "profile_icon_irongiant_nofollowing",
                "profile_icon_pfg_tournament_bronze",
                "profile_icon_pfg_tournament_gold",
                "profile_icon_pfg_tournament_silver",
                "profile_icon_rankedbeta_reward",
                "profileicon_stripe_mogwaistripe",
                "profile_icon_wb_lt_c015",
                "profile_icon_wb_sd_fredstyle",
                "profile_icon_wb_sd_ghost",
                "profile_icon_wb_sd_scooby_snack",
                "profile_icon_wb_sd_spacekook",
                "profileicon_wb_sj_oldschooljam",
                "profile_icon_winter_2022_gizmo_santas_fuzzy_helper",
                "profile_icon_winter_2022_pfg_gingerbread_toast",
                "profile_icon_winter_2022_pfg_lil_toastie",
                "profile_icon_winter_2022_pfg_mvs_snowflake",
                "ValentinesDayEvent2023_PFG_ProfileIcon_HeartofValentiNeon",
                "ValentinesDayEvent2023_PFG_ProfileIcon_TheFluffiestCupid",
                "ValentinesDayEvent2023_PFG_ProfileIcon_ToastieWithTheMostie",
                "ValentinesDayEvent2023_PFG_ProfileIcon_ValentiNeonSurge",
                "ValentinesDayEvent2023_PFG_ProfileIcon_XOXOMVS",
                "profile_icon_winter_2022_greta_gretaclaus",
                "profile_icon_capstone_wonder_woman",
                "profile_icon_capstone_velma",
                "profile_icon_capstone_tom_and_jerry",
                "profile_icon_capstone_superman",
                "profile_icon_cn_su_steven_universe_1",
                "profile_icon_wb_sd_shaggy_1",
                "profile_icon_cn_at_jake_1",
                "profile_icon_dc_bat_harley_1",
                "profile_icon_cn_su_garnet_1",
                "profile_icon_capstone_finn",
                "profile_icon_reindog_1",
                "profile_icon_capstone_stripe",
                "profile_icon_capstone_c023A",
                "profile_icon_capstone_blackadam",
                "profile_icon_capstone_rick",
                "profile_icon_mastery_c019",
                "profileicon_capstone_marvin",
                "profile_icon_capstone_iron_giant",
                "profile_icon_capstone_c016",
                "profile_icon_capstone_taz",
                "profile_icon_capstone_bugs_bunny",
                "profile_icon_dc_bat_batman_1",
                "profile_icon_hbo_got_arya_1",
                "profile_icon_mvs_nom_nom_nom",
                "profile_icon_mvs_beach_day",
                "profile_icon_c035_new_fiends",
                "profile_icon_c010_snorklin_tj",
                "profile_icon_c035_jason_lives",
                "profile_icon_c036_system_enforcer",
                "profile_icon_c036_in_their_sights",
                "profile_icon_c036_data_corrupted",
                "profile_icon_c034_kingdoms_finest",
                "profile_icon_c034_buff_nanner",
                "profile_icon_c009_summer_solstice_punch",
                "profile_icon_c014_summer_jam_jinkies",
                "profile_icon_c001_life_saver__",
                "profile_icon_c001_by_apollos_sunshine",
                "profile_icon_c028_tropi_cool_joker",
                "profile_icon_c011_he_left_his_family_behind",
                "profile_icon_c028_wild_baby",
                "profile_icon_pfg_power_in_waiting_7",
                "profile_icon_pfg_power_in_waiting_6",
                "profile_icon_pfg_power_in_waiting_5",
                "profile_icon_pfg_power_in_waiting_4",
                "profile_icon_pfg_power_in_waiting_3",
                "profile_icon_pfg_power_in_waiting_2",
                "profile_icon_pfg_power_in_waiting_1",
                "profile_icon_default",
                "profile_icon_wb_watertower",
                "profile_icon_wb_sd_scooby_tag",
                "profile_icon_wb_sd_mysterymachine",
                "profile_icon_cn_su_star_2",
                "profile_icon_cn_at_peppermint_butler_1",
                "profile_icon_cn_at_ice_king_1",
                "profile_icon_capstone_garnet",
                "profile_icon_cn_su_garnet_star",
                "WB_LT_ProfileIcon_LookOutBelow",
                "DC_BM_TheJoker_ThatLaughAgain",
                "CN_AT_ProfileIcon_PartyGod",
                "AS_SJ_ProfileIcons_ExtraTHICK",
                "profile_icon_C020_icon_director",
                "profile_icon_C008_hack_n_smash",
                "profile_icon_C019_rogue_agent",
                "profile_icon_c015_tbbfttt",
                "profile_icon_C010_tnj_protocol_activated",
                "profile_icon_c006_stark_slicing_in",
                "WB_LT_ProfileIcon_C018_B",
                "WB_IG_ProfileIcon_C017_YouStay",
                "AS_SJ_ProfileIcons_EyesofaWarrior",
                "AS_SJ_ProfileIcons_CanineLoyalty",
                "profile_icon_c028_a_complex_dynamic",
                "profile_icon_C012_r+s_4eva",
                "profile_icon_C001_shield_of_a_warrior",
                "profile_icon_garnet_in_her_sights",
                "profile_icon_C003_beware_the_solar_powered_man",
                "profile_icon_C015_round_n_round",
                "profile_icon_c024_sandwormin",
                "profile_icon_c024_hangin_with_harry",
                "profile_icon_gameofthrones",
                "WB_IG_ProfileIcon_C017_NewsreelStar",
                "DC_SM_Superman_RighteousAnger",
                "profile_icon_so_it_began",
                "DC_BM_Batman_ProfileIcon_AlwaysPrepared",
                "CN_sd_ProfileIcon_CreepersAbound",
                "CN_sd_ProfileIcon_ClueFindinFashionista",
                "CN_sd_ProfileIcon_ButItHas3Bathrooms",
                "CN_PPG_ProfileIcon_SMOOCH",
                "CN_PPG_ProfileIcon_SMAK",
                "CN_PPG_ProfileIcon_MWAH",
                "profile_icon_c030r",
                "profile_icon_c030g",
                "cn_c030_profile_icon_c030b",
                "profile_icon_galaxy3",
                "profile_icon_galaxy1",
                "profile_icon_galaxy2",
                "profile_icon_galaxy4",
                "profile_icon_crossover5",
                "profile_icon_crossover1",
                "profile_icon_crossover4",
                "profile_icon_crossover3",
                "profile_icon_crossover2",
                "profile_icon_creepincat",
                "profile_icon_boredfighting",
                "profile_icon_MuertosVerse",
                "profile_icon_Cachorreno",
                "profile_icon_ElGuason",
                "cn_c030_profile_icon_nice",
                "profile_icon_batmobile1",
                "profile_icon_YuletideTaz",
                "profile_icon_SW34T3RW34TH3R",
                "WB_LT_ProfileIcon_WatchYerHeadDoc",
                "DC_BM_ProfileIcon_TheJoker_TheHarleuinOfHate",
                "CN_AT_Marceline_ProfileIcon_TheyWereMine",
                "CN_AT_Marceline_ProfileIcon_JamTheNightosphere",
                "CN_AT_Marceline_ProfileIcon_Fangtastic",
                "CN_AT_Marceline_ProfileIcon_BFF",
                "AS_SJ_ProfileIcons_TheZintaris",
                "AS_SJ_ProfileIcons_MadnessofAku",
                "profile_icon_taztransform",
                "profile_icon_downthehatch",
                "profile_icon_mvs",
                "profile_icon_powerbeauty",
                "profile_icon_thelastlaugh",
                "profile_icon_headmastersmight",
                "wb_lt_profileicon_nevermore",
                "wb_lt_profileicon_alleyesonme",
                "profile_icon_lookahereson",
                "profileicon_easya",
                "profileicon_scorned",
                "profileicon_baddad",
                "profile_icon_winter1",
                "profile_icon_winter2",
                "profile_icon_ugly2",
                "profile_icon_ugly1",
                "profile_icon_storm",
                "profile_icon_lo-luvya",
                "profile_icon_lbstyle",
                "profile_icon_toastmeheart",
                "profile_icon_mvsheart",
                "profile_icon_lovebun",
                "profile_icon_ggheart",
                "WB_LT_ProfileIcon_C018_A",
                "WB_IG_ProfileIcon_C017_HeroOfRockwell",
                "HB_TNJ_ProfileIcon_MyCheddarHalf",
                "HB_TAJ_ProfileIcon_URWhatUEat",
                "HB_TAJ_ProfileIcon_AndAllForMe",
                "HBO_GOT_ProfileIcon_TheIronThrone",
                "DC_SM_Superman_ReadyToFight",
                "profile_icon_battle_for_gotham",
                "DC_AM_ProfileIcons_AtlantisAnswers",
                "DC_AM_ProfileIcons_Aqua-Buddies",
                "DC_AM_Aquaman_ProfileIcon_WavesoftheDeep",
                "CN_sd_ProfileIcon_SnackOfChampions",
                "CN_PPG_ProfileIcon_ShellStillKickYourButt",
                "CN_PPG_ProfileIcon_PowerpuffHotline",
                "CN_PPG_ProfileIcon_BashfulBubbles",
                "CN_PPG_ProfileIcon_Adora",
                "CN_AT_ProfileIcon_TheOceanIsScary",
                "CN_AT_ProfileIcon_PureEvil",
                "CN_AT_ProfileIcon_ItWasntMeItWasTheCrown",
                "profile_icon_cn_at_finn_2",
                "profile_icon_blossom",
                "profile_icon_buttercup",
                "profile_icon_bubbles"
              ],
              "AnnouncerPackSlugs": [
                "announcer_pack_wonderwoman_1",
                "announcer_pack_velma_1",
                "announcer_pack_superman_1",
                "announcer_pack_steven_1",
                "announcer_pack_shaggy_1",
                "announcer_pack_jake_1",
                "announcer_pack_harley_1",
                "announcer_pack_garnet_1",
                "announcer_pack_finn_1",
                "announcer_pack_c021_1",
                "announcer_pack_c018_1",
                "announcer_pack_c017_1",
                "announcer_pack_c016_1",
                "announcer_pack_c015_1",
                "announcer_pack_bugs_1",
                "announcer_pack_batman_1",
                "announcer_pack_arya_1",
                "announcer_pack_bmo_1",
                "announcer_pack_ladyrainicorn_1",
                "announcer_pack_c028",
                "announcer_pack_c028_s03",
                "announcer_pack_c034",
                "announcer_pack_default",
                "announcer_pack_c036",
                "announcer_pack_c020_1",
                "announcer_pack_c019_1",
                "announcer_pack_c026",
                "announcer_pack_c024",
                "announcer_pack_rrb",
                "announcer_pack_mjjj",
                "announcer_pack_c030",
                "announcer_pack_c027",
                "announcerpack_c025",
                "announcerpack_c031",
                "announcerpack_fhlh",
                "announcerpack_c029",
                "announcerpack_c038"
              ],
              "StatTrackerSlugs": [
                "stat_tracking_bundle_c028_wins",
                "stat_tracking_bundle_arya_ringouts",
                "stat_tracking_bundle_batman_ringouts",
                "stat_tracking_bundle_bugs_ringouts",
                "stat_tracking_bundle_c015_ringouts",
                "stat_tracking_bundle_lebron_ringouts",
                "stat_tracking_bundle_iron_giant_ringouts",
                "stat_tracking_bundle_marvin_ringouts",
                "stat_tracking_bundle_c019_ringouts",
                "stat_tracking_bundle_c020_ringouts",
                "stat_tracking_bundle_c021_ringouts",
                "stat_tracking_bundle_c023A_ringouts",
                "stat_tracking_bundle_c023B_ringouts",
                "stat_tracking_bundle_c028_ringouts",
                "stat_tracking_bundle_finn_ringouts",
                "stat_tracking_bundle_garnet_ringouts",
                "stat_tracking_bundle_harley_ringouts",
                "stat_tracking_bundle_wonder_jake_ringouts",
                "stat_tracking_bundle_reindog_ringouts",
                "stat_tracking_bundle_shaggy_ringouts",
                "stat_tracking_bundle_steven_ringouts",
                "stat_tracking_bundle_superman_ringouts",
                "stat_tracking_bundle_tom_and_jerry_ringouts",
                "stat_tracking_bundle_velma_ringouts",
                "stat_tracking_bundle_wonder_woman_ringouts",
                "stat_tracking_bundle_total_attacks_dodged",
                "stat_tracking_bundle_total_double_ringouts",
                "stat_tracking_bundle_highest_damage_dealt",
                "stat_tracking_bundle_test_maxed_characters",
                "stat_tracking_bundle_test_ringout_leader",
                "stat_tracking_bundle_test_ringout_leader_gold",
                "stat_tracking_bundle_total_ringouts",
                "stat_tracking_bundle_assists",
                "stat_tracking_bundle_wins",
                "stat_tracking_bundle_wonder_woman_wins",
                "stat_tracking_bundle_velma_wins",
                "stat_tracking_bundle_tom_and_jerry_wins",
                "stat_tracking_bundle_superman_wins",
                "stat_tracking_bundle_steven_wins",
                "stat_tracking_bundle_shaggy_wins",
                "stat_tracking_bundle_wonder_jake_wins",
                "stat_tracking_bundle_harley_wins",
                "stat_tracking_bundle_garnet_wins",
                "stat_tracking_bundle_finn_wins",
                "stat_tracking_bundle_reindog_wins",
                "stat_tracking_bundle_c023B_wins",
                "stat_tracking_bundle_c023A_wins",
                "stat_tracking_bundle_c021_wins",
                "stat_tracking_bundle_c020_wins",
                "stat_tracking_bundle_c019_wins",
                "stat_tracking_bundle_marvin_wins",
                "stat_tracking_bundle_iron_giant_wins",
                "stat_tracking_bundle_lebron_wins",
                "stat_tracking_bundle_c015_wins",
                "stat_tracking_bundle_bugs_wins",
                "stat_tracking_bundle_batman_wins",
                "stat_tracking_bundle_arya_wins",
                "stat_tracking_bundle_banana_guard_wins",
                "stat_tracking_bundle_jason_voorhees_wins",
                "stat_tracking_bundle_agent_smith_wins",
                "stat_tracking_bundle_ThePowerInside1",
                "stat_tracking_bundle_ThePowerInside2",
                "stat_tracking_bundle_ThePowerInside3",
                "stat_tracking_bundle_ThePowerInside4",
                "stat_tracking_bundle_ThePowerInside5",
                "stat_tracking_bundle_ThePowerInside6",
                "stat_tracking_bundle_ThePowerInside7",
                "stat_tracking_bundle_default",
                "stat_tracking_bundle_pve_boss_s1_c036",
                "stat_tracking_bundle_pve_boss_s1_c035",
                "stat_tracking_bundle_pve_boss_s1_c028",
                "stat_tracking_bundle_c026_wins",
                "stat_tracking_bundle_wonder_woman_total_damage_dealt",
                "stat_tracking_bundle_velma_total_damage_dealt",
                "stat_tracking_bundle_tom_and_jerry_total_damage_dealt",
                "stat_tracking_bundle_superman_total_damage_dealt",
                "stat_tracking_bundle_steven_total_damage_dealt",
                "stat_tracking_bundle_shaggy_total_damage_dealt",
                "stat_tracking_bundle_reindog_total_damage_dealt",
                "stat_tracking_bundle_wonder_jake_total_damage_dealt",
                "stat_tracking_bundle_harley_total_damage_dealt",
                "stat_tracking_bundle_garnet_total_damage_dealt",
                "stat_tracking_bundle_finn_total_damage_dealt",
                "stat_tracking_bundle_c036_total_damage_dealt",
                "stat_tracking_bundle_c035_total_damage_dealt",
                "stat_tracking_bundle_c034_total_damage_dealt",
                "stat_tracking_bundle_c028_total_damage_dealt",
                "stat_tracking_bundle_c026_total_damage_dealt",
                "stat_tracking_bundle_c023B_total_damage_dealt",
                "stat_tracking_bundle_c023A_total_damage_dealt",
                "stat_tracking_bundle_c021_total_damage_dealt",
                "stat_tracking_bundle_c020_total_damage_dealt",
                "stat_tracking_bundle_c019_total_damage_dealt",
                "stat_tracking_bundle_marvin_total_damage_dealt",
                "stat_tracking_bundle_iron_giant_total_damage_dealt",
                "stat_tracking_bundle_lebron_total_damage_dealt",
                "stat_tracking_bundle_c015_total_damage_dealt",
                "stat_tracking_bundle_bugs_total_damage_dealt",
                "stat_tracking_bundle_batman_total_damage_dealt",
                "stat_tracking_bundle_arya_total_damage_dealt",
                "stat_tracking_bundle_c036_ringouts",
                "stat_tracking_bundle_c035_ringouts",
                "stat_tracking_bundle_c034_ringouts",
                "stat_tracking_bundle_c026_ringouts",
                "stat_tracking_bundle_pve_stars_earned_c026",
                "stat_tracking_bundle_pve_stars_earned_c024",
                "stat_tracking_bundle_ranked_season_two_wins_2v2",
                "stat_tracking_bundle_ranked_season_two_wins_1v1",
                "stat_tracking_bundle_ranked_season_two_characters_in_gold_2v2",
                "stat_tracking_bundle_ranked_season_two_characters_in_gold_1v1",
                "stat_tracking_bundle_c024_wins",
                "stat_tracking_bundle_c024_total_damage_dealt",
                "stat_tracking_bundle_c024_ringouts",
                "stattracking_ranked_seasonthree_rankedwins_2v2",
                "stattracking_ranked_seasonthree_rankedwins_1v1",
                "stattracking_ranked_seasonthree_charactersingold_2v2",
                "stattracking_ranked_seasonthree_charactersingold_1v1",
                "StatTracking_C030Wins",
                "stat_tracking_bundle_c030_total_damage_dealt",
                "stat_tracking_bundle_c030_ringouts",
                "stat_tracking_bundle_c027_wins",
                "stat_tracking_bundle_c027_total_damage_dealt",
                "stat_tracking_bundle_c027_ringouts",
                "stattracking_c025wins",
                "stattracking_c025totaldamagedealt",
                "stattracking_c025ringouts",
                "stattracking_c025highestdamagedealt",
                "stattracking_pve_starsearned_s4c031",
                "stattracking_pve_starsearned_s4c025",
                "stattracking_c031wins",
                "stattracking_c031totaldamagedealt",
                "stattracking_c031ringouts",
                "stattracking_c031highestdamagedealt",
                "stattracking_ranked_seasonfour_rankedwins_2v2",
                "stattracking_ranked_seasonfour_rankedwins_1v1",
                "stattracking_ranked_seasonfour_charactersingold_2v2",
                "stattracking_ranked_seasonfour_charactersingold_1v1",
                "stattracking_pve_starsearned_s5c038",
                "stattracking_pve_starsearned_s5c029",
                "stattracking_c029wins1",
                "stattracking_c029totaldamagedealt",
                "stattracking_c029ringouts",
                "stattracking_c038wins",
                "stattracking_c038totaldamagedealt",
                "stattracking_c038ringouts",
                "stattracking_ranked_seasonfive_rankedwins_2v2",
                "stattracking_ranked_seasonfive_rankedwins_1v1",
                "stattracking_ranked_seasonfive_charactersingold_2v2",
                "stattracking_ranked_seasonfive_charactersingold_1v1",
                "stattracking_ranked_seasonsix_rankedwins_2v2",
                "stattracking_ranked_seasonsix_rankedwins_1v1",
                "stattracking_ranked_seasonsix_charactersingold_2v2",
                "stattracking_ranked_seasonsix_charactersingold_1v1"
              ],
              "GemSlugs": [
                "gem_horror_circle_chance_on_hit_ice",
                "gem_digital_circle_on_dodge_lightning_strike",
                "gem_digital_circle_on_dodge_electric_zone",
                "gem_digital_circle_on_dodge_seismic_reactor",
                "gem_digital_circle_on_respawn_armature",
                "gem_digital_circle_walk_to_charge_electric_gauntlets",
                "gem_digital_circle_chance_on_hit_shock",
                "gem_digitalcircle_firstblood",
                "gem_digitalcircle_tauntafterko",
                "gem_circle_digital_additionaljump",
                "gem_horror_square_on_opponent_fatigued_enrage",
                "gem_horror_circle_bandage",
                "gem_horror_circle_chance_on_hit_burnout",
                "gem_horror_circle_evade_boost",
                "gem_horror_circle_share_elemental_debuffs",
                "gem_horror_circle_chance_on_hit_deplete_cooldown",
                "gem_horror_circle_on_dodge_smoke_bomb",
                "gem_horror_circle_damage_aerial",
                "Gem_chaos_circle_two_faces_coin",
                "gem_horror_circle_chance_on_injury_disable_bounce",
                "Gem_chance_on_hit_random_status_effect_per_match",
                "Gem_chaos_circle_on_dodge_reverse_all_projectiles",
                "Gem_chaos_circle_chance_auto_dodge",
                "Gem_chaos_circle_chance_on_hit_critical_hit",
                "Gem_chance_on_spawn_giant_projectiles",
                "Gem_chance_on_spawn_tiny_enemy_projectiles",
                "Gem_on_dodge_black_adam_bubble_shield",
                "gem_digital_square_weaken_bubble_prison",
                "gem_chaos_deal_damage_to_charge_auto_reflect",
                "gem_chaos_out_of_aerial_specials_joker_balloon",
                "gem_discipline_on_dodge_cleanse_fire_ice",
                "gem_discipline_fast_charge_attacks",
                "gem_discipline_armored_charge_attacks",
                "gem_discipline_reflecting_with_charge_attacks",
                "gem_discipline_companion_toasty",
                "gem_discipline_stand_still_rage",
                "gem_discipline_additional_air_evade",
                "gem_discipline_sweet_spot_stun",
                "gem_discipline_intangible_while_invisible",
                "gem_discipline_charge_fire_aura",
                "gem_discipline_charge_attack_tornado",
                "gem_season3_tethercrystal",
                "gem_season3_shieldplacement",
                "gem_season3_fullcharge",
                "gem_season3_firefists",
                "gem_season3_explodingarmor",
                "gem_season3_companion_2",
                "gem_season3_companion_1",
                "gem_season3_bubblearmor",
                "gem_season3_companion_3",
                "gem_season3_anubiscompanion",
                "Gem_season4_educatedondamage",
                "Gem_season4_stancespeedandsize",
                "Gem_season4_stancegravityandsize",
                "Gem_season4_jumpsfromgroundmelee",
                "Gem_season4_megalodogrevenge",
                "Gem_season4_armoredscars",
                "Gem_season4_stancefireandice",
                "Gem_season4_exhaustarmor",
                "Gem_season4_growthspurt",
                "Gem_arena_regen",
                "Gem_arena_defensepower",
                "Gem_arena_attackpower",
                "Gem_arena_vampire",
                "Gem_arena_dodger",
                "Gem_arena_airspecialist",
                "Gem_arena_verticalattackpower",
                "Gem_arena_wallthemout",
                "Gem_arena_empatheticresponse",
                "Gem_arena_cementshoes",
                "Gem_arena_devilishcontract",
                "Gem_arena_whatachicken",
                "Gem_arena_reactiveplating",
                "Gem_arena_punchyobuns",
                "Gem_arena_brainandbrawn",
                "Gem_arena_bladeandshield",
                "Gem_arena_triggerhappy",
                "Gem_arena_iwantyoutohitme",
                "Gem_arena_andanotherone",
                "Gem_arena_thorns",
                "Gem_arena_ringoutheal",
                "Gem_arena_passinggas",
                "Gem_arena_homingrockets",
                "Gem_arena_finishthem",
                "Gem_arena_doubletake",
                "Gem_arena_bulletproofjuggernaut",
                "Gem_arena_rerollshop",
                "Gem_arena_investor",
                "Gem_arena_projectiledamageincrease",
                "Gem_arena_hotandcold",
                "Gem_arena_enragedresponse",
                "Gem_arena_goldsuit",
                "Gem_arena_emptypockets",
                "Gem_season4_thickskin",
                "Gem_arena_embracetheelements",
                "Gem_arena_explosivepanic",
                "Gem_arena_emergencygadget",
                "Gem_arena_hotfoot",
                "Gem_arena_thebiggertheyare",
                "Gem_arena_coldbreeze",
                "Gem_arena_notoutyet",
                "Gem_arena_heroiclanding",
                "Gem_arena_dashingconfidence",
                "Gem_arena_armorcrush"
              ],
              "PerkSlugs": [
                "perk_char_one_last_zoinks",
                "perk_gen_boxer",
                "perk_team_speed_force_assist",
                "perk_gen_armor_killer",
                "perk_gen_fire_projectile",
                "perk_gen_well_rounded",
                "perk_gen_second_wind_beneath_your_wings",
                "perk_char_HangryMan",
                "perk_gen_collateral_damage",
                "perk_C020_hephaestuswho",
                "perk_C020_squanchinpyrotechnics",
                "perk_C020_sticklermeeseeks",
                "perk_armor_crush",
                "perk_static_electricity",
                //"perk_platform_from_dodge",
                "perk_psychic_damage",
                "perk_purest_of_motivations",
                "perk_run_shield",
                "perk_snowball_effect",
                "perk_stronger_than_ever",
                "perk_sturdy_dodger",
                "perk_char_space_invader",
                "perk_C008_confettiexplosion",
                "perk_C008_glovecontrol",
                "perk_C008_smoothmoves",
                "perk_C012_marker",
                "perk_C004_bouncerang",
                "perk_C004_precisiongrapple",
                "perk_C010_dynamitesplit",
                "perk_C010_flyfisher",
                "perk_blackadam_circuit_breaker",
                "perk_blackadam_hierarchy_of_power",
                "perk_arya_betrayal",
                "perk_arya_trophy",
                "perk_C001_grappleofhermes",
                "perk_C001_shieldofathena",
                "perk_c001_whipofhephaestus",
                "perk_C014_knowledgeispower",
                "perk_C014_studied",
                "perk_C003_breaktheice",
                "perk_C003_flamingreentry",
                "perk_C003_sniperpunch",
                "perk_C009_crystalpal",
                "perk_C009_firefluff",
                "perk_C016_hothands_new",
                "perk_C016_forthree",
                "perk_C016_keeppossession_new",
                "perk_C028_balloonperk",
                "perk_C028_cardperk",
                "perk_C012_electricgroove",
                "perk_C013_backpackstrength",
                "perk_C013_goingoutofbusiness",
                "perk_bugsbunny_lingering_love",
                "perk_bugsbunny_comin_through_doc",
                "perk_marvin_redirect",
                "perk_marvin_heat_seekers",
                "perk_dashbreak",
                "perk_C017_wrongsideofthebed",
                "perk_C017_staticdischarge",
                "perk_C017_afterburners",
                "perk_morty_hammer",
                "perk_morty_grenade",
                "perk_C023B_hestheleader",
                "perk_C023B_boomboombounce",
                "perk_taz_iron_stomach",
                "perk_taz_dogpile",
                "perk_C023A_bouncebounceboom",
                "perk_C023A_powercuddle",
                "perk_C005_sticky",
                "perk_C005_staylimberdude",
                "perk_C011_greenthumb",
                "perk_C011_bouncebubble",
                "perk_C023A_rhythmsgonnagetcha",
                "perk_jason_resurrectionist",
                "perk_jason_monstrous_side_step",
                "perk_morty_extra_fleeb_juice",
                "perk_bananaguard_irontemple",
                "perk_bananaguard_icytears",
                "perk_c026_signature2",
                "perk_c026_signature1",
                "perk_c026_signature3",
                "perk_c036_signature_three",
                "perk_c036_signature_one",
                "perk_c036_signature_four",
                "perk_c024_big_bomb",
                "perk_c024_angry_bugs",
                "perk_c024_frightening",
                "perk_gen_gray_health_on_dodge",
                "perk_gen_jump_on_kb",
                "perk_C012_thunderclap",
                "perk_c030_x",
                "perk_c030_dash",
                "perk_nubia_staffmastery",
                "perk_C027_coldsight",
                "perk_c025_homingbird",
                "perk_c025_reflectbubble",
                "perk_c025_earlytrigon",
                "perk_c031_perkdata_windtunnels",
                "perk_c031_perkdata_bard",
                "perk_c031_perkdata_empress",
                "perk_c029_pufftogo",
                "perk_c029_whirlpool",
                "perk_c029_seahorselunge",
                "perk_c038_heavyball",
                "perk_c038_heart_attack"
              ],
              "SkinSlugsByCharacter": ENABLED_SKINS,
              "TauntSlugsByCharacter": TAUNTS_DATA,            
            },
            "StatTrackersThatRequireProgress": {},
            "OwnedByDefaultInventoryItems": [
              "supershaggy",
              ...CHARACTER_SLUGS,
              "skin_velma_default",
              "skin_superman_default",
              "skin_steven_default",
              "skin_shaggy_default",
              "skin_meeseeks_default",
              "skin_jake_default",
              "skin_harley_default",
              "skin_garnet_default",
              "skin_finn_default",
              "skin_creature_default",
              "skin_c028_default",
              "skin_c023b_default",
              "skin_c023A_default",
              "skin_c021_default",
              "skin_c020_default",
              "skin_c018_default",
              "skin_c017_s01",
              "skin_iron_giant_default",
              "skin_c016_default",
              "skin_bugs_bunny_default",
              "skin_jason_000",
              "skin_bananaguard_default",
              "skin_tom_and_jerry_default",
              "skin_wonder_woman_default",
              "skin_arya_default",
              "skin_c019_default",
              "skin_batman_default",
              "ToastySkin01",
              "skin_taz_default",
              "skin_c036",
              "skin_c030_default",
              "skin_C027_default",
              "skin_c026_default",
              "skin_c024_default",
              "skin_C025_default",
              "skin_c031_s00",
              "c029_default",
              "C038",
              "banner_default",
              "profile_icon_default",
              "announcer_pack_default",
              "stat_tracking_bundle_default",
              "taunt_c030_default_01",
              "taunt_c023A_default",
              "taunt_irongiant_default",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_velma_default",
              "taunt_tomandjerry_default",
              "taunt_superman_crack_neck",
              "taunt_steven_default",
              "taunt_shaggy_default",
              "taunt_jake_default",
              "taunt_harley_default",
              "taunt_garnet_default",
              "taunt_finn_baby_default",
              "taunt_creature_default",
              "Taunt_C028_Default",
              "taunt_c023b_default",
              "taunt_c021_default",
              "taunt_c020_taunt_0",
              "taunt_c019_default",
              "taunt_c018_default",
              "taunt_c016_default",
              "Taunt_Taz_Default",
              "taunt_bugs_default",
              "taunt_batman_default",
              "taunt_arya_default",
              "taunt_jason_default",
              "taunt_bananaguard_default",
              "taunt_c027_default",
              "taunt_C026_default",
              "taunt_c020b_taunt_0",
              "taunt_c036_default",
              "taunt_c025_default",
              "taunt_C024_default",
              "taunt_c031_defaulttaunt",
              "taunt_c029_defaulttaunt",
              "taunt_c038_defaulttaunt",
              "taunt_supershaggy_default",
              "ring_out_vfx_default",
              "ring_out_vfx_chroma"
            ]
          },
          "AssetMetaData": {
            "CharacterMetaData": {
              "character_wonder_woman": {
                "MasteryRewardTrack": "mrt_mastery_wonder_woman",
                "DefaultSkin": "skin_wonder_woman_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Wonder Woman"
              },
              "character_velma": {
                "MasteryRewardTrack": "mrt_mastery_velma",
                "DefaultSkin": "skin_velma_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Velma"
              },
              "character_tom_and_jerry": {
                "MasteryRewardTrack": "mrt_mastery_tom_and_jerry",
                "DefaultSkin": "skin_tom_and_jerry_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tom & Jerry"
              },
              "character_superman": {
                "MasteryRewardTrack": "mrt_mastery_c003",
                "DefaultSkin": "skin_superman_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Superman"
              },
              "character_steven": {
                "MasteryRewardTrack": "mrt_mastery_steven",
                "DefaultSkin": "skin_steven_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Steven Universe"
              },
              "character_shaggy": {
                "MasteryRewardTrack": "mrt_mastery_shaggy",
                "DefaultSkin": "skin_shaggy_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shaggy"
              },
              "character_jake": {
                "MasteryRewardTrack": "mrt_mastery_jake",
                "DefaultSkin": "skin_jake_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Jake"
              },
              "character_harleyquinn": {
                "MasteryRewardTrack": "mrt_mastery_harleyquinn",
                "DefaultSkin": "skin_harley_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Harley Quinn"
              },
              "character_garnet": {
                "MasteryRewardTrack": "mrt_mastery_garnet",
                "DefaultSkin": "skin_garnet_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Garnet"
              },
              "character_finn": {
                "MasteryRewardTrack": "mrt_mastery_finn",
                "DefaultSkin": "skin_finn_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Finn"
              },
              "character_creature": {
                "MasteryRewardTrack": "mrt_mastery_creature",
                "DefaultSkin": "skin_creature_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Reindog"
              },
              "character_C028": {
                "MasteryRewardTrack": "mrt_mastery_c028",
                "DefaultSkin": "skin_c028_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "The Joker"
              },
              "character_C023B": {
                "MasteryRewardTrack": "mrt_mastery_c023b",
                "DefaultSkin": "skin_c023b_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Stripe"
              },
              "character_C023A": {
                "MasteryRewardTrack": "mrt_mastery_c023a",
                "DefaultSkin": "skin_c023A_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Gizmo"
              },
              "character_C021": {
                "MasteryRewardTrack": "mrt_mastery_c021",
                "DefaultSkin": "skin_c021_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Black Adam"
              },
              "character_C020": {
                "MasteryRewardTrack": "mrt_mastery_c020",
                "DefaultSkin": "skin_c020_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Rick"
              },
              "character_c019": {
                "MasteryRewardTrack": "mrt_mastery_c019",
                "DefaultSkin": "skin_c019_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Morty"
              },
              "character_C018": {
                "MasteryRewardTrack": "mrt_mastery_c018",
                "DefaultSkin": "skin_c018_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Marvin The Martian"
              },
              "character_C017": {
                "MasteryRewardTrack": "mrt_mastery_c017",
                "DefaultSkin": "skin_c017_s01",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Iron Giant"
              },
              "character_c16": {
                "MasteryRewardTrack": "mrt_mastery_lebron",
                "DefaultSkin": "skin_c016_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "LeBron James"
              },
              "character_taz": {
                "MasteryRewardTrack": "mrt_mastery_taz",
                "DefaultSkin": "skin_taz_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Taz"
              },
              "character_bugs_bunny": {
                "MasteryRewardTrack": "mrt_mastery_bugs_bunny",
                "DefaultSkin": "skin_bugs_bunny_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Bugs Bunny"
              },
              "character_batman": {
                "MasteryRewardTrack": "mrt_mastery_batman",
                "DefaultSkin": "skin_batman_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman"
              },
              "character_arya": {
                "MasteryRewardTrack": "mrt_mastery_arya",
                "DefaultSkin": "skin_arya_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Human",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Arya Stark"
              },
              "character_Jason": {
                "MasteryRewardTrack": "mrt_mastery_jason",
                "DefaultSkin": "skin_jason_000",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Jason Voorhees"
              },
              "character_BananaGuard": {
                "MasteryRewardTrack": "mrt_mastery_banana_guard",
                "DefaultSkin": "skin_bananaguard_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Banana Guard"
              },
              "character_c036": {
                "MasteryRewardTrack": "mrt_mastery_c036",
                "DefaultSkin": "skin_c036",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Agent Smith"
              },
              "character_C030": {
                "MasteryRewardTrack": "mrt_mastery_c030",
                "DefaultSkin": "skin_c030_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:PowerpuffGirls",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "The Powerpuff Girls"
              },
              "character_C026": {
                "MasteryRewardTrack": "mrt_mastery_c026",
                "DefaultSkin": "skin_c026_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:SamuraiJack",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Samurai Jack"
              },
              "character_c024": {
                "MasteryRewardTrack": "mrt_mastery_c024",
                "DefaultSkin": "skin_c024_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Betelgeuse"
              },
              "character_C025": {
                "MasteryRewardTrack": "mrt_mastery_c025",
                "DefaultSkin": "skin_C025_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Raven"
              },
              "character_C027": {
                "MasteryRewardTrack": "mrt_mastery_c027",
                "DefaultSkin": "skin_C027_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Nubia"
              },
              "character_C031": {
                "MasteryRewardTrack": "mrt_mastery_c031",
                "DefaultSkin": "skin_c031_s00",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Marceline",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Marceline the Vampire Queen"
              },
              "character_c038": {
                "MasteryRewardTrack": "mrt_mastery_c038",
                "DefaultSkin": "C038",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Lola Bunny"
              },
              "character_C029": {
                "MasteryRewardTrack": "mrt_mastery_c029",
                "DefaultSkin": "c029_default",
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Aquaman"
              }
            },
            "SkinMetaData": {
              "skin_c001_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Wonder Woman"
              },
              "skin_c001_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heart",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Aphrodite’s Blessing Wonder Woman"
              },
              "skin_c001_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:AlternativePersona",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Black Lantern Wonder Woman"
              },
              "skin_c001_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Bloodlines Wonder Woman"
              },
              "skin_c014_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heart",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "ValentiNeon Velma"
              },
              "skin_c014_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ugly Sweater Velma"
              },
              "skin_c014_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Witch Velma"
              },
              "skin_c014_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Luau Velma"
              },
              "skin_c014_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Astronaut Velma"
              },
              "skin_velma_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Velma"
              },
              "skin_c010_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Vampire Tom & Jerry"
              },
              "skin_c010_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Baker Street Tom & Jerry"
              },
              "skin_c010_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Detectives Tom & Jerry"
              },
              "skin_c010_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Pirates Tom & Jerry"
              },
              "skin_c003_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Summer Break Superman"
              },
              "skin_c003_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Lovestruck Superman"
              },
              "skin_c003_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ugly Sweater Superman"
              },
              "skin_c003_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "One Million Superman"
              },
              "skin_superman_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Superman"
              },
              "skin_c011_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tiger Millionaire"
              },
              "skin_c011_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PinkClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Coach Steven"
              },
              "skin_steven_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Steven Universe"
              },
              "skin_c002_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:AlternativePersona",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Human",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Uncle Shagworthy"
              },
              "skin_c002_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse Shaggy"
              },
              "skin_c002_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Showdown Shaggy"
              },
              "skin_c002_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heart",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Dimension of Love Shaggy"
              },
              "skin_c002_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Kung Food Shaggy"
              },
              "skin_c002_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Human",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Ultra Warrior Shaggy"
              },
              "skin_shaggy_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shaggy"
              },
              "skin_c005_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Jake"
              },
              "skin_c005_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ugly Sweater Jake"
              },
              "skin_c005_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:AlternativePersona",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Cake",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Calico Cake"
              },
              "skin_c005_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:AlternativePersona",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Cake",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Cake"
              },
              "skin_jake_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Jake"
              },
              "skin_c005_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Jake the Starchild"
              },
              "skin_c008_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Tooniverse Harley Quinn"
              },
              "skin_c008_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Love Rave Harley Quinn"
              },
              "skin_c008_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Human",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Mad Love Harley Quinn"
              },
              "skin_harley_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Harley Quinn"
              },
              "skin_c008_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Dr. Quinzel"
              },
              "skin_c008_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Task Force X Harley Quinn"
              },
              "skin_c012_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Reunited Garnet"
              },
              "skin_c012_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Garnet"
              },
              "skin_c012_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heart",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "True Kinda Love Garnet"
              },
              "skin_c012_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Flashback Garnet"
              },
              "skin_garnet_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Garnet"
              },
              "skin_c012_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "First Fusion Garnet"
              },
              "skin_c013_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse Finn"
              },
              "skin_c013_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Ugly Sweater Finn"
              },
              "skin_c013_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Pajama Finn"
              },
              "skin_c013_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Fern"
              },
              "skin_finn_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Finn"
              },
              "skin_c009_s11": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Tooniverse Reindog"
              },
              "skin_c009_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Golden Reindog"
              },
              "skin_c009_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Mummy Reindog"
              },
              "skin_c009_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Tea Time Reindog"
              },
              "skin_c009_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Holiday Reindog"
              },
              "skin_c009_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Battle Reindog"
              },
              "skin_c009_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Guardian Reindog"
              },
              "skin_c009_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Chef Reindog"
              },
              "skin_c009_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Astropup Reindog"
              },
              "skin_creature_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Reindog"
              },
              "skin_c028_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Tooniverse The Joker"
              },
              "skin_c028_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:AlternativePersona",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "The Batman Who Laughs"
              },
              "skin_c028_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "The Dark Prince Charming"
              },
              "skin_c028_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "The Joker"
              },
              "skin_c023b_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Combat Stripe"
              },
              "skin_c023b_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Stripe"
              },
              "skin_c023A_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Merry Mogwai Gizmo"
              },
              "skin_c023A_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Combat Gizmo"
              },
              "skin_c023A_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Gizmo"
              },
              "skin_c021_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Tooniverse Black Adam"
              },
              "skin_c021_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Heart of Kahndaq Black Adam"
              },
              "skin_c021_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:AlternativePersona",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Man in Black"
              },
              "skin_c021_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Comic Classic Black Adam"
              },
              "skin_c021_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Black Adam"
              },
              "skin_c020_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "SEAL Team Rick"
              },
              "skin_c020_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Rick"
              },
              "skin_c019_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "President Morty"
              },
              "skin_c018_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heart",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Galactic Romance Marvin the Martian"
              },
              "skin_c018_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Commander X2"
              },
              "skin_c018_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tune Squad '96 Marvin the Martian"
              },
              "skin_c018_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tune Squad Marvin the Martian"
              },
              "skin_c018_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Marvin the Martian"
              },
              "skin_c017_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Iron Giant"
              },
              "skin_c017_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Frankenstein Iron Giant"
              },
              "skin_c017_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Beach Giant"
              },
              "skin_c017_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Iron Giant"
              },
              "skin_iron_giant_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Iron Giant (Classic)"
              },
              "skin_c016_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "AmaZone Defense LeBron"
              },
              "skin_c016_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "I'm Freakin' Robin"
              },
              "skin_c016_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Sheriff LeBron"
              },
              "skin_c016_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "LeBron James"
              },
              "skin_c015_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:PinkClothing",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tasmanian She-Devil"
              },
              "skin_c015_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Beachcomber Taz"
              },
              "skin_c015_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tune Squad '96 Taz"
              },
              "skin_c015_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tune Squad Taz"
              },
              "skin_bugs_bunny_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Bugs Bunny"
              },
              "skin_c007_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Maestro Bugs"
              },
              "skin_c007_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hollywood Bugs"
              },
              "skin_c007_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Brunhilde Bugs"
              },
              "skin_c007_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tune Squad '96 Bugs"
              },
              "skin_c007_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tune Squad Bugs"
              },
              "skin_bugs_bunny_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Bugs Bunny"
              },
              "skin_jason_000": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Jason Voorhees"
              },
              "skin_bananaguard_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Banana Guard"
              },
              "skin_c003_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:AlternativePersona",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Black Lantern Superman"
              },
              "skin_tom_and_jerry_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tom & Jerry"
              },
              "skin_c006_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Waterdancer"
              },
              "skin_c006_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Ugly Sweater Arya"
              },
              "skin_wonder_woman_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Wonder Woman"
              },
              "skin_arya_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Human",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Arya"
              },
              "skin_c004_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ugly Sweater Batman"
              },
              "skin_c004_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Knight to Remember Batman"
              },
              "skin_c004_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Batman"
              },
              "skin_c019_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Morty"
              },
              "skin_c019_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Evil Morty"
              },
              "skin_c004_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Samurai Batman"
              },
              "skin_batman_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman"
              },
              "skin_c004_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Animated Series Batman"
              },
              "skin_c010_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Tom & Jerry"
              },
              "skin_c003_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Superman"
              },
              "skin_c008_s16": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Friday the 13th Harley Quinn"
              },
              "skin_c009_s13": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Tycoon Reindog"
              },
              "skin_c028_s16": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Friday the 13th The Joker"
              },
              "skin_c023A_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Gizmo"
              },
              "skin_c021_s16": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Friday the 13th Black Adam"
              },
              "skin_c016_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse LeBron James"
              },
              "skin_c006_s16": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Friday the 13th Arya"
              },
              "skin_c014_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Velma"
              },
              "skin_c023b_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Tooniverse Stripe"
              },
              "skin_c020_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse Rick"
              },
              "skin_c019_s014": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tooniverse Morty"
              },
              "skin_c018_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tooniverse Marvin the Martian"
              },
              "skin_arya_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse Arya"
              },
              "skin_rift_dialogue_narrator": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c003_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Superman"
              },
              "skin_c003_s13": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Summer Break Superman (July 4th)"
              },
              "skin_c008_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Shark Hat Harley Quinn"
              },
              "skin_c028_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Shark Hat The Joker"
              },
              "skin_c015_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tooniverse Taz"
              },
              "skin_c035_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Tooniverse Jason Voorhees"
              },
              "skin_c034_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Lady Banana Guard"
              },
              "skin_c034_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse Banana Guard"
              },
              "skin_c006_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Arya"
              },
              "skin_c007_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Bugs Bunny"
              },
              "skin_c015_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Matrix Code Taz"
              },
              "skin_c016_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code LeBron James"
              },
              "skin_c017_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Iron Giant"
              },
              "skin_c018_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Matrix Code Marvin the Martian"
              },
              "skin_c019_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Matrix Code Morty"
              },
              "skin_c020_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Rick"
              },
              "skin_c021_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Matrix Code Black Adam"
              },
              "skin_c023a_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Gizmo"
              },
              "skin_c023b_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Biker Stripe"
              },
              "skin_c023b_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Matrix Code Stripe"
              },
              "skin_c028_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Matrix Code The Joker"
              },
              "ToastySkin01": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": "Bugs Bunny"
              },
              "skin_c009_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Reindog"
              },
              "skin_c013_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Finn"
              },
              "skin_c012_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Garnet"
              },
              "skin_c008_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Beach BASH Harley Quinn"
              },
              "skin_c010_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Tom & Jerry"
              },
              "skin_c014_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Velma"
              },
              "skin_c035_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Matrix Code Jason Voorhees"
              },
              "skin_c034_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Banana Guard"
              },
              "skin_c018_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Shark Hat Marvin the Martian"
              },
              "skin_c020_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Rick"
              },
              "skin_c023A_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Gizmo"
              },
              "skin_c009_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Shark Hat Reindog"
              },
              "skin_c005_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Jake"
              },
              "skin_c002_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Human",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Shaggy"
              },
              "skin_c017_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Iron Giant"
              },
              "skin_c016_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat LeBron James"
              },
              "skin_c004_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Batman"
              },
              "skin_c006_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Arya"
              },
              "skin_c034_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Banana Guard"
              },
              "skin_c013_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Finn"
              },
              "skin_c021_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Shark Hat Black Adam"
              },
              "skin_c019_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Shark Hat Morty"
              },
              "skin_c007_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:SharkWeek",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Shark Hat Bugs Bunny"
              },
              "skin_c015_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Taz"
              },
              "skin_c023b_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Shark Hat Stripe"
              },
              "skin_c010_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:SharkWeek",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Tom & Jerry"
              },
              "skin_c014_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Velma"
              },
              "skin_c001_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Wonder Woman"
              },
              "skin_c001_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Wave Guardian Wonder Woman"
              },
              "skin_c014_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Beach Volleyball Velma"
              },
              "skin_c012_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Shark Hat Garnet"
              },
              "skin_c012_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Beach Party Garnet"
              },
              "skin_c028_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "The Killing Joke The Joker"
              },
              "skin_c006_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Summer Vacay Arya"
              },
              "skin_c035_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Uber Jason"
              },              
              "skin_c008_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:SheHer",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Beach BASH Harley Quinn (July 4th)"
              },
              "skin_c009_s12": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Megalodog Reindog"
              },
              "skin_c001_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Wonder Woman"
              },
              "skin_c010_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Seaside Tom & Jerry"
              },
              "shooting_gallery_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "target_portrait_skin01": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c001_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Gotham Guardian Wonder Woman"
              },
              "skin_c004_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Gotham Guardian Batman"
              },
              "skin_c007_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:GraphicT",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Clown Squad Bugs Bunny"
              },
              "skin_c003_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Gotham Guardian Superman"
              },
              "skin_c012_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Clown Squad Garnet"
              },
              "skin_c008_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Clown Squad Harley Quinn"
              },
              "skin_taz_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Taz"
              },
              "skin_robot": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "computer_skin_02": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "computer_skin_01": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c014_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Intrepid Velma"
              },
              "skin_c007_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "This Is It Bugs Bunny"
              },
              "skin_c005_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Muddy Jake"
              },
              "skin_c013_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Snow Suit Finn"
              },
              "drone_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "tank_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "card_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "balloon_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "laughinggas_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c002_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Shaggy"
              },
              "skin_c004_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Batman"
              },
              "skin_c003_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Superman"
              },
              "skin_c005_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matrix Code Jake"
              },
              "jumprope_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "golf_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c028_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:GraphicT",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Clown Squad The Joker"
              },
              "skin_c014_s21": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:GraphicT",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Clown Squad Velma"
              },
              "skin_c011_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Wedding Steven"
              },
              "summersnack_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c036": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Agent Smith"
              },
              "skin_c036_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Dynamic:MovieInspired",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Matrix Code Agent Smith"
              },
              "skin_c036_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Shark Hat Agent Smith"
              },
              "skin_c036_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ComicDots",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Tooniverse Agent Smith"
              },
              "skin_c036_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Tech",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Cyber-Smith Agent Smith"
              },
              "skin_c016_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Warmup LeBron"
              },
              "skin_c018_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Golfer Marvin the Martian"
              },
              "skin_c021_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Teth Adam"
              },
              "skin_c028_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Justice League Animated Series The Joker"
              },
              "skin_c003_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:20XXL",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Solar-Powered Man Superman"
              },
              "skin_c003_s11": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Regeneration Suit Superman"
              },
              "triplethreatbonus": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "volleyball_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c011_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:SharkWeek",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Shark Hat Steven"
              },
              "skin_c030_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "The Powerpuff Girls"
              },
              "skin_C027_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Nubia"
              },
              "skin_c026_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Samurai Jack"
              },
              "skin_c026_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Righteous Warrior Samurai Jack"
              },
              "skin_c014_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mystery Incorporated Velma"
              },
              "skin_c010_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Karate Chaos Tom & Jerry"
              },
              "skin_c010_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:20XXL",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Tech",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "TnJ.exe Tom & Jerry"
              },
              "skin_jake_RandyButternubs": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Jake Randy Butternubs"
              },
              "skin_c012_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Buddy's Book Garnet"
              },
              "skin_c013_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Prince Hotbod"
              },
              "skin_c023A_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Biker Gizmo"
              },
              "skin_c001_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Wonder Woman 1984"
              },
              "drone_swarm_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c011_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:ComicDots",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Tooniverse Steven"
              },
              "skin_c034_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Headwear",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Bandaged Banana Guard"
              },
              "skin_c011_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PinkClothing",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Pink Diamond Steven"
              },
              "skin_c020_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:20XXL",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "I.C.O.N. Director Sanchez"
              },
              "skin_c019_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:20XXL",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Ex-I.C.O.N. Agent Morty"
              },
              "skin_c006_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:20XXL",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Slicer Arya"
              },
              "skin_c013_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Baseball Finn"
              },
              "skin_c013_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Dr. Finn"
              },
              "skin_c035_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Afterlife Jason Voorhees"
              },
              "skin_c024_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Betelgeuse"
              },
              "skin_c007_s11": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Unmentionables Bugs "
              },
              "skin_c011_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Matrix Code Steven"
              },
              "skin_c006_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Seven Kingdoms Team Fencer Arya"
              },
              "skin_c026_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Samurai Jack"
              },
              "skin_c010_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tennis Tom & Jerry"
              },
              "skin_c008_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Earth-0 Harley Quinn"
              },
              "skin_c026_s18": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:ComicDots",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tooniverse Samurai Jack"
              },
              "skin_c020_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mech Suit Rick"
              },
              "skin_c019_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Mech Suit Morty"
              },
              "skin_c015_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Bellhop Taz"
              },
              "skin_c011_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Steven Universe"
              },
              "skin_c011_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Steven Universe"
              },
              "skin_c002_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Shaggy"
              },
              "skin_c002_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Circuit Drone Shaggy"
              },
              "skin_c036_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Agent Smith"
              },
              "skin_c036_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Circuit Drone Agent Smith"
              },
              "skin_c010_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Tom & Jerry"
              },
              "skin_c010_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Tech",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Tom & Jerry"
              },
              "skin_c003_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Superman"
              },
              "skin_c005_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Jake"
              },
              "skin_c009_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Reindog"
              },
              "skin_c009_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Circuit Drone Reindog"
              },
              "skin_c021_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Afterlife Black Adam"
              },
              "skin_c018_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Afterlife Marvin the Martian"
              },
              "skin_c018_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Circuit Drone Marvin the Martian"
              },
              "skin_c015_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Afterlife Taz"
              },
              "skin_c015_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Circuit Drone Taz"
              },
              "skin_c007_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Bugs Bunny"
              },
              "skin_c007_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Bugs Bunny"
              },
              "skin_c008_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Harley Quinn"
              },
              "skin_c028_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife The Joker"
              },
              "skin_c028_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone The Joker"
              },
              "skin_c023b_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Stripe"
              },
              "skin_c023a_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Gizmo"
              },
              "skin_c017_s26": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Afterlife Iron Giant"
              },
              "skin_c016_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone LeBron James"
              },
              "skin_c001_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Tech",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Wonder Woman"
              },
              "skin_c014_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Velma"
              },
              "skin_c012_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Garnet"
              },
              "skin_c013_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Finn"
              },
              "skin_c020_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Rick"
              },
              "skin_c019_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Circuit Drone Morty"
              },
              "skin_c004_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Circuit Drone Batman"
              },
              "skin_c034_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Dynamic:Season",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Circuit Drone Banana Guard"
              },
              "skin_c008_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:20XXL",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hack 'n' SMASH Harley Quinn"
              },
              "adventure_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c026_s31": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S2 Diamond Samurai Jack"
              },
              "skin_c026_s30": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S2 Platinum Samurai Jack"
              },
              "skin_c026_s29": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S2 Gold Samurai Jack"
              },
              "skin_c026_s32": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S2 Masters Samurai Jack"
              },
              "drone_cybersuper_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c026_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Lost Jack"
              },
              "skin_c008_s20": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Matrix Code Harley Quinn"
              },
              "rift_dialogue_m015_boss_SkinData": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "m015_boss_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "kart_portrait_skin": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_c024_s22": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:CircuitCrew",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Circuit Drone Betelgeuse"
              },
              "skin_c024_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Matador Betelgeuse"
              },
              "skin_c001_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th Wonder Woman"
              },
              "skin_c001_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Wonder Woman"
              },
              "skin_c001_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Quintessence Diana"
              },
              "skin_c014_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Velma"
              },
              "skin_c014_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Velma"
              },
              "skin_c010_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Tom & Jerry "
              },
              "skin_c010_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:TomandJerry",
                    "TS:Dynamic:Crossover",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:TomAndJerry"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Batman & The Joker Tom & Jerry"
              },
              "skin_c003_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Superman"
              },
              "skin_c003_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Anti-Life Superman"
              },
              "skin_c003_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Clark Kent"
              },
              "skin_c023b_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Día de Muertos Stripe"
              },
              "skin_c023b_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Stripe"
              },
              "skin_c011_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Batman 85th Steven Universe"
              },
              "skin_c011_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:Steven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Steven Universe"
              },
              "skin_c002_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Batman 85th Shaggy"
              },
              "skin_c002_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Shaggy"
              },
              "skin_c002_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Crossover",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Steven Universe Shaggy"
              },
              "skin_c002_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mystery Incorporated Shaggy"
              },
              "skin_c020_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Rick Prime"
              },
              "skin_c009_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th Reindog"
              },
              "skin_c009_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Halloween",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Cachorreno "
              },
              "skin_c009_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Reindog"
              },
              "skin_c019_s08": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Spacesuit Morty"
              },
              "skin_c018_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Fixed:Marvin"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Marvin"
              },
              "skin_c016_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:LeBron"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th LeBron"
              },
              "skin_c028_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Día de Muertos The Joker"
              },
              "skin_c035_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Día de Muertos Jason Voorhees"
              },
              "skin_c035_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Jason Voorhees"
              },
              "skin_c035_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Crossover",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Finn Jason Voorhees"
              },
              "skin_c005_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Jake"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th Jake"
              },
              "skin_c017_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th Iron Giant"
              },
              "skin_c017_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Tech",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Iron Giant"
              },
              "skin_c017_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Heavy Metal Giant"
              },
              "skin_c008_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Día de Muertos Harley Quinn"
              },
              "skin_c008_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Harley Quinn"
              },
              "skin_c023a_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Gizmo"
              },
              "skin_c023A_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Gizmo"
              },
              "skin_c012_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Garnet"
              },
              "skin_c012_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Training Garnet"
              },
              "skin_c013_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th Finn"
              },
              "skin_c013_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:TShirt",
                    "TS:Fixed:Finn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Finn"
              },
              "skin_c036_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Batman 85th Agent Smith"
              },
              "c030_s32": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "S3 Masters The Powerpuff Girls"
              },
              "c030_s31": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "S3 Diamond The Powerpuff Girls"
              },
              "c030_s30": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "S3 Platinum The Powerpuff Girls"
              },
              "c030_s29": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "S3 Gold The Powerpuff Girls"
              },
              "skin_c030_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th The Powerpuff Girls"
              },
              "skin_c030_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos The Powerpuff Girls"
              },
              "skin_c030_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Rowdyruff Boys"
              },
              "skin_c030_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Dynamo Suits The Powerpuff Girls"
              },
              "skin_c027_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Nubia"
              },
              "skin_C027_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Future State Nubia"
              },
              "skin_c026_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Samurai Jack"
              },
              "skin_c026_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Yoroi Jack"
              },
              "skin_c024_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Batman 85th Betelgeuse"
              },
              "skin_c024_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Día de Muertos Betelgeuse"
              },
              "skin_c007_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Día de Muertos Bugs Bunny"
              },
              "skin_c007_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Crossover",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Superman Bugs"
              },
              "skin_c021_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Justice Lord Black Adam"
              },
              "skin_c021_s27": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:DiaDeMuertos",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Día de Muertos Black Adam"
              },
              "skin_c004_s25": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Hypergalactic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Hypergalactic Puppet Batman"
              },
              "skin_c004_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Dark Nights: Death Metal Batman"
              },
              "skin_c004_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman (1989)"
              },
              "skin_c004_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Bruce Wayne"
              },
              "skin_c034_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Batman 85th Banana Guard"
              },
              "skin_c034_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Crossover",
                    "TS:Dynamic:Halloween",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Marvin the Martian Banana Guard"
              },
              "skin_c006_s28": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Batman 85th Arya"
              },
              "skin_c006_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:GameOfThrones",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Fixed:Arya"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Arry Arya"
              },
              "b002_skin_data": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_data_buttercup_portrait": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_data_bubbles_portrait": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_data_blossom_portrait": {
                "TagSystemTags": {
                  "GameplayTags": [],
                  "ParentTags": []
                },
                "DisplayName": ""
              },
              "skin_C025_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Raven",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Raven"
              },
              "skin_c031_s00": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Dynamic:Animated",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Marceline"
                  ],
                  "ParentTags": [
                    "TS:Dynamic",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Marceline the Vampire Queen"
              },
              "skin_c028_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Transformed",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "The Laughing Death"
              },
              "skin_c028_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Professor J"
              },
              "skin_c015_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Transformed",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mythic Vista Taz"
              },
              "skin_c015_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "MVS Troublemaker Taz"
              },
              "skin_c014_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Transformed",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mythic Vista Velma"
              },
              "skin_c014_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "MVS Valedictorian Velma"
              },
              "skin_c014_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Winter Velma"
              },
              "skin_c009_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PlayerFirstGames",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Reindog"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Unicorndog"
              },
              "skin_c004_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Transformed",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mythic Vista Batman"
              },
              "skin_c004_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Headmaster Wayne"
              },
              "skin_c002_s13": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Winter Shaggy"
              },
              "skin_c001_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Transformed",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mythic Vista Wonder Woman"
              },
              "skin_c001_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Coach Diana"
              },
              "skin_c025_s24": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Transformed",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mythic Vista Raven"
              },
              "skin_c025_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:MythicVista",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Rule Breaker Raven"
              },
              "c031_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Marceline"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Sun Hat Marceline"
              },
              "c031_s00": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Marceline"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Distant Lands Marceline"
              },
              "skin_c030_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Bedtime Powerpuff Girls"
              },
              "skin_c017_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Polar Vortex The Iron Giant"
              },
              "skin_c008_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Polar Vortex Harley Quinn"
              },
              "skin_c004_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Polar Vortex Batman"
              },
              "skin_c025_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "White Raven"
              },
              "skin_c036_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Trigon Possessed Agent Smith"
              },
              "skin_c028_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Trigon Possessed The Joker"
              },
              "skin_c027_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Trigon Possessed Nubia"
              },
              "skin_c021_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:BlackAdam"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Trigon Possessed Black Adam"
              },
              "skin_c003_s23": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Trigon Possessed Superman"
              },
              "c023b_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Polar Vortex Stripe"
              },
              "c023a_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Polar Vortex Gizmo"
              },
              "c014_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Polar Vortex Velma"
              },
              "c002_s34": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Polar Vortex Shaggy"
              },
              "skin_c025_s32": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Raven",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S4 Masters Raven"
              },
              "skin_c025_s31": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Raven",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S4 Diamond Raven"
              },
              "skin_c025_s30": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Raven",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S4 Platinum Raven"
              },
              "skin_c025_s29": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Raven",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "S4 Gold Raven"
              },
              "c002_s14": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Batman85",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Batman 85th Shaggy (Black)"
              },
              "skin_c012_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Universe:StevenUniverse",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:PinkClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Garnet"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Platfight Championship Garnet"
              },
              "skin_c008_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Platfight Championship Harley"
              },
              "skin_c028_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:GraphicT",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Platfight Championship The Joker"
              },
              "skin_c014_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:OrangeClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:GraphicT",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Velma"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Platfight Championship Velma"
              },
              "skin_c007_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:GraphicT",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Platfight Championship Bugs Bunny"
              },
              "skin_c004_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Rich",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Detective",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Batman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Platfight Championship Batman"
              },
              "skin_c003_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Platfight Championship Superman"
              },
              "skin_c001_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:GraphicT",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Platfight Championship Wonder Woman"
              },
              "skin_c008_s11": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Naughty List Harley Quinn"
              },
              "skin_c017_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:IronGiant",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Metallic",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:IronGiant"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Frosty Iron Giant"
              },
              "skin_c027_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Arctic Armor Nubia"
              },
              "skin_c024_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Beetlejuice",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Betelgeuse"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ugly Sweater Betelgeuse"
              },
              "skin_c035_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Abominable Mountaineer Jason"
              },
              "skin_c028_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:Joker"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Christmas with The Joker"
              },
              "c036_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "System Freeze Agent Smith"
              },
              "skin_c007_s12": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:PFGOriginal",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:BugsBunny"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ugly Sweater Bugs Bunny"
              },
              "c031_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Dynamic:Festiversus",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Marceline"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Cat Sweater Marceline"
              },
              "c035_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Jason Goes to Hell"
              },
              "skin_c035_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Freddy vs Jason"
              },
              "skin_c023b_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Permafrost Stripe"
              },
              "skin_c002_s11": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Fancy Shaggy"
              },
              "skin_c034_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:BananaGuard"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Banana Guard in Pajamas"
              },
              "skin_c002_s12": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:ComfyCozy",
                    "TS:Dynamic:TShirt",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Sleepless Shaggy"
              },
              "skin_c019_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:YellowClothing",
                    "TS:Dynamic:BlueClothing",
                    "TS:Fixed:Morty"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Western Morty"
              },
              "skin_c030_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:PowerpuffGirls",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "Pretty in Pink Powerpuff Girls"
              },
              "skin_c025_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Romantic Raven"
              },
              "skin_c036_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:Matrix",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:SemiFormal",
                    "TS:Fixed:AgentSmith"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "Valentine Virus Agent Smith"
              },
              "skin_c035_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:Fridaythe13th",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Eyewear",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Undead",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Jason"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "The Ugliest Cupid Jason"
              },
              "skin_c026_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:PremieredinThe2020s",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:Universe:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Dynamic",
                    "TS:Fixed:Universe"
                  ]
                },
                "DisplayName": "Smitten Samurai Jack"
              },
              "c029_default": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Aquaman"
              },
              "skin_c026_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ultra-Robotkiller Samurai Jack"
              },
              "C038": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Lola Bunny"
              },
              "c015_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Golfer Taz"
              },
              "skin_c025_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Mage",
                    "TS:Dynamic:Azarath",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PurpleClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Comics Raven"
              },
              "skin_c025_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Ame-Comi Raven"
              },
              "skin_c025_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Caped",
                    "TS:Dynamic:FourEyes",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Raven"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "New 52 Raven"
              },
              "skin_c031_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:AdventureTime",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Spooky",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Undead",
                    "TS:Fixed:Marceline",
                    "TS:Fixed:Class:Bruiser"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "PB's Choice Marceline"
              },
              "skin_c030_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:PowerPuffGirls",
                    "TS:Dynamic:BeachReady",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredinThe90s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:GreenClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:SportsAttire",
                    "TS:Dynamic:RedWhiteandBlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:PowerpuffGirls"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Sunshine Squad Powerpuff Girls"
              },
              "c027_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:Nubia"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Love Warrior Nubia"
              },
              "skin_c023A_s33": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Gizmo"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Giz-Snow"
              },
              "skin_c038_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty"
                  ]
                },
                "DisplayName": "Cat Burglar Lola Bunny"
              },
              "skin_c038_s05": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Lights Out Lola Bunny"
              },
              "skin_c038_s02": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Queen of the Court Lola Bunny"
              },
              "skin_c038_s03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tune Squad '96 Lola Bunny"
              },
              "skin_c029_s32": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Dynamic",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class"
                  ]
                },
                "DisplayName": "S5 Masters Aquaman"
              },
              "skin_c029_s31": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "S5 Diamond Aquaman"
              },
              "skin_c029_s30": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "S5 Platinum Aquaman"
              },
              "skin_c029_s29": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "S5 Gold Aquaman"
              },
              "c015_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Class:Assassin",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:Fuzzy",
                    "TS:Fixed:Taz"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Date Night Taz"
              },
              "skin_c038_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:LooneyTunes",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:Universe:SpaceJam",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:SportsAttire",
                    "TS:Fixed:Lola"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tune Squad Lola Bunny"
              },
              "skin_c002_s09": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:ScoobyDoo",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Dynamic:WinterWonderland",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:WhiteClothing",
                    "TS:Dynamic:Detective",
                    "TS:Fixed:Shaggy"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Tundra Tussle Shaggy"
              },
              "skin_c026_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:SamuraiJack",
                    "TS:Fixed:Class:Bruiser",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Sandals",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:PremieredinThe00s",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:CombatWear",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:SamuraiJack"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Mad Jack"
              },
              "skin_c023b_s06": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Universe:Gremlins",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:MovieInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:PremieredinThe80s",
                    "TS:Fixed:Stripe"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Universe",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic:Season",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Brain Gremlin"
              },
              "skin_c020_s07": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:high",
                    "TS:Fixed:Class:Mage",
                    "TS:Fixed:Universe:RickandMorty",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Animated",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:TvInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlackClothing",
                    "TS:Dynamic:Tech",
                    "TS:Fixed:Rick"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Rick & Two Crows"
              },
              "skin_c008_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Assassin",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:PremieredInThe10s",
                    "TS:Dynamic:Season:Villainous",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:BlackClothing",
                    "TS:Fixed:HarleyQuinn"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic",
                    "TS:Dynamic:Season"
                  ]
                },
                "DisplayName": "DC Bombshells Harley Quinn"
              },
              "skin_c003_s10": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:ExtraTerrestrial",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:BlueClothing",
                    "TS:Dynamic:RedClothing",
                    "TS:Dynamic:YellowClothing",
                    "TS:Fixed:Superman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Class",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "DC Bombshells Superman"
              },
              "skin_c001_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:FighterDifficulty:Low",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:Class:Tank",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:SwordWielder",
                    "TS:Dynamic:Headwear",
                    "TS:Dynamic:PremieredBeforeThe80s",
                    "TS:Dynamic:ComicInspired",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Adult",
                    "TS:Dynamic:CombatWear",
                    "TS:Fixed:WonderWoman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:Class",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "DC Bombshells Wonder Woman"
              },
              "C029_S03": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Old Arthur Water Bearer"
              },
              "skin_c029_s01": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Fixed:Universe:DC",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Human",
                    "TS:Dynamic:Non-Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Fixed:Universe",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "New 52 Aquaman"
              },
              "c029_s04": {
                "TagSystemTags": {
                  "GameplayTags": [
                    "TS:Fixed:Class:Tank",
                    "TS:Fixed:Universe:DC",
                    "TS:Fixed:FighterDifficulty:Medium",
                    "TS:Dynamic:ValentiNeon",
                    "TS:Dynamic:Heroic",
                    "TS:Dynamic:Non-Human",
                    "TS:Dynamic:Human",
                    "TS:Fixed:Aquaman"
                  ],
                  "ParentTags": [
                    "TS:Fixed:Class",
                    "TS:Fixed",
                    "TS",
                    "TS:Fixed:Universe",
                    "TS:Fixed:FighterDifficulty",
                    "TS:Dynamic"
                  ]
                },
                "DisplayName": "Heart of the Ocean Aquaman"
              }
            },
            "GemMetaData": {
              "gem_horror_circle_chance_on_hit_ice": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 2
              },
              "gem_digital_circle_on_dodge_lightning_strike": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 1
              },
              "gem_digital_circle_on_dodge_electric_zone": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 1
              },
              "gem_digital_circle_on_dodge_seismic_reactor": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 1
              },
              "gem_digital_circle_on_respawn_armature": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 3
              },
              "gem_digital_circle_walk_to_charge_electric_gauntlets": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 2
              },
              "gem_digital_circle_chance_on_hit_shock": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 2
              },
              "gem_digitalcircle_firstblood": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 2
              },
              "gem_digitalcircle_tauntafterko": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 2
              },
              "gem_circle_digital_additionaljump": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 3
              },
              "gem_horror_square_on_opponent_fatigued_enrage": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 3
              },
              "gem_horror_circle_bandage": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 3
              },
              "gem_horror_circle_chance_on_hit_burnout": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 2
              },
              "gem_horror_circle_evade_boost": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 1
              },
              "gem_horror_circle_share_elemental_debuffs": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 3
              },
              "gem_horror_circle_chance_on_hit_deplete_cooldown": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 2
              },
              "gem_horror_circle_on_dodge_smoke_bomb": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 1
              },
              "gem_horror_circle_damage_aerial": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 2
              },
              "Gem_chaos_circle_two_faces_coin": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 3
              },
              "gem_horror_circle_chance_on_injury_disable_bounce": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Horror"
                  ]
                },
                "SlotType": 1
              },
              "Gem_chance_on_hit_random_status_effect_per_match": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 2
              },
              "Gem_chaos_circle_on_dodge_reverse_all_projectiles": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 1
              },
              "Gem_chaos_circle_chance_auto_dodge": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 1
              },
              "Gem_chaos_circle_chance_on_hit_critical_hit": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 2
              },
              "Gem_chance_on_spawn_giant_projectiles": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 2
              },
              "Gem_chance_on_spawn_tiny_enemy_projectiles": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 1
              },
              "Gem_on_dodge_black_adam_bubble_shield": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 1
              },
              "gem_digital_square_weaken_bubble_prison": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Digital"
                  ]
                },
                "SlotType": 3
              },
              "gem_chaos_deal_damage_to_charge_auto_reflect": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 3
              },
              "gem_chaos_out_of_aerial_specials_joker_balloon": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonOne:Chaos"
                  ]
                },
                "SlotType": 3
              },
              "gem_discipline_on_dodge_cleanse_fire_ice": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 3
              },
              "gem_discipline_fast_charge_attacks": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 2
              },
              "gem_discipline_armored_charge_attacks": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 1
              },
              "gem_discipline_reflecting_with_charge_attacks": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 3
              },
              "gem_discipline_companion_toasty": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 3
              },
              "gem_discipline_stand_still_rage": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 2
              },
              "gem_discipline_additional_air_evade": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 3
              },
              "gem_discipline_sweet_spot_stun": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 1
              },
              "gem_discipline_intangible_while_invisible": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 1
              },
              "gem_discipline_charge_fire_aura": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 2
              },
              "gem_discipline_charge_attack_tornado": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonTwo:Discipline"
                  ]
                },
                "SlotType": 2
              },
              "gem_season3_tethercrystal": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 1
              },
              "gem_season3_shieldplacement": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 1
              },
              "gem_season3_fullcharge": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 2
              },
              "gem_season3_firefists": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 2
              },
              "gem_season3_explodingarmor": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 2
              },
              "gem_season3_companion_2": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 3
              },
              "gem_season3_companion_1": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 3
              },
              "gem_season3_bubblearmor": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 1
              },
              "gem_season3_companion_3": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 3
              },
              "gem_season3_anubiscompanion": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:Season3:Heroic"
                  ]
                },
                "SlotType": 3
              },
              "Gem_season4_educatedondamage": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 3
              },
              "Gem_season4_stancespeedandsize": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 2
              },
              "Gem_season4_stancegravityandsize": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 2
              },
              "Gem_season4_jumpsfromgroundmelee": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 3
              },
              "Gem_season4_megalodogrevenge": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 2
              },
              "Gem_season4_armoredscars": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 1
              },
              "Gem_season4_stancefireandice": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 2
              },
              "Gem_season4_exhaustarmor": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 1
              },
              "Gem_season4_growthspurt": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 3
              },
              "Gem_arena_regen": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_defensepower": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_attackpower": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_vampire": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_dodger": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_airspecialist": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_verticalattackpower": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_wallthemout": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_empatheticresponse": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_cementshoes": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_devilishcontract": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_whatachicken": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_reactiveplating": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_punchyobuns": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_brainandbrawn": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_bladeandshield": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_triggerhappy": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_iwantyoutohitme": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_andanotherone": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_thorns": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_ringoutheal": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_passinggas": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_homingrockets": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_finishthem": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_doubletake": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_bulletproofjuggernaut": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_rerollshop": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_investor": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_projectiledamageincrease": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_hotandcold": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_enragedresponse": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_goldsuit": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_emptypockets": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_season4_thickskin": {
                "Attunements": {
                  "GameplayTags": [
                    "Attunements:SeasonFour:PowerWithin"
                  ]
                },
                "SlotType": 1
              },
              "Gem_arena_embracetheelements": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_explosivepanic": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_emergencygadget": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_hotfoot": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_thebiggertheyare": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_coldbreeze": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_notoutyet": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_heroiclanding": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_dashingconfidence": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              },
              "Gem_arena_armorcrush": {
                "Attunements": {
                  "GameplayTags": []
                },
                "SlotType": 0
              }
            }
          }
        }
      },
      "float-settings": {
        "_hydra_compressed": {
          "ArenaMatchmakingBotTimeout": 500,
          "MissionBulkClaimTimeout": 0.5,
          "MultiplayMaxPing": 0.25
        }
      }
    }
  },
  "metadata": null,
  "return_code": 200
}