/**
 * Custom recipes for EnderIO
 */
ServerEvents.recipes(event => {
    // Soul Vials - Inspiration for kjs replacements? TODO:

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
    //     .addData("fluidA", "minecraft:lava")
    //     .addData("fluidB", "enderio:dew_of_the_void")
    //     .posY(-64, -59)

    // event.recipes.gtceu.rock_cycle_simulator("kubejs:rock_cycle_simulator_grains_of_infinity")
    //     .notConsumable("enderio:grains_of_infinity")
    //     .itemOutputs("enderio:grains_of_infinity")
    //     .duration(16)
    //     .EUt(GTValues.VA[GTValues.MV])
    //     .posY(-64, -59)
})
