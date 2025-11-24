ServerEvents.recipes(event => {
    // Actual uses for recipes themselves should be in gregtech/tiered_recipes.js
    // Water - ULV-MV
    // Distilled Water - ULV-EV (req at HV)
    // Lubricant - ULV-LUV (req at IV)
    // Silicone Lubricant - ULV-UHV (req at ZPM)
    // UPWater - ULV-MAX (req at UEV)

    // Silicone lubricant (Fluorosilicone Oil)
    // Silicon + HCl -> (EBF @ High temp) -> Trichlorosilane + Hydrogen
    event.recipes.gtceu.electric_blast_furnace("trichlorosilane")
        .itemInputs("gtceu:silicon_dust")
        .inputFluids("gtceu:hydrochloric_acid 3000")
        .outputFluids("gtceu:trichlorosilane 1000", "gtceu:hydrogen 2000") 
        .blastFurnaceTemp(1800)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    // Allyl Chloride + Trichlorosilane -> (Chem reactor) -> Chloropropyltrichlorosilane
    event.recipes.gtceu.chemical_reactor("cptcs")
        .inputFluids("gtceu:allyl_chloride 1000", "gtceu:trichlorosilane 1000")
        .outputFluids("gtceu:chloropropyltrichlorosilane 1000")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.EV]);
    // CPTCS + HF -> (Chem Reactor) -> Trifluoropropyltrichlorosilane + HCl
    event.recipes.gtceu.chemical_reactor("tfptcs")
        .inputFluids("gtceu:chloropropyltrichlorosilane 1000", "gtceu:hydrofluoric_acid 1000")
        .outputFluids("gtceu:trifluoropropyltrichlorosilane 1000", "gtceu:hydrochloric_acid 1000") // TODO: add TFPTCS
        .duration(180)
        .EUt(GTValues.VA[GTValues.EV]);
    // Polydimethylsiloxane + TFPTCS + H2SO4 (Cat.) -> (Chem reactor) -> Fluorosilicone Oil
    event.recipes.gtceu.chemical_reactor("fluorosilicone_oil")
        .itemInputs("2x gtceu:polydimethylsiloxane_dust")
        .inputFluids("gtceu:trifluoropropyltrichlorosilane 1000")
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:silicone_lubricant 1000") 
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV]); 

    // Ultra-pure water
    event.recipes.gtceu.neutron_chamber("ultra_pure_water")
        .chancedInput("6x kubejs:neutron_emitter", 25, 0)
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:distilled_water 500", "gtceu:hydrochloric_acid 1000")
        .itemOutputs("gtceu:salt_dust")
        .outputFluids("gtceu:ultra_pure_water 750")
        .chancedOutput("gtceu:sodium_bicarbonate_dust", 2480, 0)
        .chancedOutput("gtceu:calcium_chloride_dust", 550, 0)
        .chancedOutput("gtceu:salt_dust", 240, 0)
        .chancedOutput("gtceu:magnesium_chloride_dust", 190, 0)
        .chancedOutput("gtceu:sodium_bisulfate_dust", 130, 0)
        .chancedOutput("gtceu:rock_salt_dust", 10, 0)
        .chancedOutput("gtceu:sodium_nitrate_dust", 5, 0)
        .chancedOutput("gtceu:cuprous_chloride_dust", 2, 0)
        .chancedOutput("gtceu:iron_ii_chloride_dust", 1, 0)
        .duration(150)
        .EUt(GTValues.VHA[GTValues.UV])

    // Neoprene
    // Acetylene + Cuprous Chloride (Cat.) -> (Chem reactor) -> Vinylacetylene
    event.recipes.gtceu.chemical_reactor("vinylacetylene")
        .inputFluids("gtceu:acetylene 2000")
        .notConsumable("gtceu:cuprous_chloride_dust")
        .outputFluids("gtceu:vinylacetylene 1000")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);
    // Vinylacetylene + HCl + Cuprous Chloride (Cat.) -> (Chem reactor) -> Chloroprene
    event.recipes.gtceu.chemical_reactor("chloroprene")
        .inputFluids("gtceu:vinylacetylene 1000", "gtceu:hydrochloric_acid 1000")
        .notConsumable("gtceu:cuprous_chloride_dust")
        .outputFluids("gtceu:chloroprene 1000")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.IV]);
    // Potassium Bisulfate + H2SO4 (Cat.) + Cryotheum (Coolant) -> (Chem reactor) -> Potassium Persulfate + Hydrogen
    event.recipes.gtceu.chemical_reactor("potassium_persulfate")
        .itemInputs("gtceu:potassium_bisulfate_dust", "kubejs:cryotheum_dust")
        .notConsumableFluid("gtceu:sulfuric_acid 500")
        .itemOutputs("gtceu:potassium_persulfate_dust") 
        .outputFluids("gtceu:hydrogen 1000")
        .duration(300)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.HV]);
    // Chloroprene + Potassium Persulfate (Cat.) + Oxygen -> (polymerization) -> Polychloroprene
    event.recipes.gtceu.polymerization("polychloroprene")
        .inputFluids("gtceu:chloroprene 1000", "gtceu:oxygen 3000")
        .notConsumable("gtceu:potassium_persulfate_dust")
        .outputFluids("gtceu:polychloroprene 1000") 
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV]);
    // Zinc dust + Oxygen -> (Arc Furnace) -> Zincite [Recipe needed because Zincite (ZnO) does not have a recipe natively]
    event.recipes.gtceu.arc_furnace("zincite")
        .itemInputs("gtceu:zinc_dust")
        .inputFluids("gtceu:oxygen 1000")
        .itemOutputs("2x gtceu:zincite_dust")
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    // Polychloroprene + Magnesia + Zincite -> (Chem reactor) -> Neoprene
    event.recipes.gtceu.chemical_reactor("neoprene")
        .inputFluids("gtceu:polychloroprene 500")
        .chancedInput("3x gtceu:magnesia_dust", 6000, 0)
        .chancedInput("2x gtceu:zincite_dust", 2000, 0)
        .outputFluids("gtceu:neoprene 500")
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV]);

    // NBR + Hydrogenated NBR
    // Liquid Meat [Animal fat stand-in] + NaOH -> (Chem reactor) -> Glycerol + Sodium Stearate
    event.recipes.gtceu.chemical_reactor("sodium_stearate")
        .inputFluids("gtceu:blood 1000")
        .itemInputs("2x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:glycerol 250")
        .itemOutputs("2x gtceu:sodium_stearate_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.MV]);
    // Sodium Stearate + Acrylonitrile + Butadiene + Potassium Persulfate + Water -> (polymerization) -> NBR Latex
    event.recipes.gtceu.polymerization("nbr_latex")
        .itemInputs("gtceu:sodium_stearate_dust", "gtceu:potassium_persulfate_dust")
        .inputFluids("gtceu:acrylonitrile 500", "gtceu:butadiene 500", "minecraft:water 1000")
        .outputFluids("gtceu:nbr_latex 2000")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    // NBR Latex + calcium nitrate + aluminium sulfate -> (Chem reactor) -> NBR + NBR Waste Water
    event.recipes.gtceu.chemical_reactor("nbr_coagulation")
        .inputFluids("gtceu:nbr_latex 2000")
        .chancedInput("gtceu:calcium_carbonate_dust", 4000, 0)
        .chancedInput("gtceu:zinc_sulfate_dust", 1500, 0)
        .outputFluids("gtceu:nitrile_rubber 1500", "minecraft:water 500")
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);
    // Rhodium metal + Chlorine -> (EBF @ high temp) -> Anhydrous Rhodium Chloride
    event.recipes.gtceu.electric_blast_furnace("rhodium_chloride")
        .itemInputs("gtceu:rhodium_dust")
        .inputFluids("gtceu:chlorine 3000")
        .itemOutputs("4x gtceu:anhydrous_rhodium_chloride_dust")
        .blastFurnaceTemp(2600)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV]);
    // Anhydrous Rhodium Chloride + Distilled water -> (Chem bath)  -> Rhodium Chloride Hydrate
    event.recipes.gtceu.chemical_bath("rhcl3_hydrate")
        .itemInputs("gtceu:anhydrous_rhodium_chloride_dust")
        .inputFluids("gtceu:distilled_water 3000")
        .itemOutputs("4x gtceu:rhodium_chloride_hydrate_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.HV]);
    // Phosphorus Trichloride + Chlorobenzene + Sodium -> (Chem reactor) -> Triphenylphosphine + Salt
    event.recipes.gtceu.chemical_reactor("triphenylphosphine")
        .inputFluids("gtceu:phosphorus_trichloride 1000", "gtceu:chlorobenzene 3000")
        .itemInputs("3x gtceu:sodium_dust")
        .itemOutputs("4x gtceu:triphenylphosphine_dust")
        .itemOutputs("6x gtceu:salt_dust")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    // Rhodium Chloride Hydrate + Triphenylphosphine + Ethanol (Cat.) -> (Chem reactor) -> Wilkinson's Catalyst
    event.recipes.gtceu.chemical_reactor("wilkinsons_catalyst")
        .itemInputs("gtceu:rhodium_chloride_hydrate_dust", "gtceu:triphenylphosphine_dust")
        .notConsumableFluid("gtceu:ethanol 1000")
        .itemOutputs("2x gtceu:wilkinsons_catalyst_dust")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    // NBR + Hydrogen + Wilkinson's Catalyst (Cat.) -> (Cracker @ High Voltage) -> HNBR
    event.recipes.gtceu.cracker("hnbr")
        .chancedInput("gtceu:wilkinsons_catalyst_dust", 250, 0)
        .inputFluids("gtceu:nitrile_rubber 1000", "gtceu:hydrogen 2000")
        .outputFluids("gtceu:hydrogenated_nitrile_rubber 1000")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.UV]);
})