/**
 * Transcendental matrix processing line - TODO: customify - should involve crystal matrix and other mats, end product should chance return these mats
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.cracker("mystic_tar_cracking")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:tritanium 144")
        .outputFluids("gtceu:sludge_of_memory 1296", "gtceu:logical_residue 144")
        .itemInputs("kubejs:crushed_circuit")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.cracker("mystic_tar_cracking_essence")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:essence_of_knowledge 144")
        .outputFluids("gtceu:sludge_of_memory 500", "gtceu:logical_residue 500")
        .itemInputs("kubejs:crushed_circuit")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.brewery("mystic_essence_brewing")
        .inputFluids("gtceu:sludge_of_memory 1000")
        .itemInputs("gtceu:einsteinium_dust")
        .outputFluids("gtceu:essence_of_knowledge 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.recipes.gtceu.brewery("mystic_essence_brewing_supercharged")
        .inputFluids("gtceu:sludge_of_memory 1000")
        .itemInputs("kubejs:sparks_of_conscience")
        .outputFluids("gtceu:essence_of_knowledge 4000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.mixer("infused_oils_mixer")
        .inputFluids("gtceu:logical_residue 300", "gtceu:essence_of_knowledge 700")
        .chancedInput("gtceu:antimony_dust", 8500, 0)
        .outputFluids("gtceu:considerate_oils 500")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.recipes.gtceu.autoclave("supercharged_powder_autoclave")
        .inputFluids("gtceu:considerate_oils 300")
        .itemInputs("gtceu:small_rhenium_dust")
        .itemOutputsRanged("kubejs:sparks_of_conscience", 1, 3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.mixer("transcendent_spirit_mixer")
        .inputFluids("gtceu:essence_of_knowledge 1000")
        .itemInputs("kubejs:sparks_of_conscience")
        .outputFluids("gtceu:transcendental_spirit 48")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.soul_binding("trans_matrix_infusion")
        .itemInputs("kubejs:transcendental_soul_vial", "monilabs:crystal_matrix_ingot")
        .inputFluids("gtceu:considerate_oils 200")
        .itemOutputs("monilabs:transcendental_matrix_ingot", "kubejs:empty_soul_vial")
        .outputFluids("gtceu:transcendence_residue 200")
        .duration(128)
        .EUt(GTValues.VHA[GTValues.ZPM])

    const circuits = [
        ["ev", 1],
        ["iv", 2],
        ["luv", 4],
        ["zpm", 8],
        ["uv", 16],
        ["uhv", 32],
        ["uev", 64],
        ["uiv", 128],
        ["uxv", 256],
        ["opv", 512],
        ["max", 1024]
    ]
    for (const[tier, count] of circuits) {
        event.recipes.gtceu.macerator(`crushed_circuit_${tier}`)
            .itemInputs(`#gtceu:circuits/${tier}`)
            .itemOutputs(`${count}x kubejs:crushed_circuit`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.HV])
    }
        
    event.recipes.gtceu.discharger("kubejs:transcendental_soul")
        .itemInputs("kubejs:wither_soul_vial", "kubejs:ender_dragon_soul_vial", "gtceu:dark_soularium_plate", "kubejs:solidified_xenon",
            Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT())
        .inputFluids("gtceu:transcendental_spirit 48")
        .itemOutputs("kubejs:transcendental_soul_vial", Item.of("kubejs:bathyal_energy_core", "{Damage:0}").strongNBT())
        .duration(10)

    event.recipes.gtceu.distillation_tower("kubejs:transcendence_residue_processing")
        .inputFluids("gtceu:transcendence_residue 300")
        .outputFluids("gtceu:tritanium 50")
        .outputFluidsRanged("gtceu:einsteinium_254", 0, 25)
        .outputFluidsRanged("gtceu:einsteinium_253", 0, 25)
        .outputFluidsRanged("gtceu:einsteinium", 50, 100)
        .outputFluidsRanged("gtceu:rhenium", 100, 150)
        .outputFluids("gtceu:xenon 50", "gtceu:antimony 100")
        .outputFluidsRanged("gtceu:technetium", 0, 50)
        .outputFluids("monilabs:crystal_matrix 100")
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
})