/**
 * Fluid Registry - defines ID, name,
 * color, and temperature of custom fluids.
 */
StartupEvents.registry("fluid", event => {

    // Thermal Expansion Fluids
    event.create("molten_pyrotheum")
        .bucketColor(Color.rgba(247, 219, 58, 255))
        .displayName("§6Blazing Pyrotheum") // orange
        .temperature(8190)
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/pyrotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/pyrotheum_flow");
    event.create("molten_cryotheum")
        .bucketColor(Color.rgba(67, 244, 247, 255))
        .displayName("§bGelid Cryotheum") // aqua
        .temperature(5)
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/cryotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/cryotheum_flow");
    event.create("molten_petrotheum")
        .bucketColor(Color.rgba(26, 19, 16, 255))
        .displayName("§8Tectonic Petrotheum") // darkGray
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/petrotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/petrotheum_flow");
    event.create("molten_aerotheum")
        .bucketColor(Color.rgba(200, 218, 148, 255))
        .displayName("§7Zephyrean Aerotheum") // gray
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/aerotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/aerotheum_flow");

    event.create("liquid_ender")
        .bucketColor(Color.rgba(0, 43, 63, 255))
        .displayName("§dResonant Ender")
        .stillTexture("kubejs:block/mod/thermal/liquid_ender_still")
        .flowingTexture("kubejs:block/mod/thermal/liquid_ender_flow");


    // Antimatter
    const antimatter_types = ["bosonic", "hadronic", "fermionic"]
    antimatter_types.forEach(type => {
        event.create(`${type}_antimatter`)
            .bucketColor(Color.rgba(27, 12, 39, 255))
            .stillTexture(`kubejs:block/antimatter/${type}`)
        event.create(`refined_${type}_antimatter`)
            .stillTexture(`kubejs:block/antimatter/refined_${type}`)
            .bucketColor(Color.rgba(41, 19, 59, 255))
    })
    event.create("antimatter_fuel")
        .bucketColor(Color.rgba(99, 18, 110, 255))
        .stillTexture("kubejs:block/antimatter/fuel")

    // Wines & Beers & Whatnot
    // TODO:
    // (unrelated) wine bottle / beer mug recipes
    const juices = [
        // Extractor juices
        ["red_grapejuice", Color.rgba(50, 17, 37, 255), "Red Grape Juice"], //rgb(50 17 37)
        ["white_grapejuice", Color.rgba(85, 105, 82, 255), "White Grape Juice"], //rgb(85 105 82)
        ["red_taiga_grapejuice", Color.rgba(40, 12, 29, 255), "Red Taiga Grape Juice"], //rgb(40 12 29)
        ["white_taiga_grapejuice", Color.rgba(69, 86, 66, 255), "White Taiga Grape Juice"], //rgb(69 86 66)
        ["red_jungle_grapejuice", Color.rgba(73, 26, 54, 255), "Red Jungle Grape Juice"], //rgb(73 26 54)
        ["white_jungle_grapejuice", Color.rgba(53, 80, 49, 255), "White Jungle Grape Juice"], //rgb(53 80 49)
        ["red_savanna_grapejuice", Color.rgba(67, 20, 49, 255), "Red Savanna Grape Juice"], //rgb(67 20 49)
        ["white_savanna_grapejuice", Color.rgba(55, 72, 52, 255), "White Savanna Grape Juice"], //rgb(55 72 52)
        ["apple_juice", Color.rgba(144, 135, 78, 255), "Apple Juice"], //rgb(144 135 78)
        ["cherry_juice", 0xB7294C, "Cherry Juice"],
        ["hops_extract", 0x73944A, "Hops Extract"],
        // Bases (brewery)
        ["mead_base", 0xCC9D3E, "Mead Base"],
        ["apple_cider_base", 0xD8C081, "Cider Base"],
        ["apple_wine_base", 0x817043, "Apple Wine Base"],
        ["white_wine_base", 0xB4C375, "White Wine Base"],
        ["mellohi_wine_base", 0xC7EC8F, "Mellohi Wine Base"],
        ["glowing_wine_base", 0xFCF3AE, "Sun-Kissed Wine Base"],
        ["solaris_wine_base", 0xF2E06B, "Solaris Wine Base"],
        ["red_wine_base", 0x952C33, "Red Wine Base"],
        ["noir_wine_base", 0x3F102C, "Noir Wine Base"],
        ["strad_wine_base", 0x512915, "Strad Wine Base"],
        ["cherry_wine_base", 0xA71F53, "Cherry Wine Base"],
        ["cristel_wine_sub_base", 0xE49041, "Blazing Wine Base"],
        ["cristel_wine_base", 0xA83C49, "Cristel Wine Base"],
        ["creepers_crush_base", 0x48924B, "Creeper's Crush Base"],
        ["kelp_cider_base", 0x86B657, "Kelp Cider Base"],
        ["lilitu_wine_base", 0xAA2037, "Miss Lilitus Wine Base"],
        ["jo_special_mixture_base", 0xC51F49, "Jo's Special Mixture Base"],
        ["eiswein_base", 0x85C3BE, "Eiswein Base"],
        ["aegis_wine_base", 0xC79E68, "Aegis Wine Base"],
        ["bolvar_wine_base", 0xCC5D3E, "Bolvar Wine Base"],
        ["chorus_wine_base", 0xC928C1, "Chorus Wine Base"],
        ["villagers_fright_base", 0x37222D, "Villager's Fright Base"],
        ["clark_wine_base", 0xA7AB80, "Clark Wine Base"],
        ["magnetic_wine_base", 0xD9B3B3, "Magnetic Wine Base"],
        ["stal_wine_base", 0xF73939, "Stal Wine Base"],
        ["chenet_wine_base", 0x722525, "Chenet Wine Base"],
        ["bottle_mojang_noir_sub_base", 0x6C1636, "Fruity Red Wine Base"],
        ["bottle_mojang_noir_base", 0x2E0D27, "Mojang Noir Base"],
        ["beer_wheat_base", 0xE5C38D, "Wheat Beer Base"],
        ["beer_barley_base", 0xDBE58D, "Barley Beer Base"],
        ["beer_hops_base", 0xA1CF8F, "Hops Beer Base"],
        ["beer_nettle_base", 0xE2F2B7, "Nettle Beer Base"],
        ["beer_oat_base", 0xE9B55B, "Oat Beer Base"],
        ["beer_haley_base", 0x9F1752, "Haley Beer Base"],
        ["whiskey_jojannik_base", 0x95540E, "JoJannik Select Base"],
        ["whiskey_lilitusinglemalt_base", 0x950E34, "Lilitu Single Malt Base"],
        ["whiskey_cristelwalker_base", 0xBE9627, "CristelWalker Original Base"],
        ["whiskey_maggoallan_base", 0xB76C1B, "MaggoAllan, Aged Base"],
        ["whiskey_carrasconlabel_base", 0x8D4604, "Carrasconlabel Heritage Base"],
        ["whiskey_ak_base", 0xC07F3A, "Ak Reserve Base"],
        ["whiskey_highland_hearth_base", 0x8E4B02, "Highland Hearth Signature Base"],
        ["whiskey_smokey_reverie_base", 0x682811, "Smokey Reverie, Barrel-Aged Base"],
        ["whiskey_jamesons_malt_base", 0x723613, "Jameson Malt Base"],
        // Special (mixer)
        ["jellie_wine_sub_base", 0xE5A03F, "Mixed Wine Base"],
        ["jellie_wine_base", 0xEA702A, "Jellie Wine Base"],
        // Final (fermenter)
        ["mead", 0xBD8F32, "Mead"],
        ["apple_cider", 0xC5AD70, "Cider"],
        ["apple_wine", 0x7A6326, "Apple Wine"],
        ["white_wine", 0x9CAA60, "White Wine"],
        ["mellohi_wine", 0xACCF78, "Mellohi Wine"],
        ["glowing_wine", 0xEEE396, "Sun-Kissed Wine"],
        ["solaris_wine", 0xE7D354, "Solaris Wine"],
        ["red_wine", 0x8E242B, "Red Wine"],
        ["noir_wine", 0x300B21, "Noir Wine"],
        ["strad_wine", 0x41200F, "Strad Wine"],
        ["cherry_wine", 0x911444, "Cherry Wine"],
        ["cristel_wine", 0x9E3441, "Cristel Wine"],
        ["creepers_crush", 0x37963A, "Creeper's Crush"],
        ["kelp_cider", 0x759D4C, "Kelp Cider"],
        ["lilitu_wine", 0x9E192F, "Miss Lilitus Wine"],
        ["jo_special_mixture", 0xC30F3C, "Jo's Special Mixture"],
        ["eiswein", 0x9BC3C0, "Eiswein"],
        ["aegis_wine", 0xB08955, "Aegis Wine"],
        ["bolvar_wine", 0xBA5033, "Bolvar Wine"],
        ["chorus_wine", 0xB01BA8, "Chorus Wine"],
        ["villagers_fright", 0x3A1F2E, "Villager's Fright"],
        ["clark_wine", 0xA7AC76, "Clark Wine"],
        ["magnetic_wine", 0xC9BCBC, "Magnetic Wine"],
        ["stal_wine", 0xDD2727, "Stal Wine"],
        ["chenet_wine", 0x5E1B1B, "Chenet Wine"],
        ["bottle_mojang_noir", 0x370A2D, "Mojang Noir"],
        ["jellie_wine", 0xD4560D, "Jellie Wine"],
        ["beer_wheat", 0xE6BF80, "Wheat Beer"],
        ["beer_barley", 0xDEE4AF, "Barley Beer"],
        ["beer_hops", 0xB6DAA7, "Hops Beer"],
        ["beer_nettle", 0xD6E7A7, "Nettle Beer"],
        ["beer_oat", 0xDFA94A, "Oat Beer"],
        ["beer_haley", 0x920743, "Haley Beer"],
        ["whiskey_jojannik", 0x8A4B08, "JoJannik Select"],
        ["whisky_lilitusinglemalt", 0x86092C, "Lilitu Single Malt"],
        ["whiskey_cristelwalker", 0xAC8417, "CristelWalker Original"],
        ["whiskey_maggoallan", 0xAF620E, "MaggoAllan, Aged"],
        ["whiskey_carrasconlabel", 0x844001, "Carrasconlabel Heritage"],
        ["whiskey_ak", 0xAF6F2B, "Ak Reserve"],
        ["whiskey_highland_hearth", 0x7B3F00, "Highland Hearth Signature"],
        ["whiskey_smokey_reverie", 0x581F0A, "Smokey Reverie, Barrel-Aged"],
        ["whiskey_jamesons_malt", 0x622B0C, "Jameson Malt"],

    ]

    for (const [id, color, name] of juices) {
        event.create(`${id}_fluid`)
            .bucketColor(color)
            .thinTexture(color)
            .displayName(name)
    }
})
