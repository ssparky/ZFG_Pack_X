ServerEvents.recipes(event => {
    // Basic Copper Chromate
    event.recipes.gtceu.large_chemical_reactor("potassium_chromate_from_decomp")
        .notConsumable("1x gtceu:ruthenium_dust")
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

    // Cadmium Selenide
    event.recipes.gtceu.electric_blast_furnace("cadmium_selenide_blasting")
        .itemInputs("1x gtceu:cadmium_dust", "1x gtceu:selenium_dust")
        .inputFluids("gtceu:argon 500")
        .itemOutputs("2x gtceu:cadmium_selenide_dust")
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(200)
        .blastFurnaceTemp(3600)

    // Lead Chromate
    event.recipes.gtceu.chemical_reactor("lead_chloride_forming")
        .itemInputs("1x gtceu:lead_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemOutputs("3x gtceu:lead_chloride_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(100)
    event.recipes.gtceu.chemical_reactor("lead_chromate_from_lead_chloride")
        .itemInputs("1x gtceu:lead_chloride_dust", "1x gtceu:potassium_chromate_dust")
        .itemOutputs("1x gtceu:lead_chromate_dust", "1x gtceu:rock_salt_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(140)

    // Bismuth Vanadate
    event.recipes.gtceu.chemical_reactor("bismite_forming")
        .itemInputs("2x gtceu:bismuth_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("5x gtceu:bismite_dust")
        .EUt(GTValues.VHA[GTValues.LV])
        .duration(100)
    event.recipes.gtceu.electric_blast_furnace("bismuth_vanadate_from_bismite")
        .itemInputs("1x gtceu:bismite_dust", "1x gtceu:vanadium_pentoxide_dust")
        .itemOutputs("2x gtceu:bismuth_vanadate_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(180)
        .blastFurnaceTemp(3600)

    // Strontium Chromate
    // Needs strontium chloride + potassium chromate, or a way to make strontianite + potassium dichromate

    // Barium Chromate
    // Needs barium hydroxide or chloride + potassium chromate

    // Uranium Trioxide
    // U3O8 + O2 at low temp

    // Chromia
    // Potassium dichromate + sulfur -> potassium sulfate + chromia

    // Nickel Sulfate Hexahydride
    // Nickel oxide + sulfuric acid -> dissolution -> NSHH

    // Copper Sulfate Pentahydride
    // Copper oxide + (dilute) sulfuric acid -> CSPH

    // Cobalt Blue
    // Unknown, make something up ig

    // Potassium Permanganate
    // Manganese Dioxide + potassium hydroxide + oxygen -> potassium manganate + water -> potassium permanganate + half potassium hydroxide + hydrogen

    // Cobalt Phosphate
    // Cobalt oxide + phosphate salts

    // Erbium Oxide
    // Erbium + O2 -> EBF

    // Cobalt Carbonate
    // Cobalt + sulfuric acid + water -> cobalt sulfate (heptahydride) + hydrogen
    // Cobalt Sulfate + Sodium bicarbonate -> cobalt carbonate + sodium sulfate + water + co2

    // Cobalt Chloride Hexahyrdide
    // Cobalt Carbonate + hydrochloric acid + (water) -> cobalt chloride (hydride) + CO2 + excess water

    // Molybdenum Dioxide
    // 2 Molybdenite + 7 oxygen -> ebf -> 2 MoO3 + 4 SO2
    // 2 Molybdenum Trioxide + Molybdenum -> 3 Molybdenum Dioxide

    // Cobaltic Oxide
    // Chlorine + Sodium Hydroxide -> Salt + Bleach + water
    // Cobalt Sulfate + Sodium Hydroxide + Sodium hypochloride (bleach) -> Cobaltic Oxide + Sodium Sulfate + Salt

    // Magnanese Dioxide
    // yeah

    // Antimony Tin Oxide
    // idk

    // Titanium Suboxide
    // also not known

    // TODO: the rest of this shit
})