// priority: 0
/**
 * NuclearCraft configuration
 */

// Live Fuel decomp
// Could also use this to change how these fuels are created?
ServerEvents.recipes(event => {

    // Constructing pellets
    const fuelpellets = [
        ["thorium", "thorium", "thorium_230"],
        ["thorium_232", "thorium", "thorium_232"],
        ["uranium_233", "uranium", "uranium_233"],
        ["uranium_235", "uranium", "uranium_235"],
        ["uranium", "uranium", "uranium_238"],
        ["neptunium_236", "neptunium", "neptunium_236"],
        ["neptunium", "neptunium", "neptunium_237"],
        ["plutonium_238", "plutonium_242", "plutonium_238"],
        ["plutonium", "plutonium_242", "plutonium_239"],
        ["plutonium_241", "plutonium_242", "plutonium_241"],
        ["plutonium_242", "plutonium_242", "plutonium_242"],
        ["americium_241", "americium", "americium_241"],
        ["americium_242", "americium", "americium_242"],
        ["americium", "americium", "americium_243"],
        ["curium_243", "curium", "curium_243"],
        ["curium_245", "curium", "curium_245"],
        ["curium", "curium", "curium_246"],
        ["curium_247", "curium", "curium_247"],
        ["berkelium", "berkelium", "berkelium_247"],
        ["berkelium_248", "berkelium", "berkelium_248"],
        ["californium_249", "californium_252", "californium_249"],
        ["californium_250", "californium_252", "californium_250"],
        ["californium", "californium_252", "californium_251"],
        ["californium_252", "californium_252", "californium_252"],
        ["einsteinium", "einsteinium", "einsteinium_252"],
        ["einsteinium_253", "einsteinium", "einsteinium_253"],
        ["einsteinium_254", "einsteinium", "einsteinium_254"],
        ["fermium_255", "fermium", "fermium_255"],
        ["fermium", "fermium", "fermium_257"],
        ["mendelevium", "mendelevium", "mendelevium_259"],
        ["nobelium", "nobelium", "nobelium_259"],
    ]

    for (const [main, base, name] of fuelpellets) {
        event.recipes.gtceu.mixer(`${name}_fuel_mixing`)
            .itemInputs(`3x gtceu:${main}_dust`, `6x gtceu:${base}_dust`)
            .itemOutputs(`1x kubejs:${name}_fuel_pellet`)
            .duration(50)
            .EUt(256)
            .circuit(7)
    }
    // Decomposing unspent pellets
    function decomp(name, fuel, ing1, ing2) {
        event.recipes.gtceu.thermal_centrifuge(`kubejs:${name}_fuel_pellet_decomp`)
            .itemInputs(fuel)
            .itemOutputs(ing1, ing2)
            .duration(3200)
            .EUt(48)
    }

    decomp("thorium_230", "kubejs:thorium_230_fuel_pellet", "3x gtceu:thorium_dust", "6x gtceu:thorium_dust")
    decomp("thorium_232", "kubejs:thorium_232_fuel_pellet", "3x gtceu:thorium_232_dust", "6x gtceu:thorium_dust")

    // Decomposing depleted pellets - no function due to differences in output count and types...
    // Th (EV)
    event.recipes.gtceu.centrifuge("thorium_230_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_thorium_230_fuel_pellet')
        .itemOutputs('1x gtceu:thorium_dust', '2x gtceu:tiny_thorium_232_dust', '1x gtceu:protactinium_dust', '1x gtceu:tiny_actinium_dust', '4x gtceu:lead_dust')
        .outputFluids('gtceu:radon 750')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV])
    event.recipes.gtceu.centrifuge("thorium_232_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_thorium_232_fuel_pellet')
        .itemOutputs('2x gtceu:thorium_dust', '2x gtceu:uranium_233_dust', '8x gtceu:tiny_uranium_235_dust', '1x gtceu:neptunium_236_dust', '3x gtceu:neptunium_dust', '6x gtceu:tiny_protactinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV])
    // U (IV)
    event.recipes.gtceu.centrifuge("uranium_233_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_uranium_233_fuel_pellet')
        .itemOutputs('4x gtceu:plutonium_242_dust', '4x gtceu:tiny_plutonium_dust', '4x gtceu:tiny_plutonium_241_dust', '3x gtceu:americium_dust', '3x gtceu:tiny_protactinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.centrifuge("uranium_235_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_uranium_235_fuel_pellet')
        .itemOutputs('1x gtceu:neptunium_dust', '40x gtceu:tiny_uranium_dust', '8x gtceu:tiny_plutonium_dust', '8x gtceu:tiny_plutonium_241_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.IV])
    event.recipes.gtceu.centrifuge("uranium_238_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_uranium_238_fuel_pellet')
        .itemOutputs('3x gtceu:uranium_dust', '1x gtceu:uranium_235_dust', '1x gtceu:neptunium_dust', '2x gtceu:tiny_plutonium_dust', '1x gtceu:tiny_plutonium_242_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.IV])
    // Np (LuV)
    event.recipes.gtceu.centrifuge("neptunium_236_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_neptunium_236_fuel_pellet')
        .itemOutputs('1x gtceu:neptunium_dust', '4x gtceu:plutonium_242_dust', '1x gtceu:americium_242_dust', '3x gtceu:americium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("neptunium_237_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_neptunium_237_fuel_pellet')
        .itemOutputs('2x gtceu:uranium_233_dust', '2x gtceu:neptunium_dust', '1x gtceu:plutonium_dust', '1x gtceu:plutonium_242_dust', '1x gtceu:americium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    // Pu (LuV)
    event.recipes.gtceu.centrifuge("plutonium_238_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_plutonium_238_fuel_pellet')
        .itemOutputs('1x gtceu:plutonium_238_dust', '2x gtceu:plutonium_dust', '2x gtceu:neptunium_dust', '3x gtceu:uranium_dust')
        .outputFluids('gtceu:radon 1000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("plutonium_239_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_plutonium_239_fuel_pellet')
        .itemOutputs('3x gtceu:plutonium_242_dust', '1x gtceu:curium_243_dust', '8x gtceu:tiny_plutonium_dust', '3x gtceu:curium_dust', '1x gtceu:plutonium_238_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("plutonium_241_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_plutonium_241_fuel_pellet')
        .itemOutputs('2x gtceu:plutonium_242_dust', '2x gtceu:americium_241_dust', '1x gtceu:americium_242_dust', '1x gtceu:americium_dust', '4x gtceu:curium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("plutonium_242_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_plutonium_242_fuel_pellet')
        .itemOutputs('2x gtceu:plutonium_242_dust', '2x gtceu:americium_dust', '1x gtceu:curium_dust', '7x gtceu:tiny_plutonium_238_dust', '1x gtceu:tiny_curium_243_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    // Am (LuV)
    event.recipes.gtceu.centrifuge("americium_241_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_americium_241_fuel_pellet')
        .itemOutputs('1x gtceu:americium_241_dust', '3x gtceu:plutonium_242_dust', '1x gtceu:plutonium_241_dust', '7x gtceu:tiny_curium_243_dust', '2x gtceu:polonium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("americium_242_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_americium_242_fuel_pellet')
        .itemOutputs('2x gtceu:americium_241_dust', '1x gtceu:curium_243_dust', '1x gtceu:curium_245_dust', '4x gtceu:curium_dust', '1x gtceu:curium_247_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    event.recipes.gtceu.centrifuge("americium_243_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_americium_243_fuel_pellet')
        .itemOutputs('2x gtceu:americium_dust', '1x gtceu:curium_245_dust', '2x gtceu:curium_dust', '1x gtceu:curium_247_dust', '5x gtceu:tiny_berkelium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])
    // Cm (ZPM)

    // Bk (ZPM)

    // Cf (ZPM)

    // Es (UV)

    // Fm (UV)

    // Md & No (UV)


    // event.shaped("2x nuclearcraft:plate_basic", [
    //     "TST",
    //     "SDS",
    //     "TST"
    // ], {
    //     T: "nuclearcraft:tough_alloy_ingot",
    //     S: "gtceu:tungsten_plate",
    //     D: "gtceu:double_steel_plate"
    // })

    // event.shaped("2x nuclearcraft:plate_advanced", [
    //     "TST",
    //     "SDS",
    //     "TST"
    // ], {
    //     T: "nuclearcraft:hard_carbon_ingot",
    //     S: "gtceu:yttrium_barium_cuprate_plate",
    //     D: "nuclearcraft:plate_basic"
    // })

    // event.recipes.gtceu.alloy_smelter("du_plating")
    //     .itemInputs("nuclearcraft:plate_advanced", "kubejs:stabilized_uranium")
    //     .itemOutputs("2x nuclearcraft:plate_du")
    //     .duration(400)
    //     .EUt(2000)

    // event.shaped("2x nuclearcraft:plate_elite", [
    //     "TST",
    //     "SDS",
    //     "TST"
    // ], {
    //     T: "nuclearcraft:rhodochrosite_dust",
    //     S: "gtceu:enderium_plate",
    //     D: "nuclearcraft:plate_du"
    // })

    // event.shaped("8x nuclearcraft:fission_reactor_casing", [
    //     "DDD",
    //     "DFD",
    //     "DDD"
    // ], {
    //     F: "gtceu:robust_machine_casing",
    //     D: "nuclearcraft:plate_basic"
    // })

    // event.shaped("nuclearcraft:fission_reactor_solid_fuel_cell", [
    //     "TST",
    //     "S S",
    //     "TST"
    // ], {
    //     T: "nuclearcraft:tough_alloy_ingot",
    //     S: "gtceu:tempered_glass"
    // })

    // event.shaped("nuclearcraft:fission_reactor_controller", [
    //     "DED",
    //     "EFE",
    //     "DED"
    // ], {
    //     F: "gtceu:robust_machine_casing",
    //     E: "#gtceu:circuits/ev",
    //     D: "nuclearcraft:plate_advanced"
    // })

    // event.shaped("nuclearcraft:heavy", [ // Heavy shielding plate
    //     "BBB",
    //     "MPM",
    //     "DDD"
    // ], {
    //     B: "#forge:plates/beryllium",
    //     M: "nuclearcraft:medium",
    //     P: "#forge:plastic_plates",
    //     D: "nuclearcraft:plate_du"
    // })

});

ServerEvents.tags("item", event => {

    event.add("forge:plastic_plates", "gtceu:polyvinyl_chloride_plate")
    event.add("forge:plastic_plates", "gtceu:polybenzimidazole_plate")
    event.add("forge:plastic_plates", "gtceu:polyethylene_plate")
    event.add("forge:plastic_plates", "gtceu:polytetrafluoroethylene_plate")
    event.add("forge:plastic_plates", "gtceu:polyethyl_cyanoacrylate_plate")

    event.add("forge:rubber_plates", "gtceu:silicone_rubber_plate")
    event.add("forge:rubber_plates", "gtceu:styrene_butadiene_rubber_plate")
    event.add("forge:rubber_plates", "gtceu:rubber_plate")
});
