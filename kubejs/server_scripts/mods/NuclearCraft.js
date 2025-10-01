// priority: 0
/**
 * NuclearCraft configuration
 */

// Live Fuel decomp
// Could also use this to change how these fuels are created?
ServerEvents.recipes(event => {

    // Constructing pellets
    const fuelpellets = [
        ["thorium", "thorium_232", "thorium_230", 9],
        ["thorium_232", "thorium_232", "thorium_232", 7],
        ["uranium_233", "uranium", "uranium_233", 7],
        ["uranium_235", "uranium", "uranium_235", 7],
        ["uranium", "uranium", "uranium_238", 9],
        ["neptunium_236", "neptunium", "neptunium_236", 7],
        ["neptunium", "neptunium", "neptunium_237", 9],
        ["plutonium_238", "plutonium_242", "plutonium_238", 7],
        ["plutonium", "plutonium_242", "plutonium_239", 7],
        ["plutonium_241", "plutonium_242", "plutonium_241", 7],
        ["plutonium_242", "plutonium_242", "plutonium_242", 9],
        ["americium_241", "americium", "americium_241", 7],
        ["americium_242", "americium", "americium_242", 7],
        ["americium", "americium", "americium_243", 9],
        ["curium_243", "curium", "curium_243", 7],
        ["curium_245", "curium", "curium_245", 7],
        ["curium", "curium", "curium_246", 9],
        ["curium_247", "curium", "curium_247", 7],
        ["berkelium", "berkelium", "berkelium_247", 9],
        ["berkelium_248", "berkelium", "berkelium_248", 7],
        ["californium_249", "californium_252", "californium_249", 7],
        ["californium_250", "californium_252", "californium_250", 7],
        ["californium", "californium_252", "californium_251", 7],
        ["californium_252", "californium_252", "californium_252", 9],
        ["einsteinium", "einsteinium", "einsteinium_252", 9],
        ["einsteinium_253", "einsteinium", "einsteinium_253", 7],
        ["einsteinium_254", "einsteinium", "einsteinium_254", 7],
        ["fermium_255", "fermium", "fermium_255", 7],
        ["fermium", "fermium", "fermium_257", 9],
        ["mendelevium", "mendelevium", "mendelevium_259", 9],
        ["nobelium", "nobelium", "nobelium_259", 9],
    ]

    for (const [main, base, name, circuit] of fuelpellets) {
        event.recipes.gtceu.mixer(`${name}_fuel_mixing`)
            .itemInputs(`3x gtceu:${main}_dust`, `6x gtceu:${base}_dust`)
            .itemOutputs(`1x kubejs:${name}_fuel_pellet`)
            .duration(50)
            .EUt(256)
            .circuit(circuit)
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
    decomp("uranium_233", "kubejs:uranium_233_fuel_pellet", "3x gtceu:uranium_233_dust", "6x gtceu:uranium_dust")
    decomp("uranium_235", "kubejs:uranium_235_fuel_pellet", "3x gtceu:uranium_235_dust", "6x gtceu:uranium_dust")
    decomp("uranium_238", "kubejs:uranium_238_fuel_pellet", "3x gtceu:uranium_dust", "6x gtceu:uranium_dust")
    decomp("neptunium_236", "kubejs:neptunium_236_fuel_pellet", "3x gtceu:neptunium_236_dust", "6x gtceu:neptunium_dust")
    decomp("neptunium_237", "kubejs:neptunium_237_fuel_pellet", "3x gtceu:neptunium_dust", "6x gtceu:neptunium_dust")
    decomp("plutonium_238", "kubejs:plutonium_238_fuel_pellet", "3x gtceu:plutonium_238_dust", "6x gtceu:plutonium_242_dust")
    decomp("plutonium_239", "kubejs:plutonium_239_fuel_pellet", "3x gtceu:plutonium_dust", "6x gtceu:plutonium_242_dust")
    decomp("plutonium_241", "kubejs:plutonium_241_fuel_pellet", "3x gtceu:plutonium_241_dust", "6x gtceu:plutonium_242_dust")
    decomp("plutonium_242", "kubejs:plutonium_242_fuel_pellet", "3x gtceu:plutonium_242_dust", "6x gtceu:plutonium_242_dust")
    decomp("americium_241", "kubejs:americium_241_fuel_pellet", "3x gtceu:americium_241_dust", "6x gtceu:americium_dust")
    decomp("americium_242", "kubejs:americium_242_fuel_pellet", "3x gtceu:americium_242_dust", "6x gtceu:americium_dust")
    decomp("americium_243", "kubejs:americium_243_fuel_pellet", "3x gtceu:americium_dust", "6x gtceu:americium_dust")
    decomp("curium_243", "kubejs:curium_243_fuel_pellet", "3x gtceu:curium_243_dust", "6x gtceu:curium_dust")
    decomp("curium_245", "kubejs:curium_245_fuel_pellet", "3x gtceu:curium_245_dust", "6x gtceu:curium_dust")
    decomp("curium_246", "kubejs:curium_246_fuel_pellet", "3x gtceu:curium_dust", "6x gtceu:curium_dust")
    decomp("curium_247", "kubejs:curium_247_fuel_pellet", "3x gtceu:curium_247_dust", "6x gtceu:curium_dust")
    decomp("berkelium_247", "kubejs:berkelium_247_fuel_pellet", "3x gtceu:berkelium_dust", "6x gtceu:berkelium_dust")
    decomp("berkelium_248", "kubejs:berkelium_248_fuel_pellet", "3x gtceu:berkelium_248_dust", "6x gtceu:berkelium_dust")
    decomp("californium_249", "kubejs:californium_249_fuel_pellet", "3x gtceu:californium_249_dust", "6x gtceu:californium_252_dust")
    decomp("californium_250", "kubejs:californium_250_fuel_pellet", "3x gtceu:californium_250_dust", "6x gtceu:californium_252_dust")
    decomp("californium_251", "kubejs:californium_251_fuel_pellet", "3x gtceu:californium_dust", "6x gtceu:californium_252_dust")
    decomp("californium_252", "kubejs:californium_252_fuel_pellet", "3x gtceu:californium_252_dust", "6x gtceu:californium_252_dust")
    decomp("einsteinium_252", "kubejs:einsteinium_252_fuel_pellet", "3x gtceu:einsteinium_dust", "6x gtceu:einsteinium_dust")
    decomp("einsteinium_253", "kubejs:einsteinium_253_fuel_pellet", "3x gtceu:einsteinium_253_dust", "6x gtceu:einsteinium_dust")
    decomp("einsteinium_254", "kubejs:einsteinium_254_fuel_pellet", "3x gtceu:einsteinium_254_dust", "6x gtceu:einsteinium_dust")
    decomp("fermium_255", "kubejs:fermium_255_fuel_pellet", "3x gtceu:fermium_255_dust", "6x gtceu:fermium_dust")
    decomp("fermium_257", "kubejs:fermium_257_fuel_pellet", "3x gtceu:fermium_dust", "6x gtceu:fermium_dust")
    decomp("mendelevium_259", "kubejs:mendelevium_259_fuel_pellet", "3x gtceu:mendelevium_dust", "6x gtceu:mendelevium_dust")
    decomp("nobelium_259", "kubejs:nobelium_259_fuel_pellet", "3x gtceu:nobelium_dust", "6x gtceu:nobelium_dust")

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
    event.recipes.gtceu.centrifuge("curium_243_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_curium_243_fuel_pellet')
        .itemOutputs('4x gtceu:curium_dust', '2x gtceu:berkelium_dust', '1x gtceu:berkelium_248_dust', '1x gtceu:californium_249_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("curium_245_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_curium_245_fuel_pellet')
        .itemOutputs('4x gtceu:berkelium_dust', '1x gtceu:berkelium_248_dust', '2x gtceu:californium_252_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("curium_246_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_curium_246_fuel_pellet')
        .itemOutputs('2x gtceu:curium_dust', '13x gtceu:tiny_curium_247_dust', '2x gtceu:berkelium_dust', '7x gtceu:tiny_berkelium_248_dust', '4x gtceu:tiny_californium_249_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("curium_247_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_curium_247_fuel_pellet')
        .itemOutputs('3x gtceu:berkelium_dust', '1x gtceu:berkelium_248_dust', '1x gtceu:californium_dust', '4x gtceu:californium_252_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    // Bk (ZPM)
    event.recipes.gtceu.centrifuge("berkelium_247_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_berkelium_247_fuel_pellet')
        .itemOutputs('2x gtceu:berkelium_dust', '11x gtceu:tiny_berkelium_248_dust', '1x gtceu:californium_249_dust', '2x gtceu:californium_252_dust', '1x gtceu:tiny_einsteinium_253_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("berkelium_248_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_berkelium_248_fuel_pellet')
        .itemOutputs('1x gtceu:californium_249_dust', '1x gtceu:californium_dust', '4x gtceu:californium_252_dust', '1x gtceu:einsteinium_dust', '1x gtceu:tiny_einsteinium_254_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    // Cf (ZPM)
    event.recipes.gtceu.centrifuge("californium_249_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_californium_249_fuel_pellet')
        .itemOutputs('2x gtceu:californium_250_dust', '1x gtceu:californium_dust', '2x gtceu:californium_252_dust', '2x gtceu:einsteinium_dust', '2x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("californium_250_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_californium_250_fuel_pellet')
        .itemOutputs('3x gtceu:curium_dust', '2x gtceu:berkelium_248_dust', '3x gtceu:tiny_californium_249_dust', '6x gtceu:tiny_californium_250_dust', '3x gtceu:radium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("californium_251_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_californium_251_fuel_pellet')
        .itemOutputs('5x gtceu:tiny_californium_dust', '4x gtceu:californium_252_dust', '2x gtceu:einsteinium_dust', '1x gtceu:einsteinium_253_dust', '4x gtceu:tiny_einsteinium_254_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    event.recipes.gtceu.centrifuge("californium_252_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_californium_252_fuel_pellet')
        .itemOutputs('2x gtceu:californium_252_dust', '2x gtceu:einsteinium_dust', '4x gtceu:tiny_einsteinium_253_dust', '3x gtceu:tiny_einsteinium_254_dust', '4x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM])
    // Es (UV)
    event.recipes.gtceu.centrifuge("einsteinium_252_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_einsteinium_252_fuel_pellet')
        .itemOutputs('2x gtceu:einsteinium_dust', '1x gtceu:californium_250_dust', '1x gtceu:einsteinium_253_dust', '5x gtceu:tiny_californium_249_dust', '4x gtceu:tiny_fermium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    event.recipes.gtceu.centrifuge("einsteinium_253_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_einsteinium_253_fuel_pellet')
        .itemOutputs('2x gtceu:fermium_255_dust', '1x gtceu:fermium_dust', '1x gtceu:californium_dust', '12x gtceu:tiny_einsteinium_dust', '3x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    event.recipes.gtceu.centrifuge("einsteinium_254_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_einsteinium_254_fuel_pellet')
        .itemOutputs('2x gtceu:fermium_255_dust', '3x gtceu:fermium_dust', '2x gtceu:californium_252_dust', '1x gtceu:einsteinium_253_dust', '3x gtceu:tiny_mendelevium_dust', '6x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    // Fm (UV)
    event.recipes.gtceu.centrifuge("fermium_255_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_fermium_255_fuel_pellet')
        .itemOutputs('2x gtceu:fermium_dust', '2x gtceu:einsteinium_254_dust', '2x gtceu:mendelevium_dust', '1x gtceu:nobelium_dust', '2x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    event.recipes.gtceu.centrifuge("fermium_257_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_fermium_257_fuel_pellet')
        .itemOutputs('4x gtceu:tiny_fermium_255_dust', '1x gtceu:fermium_dust', '2x gtceu:einsteinium_dust', '1x gtceu:einsteinium_253_dust', '5x gtceu:mendelevium_dust', '6x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    // Md & No (UV)
    event.recipes.gtceu.centrifuge("mendelevium_259_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_mendelevium_259_fuel_pellet')
        .itemOutputs('2x gtceu:nobelium_dust', '2x gtceu:fermium_dust', '1x gtceu:einsteinium_dust', '3x gtceu:californium_252_dust', '16x gtceu:tiny_actinium_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
    event.recipes.gtceu.centrifuge("nobelium_259_fuel_pellet_decompdepleted")
        .itemInputs('kubejs:depleted_nobelium_259_fuel_pellet')
        .itemOutputs('1x gtceu:fermium_dust', '1x gtceu:californium_250_dust', '2x gtceu:californium_252_dust', '1x gtceu:einsteinium_dust', '2x gtceu:actinium_dust', '8x gtceu:tiny_radium_dust')
        .outputFluidsRanged('gtceu:radon', 500, 2000)
        .outputFluidsRanged('gtceu:oganesson', 0, 250)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])

    // Casing & Fuel cell recipes
    event.shaped("4x kubejs:fission_reactor_casing", [
        "DDD",
        "DFD",
        "DDD"
    ], {
        F: "gtceu:ultimet_frame",
        D: "kubejs:heavy_radiation_shielding_plate"
    })

    event.shaped("kubejs:fission_reactor_fuel_cell", [
        "TST",
        "SMS",
        "TST"
    ], {
        T: "gtceu:tough_alloy_rod",
        S: "gtceu:tempered_glass",
        M: "kubejs:graphite_electrode" // TODO: more advanced electrode once registered?
    })

    // Controllers (TODO:)
    // event.shaped("nuclearcraft:fission_reactor_controller", [
    //     "DED",
    //     "EFE",
    //     "DED"
    // ], {
    //     F: "gtceu:robust_machine_casing",
    //     E: "#gtceu:circuits/ev",
    //     D: "nuclearcraft:plate_advanced"
    // })

    // Fission recipes
    const fissionFuels = [
        ["thorium_230", 7700, 120, "minecraft:water 4000"],
        ["thorium_232", 4300, 180, "minecraft:water 4000"],
        ["uranium_233", 8600, 90, "minecraft:water 4000"],
        ["uranium_235", 7200, 140, "minecraft:water 4000"],
        ["uranium_238", 1600, 240, "minecraft:water 4000"],

        ["neptunium_236", 12000, 70, "gtceu:distilled_water 4000"],
        ["neptunium_237", 3500, 240, "gtceu:distilled_water 4000"],
        ["plutonium_238", 32000, 85, "gtceu:distilled_water 4000"],
        ["plutonium_239", 17000, 150, "gtceu:distilled_water 4000"],
        ["plutonium_241", 22000, 110, "gtceu:distilled_water 4000"],
        ["plutonium_242", 5800, 240, "gtceu:distilled_water 4000"],
        ["americium_241", 47000, 60, "gtceu:distilled_water 4000"],
        ["americium_242", 28000, 120, "gtceu:distilled_water 4000"],
        ["americium_243", 8300, 240, "gtceu:distilled_water 4000"],

        ["curium_243", 62000, 90, "gtceu:pcb_coolant 4000"],
        ["curium_245", 48000, 140, "gtceu:pcb_coolant 4000"],
        ["curium_246", 10200, 240, "gtceu:pcb_coolant 4000"],
        ["curium_247", 38000, 180, "gtceu:pcb_coolant 4000"],
        ["berkelium_247", 12000, 240, "gtceu:pcb_coolant 4000"],
        ["berkelium_248", 78000, 65, "gtceu:pcb_coolant 4000"],
        ["californium_249", 58000, 130, "gtceu:pcb_coolant 4000"],
        ["californium_250", 180000, 100, "gtceu:pcb_coolant 4000"],
        ["californium_251", 98000, 110, "gtceu:pcb_coolant 4000"],
        ["californium_252", 24000, 240, "gtceu:pcb_coolant 4000"],

        ["einsteinium_252", 30000, 240, "gtmutils:quantum_coolant 4000"],
        ["einsteinium_253", 135000, 135, "gtmutils:quantum_coolant 4000"],
        ["einsteinium_254", 170000, 100, "gtmutils:quantum_coolant 4000"],
        ["fermium_255", 320000, 80, "gtmutils:quantum_coolant 4000"],
        ["fermium_257", 90000, 180, "gtmutils:quantum_coolant 4000"],
        ["mendelevium_259", 400000, 90, "gtmutils:quantum_coolant 4000"],
        ["nobelium_259", 750000, 75, "gtmutils:quantum_coolant 4000"]
    ]

    for (const [type, power, time, coolant] of fissionFuels) {
        event.recipes.gtceu.fission_reactor_power(`${type}_fuel_power`)
            .itemInputs(`4x kubejs:${type}_fuel_pellet`)
            .inputFluids(coolant)
            .itemOutputs(`4x kubejs:depleted_${type}_fuel_pellet`)
            .EUt(-power)
            .duration(time*20)
        event.recipes.gtceu.fission_reactor_breeder(`${type}_fuel_breeder`)
            .itemInputs(`kubejs:${type}_fuel_pellet`)
            .itemOutputs(`kubejs:depleted_${type}_fuel_pellet`)
            .EUt(power**1.15)
            .duration((time*20)/3)
        event.recipes.gtceu.fission_reactor_rtg(`${type}_fuel_rtg`)
            .itemInputs(`kubejs:${type}_fuel_pellet`)
            .itemOutputs(`kubejs:depleted_${type}_fuel_pellet`)
            .EUt((-power)/16)
            .duration((time*20)*8)
    }

    // Replace thorium gain from deepslate to mainly thorium 232
    event.remove({id:"gtceu:macerator/macerate_deepslate"})
    event.recipes.gtceu.macerator("macerate_deepslate")
        .itemInputs("minecraft:deepslate")
        .itemOutputs("gtceu:deepslate_dust")
        .chancedOutput("gtceu:thorium_232_dust", 250, 0)
        .chancedOutput("gtceu:thorium_dust", 100, 0)
        .EUt(2)
        .duration(150)

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
