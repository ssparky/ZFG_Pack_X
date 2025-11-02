/** Recipes regarding oil catalysts and distillation */

ServerEvents.recipes(event => {
    // Catalyst Creation
    event.recipes.gtceu.chemical_reactor("kubejs:scandium_lanthanum_oil_catalyst")
        .itemInputs("1x gtceu:scandium_dust", "3x gtceu:lanthanum_dust")
        .inputFluids("gtceu:chlorine 4000")
        .itemOutputs("8x gtceu:scandium_lanthanum_oil_catalyst_dust")
        .duration(220)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.chemical_reactor("kubejs:platinum_rhenium_oil_catalyst")
        .itemInputs("1x gtceu:platinum_dust", "1x gtceu:rhenium_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemOutputs("4x gtceu:platinum_rhenium_oil_catalyst_dust")
        .duration(180)
        .EUt(GTValues.VA[GTValues.IV])

    // Catalyzing cracked fractions
    const hydroFractions = [
        "lightly_hydro_cracked_gas",
        "severely_hydro_cracked_gas",
        "lightly_hydro_cracked_naphtha",
        "severely_hydro_cracked_naphtha",
        "lightly_hydro_cracked_light_fuel",
        "severely_hydro_cracked_light_fuel",
        "lightly_hydro_cracked_heavy_fuel",
        "severely_hydro_cracked_heavy_fuel"
    ];
    const steamFractions = [
        "lightly_steam_cracked_gas",
        "severely_steam_cracked_gas",
        "lightly_steam_cracked_naphtha",
        "severely_steam_cracked_naphtha",
        "lightly_steam_cracked_light_fuel",
        "severely_steam_cracked_light_fuel",
        "lightly_steam_cracked_heavy_fuel",
        "severely_steam_cracked_heavy_fuel"
    ];

    hydroFractions.forEach(fraction => {
        event.recipes.gtceu.mixer(`kubejs:scla_catalyzed_${fraction}`)
            .chancedInput("1x gtceu:scandium_lanthanum_oil_catalyst_dust", 250, 0)
            .inputFluids(`gtceu:${fraction} 1000`)
            .outputFluids(`gtceu:scla_catalyzed_${fraction} 1000`)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV])
        event.recipes.gtceu.mixer(`kubejs:ptre_catalyzed_${fraction}`)
            .chancedInput("1x gtceu:platinum_rhenium_oil_catalyst_dust", 75, 0)
            .inputFluids(`gtceu:${fraction} 1000`)
            .outputFluids(`gtceu:ptre_catalyzed_${fraction} 1000`)
            .duration(120)
            .EUt(GTValues.VA[GTValues.HV])
    })

    steamFractions.forEach(fraction => {
        event.recipes.gtceu.mixer(`kubejs:scla_catalyzed_${fraction}`)
            .chancedInput("1x gtceu:scandium_lanthanum_oil_catalyst_dust", 250, 0)
            .inputFluids(`gtceu:${fraction} 1000`)
            .outputFluids(`gtceu:scla_catalyzed_${fraction} 1000`)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV])
    })

    // Distillation of catalyzed fractions
    // ScLa catalyst - Cannot use loops or function calls due to variety of output counts
    // Refinery gas
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_hydro_cracked_gas")
        .inputFluids("gtceu:scla_catalyzed_lightly_hydro_cracked_gas 1000")
        .outputFluids("gtceu:methane 1600", "gtceu:hydrogen 1340", "gtceu:helium 20")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_hydro_cracked_gas")
        .inputFluids("gtceu:scla_catalyzed_severely_hydro_cracked_gas 1000")
        .outputFluids("gtceu:methane 1600", "gtceu:hydrogen 4340", "gtceu:helium 20")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_steam_cracked_gas")
        .inputFluids("gtceu:scla_catalyzed_lightly_steam_cracked_gas 1000")
        .chancedOutput("gtceu:carbon_dust", 500, 0)
        .outputFluids("gtceu:propene 150", "gtceu:ethane 160", "gtceu:ethylene 40", "gtceu:methane 782", "gtceu:helium 20")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_steam_cracked_gas")
        .inputFluids("gtceu:scla_catalyzed_severely_steam_cracked_gas 1000")
        .chancedOutput("gtceu:carbon_dust", 1500, 0)
        .outputFluids("gtceu:propene 4", "gtceu:ethane 30", "gtceu:ethylene 216", "gtceu:methane 1440", "gtceu:helium 20")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    // Naphtha
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_hydro_cracked_naphtha")
        .inputFluids("gtceu:scla_catalyzed_lightly_hydro_cracked_naphtha 1000")
        .outputFluids("gtceu:butane 900", "gtceu:propane 350", "gtceu:ethane 150", "gtceu:methane 100")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_hydro_cracked_naphtha")
        .inputFluids("gtceu:scla_catalyzed_severely_hydro_cracked_naphtha 1000")
        .outputFluids("gtceu:butane 25", "gtceu:propane 75", "gtceu:ethane 1800", "gtceu:methane 2200")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_steam_cracked_naphtha")
        .inputFluids("gtceu:scla_catalyzed_lightly_steam_cracked_naphtha 1000")
        .chancedOutput("gtceu:carbon_dust", 500, 0)
        .outputFluids("gtceu:heavy_fuel 75", "gtceu:light_fuel 125", "gtceu:toluene 120", "gtceu:benzene 200",
            "gtceu:butene 100", "gtceu:butadiene 175", "gtceu:propane 75", "gtceu:propene 150", "gtceu:ethane 25", "gtceu:ethylene 100", "gtceu:methane 50"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_steam_cracked_naphtha")
        .inputFluids("gtceu:scla_catalyzed_severely_steam_cracked_naphtha 1000")
        .chancedOutput("gtceu:carbon_dust", 1500, 0)
        .outputFluids("gtceu:heavy_fuel 10", "gtceu:light_fuel 25", "gtceu:toluene 10", "gtceu:benzene 40",
            "gtceu:butene 40", "gtceu:butadiene 50", "gtceu:propane 75", "gtceu:propene 350", "gtceu:ethane 175", "gtceu:ethylene 600", "gtceu:methane 750"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    // Light Fuel
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_hydro_cracked_light_fuel")
        .inputFluids("gtceu:scla_catalyzed_lightly_hydro_cracked_light_fuel 1000")
        .outputFluids("gtceu:naphtha 750", "gtceu:octane 150", "gtceu:butane 250", "gtceu:propane 275", "gtceu:ethane 75", "gtceu:methane 50")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_hydro_cracked_light_fuel")
        .inputFluids("gtceu:scla_catalyzed_severely_hydro_cracked_light_fuel 1000")
        .outputFluids("gtceu:naphtha 100", "gtceu:octane 10", "gtceu:butane 100", "gtceu:propane 175", "gtceu:ethane 1750", "gtceu:methane 2500")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_steam_cracked_light_fuel")
        .inputFluids("gtceu:scla_catalyzed_lightly_steam_cracked_light_fuel 1000")
        .chancedOutput("gtceu:carbon_dust", 500, 0)
        .outputFluids("gtceu:heavy_fuel 100", "gtceu:naphtha 300", "gtceu:toluene 160", "gtceu:benzene 300", "gtceu:butene 150",
            "gtceu:butadiene 90", "gtceu:propane 25", "gtceu:propene 120", "gtceu:ethane 5", "gtceu:ethylene 15", "gtceu:methane 10"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_steam_cracked_light_fuel")
        .inputFluids("gtceu:scla_catalyzed_severely_steam_cracked_light_fuel 1000")
        .chancedOutput("gtceu:carbon_dust", 1500, 0)
        .outputFluids("gtceu:heavy_fuel 15", "gtceu:naphtha 30", "gtceu:toluene 5", "gtceu:benzene 50", "gtceu:butene 50",
            "gtceu:butadiene 110", "gtceu:propane 75", "gtceu:propene 350", "gtceu:ethane 250", "gtceu:ethylene 350", "gtceu:methane 500"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    // Heavy Fuel
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_hydro_cracked_heavy_fuel")
        .inputFluids("gtceu:scla_catalyzed_lightly_hydro_cracked_heavy_fuel 1000")
        .outputFluids("gtceu:light_fuel 450", "gtceu:naphtha 75", "gtceu:butane 350", "gtceu:propane 250", "gtceu:ethane 50", "gtceu:methane 25")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_hydro_cracked_heavy_fuel")
        .inputFluids("gtceu:scla_catalyzed_severely_hydro_cracked_heavy_fuel 1000")
        .outputFluids("gtceu:light_fuel 100", "gtceu:naphtha 175", "gtceu:butane 120", "gtceu:propane 300", "gtceu:ethane 400", "gtceu:methane 650")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_lightly_steam_cracked_heavy_fuel")
        .inputFluids("gtceu:scla_catalyzed_lightly_steam_cracked_heavy_fuel 1000")
        .chancedOutput("gtceu:carbon_dust", 500, 0)
        .outputFluids("gtceu:light_fuel 250", "gtceu:naphtha 25", "gtceu:toluene 125", "gtceu:benzene 125", "gtceu:butene 80",
            "gtceu:butadiene 65", "gtceu:propane 15", "gtceu:propene 20", "gtceu:ethane 5", "gtceu:ethylene 25", "gtceu:methane 10"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.distillation_tower("kubejs:scla_catalyzed_severely_steam_cracked_heavy_fuel")
        .inputFluids("gtceu:scla_catalyzed_severely_steam_cracked_heavy_fuel 1000")
        .chancedOutput("gtceu:carbon_dust", 1500, 0)
        .outputFluids("gtceu:light_fuel 75", "gtceu:naphtha 100", "gtceu:toluene 40", "gtceu:benzene 250", "gtceu:butene 60",
            "gtceu:butadiene 50", "gtceu:propane 30", "gtceu:propene 250", "gtceu:ethane 275", "gtceu:ethylene 450", "gtceu:methane 500"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    // PtRe catalyst - hydro cracking only
    // Refinery gas
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_lightly_hydro_cracked_gas")
        .inputFluids("gtceu:ptre_catalyzed_lightly_hydro_cracked_gas 1000")
        .outputFluids("gtceu:ethane 500", "gtceu:methane 1000", "gtceu:hydrogen 1340", "gtceu:helium 20")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_severely_hydro_cracked_gas")
        .inputFluids("gtceu:ptre_catalyzed_severely_hydro_cracked_gas 1000")
        .outputFluids("gtceu:ethane 100", "gtceu:methane 1500", "gtceu:hydrogen 4340", "gtceu:helium 20")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    
    // Naphtha
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_lightly_hydro_cracked_naphtha")
        .inputFluids("gtceu:ptre_catalyzed_lightly_hydro_cracked_naphtha 1000")
        .outputFluids("gtceu:benzene 200", "gtceu:butane 800", "gtceu:propane 100", "gtceu:ethane 50", "gtceu:methane 50")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_severely_hydro_cracked_naphtha")
        .inputFluids("gtceu:ptre_catalyzed_severely_hydro_cracked_naphtha 1000")
        .outputFluids("gtceu:dimethylbenzene 15", "gtceu:ethylbenzene 35", "gtceu:butane 50", "gtceu:propane 100", "gtceu:ethane 1000", "gtceu:methane 1250")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])

    // Light Fuel
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_lightly_hydro_cracked_light_fuel")
        .inputFluids("gtceu:ptre_catalyzed_lightly_hydro_cracked_light_fuel 1000")
        .outputFluids("gtceu:naphtha 250", "gtceu:octane 300", "gtceu:dimethylbenzene 75", "gtceu:ethylbenzene 125",
            "gtceu:benzene 100", "gtceu:propane 100", "gtceu:ethane 25", "gtceu:methane 25"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_severely_hydro_cracked_light_fuel")
        .inputFluids("gtceu:ptre_catalyzed_severely_hydro_cracked_light_fuel 1000")
        .outputFluids("gtceu:naphtha 50", "gtceu:octane 40", "gtceu:dimethylbenzene 125", "gtceu:ethylbenzene 175",
            "gtceu:benzene 50", "gtceu:propane 250", "gtceu:ethane 1250", "gtceu:methane 1250"
        )
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])

    // Heavy Fuel
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_lightly_hydro_cracked_heavy_fuel")
        .inputFluids("gtceu:ptre_catalyzed_lightly_hydro_cracked_heavy_fuel 1000")
        .outputFluids("gtceu:light_fuel 300", "gtceu:naphtha 25", "gtceu:octane 250", "gtceu:butane 400", "gtceu:propane 300", "gtceu:ethane 25", "gtceu:methane 10")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.distillation_tower("kubejs:ptre_catalyzed_severely_hydro_cracked_heavy_fuel")
        .inputFluids("gtceu:ptre_catalyzed_severely_hydro_cracked_heavy_fuel 1000")
        .outputFluids("gtceu:light_fuel 75", "gtceu:naphtha 75", "gtceu:octane 100", "gtceu:toluene 125", "gtceu:butane 160", "gtceu:propane 340", "gtceu:ethane 350", 
            "gtceu:methane 500")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])
})