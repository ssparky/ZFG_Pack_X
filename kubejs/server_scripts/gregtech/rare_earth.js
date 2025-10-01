/**
*Line for rare earths with actual chemistry
*/
ServerEvents.recipes(event => {

    // Ore Digestion
    event.recipes.gtceu.mixer("re_digestion_mixer")
        .itemInputs("1x gtceu:rare_earth_dust")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer("monazite_digestion_mixer")
        .itemInputs("2x gtceu:crushed_monazite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("2x gtceu:phosphate_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("fergusonite_digestion_mixer")
        .itemInputs("2x gtceu:crushed_fergusonite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("2x gtceu:niobium_pentoxide_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("bazzite_digestion_mixer")
        .itemInputs("6x gtceu:crushed_bazzite_ore")
        .inputFluids("gtceu:sulfuric_acid 500")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("6x gtceu:beryllium_oxide_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("bastnasite_digestion_mixer")
        .itemInputs("4x gtceu:crushed_bastnasite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("4x gtceu:cerium_oxide_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("kolbeckite_digestion_mixer")
        .itemInputs("2x gtceu:crushed_kolbeckite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("2x gtceu:phosphate_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("wakefieldite_digestion_mixer")
        .itemInputs("2x gtceu:crushed_wakefieldite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("2x gtceu:vanadium_pentoxide_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("xenotime_digestion_mixer")
        .itemInputs("2x gtceu:crushed_xenotime_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("2x gtceu:phosphate_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("thortveitite_digestion_mixer")
        .itemInputs("4x gtceu:crushed_thortveitite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("4x gtceu:yttria_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("gadolinite_digestion_mixer")
        .itemInputs("2x gtceu:crushed_gadolinite_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("2x gtceu:bazzite_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer("samarskite_digestion_mixer")
        .itemInputs("3x gtceu:crushed_samarskite-yb_ore")
        .inputFluids("gtceu:sulfuric_acid 250")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .itemOutputs("3x gtceu:tantalum_pentoxide_dust")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    // Washing step
    event.recipes.gtceu.chemical_reactor("re_washing_chemical_reactor")
        .inputFluids("gtceu:rare_earth_sulfate_solution 1000", "gtceu:distilled_water 2000")
        .chancedOutput("gtceu:gypsum_dust", 5000, 0)
        .chancedOutput("gtceu:thorium_dust", 2000, 0)
        .chancedOutput("gtceu:thorium_232_dust", 500, 0)
        .outputFluids("gtceu:leached_rare_earth_solution 1000", "minecraft:water 2000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    // Carbonation step
    event.recipes.gtceu.chemical_reactor("re_carbonation_chemical_reactor")
        .inputFluids("gtceu:leached_rare_earth_solution 1000")
        .itemInputs("4x gtceu:potassium_carbonate_dust")
        .itemOutputs("5x gtceu:rare_earth_carbonate_dust", "4x gtceu:potassium_sulfate_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])

    // Chlorination step
    event.recipes.gtceu.chemical_bath("re_chlorination_chemical_bath")
        .itemInputs("5x gtceu:rare_earth_carbonate_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:rare_earth_chloride_solution 1000")
        .chancedOutput("gtceu:carbon_dust", 7500, 0)
        .chancedOutput("gtceu:uraninite_dust", 2000, 0)
        .chancedOutput("gtceu:uranium_dust", 500, 0)
        .chancedOutput("gtceu:uranium_235_dust", 100, 0)
        .chancedOutput("gtceu:uranium_233_dust", 50, 0)
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV])

    // TBP step
    event.recipes.gtceu.mixer("re_tbp_mixer")
        .inputFluids("gtceu:rare_earth_chloride_solution 1000", "gtceu:tributyl_phosphate 1000")
        .outputFluids("gtceu:rare_earth_chloride_tbp_mix 2000") 
        .duration(80)
        .EUt(GTValues.VA[GTValues.IV])

    // Initial mass separation step
    event.recipes.gtceu.centrifuge("rare_earth_mass_separation")
        .itemInputs("2x gtceu:phthalic_anhydride_dust")
        .inputFluids("gtceu:rare_earth_chloride_tbp_mix 1000")
        .chancedOutput("gtceu:cadmium_dust", 3000, 0)
        .outputFluidsRanged("gtceu:light_rare_earths_organic_phase", 300, 900) 
        .outputFluidsRanged("gtceu:dense_rare_earths_aqueous_phase", 200, 700)
        .outputFluidsRanged("gtceu:tributyl_phosphate 1000", 0, 500) 
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])

    // LIGHT REE BRANCH
    // NaOH solution
    event.recipes.gtceu.mixer("sodium_hydroxide_solution_mixer")
        .itemInputs("2x gtceu:sodium_hydroxide_dust")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:sodium_hydroxide_solution 1000")
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])

    // Alkaline washing
    event.recipes.gtceu.chemical_bath("light_ree_alkaline_wash")
        .inputFluids("gtceu:light_rare_earths_organic_phase 1000", "gtceu:sodium_hydroxide_solution 2000")
        .itemOutputs("6x gtceu:crude_light_rare_earth_hydroxide_cake_dust") 
        .outputFluids("gtceu:diluted_tributyl_phosphate 1000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    // Light REE Nitration
    event.recipes.gtceu.chemical_reactor("light_ree_nitration_cr")
        .itemInputs("6x gtceu:crude_light_rare_earth_hydroxide_cake_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .outputFluids("gtceu:light_rare_earth_nitrate_solution 1000")
        .chancedOutput("gtceu:scandium_dust", 2500, 0)
        .chancedOutput("gtceu:yttrium_dust", 1500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    // Light REE oxalate mixing
    event.recipes.gtceu.chemical_reactor("light_ree_oxalate_cr")
        .inputFluids("gtceu:light_rare_earth_nitrate_solution 1000", "gtceu:oxalic_acid_solution 1000")
        .outputFluids("gtceu:light_rare_earth_oxalate_slurry 1000", "gtceu:diluted_nitric_acid 1000", "gtceu:diluted_oxalic_acid 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])
    
    // Light REE oxalate blasting
    event.recipes.gtceu.electric_blast_furnace("light_ree_oxalate_blasting")
        .inputFluids("gtceu:light_rare_earth_oxalate_slurry 1000")
        .itemOutputs("5x gtceu:light_rare_earth_oxide_mix_dust")
        .outputFluids("gtceu:carbon_dioxide 1500")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])
        .blastFurnaceTemp(1900)

    // Light REE separation
    event.recipes.gtceu.centrifuge("separate_light_rare_earths")
        .itemInputs("4x gtceu:light_rare_earth_oxide_mix_dust")
        .chancedOutput("gtceu:cerium_oxide_dust", 7500, 0)
        .chancedOutput("gtceu:neodymium_oxide_dust", 6500, 0)
        .chancedOutput("gtceu:lanthanum_oxide_dust", 4000, 0)
        .chancedOutput("gtceu:praseodymium_oxide_dust", 3000, 0)
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])

    // DENSE REE BRANCH
    // Re-carbonation
    event.recipes.gtceu.chemical_reactor("dense_ree_carbonation_cr")
        .inputFluids("gtceu:dense_rare_earths_aqueous_phase 1000")
        .itemInputs("4x gtceu:sodium_bicarbonate_dust")
        .itemOutputs("5x gtceu:dense_rare_earth_carbonate_dust", "4x gtceu:salt_dust")
        .duration(180)
        .EUt(GTValues.VA[GTValues.IV])

    // Dense REE Chlorination
    event.recipes.gtceu.chemical_bath("dense_ree_chlorination_chemical_bath")
        .itemInputs("5x gtceu:dense_rare_earth_carbonate_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:dense_rare_earth_chloride_solution 1000")
        .chancedOutput("gtceu:carbon_dust", 7500, 0)
        .chancedOutput("gtceu:rutile_dust", 2000, 0)
        .chancedOutput("gtceu:tantalum_pentoxide_dust", 500, 0)
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV])

    // Dense REE Distillation
    event.recipes.gtceu.distillation_tower("dense_ree_distillation_tower")
        .inputFluids("gtceu:dense_rare_earth_chloride_solution 1000")
        .itemOutputs("5x gtceu:heavy_rare_earth_residue_dust")
        .outputFluids("gtceu:middle_rare_earth_solution 850", "gtceu:light_rare_earths_organic_phase 150", "gtceu:diluted_hydrochloric_acid 1000")

    // MIDDLE REE BRANCH
    // Oxalate precipitation
    event.recipes.gtceu.chemical_reactor("middle_ree_oxalate_cr")
        .inputFluids("gtceu:middle_rare_earth_solution 1000", "gtceu:oxalic_acid_solution 1000")
        .outputFluids("gtceu:middle_rare_earth_oxalate_slurry 2000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.centrifuge("middle_ree_oxalate_separation")
        .inputFluids("gtceu:middle_rare_earth_oxalate_slurry 2000")
        .outputFluids("gtceu:diluted_oxalic_acid 1000")
        .chancedOutput("gtceu:samarium_oxide_dust", 7000, 0)
        .chancedOutput("gtceu:gadolinium_oxide_dust", 6000, 0)
        .chancedOutput("gtceu:dysprosium_oxide_dust", 2000, 0)
        .chancedOutput("gtceu:europium_oxide_dust", 3000, 0)
        .chancedOutput("gtceu:terbium_oxide_dust", 1500, 0)
        .duration(80)
        .EUt(GTValues.VA[GTValues.IV])

    // HEAVY REE BRANCH
    // Nitration
    event.recipes.gtceu.chemical_reactor("heavy_ree_nitration_cr")
        .itemInputs("5x gtceu:heavy_rare_earth_residue_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .outputFluids("gtceu:heavy_rare_earths_nitrate_solution 1000")
        .outputFluidsRanged("gtceu:middle_rare_earth_solution", 0, 250)
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])
    
    // Alkaline washing
    event.recipes.gtceu.chemical_bath("heavy_ree_alkaline_wash")
        .inputFluids("gtceu:heavy_rare_earths_nitrate_solution 1000")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:heavy_rare_earths_hydroxide_slurry 1000")
        .itemOutputs("4x gtceu:sodium_nitrate_dust")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    // Heavy REE oxalate precipitation
    event.recipes.gtceu.chemical_reactor("heavy_ree_oxalate_cr")
        .inputFluids("gtceu:heavy_rare_earths_hydroxide_slurry 1000", "gtceu:oxalic_acid_solution 1000")
        .outputFluids("gtceu:heavy_rare_earth_oxalate_slurry 2000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])

    // Heavy REE oxalate separation
    event.recipes.gtceu.centrifuge("heavy_ree_oxalate_separation")
        .inputFluids("gtceu:heavy_rare_earth_oxalate_slurry 2000")
        .outputFluids("gtceu:diluted_oxalic_acid 1000")
        .chancedOutput("gtceu:ytteribium_oxide_dust", 5000, 0)
        .chancedOutput("gtceu:erbium_oxide_dust", 3000, 0)
        .chancedOutput("gtceu:holmium_oxide_dust", 2000, 0)
        .chancedOutput("gtceu:lutetium_oxide_dust", 1000, 0)
        .chancedOutput("gtceu:thulium_oxide_dust", 500, 0)
        .duration(360)
        .EUt(GTValues.VA[GTValues.IV])

    // INDIVIDUAL REE REFINING STEPS
    // Lanthanum
    event.recipes.gtceu.autoclave("lanthanum_fluorite_autoclave")
        .itemInputs("2x gtceu:lanthanum_oxide_dust", "6x gtceu:calcium_dust")
        .inputFluids("gtceu:fluorine 1000")
        .itemOutputs("4x gtceu:lanthanum_fluoride_dust", "6x gtceu:quicklime_dust") // TODO: register lanthanum fluoride (LaF3)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.electric_blast_furnace("lanthanum_fluoride_blast")
        .itemInputs("2x gtceu:lanthanum_fluoride_dust", "3x gtceu:calcium_dust")
        .itemOutputs("2x gtceu:lanthanum_dust", "3x gtceu:fluorite_dust")
        .inputFluids("gtceu:helium 125")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])
        .blastFurnaceTemp(2300)

    // Cerium - TODO (Ce2O3 + O2 -> CeO2, CeO2 + Ca -> Ce + CaO)

    // Praseodymium - TODO (Pr6O11 + Mg -> Pr + MgO) | Lategame line (Pr6O11 + ? -> Tiberium growth catalyst -> Tiberium line)

    // Neodymium - TODO (Nd2O3 + Ca + F2 -> NdF3 + CaO, NdF3 + Ca -> Nd + CaF2)

    // Promethium - TODO (Nd2O3 + Neutron Emitter -> Rad. Nd2O3, Rad. Nd2O3 + HCl -> Rad. NdCl3 + H2O, Rad. NdCl3 + 2-hydroxyisobutyric acid -> PmCl3 + Dep. NdCl3 + chance Fert. NdCl3)
    // (Fert. NdCl3 + Neutron Emitter -> Rad. NdCl3, cycle repeats) (PmCl3 + oxalic acid -> Pm2O3 + Dil. HCl + CO2 + CO, Pm2O3 + Ca -> Pm + CaO) (Dep. NdCl3 -> electrolysis -> Nd + Cl2)

    // Samarium - TODO (Sm2O3 + Al -> Sm + Al2O3)

    // Gadolinium - TODO (Gd2O3 + NaCl (aq) -> High power electrolysis -> Gd + NaCl + O2 + H2)

    // Holmium - TODO (Ho2O3 + Ca + F2 -> HoF3 + CaO, HoF3 + Ca -> Ho + CaF2)

    // Erbium - TODO (Er2O3 + Mg -> Er + MgO)

    // Thulium - TODO (Tm2O3 + NaCl (aq) -> High power electrolysis -> Tm + NaCl + O2 + H2)

    // Ytterbium - TODO (Yb2O3 + KCl (aq) -> High power electrolysis -> Yb + KCl + O2 + H2)


    // Terbium
    event.recipes.gtceu.large_chemical_reactor("terbium_oxide_lcr")
        .itemInputs("3x gtceu:terbium_oxide_dust", "12x gtceu:cuprous_chloride_dust")
        .itemOutputs("8x gtceu:terbium_salt_dust", "9x gtceu:cuprous_oxide_dust")
        .duration(40)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.autoclave("terbium_salt_autoclave")
        .itemInputs("4x gtceu:terbium_salt_dust", "6x gtceu:calcium_dust")
        .inputFluids(Fluid.of("gtceu:steam", 9600))
        .itemOutputs("1x gtceu:terbium_dust", "9x gtceu:calcium_chloride_dust")
        .outputFluids(Fluid.of("water", 100))
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.polarizer("terbium_polarize")
        .itemInputs("gtceu:long_terbium_rod")
        .itemOutputs("gtceu:long_magnetic_terbium_rod")
        .duration(200)
        .EUt(122880)

    // Lutetium
    event.recipes.gtceu.large_chemical_reactor("lutetium_oxide_acid_wash")
        .itemInputs("5x gtceu:lutetium_oxide_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("8x gtceu:lutetium_fluoride_dust")
        .outputFluids("minecraft:water 3000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace("lutetium_fluoride_blast")
        .itemInputs("8x gtceu:lutetium_fluoride_dust", "3x gtceu:calcium_dust")
        .itemOutputs("2x gtceu:lutetium_dust", "9x gtceu:fluorite_dust")
        .duration(120).EUt(7680)
        .blastFurnaceTemp(2300)

    // Europium
    event.recipes.gtceu.large_chemical_reactor("europium_oxide_reduction_lcr")
        .itemInputs("5x gtceu:europium_oxide_dust", "1x gtceu:zinc_dust")
        .itemOutputs("4x gtceu:europium_ii_oxide_dust", "2x gtceu:zincite_dust")
        .duration(160)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace("ebf_europium_oxide_reduction")
        .itemInputs("6x gtceu:europium_ii_oxide_dust", "2x gtceu:aluminium_dust")
        .itemOutputs("3x gtceu:europium_dust", "5x gtceu:bauxite_dust")
        .duration(120).EUt(30720)
        .blastFurnaceTemp(9001)

    event.recipes.gtceu.large_chemical_reactor("oxalic_acid_dihydrate")
        .notConsumable("gtceu:vanadium_pentoxide_dust")
        .itemInputs("minecraft:sugar")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 12000), "minecraft:water")
        .itemOutputs("6x gtceu:oxalic_acid_dihydrate_dust")
        .outputFluids("gtceu:nitric_oxide 12000")
        .duration(600).EUt(30)

    event.recipes.gtceu.electric_blast_furnace("oxalic_acid")
        .itemInputs("gtceu:oxalic_acid_dihydrate_dust")
        .itemOutputs("gtceu:oxalic_acid_dust")
        .outputFluids(Fluid.of("gtceu:steam", 19200))
        .duration(400)
        .blastFurnaceTemp(1700)
        .EUt(120)

    event.recipes.gtceu.electrolyzer("sugar_electrolysis")
        .itemInputs("23x minecraft:sugar")
        .itemOutputs("12x gtceu:carbon_dust")
        .outputFluids(Fluid.of("minecraft:water", 11000))
        .duration(3.2 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // Dilute solution distillations
    event.recipes.gtceu.distillation_tower("diluted_oxalic_acid_distillation")
        .inputFluids("gtceu:diluted_oxalic_acid 1200")
        .outputFluids("minecraft:water 900", "gtceu:oxalic_acid 300")
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.distillation_tower("diluted_tributyl_phosphate_distillation")
        .inputFluids("gtceu:diluted_tributyl_phosphate 1200")
        .outputFluids("minecraft:water 900", "gtceu:tributyl_phosphate 300")
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.distillation_tower("diluted_nitric_acid_distillation")
        .inputFluids("gtceu:diluted_nitric_acid 1200")
        .outputFluids("minecraft:water 900", "gtceu:nitric_acid 300")
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])
})
