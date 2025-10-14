/**
 * Custom recipes for EnderIO
 */
ServerEvents.recipes(event => {
    // Soul Vials - Inspiration for kjs replacements? TODO:
    event.shaped("kubejs:empty_soul_vial", [
        " A ",
        "B B",
        " B "
    ], {
        A: "gtceu:soularium_plate",
        B: "ae2:quartz_glass"
    }).id("kubejs:empty_soul_vial")

    // Remove autogen soul infused smelting recipe
    event.remove({id: "gtceu:smelting/smelt_dust_soul_infused_to_ingot"})
    event.remove({id: "gtceu:extractor/extract_soul_infused_dust"})
    event.remove({id: "gtceu:arc_furnace/arc_soul_infused_dust"})
    event.remove({id: "gtceu:alloy_smelter/alloy_smelt_soul_infused_dust_to_block"})

    // Vial and soul infused recipes
    const mobs = [
        ["allay", "minecraft:diamond", 2, 2000, GTValues.HV],
        ["axolotl", "minecraft:spore_blossom", 1, 3000, GTValues.LV],
        ["bee", "minecraft:honeycomb", 1, 4000, GTValues.LV],
        ["blaze", "minecraft:blaze_rod", 3, 1500, GTValues.HV],
        ["camel", "minecraft:cactus", 2, 2500, GTValues.MV],
        ["cat", "farm_and_charm:cat_food", 2, 2000, GTValues.HV],
        ["spider", "minecraft:spider_eye", 2, 2500, GTValues.MV],
        ["chicken", "#forge:raw_chicken", 1, 3000, GTValues.LV],
        ["fish", "#forge:raw_fishes", 1, 4000, GTValues.LV],
        ["cow", "#forge:raw_beef", 2, 2500, GTValues.MV],
        ["creeper", "minecraft:creeper_head", 3, 1500, GTValues.HV],
        ["horse", "farm_and_charm:horse_fodder", 2, 2000, GTValues.MV],
        ["zombie", "minecraft:zombie_head", 2, 3000, GTValues.MV],
        ["guardian", "kubejs:guardian_scale", 3, 1500, GTValues.HV],
        ["enderman", "minecraft:ender_eye", 4, 1000, GTValues.EV],
        ["endermite", "minecraft:chorus_fruit", 1, 4000, GTValues.LV],
        ["illager", "gtceu:ruby_gem", 4, 1000, GTValues.EV],
        ["fox", "minecraft:sweet_berries", 2, 2000, GTValues.MV],
        ["ghast", "minecraft:ghast_tear", 4, 1500, GTValues.EV],
        ["squid", "oceanic_delight:squid_tentacles", 1, 3000, GTValues.LV],
        ["slime", "minecraft:slime_block", 1, 4000, GTValues.MV],
        ["panda", "minecraft:bamboo", 2, 2500, GTValues.HV],
        ["parrot", "minecraft:feather", 1, 3000, GTValues.MV],
        ["pig", "#forge:raw_pork", 2, 3000, GTValues.LV],
        ["piglin", "minecraft:gold_ingot", 3, 1500, GTValues.HV],
        ["rabbit", "#forge:raw_rabbit", 1, 3500, GTValues.LV],
        ["sheep", "#forge:raw_mutton", 2, 2500, GTValues.MV],
        ["shulker", "minecraft:shulker_shell", 3, 1500, GTValues.EV],
        ["silverfish", "minecraft:stone", 1, 4000, GTValues.HV],
        ["skeleton", "minecraft:skeleton_skull", 2, 2500, GTValues.MV],
        ["sniffer", "minecraft:torchflower", 2, 2000, GTValues.HV],
        ["strider", "minecraft:warped_fungus", 1, 3000, GTValues.MV],
        ["turtle", "minecraft:scute", 1, 3500, GTValues.MV],
        ["villager", "minecraft:emerald", 4, 1500, GTValues.EV],
        ["warden", "kubejs:warden_heart", 8, 1000, GTValues.IV],
        ["witch", "minecraft:glowstone", 4, 2500, GTValues.EV],
        ["wither_skeleton", "minecraft:wither_skeleton_skull", 3, 1500, GTValues.HV],
        ["wolf", "farm_and_charm:dog_food", 2, 2500, GTValues.HV],
        ["wither", "minecraft:nether_star", 6, 1000, GTValues.IV],
        ["ender_dragon", "minecraft:dragon_egg", 8, 1000, GTValues.IV],
        ["player", "minecraft:player_head", 16, 1000, GTValues.IV]
    ]

    for (const [id, input, tier, exp, energy] of mobs) {
        event.recipes.gtceu.soul_binding(`bind_${id}_soul`)
            .itemInputs(`1x kubejs:empty_soul_vial`, `4x ${input}`)
            .inputFluids(`cofh_core:experience ${exp}`)
            .itemOutputs(`1x kubejs:${id}_soul_vial`)
            .duration(1200)
            .EUt(GTValues.VHA[energy])
        event.recipes.gtceu.soul_binding(`${id}_soul_infused_ingot`)
            .itemInputs(`1x gtceu:soul_infused_dust`, `1x kubejs:${id}_soul_vial`)
            .itemOutputs(`${tier}x gtceu:soul_infused_ingot`)
            .duration(600)
            .EUt(GTValues.VA[GTValues.LV])
    }

    // Villager Soul Vial
    // event.shaped(Item.of("enderio:filled_soul_vial", '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:villager"}}}}').strongNBT(), [
    //     " E ",
    //     "EVE",
    //     " E "
    // ], {
    //     E: "minecraft:emerald",
    //     V: "enderio:empty_soul_vial"
    // }).id("kubejs:villager_soul_vial")

    // // Enderman Soul Vial
    // event.shaped(Item.of("enderio:filled_soul_vial", '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:enderman"}}}}').strongNBT(), [
    //     " E ",
    //     "EVE",
    //     " E "
    // ], {
    //     E: "enderio:enderman_head",
    //     V: "enderio:empty_soul_vial"
    // }).id("kubejs:enderman_soul_vial")

    // // Shulker Soul Vial
    // event.shaped(Item.of("enderio:filled_soul_vial", '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:shulker"}}}}').strongNBT(), [
    //     " E ",
    //     "EVE",
    //     " E "
    // ], {
    //     E: "minecraft:shulker_shell",
    //     V: "enderio:empty_soul_vial"
    // }).id("kubejs:shulker_soul_vial")

    // // Zombie Soul Vial
    // event.shaped(Item.of("enderio:filled_soul_vial", '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:zombie"}}}}').strongNBT(), [
    //     " E ",
    //     "EVE",
    //     " E "
    // ], {
    //     E: "minecraft:zombie_head",
    //     V: "enderio:empty_soul_vial"
    // }).id("kubejs:zombie_soul_vial")

    // // Ghast Soul Vial
    // event.shaped(Item.of("enderio:filled_soul_vial", '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:ghast"}}}}').strongNBT(), [
    //     " E ",
    //     "EVE",
    //     " E "
    // ], {
    //     E: "minecraft:ghast_tear",
    //     V: "enderio:empty_soul_vial"
    // }).id("kubejs:ghast_soul_vial")

    // // Witch Soul Vial
    // event.shaped(Item.of("enderio:filled_soul_vial", '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:witch"}}}}').strongNBT(), [
    //     "GEG",
    //     "EVE",
    //     "GEG"
    // ], {
    //     E: "minecraft:redstone",
    //     G: "minecraft:glowstone_dust",
    //     V: "enderio:empty_soul_vial"
    // }).id("kubejs:witch_soul_vial")


    // // soul binder - TODO: kept as reminder for GT soul binder machine balancing
    // event.remove({ id: "enderio:soul_binder" })
    // event.recipes.extendedcrafting.shaped_table("enderio:soul_binder", [
    //     "AAAAA",
    //     "GBCBG",
    //     "ADHEA",
    //     "GBFBG",
    //     "AAZAA",
    // ], {
    //     A: "#forge:plates/soularium",
    //     B: "#forge:plates/tungsten_steel",
    //     C: "enderio:enderman_head",
    //     D: "minecraft:creeper_head",
    //     E: "minecraft:zombie_head",
    //     F: "minecraft:skeleton_skull",
    //     G: "#forge:gears/energized",
    //     H: "enderio:ensouled_chassis",
    //     Z: "enderio:z_logic_controller"
    // }).id("kubejs:soul_binder")

    // Make End Steel Craftable in HV
    event.recipes.gtceu.chemical_bath("end_steel_ingot_cooling")
        .inputFluids("minecraft:water 100")
        .itemInputs("gtceu:hot_end_steel_ingot")
        .itemOutputs("gtceu:end_steel_ingot")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.chemical_bath("end_steel_ingot_distilled_cooling")
        .inputFluids("gtceu:distilled_water 100")
        .itemInputs("gtceu:hot_end_steel_ingot")
        .itemOutputs("gtceu:end_steel_ingot")
        .duration(125)
        .EUt(GTValues.VHA[GTValues.HV])

    // Dense Obsidian Plate for Reinforced Obsidian
    event.remove({ id: "gtceu:bender/bend_obsidian_plate_to_dense_plate" })
    event.recipes.gtceu.implosion_compressor("infinity_toolset/dense_obsidian_plate")
        .itemInputs("9x gtceu:obsidian_plate", "minecraft:tnt")
        .itemOutputs("gtceu:dense_obsidian_plate")
        .duration(20)
        .EUt(30)


    // // Rock Breaker/Rock Cycle Simulator recipea or Grains of Infinity - kept as inspo for rock breaker recipes!
    // event.recipes.gtceu.rock_breaker("kubejs:rock_breaker_grains_of_infinity")
    //     .notConsumable("enderio:grains_of_infinity")
    //     .itemOutputs("enderio:grains_of_infinity")
    //     .duration(16)
    //     .EUt(GTValues.VA[GTValues.MV])
    //     ["adjacentFluid(net.minecraft.resources.ResourceLocation[])"]("minecraft:lava", "enderio:dew_of_the_void")
    //     .posY(-64, -59)

    // event.recipes.gtceu.rock_cycle_simulator("kubejs:rock_cycle_simulator_grains_of_infinity")
    //     .notConsumable("enderio:grains_of_infinity")
    //     .itemOutputs("enderio:grains_of_infinity")
    //     .duration(16)
    //     .EUt(GTValues.VA[GTValues.MV])
    //     .posY(-64, -59)
})
