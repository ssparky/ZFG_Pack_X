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
        .itemOutputs("kubejs:basalz_dust")
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
        .itemOutputs("kubejs:blitz_dust")
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blizz")
        .itemInputs("gtceu:ice_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("kubejs:blizz_dust")
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
        A: "kubejs:basalz_dust", 
        B: "minecraft:redstone",
        C: "gtceu:obsidian_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_petrotheum")
        .itemInputs("2x kubejs:basalz_dust", "minecraft:redstone", "gtceu:obsidian_dust")
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
        A: "kubejs:blitz_dust",
        B: "minecraft:redstone",
        C: "gtceu:saltpeter_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_aerotheum")
        .itemInputs("kubejs:blitz_dust", "minecraft:redstone", "gtceu:saltpeter_dust")
        .itemOutputs("2x kubejs:aerotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:cryotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "kubejs:blizz_dust",
        B: "minecraft:redstone",
        C: "minecraft:snowball"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_cryotheum")
        .itemInputs("2x kubejs:blizz_dust", "minecraft:redstone", "minecraft:snowball")
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

    // Thermal Dusts
    event.recipes.gtceu.macerator("dust_blitz")
        .itemInputs("kubejs:blitz_rod")
        .itemOutputs("4x kubejs:blitz_dust")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator("dust_blizz")
        .itemInputs("kubejs:blizz_rod")
        .itemOutputs("4x kubejs:blizz_dust")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator("dust_bazalz")
        .itemInputs("kubejs:basalz_rod")
        .itemOutputs("4x kubejs:basalz_dust")
        .duration(200)
        .EUt(16);

    // Thermal Mobdrops (for HM nether star recipe mostly)
    event.recipes.gtceu.compressor("blitz_rod")
        .itemInputs("4x kubejs:blitz_dust")
        .itemOutputs("kubejs:blitz_rod")
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.compressor("blizz_rod")
        .itemInputs("4x kubejs:blizz_dust")
        .itemOutputs("kubejs:blizz_rod")
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.compressor("basalz_rod")
        .itemInputs("4x kubejs:basalz_dust")
        .itemOutputs("kubejs:basalz_rod")
        .duration(200)
        .EUt(2)

});
