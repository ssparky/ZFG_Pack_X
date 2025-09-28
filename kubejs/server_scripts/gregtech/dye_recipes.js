ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("potassium_chromate_from_decomp")
        //.notConsumable("1x gtceu:ruthenium_dust")
        .itemInputs("1x gtceu:potassium_dichromate_dust")
        .circuit(4)
        .itemOutputs("1x gtceu:potassium_chromate_dust", "1x gtceu:chromium_trioxide_dust")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.mixer("basic_copper_chromate_from_potassium_chromate")
        .itemInputs("1x gtceu:potassium_chromate_dust", "2x gtceu:copper_dust", "4x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:sodium_potassium 1000")
        .itemOutputs("2x gtceu:basic_copper_chromate_dust")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.IV])

    // TODO: the rest of this shit
})