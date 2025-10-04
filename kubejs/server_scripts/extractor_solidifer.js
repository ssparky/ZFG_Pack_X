/**
 * Extraction and solidification recipes for NC and GT
 */
ServerEvents.recipes(event => {
    // Solidified to Gas
    extractgas("neon", "kubejs:solidified_neon", Fluid.of("gtceu:neon", 1000));
    extractgas("krypton", "kubejs:solidified_krypton", Fluid.of("gtceu:krypton", 1000));
    extractgas("xenon", "kubejs:solidified_xenon", Fluid.of("gtceu:xenon", 1000));
    extractgas("argon", "kubejs:solidified_argon", Fluid.of("gtceu:argon", 1000));
    extractgas("bromine", "kubejs:solidified_bromine", Fluid.of("gtceu:bromine", 1000));
    extractgas("chlorine", "kubejs:solidified_chlorine", Fluid.of("gtceu:chlorine", 1000));
    extractgas("fluorine", "kubejs:solidified_fluorine", Fluid.of("gtceu:fluorine", 1000));
    extractgas("helium", "kubejs:solidified_helium", Fluid.of("gtceu:helium", 1000));
    extractgas("hydrogen", "kubejs:solidified_hydrogen", Fluid.of("gtceu:hydrogen", 1000));
    extractgas("mercury", "kubejs:solidified_mercury", Fluid.of("gtceu:mercury", 1000));
    extractgas("nitrogen", "kubejs:solidified_nitrogen", Fluid.of("gtceu:nitrogen", 1000));
    extractgas("oxygen", "kubejs:solidified_oxygen", Fluid.of("gtceu:oxygen", 1000));
    extractgas("radon", "kubejs:solidified_radon", Fluid.of("gtceu:radon", 1000));
    extractgas("experience", "kubejs:solidified_experience", Fluid.of("cofh_core:experience", 1000));

    extractisotope("berkelium", "kubejs:stabilized_berkelium", Fluid.of("gtceu:berkelium", 1000));
    extractisotope("neptunium", "kubejs:stabilized_neptunium", Fluid.of("gtceu:neptunium", 1000));
    extractisotope("plutonium", "kubejs:stabilized_plutonium", Fluid.of("gtceu:plutonium", 1000));
    extractisotope("uranium", "kubejs:stabilized_uranium", Fluid.of("gtceu:uranium", 1000));
    extractisotope("curium", "kubejs:stabilized_curium", Fluid.of("gtceu:curium", 1000));
    extractisotope("californium", "kubejs:stabilized_californium", Fluid.of("gtceu:californium", 1000));
    extractisotope("americium", "kubejs:stabilized_americium", Fluid.of("gtceu:americium", 1000));

    function extractgas(recipename, input, output) {
        event.recipes.gtceu.extractor(recipename)
            .itemInputs(input)
            .outputFluids(output)
            .duration(200)
            .EUt(30)
    }
    function extractisotope(recipename, input, output) {
        event.recipes.gtceu.extractor(recipename)
            .itemInputs(input)
            .outputFluids(output)
            .duration(180)
            .EUt(6)
    }
})
