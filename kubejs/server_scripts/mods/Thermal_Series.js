/**
 * Custom recipes for the Thermal Series
 */
ServerEvents.recipes(event => {
    // Thermal Essences
    event.recipes.gtceu.chemical_reactor("elemental_reduction_fluid")
        .itemInputs("kubejs:pulsating_dust")
        .inputFluids(Fluid.of("gtceu:hydrofluoric_acid", 1000))
        .outputFluids("gtceu:elemental_reduction_fluid 1000")
        .duration(80)
        .EUt(90)

    // transformation
    event.recipes.gtceu.chemical_reactor("elemental_reduction_bazalz")
        .itemInputs("gtceu:coal_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("minecraft:bedrock") // TODO: basalz dust kjs
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blaze")
        .itemInputs("gtceu:netherrack_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("minecraft:blaze_powder")
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blitz")
        .itemInputs("gtceu:endstone_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("minecraft:bedrock") // TODO: blitz dust kjs
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blizz")
        .itemInputs("gtceu:ice_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("minecraft:bedrock") // TODO: blizz dust kjs
        .duration(80)
        .EUt(90)

    event.shaped("4x kubejs:primal_mana", [
        "AAB",
        "DEB",
        "DCC"
    ], {
        A: "kubejs:aerotheum_dust",
        B: "kubejs:pyrotheum_dust",
        C: "kubejs:petrotheum_dust",
        D: "kubejs:cryotheum_dust",
        E: "gtceu:diamond_dust"
    })

    event.recipes.gtceu.mixer("mixer_primal_mana")
        .itemInputs("2x kubejs:petrotheum_dust", "2x kubejs:pyrotheum_dust", "2x kubejs:aerotheum_dust", "2x kubejs:cryotheum_dust", "1x gtceu:diamond_dust")
        .itemOutputs("4x kubejs:primal_mana")
        .duration(100)
        .EUt(100)

    event.shaped("2x kubejs:petrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:bedrock", // TODO: basalz powder
        B: "minecraft:redstone",
        C: "gtceu:obsidian_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_petrotheum")
        .itemInputs("2x minecraft:bedrock", "minecraft:redstone", "gtceu:obsidian_dust") // TODO: basalz powder
        .itemOutputs("2x kubejs:petrotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:pyrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:blaze_powder",
        B: "minecraft:redstone",
        C: "gtceu:sulfur_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_pyrotheum")
        .itemInputs("2x minecraft:blaze_powder", "minecraft:redstone", "gtceu:sulfur_dust")
        .itemOutputs("2x kubejs:pyrotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:aerotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:bedrock", // TODO: blitz powder
        B: "minecraft:redstone",
        C: "gtceu:saltpeter_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_aerotheum")
        .itemInputs("2x minecraft:bedrock", "minecraft:redstone", "gtceu:saltpeter_dust") // TODO: blitz powder
        .itemOutputs("2x kubejs:aerotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:cryotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:bedrock", // TODO: blizz powder
        B: "minecraft:redstone",
        C: "minecraft:snowball"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_cryotheum")
        .itemInputs("2x minecraft:bedrock", "minecraft:redstone", "minecraft:snowball") // TODO: blizz powder
        .itemOutputs("2x kubejs:cryotheum_dust")
        .duration(40)
        .EUt(20)

    // Clathrates
    event.recipes.gtceu.chemical_reactor("resonant_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("kubejs:liquid_ender", 250))
        .itemOutputs("kubejs:resonant_clathrate")
        .duration(120)
        .EUt(75)

    event.recipes.gtceu.chemical_reactor("energized_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("gtceu:glowstone", 288))
        .itemOutputs("kubejs:energized_clathrate")
        .duration(120)
        .EUt(75)

    event.recipes.gtceu.chemical_reactor("destabilized_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("gtceu:redstone", 288))
        .itemOutputs("kubejs:destabilized_clathrate")
        .duration(120)
        .EUt(75)

    // Thermal Dusts -- TODO: kjs both
    // event.recipes.gtceu.macerator("dust_blitz")
    //     .itemInputs("thermal:blitz_rod")
    //     .itemOutputs("4x thermal:blitz_powder")
    //     .duration(200)
    //     .EUt(16)

    // event.recipes.gtceu.macerator("dust_blizz")
    //     .itemInputs("thermal:blizz_rod")
    //     .itemOutputs("4x thermal:blizz_powder")
    //     .duration(200)
    //     .EUt(16)

    // event.recipes.gtceu.macerator("dust_bazalz")
    //     .itemInputs("thermal:basalz_rod")
    //     .itemOutputs("4x thermal:basalz_powder")
    //     .duration(200)
    //     .EUt(16);

    // Thermal Mobdrops (for HM nether star recipe mostly) -- TODO yet again
    // event.recipes.gtceu.compressor("blitz_rod")
    //     .itemInputs("4x thermal:blitz_powder")
    //     .itemOutputs("thermal:blitz_rod")
    //     .duration(200)
    //     .EUt(2)

    // event.recipes.gtceu.compressor("blizz_rod")
    //     .itemInputs("4x thermal:blizz_powder")
    //     .itemOutputs("thermal:blizz_rod")
    //     .duration(200)
    //     .EUt(2)

    // event.recipes.gtceu.compressor("basalz_rod")
    //     .itemInputs("4x thermal:basalz_powder")
    //     .itemOutputs("thermal:basalz_rod")
    //     .duration(200)
    //     .EUt(2)

});
