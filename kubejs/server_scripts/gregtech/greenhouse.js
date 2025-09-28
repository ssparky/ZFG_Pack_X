/**
 * Greenhouse multiblock
 */

ServerEvents.recipes(event => {

    /*   Machine Recipe  */

    event.shaped("gtceu:greenhouse", [
        "LWL",
        "ASA",
        "WRW"
    ], {
        L: "minecraft:redstone_lamp",
        A: "#gtceu:circuits/mv",
        W: "gtceu:copper_single_cable",
        S: "gtceu:solid_machine_casing",
        R: "gtceu:lv_fluid_regulator"
    }).id("kubejs:shaped/greenhouse")


    /*  Greenhouse Recipes  */

    function boost(input, factor) {
        let boosted = [];
        input.forEach(element => {
            let item = Item.of(element);
            let curCount = item.getCount() * factor;
            let type = item.getId();
            while (curCount > item.maxStackSize) {
                boosted.push(Item.of(type, item.maxStackSize));
                curCount -= item.maxStackSize;
            }
            if (curCount > 0) boosted.push(Item.of(type, curCount));
        })
        return boosted;
    }

    /**
     * @param {string} mod Input item mod name
     * @param {string} input Input item identifier
     * @param {number} duration Recipe duration
     * @param {string[]} output Base recipe output
     * @param {number} inputFeedbackAmount How many input items to add to output
     */
    function Greenhouse(mod, input, duration, output, inputFeedbackAmount) {
        // Create new boosted output item array
        let boostedOutputs = boost(output, 2)

        // Push sapling/seed inputs (unboosted) onto output arrays
        if (inputFeedbackAmount > 0) {
            output.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
            boostedOutputs.push(Item.of(`${mod}:${input}`, inputFeedbackAmount));
        }

        event.recipes.gtceu.greenhouse(`kubejs:${input}`)
            .circuit(1)
            .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
            .inputFluids(Fluid.of("minecraft:water", 24000))
            .itemOutputs(output)
            .duration(duration)
            .EUt(80)
        event.recipes.gtceu.greenhouse(`kubejs:${input}_boosted`)
            .circuit(2)
            .notConsumable(InputItem.of(Item.of(`${mod}:${input}`)))
            .itemInputs("1x gtceu:fertilizer")
            .inputFluids(Fluid.of("minecraft:water", 16000))
            .itemOutputs(boostedOutputs)
            .duration(duration / 2)
            .EUt(80)
    }


    // //// Trees //////
    Greenhouse("gtceu", "rubber_sapling", 1280, ["32x gtceu:rubber_log", "8x gtceu:sticky_resin"], 4)
    Greenhouse("minecraft", "oak_sapling", 1280, ["64x minecraft:oak_log", "4x minecraft:apple"], 4)
    Greenhouse("minecraft", "dark_oak_sapling", 1280, ["64x minecraft:dark_oak_log", "4x minecraft:apple"], 4)
    Greenhouse("minecraft", "spruce_sapling", 1280, ["64x minecraft:spruce_log"], 4)
    Greenhouse("minecraft", "birch_sapling", 1280, ["64x minecraft:birch_log"], 4)
    Greenhouse("minecraft", "acacia_sapling", 1280, ["64x minecraft:acacia_log"], 4)
    Greenhouse("minecraft", "jungle_sapling", 1280, ["64x minecraft:jungle_log"], 4)
    Greenhouse("minecraft", "azalea", 1280, ["64x minecraft:oak_log"], 4)
    Greenhouse("minecraft", "flowering_azalea", 1280, ["64x minecraft:oak_log"], 4)
    Greenhouse("minecraft", "cherry_sapling", 1280, ["64x minecraft:cherry_log"], 4)
    Greenhouse("minecraft", "mangrove_propagule", 1280, ["64x minecraft:mangrove_log"], 4)
    Greenhouse("minecraft", "chorus_flower", 1280, ["32x minecraft:chorus_fruit"], 4)
    Greenhouse("minecraft", "warped_fungus", 1280, ["64x minecraft:warped_stem", "32x minecraft:warped_wart_block", "16x minecraft:shroomlight"], 4)
    Greenhouse("minecraft", "crimson_fungus", 1280, ["64x minecraft:crimson_stem", "32x minecraft:nether_wart_block", "16x minecraft:shroomlight"], 4)
    Greenhouse("natures_spirit", "redwood_sapling", 1280, ["64x natures_spirit:redwood_log"], 4)
    Greenhouse("natures_spirit", "sugi_sapling", 1280, ["64x natures_spirit:sugi_log"], 4)
    Greenhouse("natures_spirit", "purple_wisteria_sapling", 1280, ["64x natures_spirit:wisteria_log"], 4)
    Greenhouse("natures_spirit", "white_wisteria_sapling", 1280, ["64x natures_spirit:wisteria_log"], 4)
    Greenhouse("natures_spirit", "blue_wisteria_sapling", 1280, ["64x natures_spirit:wisteria_log"], 4)
    Greenhouse("natures_spirit", "pink_wisteria_sapling", 1280, ["64x natures_spirit:wisteria_log"], 4)
    Greenhouse("natures_spirit", "fir_sapling", 1280, ["64x natures_spirit:fir_log"], 4)
    Greenhouse("natures_spirit", "willow_sapling", 1280, ["64x natures_spirit:willow_log"], 4)
    Greenhouse("natures_spirit", "aspen_sapling", 1280, ["64x natures_spirit:aspen_log"], 4)
    Greenhouse("natures_spirit", "red_maple_sapling", 1280, ["64x natures_spirit:maple_log"], 4)
    Greenhouse("natures_spirit", "orange_maple_sapling", 1280, ["64x natures_spirit:maple_log"], 4)
    Greenhouse("natures_spirit", "yellow_maple_sapling", 1280, ["64x natures_spirit:maple_log"], 4)
    Greenhouse("natures_spirit", "cypress_sapling", 1280, ["64x natures_spirit:cypress_log"], 4)
    Greenhouse("natures_spirit", "olive_sapling", 1280, ["64x natures_spirit:olive_log", "8x natures_spirit:olives"], 4)
    Greenhouse("natures_spirit", "joshua_sapling", 1280, ["64x natures_spirit:joshua_log"], 4)
    Greenhouse("natures_spirit", "ghaf_sapling", 1280, ["64x natures_spirit:ghaf_log"], 4)
    Greenhouse("natures_spirit", "palo_verde_sapling", 1280, ["64x natures_spirit:palo_verde_log"], 4)
    Greenhouse("natures_spirit", "cedar_sapling", 1280, ["64x natures_spirit:cedar_log"], 4)
    Greenhouse("natures_spirit", "larch_sapling", 1280, ["64x natures_spirit:larch_log"], 4)
    Greenhouse("natures_spirit", "mahogany_sapling", 1280, ["64x natures_spirit:mahogany_log"], 4)
    Greenhouse("natures_spirit", "saxaul_sapling", 1280, ["64x natures_spirit:saxaul_log"], 4)
    Greenhouse("natures_spirit", "coconut_sprout", 1280, ["64x natures_spirit:coconut_log", "4x natures_spirit:coconut"], 4)

    // //// Crops //////
    Greenhouse("minecraft", "sugar_cane", 640, ["32x minecraft:sugar_cane"], 0)
    Greenhouse("minecraft", "kelp", 640, ["32x minecraft:kelp"], 0)
    Greenhouse("minecraft", "bamboo", 640, ["48x minecraft:bamboo"], 0)
    Greenhouse("minecraft", "cactus", 640, ["32x minecraft:cactus"], 0)
    Greenhouse("minecraft", "wheat_seeds", 640, ["32x minecraft:wheat"], 0)
    Greenhouse("minecraft", "carrot", 640, ["32x minecraft:carrot"], 0)
    Greenhouse("minecraft", "potato", 640, ["32x minecraft:potato"], 0)
    Greenhouse("minecraft", "beetroot_seeds", 640, ["32x minecraft:beetroot"], 0)
    Greenhouse("minecraft", "sweet_berries", 640, ["32x minecraft:sweet_berries"], 0)
    Greenhouse("minecraft", "glow_berries", 640, ["32x minecraft:glow_berries"], 0)
    Greenhouse("minecraft", "cocoa_beans", 640, ["32x minecraft:cocoa_beans"], 0)
    Greenhouse("minecraft", "sea_pickle", 640, ["32x minecraft:sea_pickle"], 0)
    Greenhouse("minecraft", "melon_seeds", 640, ["16x minecraft:melon"], 0)
    Greenhouse("minecraft", "pumpkin_seeds", 640, ["16x minecraft:pumpkin"], 0)
    Greenhouse("minecraft", "nether_wart", 640, ["16x minecraft:nether_wart"], 0)
    Greenhouse("minecraft", "red_mushroom", 640, ["16x minecraft:red_mushroom"], 0)
    Greenhouse("minecraft", "brown_mushroom", 640, ["16x minecraft:brown_mushroom"], 0)
    Greenhouse("natures_spirit", "shiitake_mushroom", 640, ["16x natures_spirit:shiitake_mushroom"], 0)


    // //// Flowers & Cosmetic Blocks //////
    let flowers = [
        "wither_rose",
        "cornflower",
        "sunflower",
        "peony",
        "red_tulip",
        "poppy",
        "rose_bush",
        "blue_orchid",
        "orange_tulip",
        "dandelion",
        "pink_tulip",
        "pink_petals",
        "allium",
        "lilac",
        "lily_of_the_valley",
        "oxeye_daisy",
        "azure_bluet",
        "white_tulip",
        "pitcher_plant",
        "lily_pad",
        "weeping_vines",
        "twisting_vines",
        "vine",
        "moss_block",
        "glow_lichen",
        "tube_coral_fan",
        "brain_coral_fan",
        "bubble_coral_fan",
        "fire_coral_fan",
        "horn_coral_fan"
    ]
    flowers.forEach(flower => {
        Greenhouse("minecraft", flower, 640, [Item.of(flower, 48)], 0);
    })
    // Torchflowers are grown from seeds
    Greenhouse("minecraft", "torchflower_seeds", 640, [Item.of("torchflower", 48)], 0);
    // A way to get grass blocks
    event.recipes.gtceu.greenhouse("kubejs:grass_block")
        .circuit(1)
        .notConsumable(InputItem.of(Item.of("minecraft:grass_block")))
        .itemInputs("64x dirt")
        .inputFluids(Fluid.of("minecraft:water", 24000))
        .itemOutputs("64x grass_block")
        .duration(640)
        .EUt(80)

    // Nature's Spirit Flowers
    let NSflowers = [
        "marigold",
        "bluebell",
        "tiger_lily",
        "purple_wildflower",
        "yellow_wildflower",
        "red_heather",
        "white_heather",
        "purple_heather",
        "anemone",
        "dwarf_blossoms",
        "protea",
        "hibiscus",
        "blue_iris",
        "black_iris",
        "ruby_blossoms",
        "silverbush",
        "alluaudia",
        "cattail",
        "green_bearberries",
        "red_bearberries",
        "purple_bearberries",
        "green_bitter_sprouts",
        "red_bitter_sprouts",
        "purple_bitter_sprouts",
        "lavender",
        "blue_bulbs",
        "carnation",
        "gardenia",
        "snapdragon",
        "foxglove",
        "begonia",
        "ornate_succulent",
        "drowsy_succulent",
        "aureate_succulent",
        "sage_succulent",
        "foamy_succulent",
        "imperial_succulent",
        "regal_succulent",
        "azolla"
    ]
    NSflowers.forEach(flower => {
        Greenhouse("natures_spirit", flower, 640, [`48x natures_spirit:${flower}`], 0);
    })
    Greenhouse("natures_spirit", "helvola_flower", 640, ["32x natures_spirit:helvola_flower", "32x natures_spirit:helvola_pad"], 0);
    Greenhouse("natures_spirit", "lotus_flower", 640, ["32x natures_spirit:lotus_flower", "32x natures_spirit:lotus_stem"], 0);
})

