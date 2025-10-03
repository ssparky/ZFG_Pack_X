// priority: 900
/*
The itemNukeList is used to list all IDs and regexes matching IDs of items that should be removed from the game, or "nuked".
While this makes it far more difficult to access the items and effectively obliterates them in most cases,
it doesn't remove them entirely and does not guarantee that they are unobtainable, unusable, or hidden in EMI/JEI.

Examples of such cases are:
- Items that may drop from a loot table (not unobtainable)
- Items that provide right-click functionality (not unusable)
- ExtendedCrafting Singularities, which have a special recipe page which cannot be hidden by normal means (not hidden in EMI/JEI)

If you seek to hide an item but not remove it, use KubeJS/client_scripts/JEI.js.
If you seek to remove a recipe but not hide any items, use the relevant file in KubeJS/server_scripts.
*/
global.itemNukeList = [
    // Ad Astra
    "ad_astra:cable_duct",
    "ad_astra:coal_generator",
    "ad_astra:compressor",
    "ad_astra:cryo_freezer",
    "ad_astra:desh_cable",
    "ad_astra:desh_fluid_pipe",
    "ad_astra:energizer",
    "ad_astra:energizer",
    "ad_astra:engine_frame",
    "ad_astra:etrionic_blast_furnace",
    "ad_astra:etrionic_capacitor",
    "ad_astra:etrionic_core",
    "ad_astra:fan",
    "ad_astra:fluid_pipe_duct",
    "ad_astra:fuel_refinery",
    "ad_astra:ostrum_fluid_pipe",
    "ad_astra:photovoltaic_etrium_cell",
    "ad_astra:photovoltaic_vesnium_cell",
    "ad_astra:solar_panel",
    "ad_astra:steel_cable",
    "ad_astra:water_pump",
    /^ad_astra:.*_bucket$/,
    "ad_astra:steel_nugget",
    "ad_astra:steel_ingot",
    "ad_astra:steel_plate",
    "ad_astra:steel_rod",

    // Applied Energistics 2
    "ae2:vibration_chamber",
    "ae2:charger",
    "ae2:inscriber",

    // Better Angel Ring
    "better_angel_ring:ring",

    // Chisels & Bits
    "chiselsandbits:block_bit",

    // Create
    "create:raw_zinc",
    "create:crushed_raw_zinc",
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
    "create:raw_zinc_block",
    "createdeco:zinc_sheet",
    "createdeco:zinc_coin",
    "createdeco:zinc_coinstack",
    /^create:crushed_raw_.*/,

    // ExtendedAE
    "expatternprovider:silicon_block",
    "expatternprovider:circuit_cutter",
    /expatternprovider.*cutter/,
    "expatternprovider:ex_inscriber",
    "expatternprovider:ex_charger",

    // Extended Crafting
    "extendedcrafting:auto_ender_crafter",
    "extendedcrafting:auto_flux_crafter",
    "extendedcrafting:black_iron_slate",
    "extendedcrafting:compressor",
    "extendedcrafting:ender_alternator",
    "extendedcrafting:ender_catalyst",
    "extendedcrafting:ender_component",
    "extendedcrafting:ender_crafter",
    "extendedcrafting:ender_star",
    "extendedcrafting:enhanced_ender_catalyst",
    "extendedcrafting:enhanced_ender_component",
    "extendedcrafting:enhanced_redstone_catalyst",
    "extendedcrafting:enhanced_redstone_component",
    "extendedcrafting:flux_alternator",
    "extendedcrafting:flux_crafter",
    "extendedcrafting:flux_star",
    "extendedcrafting:frame",
    "extendedcrafting:recipe_maker",
    "extendedcrafting:singularity",

    // GTCEu: Modern
    "gtceu:hot_kanthal_ingot",
    "gtceu:hot_silicon_ingot",
    "gtceu:milk",
    "gtceu:steel_machine_casing",
    "gtceu:uv_world_accelerator",

    // Hammerlib
    /^hammerlib:/,

    // HNN
    "hostilenetworks:deep_learner",
    "hostilenetworks:twilight_prediction",

    // Iron Furnaces
    "ironfurnaces:augment_blasting",
    "ironfurnaces:augment_generator",
    "ironfurnaces:augment_smoking",
    "ironfurnaces:heater",
    "ironfurnaces:item_heater",
    "ironfurnaces:item_spooky",
    "ironfurnaces:item_xmas",
    "ironfurnaces:rainbow_coal",
    "ironfurnaces:rainbow_core",
    "ironfurnaces:rainbow_plating",
    "ironfurnaces:allthemodium_furnace",
    "ironfurnaces:vibranium_furnace",
    "ironfurnaces:unobtainium_furnace",
    "ironfurnaces:million_furnace",
    "ironfurnaces:upgrade_allthemodium",
    "ironfurnaces:upgrade_vibranium",
    "ironfurnaces:upgrade_unobtainium",
    "ironfurnaces:upgrade_iron",
    "ironfurnaces:upgrade_gold",
    "ironfurnaces:upgrade_diamond",
    "ironfurnaces:upgrade_emerald",
    "ironfurnaces:upgrade_obsidian",
    "ironfurnaces:upgrade_crystal",
    "ironfurnaces:upgrade_netherite",
    "ironfurnaces:upgrade_copper",
    "ironfurnaces:upgrade_obsidian2",
    "ironfurnaces:upgrade_silver",
    "ironfurnaces:upgrade_obsidian2",
    "ironfurnaces:upgrade_iron2",
    "ironfurnaces:upgrade_gold2",
    "ironfurnaces:upgrade_silver2",
    "ironfurnaces:crystal_furnace",
    "ironfurnaces:emerald_furnace",
    "ironfurnaces:item_linker",

    // KubeJS
    "kubejs:debug_ctm_block",
    "kubejs:corrupted_universe_data",
    "kubejs:shattered_universe_data",

    // Megacells
    "megacells:mega_crafting_accelerator",
    /^megacells:.*mega_interface$/,
    /^megacells:.*mega_pattern_provider$/,
    /^megacells:sky_steel/,

    // Solar Flux
    /^solarflux:.*_upgrade$/,
    /^solarflux:.*_glass$/,
    "solarflux:blazing_coating",

    // TaCZ
    "tacz:gun_smith_table",
    "tacz:workbench_c",
    "tacz:workbench_a",
    "tacz:workbench_b",

    // Spartan Weapony/Shields
    /^spartanweaponry:constantan.*/,
    /^spartanshields:constantan.*/,

    // Curvy Pipes
    /^curvy_pipes:.*_fluid.*/,
    /^curvy_pipes:.*_item.*/,

    // Artifacts we dont want
    "moreartifacts:melody_plushie",
    "moreartifacts:obsidian_skull",
    "artifacts:everlasting_beef",
    "artifacts:eternal_steak",
    "relics:infinity_ham",
    "moreartifacts:artifact_upgrade_smithing_template",
    "moreartifacts:shadow_dust",
    "moreartifacts:vanir_mask",
    "moreartifacts:wooden_headgear",
    "moreartifacts:golden_headgear",
    "moreartifacts:netherite_headgear",

    // Display delight having lazy programming
    /^displaydelight:cd_.*/,
    /^displaydelight:df_.*/,
    /^displaydelight:pd_.*/,
    /^displaydelight:od_.*/,
    /^displaydelight:ad_.*/,
    /^displaydelight:ctd_.*/,
    /^displaydelight:lm_.*/,
    /^displaydelight:fd_.*/,

    // Unnecessary items from food mods
    "farm_and_charm:supply_cart",
    "farm_and_charm:plow",
    "farmersdelight:apple_cider",
    "displaydelight:apple_cider",

    // Baubly heart canisters
    /^bhc:.*wither.*/,

    // Spartan Shields
    /^spartanshields:manasteel_.*/,
    /^spartanshields:terrasteel_.*/,
    /^spartanshields:elementium_.*/,
    /^spartanshields:osmium_.*/,
    /^spartanshields:lapis_.*/,
    /^spartanshields:refined_.*/,
    /^spartanshields:.*_mekanists_.*/,
    /^spartanshields:dark_steel_.*/,
];

// Create Compat
// Removes machines related to processing
if (Platform.isLoaded("create")) {
    global.itemNukeList.push(
        "create:millstone",
        "create:crushing_wheel",
        "create:mechanical_plough",
        "create:mechanical_crafter",
        "create:mechanical_mixer",
        "create:mechanical_saw",
        "create:mechanical_drill",
        "create:mechanical_harvester",
        "create:mechanical_press",
        "create:mechanical_roller",
        "create:encased_fan"
    );
}
