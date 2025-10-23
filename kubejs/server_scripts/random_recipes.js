/** THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE */

ServerEvents.recipes(event => {

    // Snad
    event.shapeless("snad:snad", ["2x kubejs:double_compressed_sand"]).id("snad:snad")
    event.shapeless("snad:red_snad", ["2x kubejs:double_compressed_red_sand"]).id("snad:red_snad")

    // snaded sand snad
    compacting(event, "kubejs:compressed_sand", "minecraft:sand");
    compacting(event, "kubejs:double_compressed_sand", "kubejs:compressed_sand");

    // red snaded red sand red snad
    compacting(event, "kubejs:compressed_red_sand", "minecraft:red_sand");
    compacting(event, "kubejs:double_compressed_red_sand", "kubejs:compressed_red_sand");

    // Netherrack
    event.recipes.gtceu.chemical_reactor("dust_to_netherrack")
        .itemInputs("kubejs:dust")
        .inputFluids(Fluid.of("minecraft:lava", 1000))
        .itemOutputs("minecraft:netherrack")
        .duration(20)
        .EUt(32)

    // Lava from Magma
    event.recipes.gtceu.chemical_reactor("lava_from_magma")
        .itemInputs("minecraft:magma_block")
        .outputFluids(Fluid.of("minecraft:lava", 1000))
        .EUt(32)
        .duration(120)

    // Slime ball from plant ball
    event.smelting("2x minecraft:slime_ball", "gtceu:plant_ball")

    // Blazerod Shenanigans
    event.shapeless("minecraft:blaze_rod", "minecraft:brewing_stand")
    event.replaceInput({ input: "gtceu:wood_plate" }, "gtceu:wood_plate", "#minecraft:planks")

    // Processing for Ender Spores
    event.shapeless("kubejs:ender_spore", ["minecraft:chorus_flower", "minecraft:ender_pearl", "gtceu:fertilizer", "minecraft:experience_bottle"])
    event.smelting("minecraft:ender_pearl", "kubejs:ender_spore")

    event.recipes.gtceu.greenhouse("kubejs:greenhouse_boosted_ender_spore")
        .circuit(2)
        .notConsumable("kubejs:ender_spore")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids(Fluid.of("minecraft:water"))
        .itemOutputs("8x kubejs:ender_spore")
        .duration(640)
        .EUt(120)

    // Change recipes for LV and MV macerators
    event.shaped("gtceu:lv_macerator", [
        "PMB",
        "WWH",
        "CCW"
    ], {
        P: "gtceu:lv_electric_piston",
        M: "gtceu:lv_electric_motor",
        B: "gtceu:wrought_iron_buzz_saw_blade",
        W: "gtceu:tin_single_cable",
        H: "gtceu:lv_machine_hull",
        C: "#gtceu:circuits/lv"
    }).id("gtceu:shaped/lv_macerator")

    event.shaped("gtceu:mv_macerator", [
        "PMB",
        "WWH",
        "CCW"
    ], {
        P: "gtceu:mv_electric_piston",
        M: "gtceu:mv_electric_motor",
        B: "gtceu:steel_buzz_saw_blade",
        W: "gtceu:copper_single_cable",
        H: "gtceu:mv_machine_hull",
        C: "#gtceu:circuits/mv"
    }).id("gtceu:shaped/mv_macerator")

    // Change recipes for end game diodes to use complex smd diodes
    event.findRecipes({ id: /gtceu:shaped\/(uiv|max)_diode/ }).forEach(recipe => {
        recipe.replaceInput("gtceu:advanced_smd_diode", "kubejs:complex_smd_diode")
    })

    // Implement Cryolobus smelting
    event.remove({ id: "gtceu:electric_blast_furnace/blast_cryolobus" })
    event.remove({ id: "gtceu:electric_blast_furnace/blast_cryolobus_gas" })
    const cryolobusFuels = [
        [2000, 1800, "gtceu:cetane_boosted_diesel"],
        [2000, 1800, "gtceu:gasoline"],
        [500, 1200, "gtceu:high_octane_gasoline"],
        [400, 900, "gtceu:jean_gasoline"]
    ]

    for (const [mB, duration, id] of cryolobusFuels) {
        event.recipes.gtceu.electric_blast_furnace(`cryolobus_${id.replace(/\W/g, "")}`)
            .itemInputs("gtceu:cryolobus_dust")
            .inputFluids(`${id} ${mB}`)
            .itemOutputs("gtceu:hot_cryolobus_ingot")
            .duration(duration)
            .blastFurnaceTemp(6800)
            .EUt(30720)

        event.recipes.gtceu.electric_blast_furnace(`cryolobus_scale_${id.replace(/\W/g, "")}`)
            .itemInputs("4x kubejs:warden_horn")
            .inputFluids(`${id} ${mB * 4}`)
            .itemOutputs("2x gtceu:hot_cryolobus_ingot")
            .duration(duration * 2)
            .blastFurnaceTemp(6800)
            .EUt(30720)
    }

    // Cryolobus Vac Freezer recipe
    event.remove({ id: "gtceu:vacuum_freezer/cool_hot_cryolobus_ingot" })
    event.recipes.gtceu.vacuum_freezer("cryolobus_ingot_cooling")
        .itemInputs("gtceu:hot_cryolobus_ingot")
        .itemOutputs("gtceu:cryolobus_ingot")
        .inputFluids(Fluid.of("kubejs:molten_cryotheum", 250))
        .duration(600)
        .EUt(1920)

    // Atmospheric Accumulator
    event.shaped("gtceu:atmospheric_accumulator", [
        "WRW",
        "THT",
        "COC"
    ], {
        W: "gtceu:tungsten_single_cable",
        C: "#gtceu:circuits/iv",
        T: "gtceu:tungsten_large_fluid_pipe",
        H: "gtceu:iv_gas_collector",
        R: "gtceu:tungsten_steel_rotor",
        O: "gtceu:iv_electric_pump"
    }).id("gtceu:shaped/atmospheric_accumulator")

    // Matter Alterator
    event.shaped("gtceu:matter_alterator", [
        "WEW",
        "THT",
        "PCV"
    ], {
        W: "gtceu:tungsten_single_cable",
        C: "#gtceu:circuits/iv",
        T: "gtceu:restonia_gem",
        H: "gtceu:iv_atomic_reconstructor",
        E: "gtceu:iv_emitter",
        P: "gtceu:iv_electric_piston",
        V: "gtceu:iv_conveyor_module"
    }).id("gtceu:shaped/matter_alterator")

    // Tantalum-catalysed ethanol->butadiene
    event.recipes.gtceu.large_chemical_reactor("ethanol_to_butadiene")
        .notConsumable("gtceu:tantalum_dust")
        .inputFluids("gtceu:ethanol 2000")
        .outputFluids("gtceu:butadiene 1000")
        .circuit(25)
        .duration(300)
        .EUt(7680)

    // Netherstar Crafting
    event.shaped("kubejs:nether_star_south", [
        "ADA",
        "ADA",
        " A "
    ], {
        A: "minecraft:quartz",
        D: "kubejs:petrotheum_dust"
    })

    event.shaped("kubejs:nether_star_north", [
        " A ",
        "ADA",
        "ADA"
    ], {
        A: "minecraft:quartz",
        D: "kubejs:aerotheum_dust"
    })

    event.shaped("kubejs:nether_star_west", [
        " AA",
        "ADD",
        " AA"
    ], {
        A: "minecraft:quartz",
        D: "kubejs:cryotheum_dust"
    })

    event.shaped("kubejs:nether_star_east", [
        "AA ",
        "DDA",
        "AA "
    ], {
        A: "minecraft:quartz",
        D: "kubejs:pyrotheum_dust"
    })

    event.shaped("4x kubejs:nether_star_center", [
        "ABA",
        "CDE",
        "AFA"
    ], {
        A: "minecraft:quartz",
        B: "kubejs:blitz_rod",
        C: "kubejs:blizz_rod",
        D: "extendedcrafting:luminessence_block",
        E: "minecraft:blaze_rod",
        F: "kubejs:basalz_rod"
    }) // TODO: Optional, dusts were rods before. Would need to add rods with kjs

    event.shaped("minecraft:nether_star", [
        " A ",
        "DEB",
        " C "
    ], {
        A: "kubejs:nether_star_north",
        B: "kubejs:nether_star_east",
        C: "kubejs:nether_star_south",
        D: "kubejs:nether_star_west",
        E: "kubejs:nether_star_center"
    })

    // Obby grinding
    event.recipes.gtceu.macerator("obsidian_dust")
        .itemInputs("minecraft:obsidian")
        .itemOutputs("gtceu:obsidian_dust")
        .duration(40)
        .EUt(2)

    event.remove({ id: "gtceu:macerator/macerate_sandstone" });
    event.recipes.gtceu.electrolyzer("saltpeter_dust")
        .itemInputs("4x #forge:sandstone")
        .itemOutputs("gtceu:saltpeter_dust")
        .duration(300)
        .EUt(30)

    // UHV+ Parallel Control Hatch
    event.shaped("gtceu:uhv_uhv_parallel_hatch", [
        "SCE",
        "CHC",
        "WCW"
    ], {
        H: "gtceu:uhv_machine_hull",
        S: "gtceu:uhv_sensor",
        C: "#gtceu:circuits/uev",
        E: "gtceu:uhv_emitter",
        W: "gtceu:hyperdegenerate_darconite_quadruple_wire"
    })

    event.shaped("gtceu:uev_uev_parallel_hatch", [
        "SCE",
        "CHC",
        "WCW"
    ], {
        H: "gtceu:uev_machine_hull",
        S: "gtceu:uev_sensor",
        C: "#gtceu:circuits/uiv",
        E: "gtceu:uev_emitter",
        W: "gtceu:monium_quadruple_wire"
    })

    //
    // Recycling below here
    //

    // RHF
    event.remove({ input: "gtceu:mega_blast_furnace" })
    event.recipes.gtceu.arc_furnace("rhf_recycling")
        .itemInputs("gtceu:mega_blast_furnace")
        .inputFluids("gtceu:oxygen 20786")
        .itemOutputs("20x gtceu:naquadah_alloy_ingot", "4x gtceu:invar_ingot", "2x gtceu:uranium_rhodium_dinaquadide_ingot", "gtceu:tin_ingot")
        .duration(20786)
        .EUt(30)

    event.recipes.gtceu.macerator("rhf_crushing")
        .itemInputs("gtceu:mega_blast_furnace")
        .itemOutputs("24x gtceu:stone_dust", "20x gtceu:naquadah_alloy_dust", "4x gtceu:invar_dust", "2x gtceu:rubber_dust")
        .duration(20786)
        .EUt(30)

    // BBC
    event.remove({ input: "gtceu:mega_vacuum_freezer" })
    event.recipes.gtceu.arc_furnace("bbc_recycling")
        .itemInputs("gtceu:mega_vacuum_freezer")
        .inputFluids("gtceu:oxygen 26976")
        .itemOutputs("18x gtceu:naquadah_alloy_ingot", "12x gtceu:stainless_steel_ingot", "12x gtceu:electrum_ingot", "gtceu:steel_block")
        .duration(26976)
        .EUt(30)

    event.recipes.gtceu.macerator("bbc_crushing")
        .itemInputs("gtceu:mega_vacuum_freezer")
        .itemOutputs("18x gtceu:naquadah_alloy_dust", "50x gtceu:small_rubber_dust", "49x gtceu:small_steel_dust", "12x gtceu:stainless_steel_dust")
        .duration(25408)
        .EUt(302)

    // Strings Recipe
    event.shaped("6x minecraft:string", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "#minecraft:saplings",
        B: "#minecraft:swords"
    }).damageIngredient("#minecraft:swords")

    // Avaritia Replacement recipes
    compacting(event, "gtceu:neutronium_ingot", "gtceu:neutronium_nugget")

    // Recipe from Radon salt to Radon and Rock Salt
    event.recipes.gtceu.electrolyzer("radium_salt_to_radium_and_salt")
        .itemInputs("kubejs:radium_salt")
        .itemOutputs("gtceu:rock_salt_dust")
        .outputFluids(Fluid.of("gtceu:radon", 125))
        .circuit(1)
        .duration(150)
        .EUt(2000)

    // Add the Fluid Tag Filter
    event.shaped(Item.of("gtceu:fluid_tag_filter", 1), [
        "ZZZ",
        "ZLZ",
        "ZZZ"
    ], {
        Z: "gtceu:zinc_foil",
        L: "gtceu:lead_plate"
    })
    // Making ABS take aluminium rather than osmium so it's obtainable in EV
    event.replaceInput({ id: "gtceu:shaped/blast_alloy_smelter" }, "gtceu:osmium_quadruple_wire", "gtceu:aluminium_single_cable")

    // Resonating Crystal recipes
    event.recipes.gtceu.alloy_smelter("kubejs:resonating_redstone")
        .itemInputs("minecraft:redstone_block", "kubejs:ender_shard")
        .itemOutputs("kubejs:resonating_crystal")
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:resonating_restonia")
        .itemInputs("gtceu:restonia_gem", "kubejs:ender_shard")
        .itemOutputs("kubejs:resonating_crystal")
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.autoclave("kubejs:resonating_pearl_autoclave")
        .itemInputs("minecraft:ender_pearl")
        .inputFluids("gtceu:redstone 1152")
        .itemOutputs("12x kubejs:resonating_crystal")
        .duration(900)
        .EUt(480)

    event.recipes.gtceu.autoclave("kubejs:resonating_pulsating_autoclave")
        .itemInputs("kubejs:pulsating_dust")
        .inputFluids("gtceu:redstone 1152")
        .itemOutputs("12x kubejs:resonating_crystal")
        .duration(900)
        .EUt(480)

    event.recipes.gtceu.autoclave("kubejs:resonating_ender_dust_autoclave")
        .itemInputs("#forge:dusts/ender_pearl")
        .inputFluids("gtceu:redstone 1152")
        .itemOutputs("12x kubejs:resonating_crystal")
        .duration(900)
        .EUt(480)

    // Ender Shard
    event.shapeless("8x kubejs:ender_shard", ["minecraft:ender_pearl"]).id("kubejs:ender_pearl")
    event.recipes.gtceu.forge_hammer("kubejs:ender_pearl_shattering")
        .itemInputs("minecraft:ender_pearl")
        .itemOutputs("8x kubejs:ender_shard")
        .duration(40)
        .EUt(12)

    // Waterframes
    event.shaped("waterframes:frame", [
        "IGI",
        "GSG",
        "IGI"
    ], {
        I: "gtceu:iron_plate",
        S: "gtceu:steel_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:frame")

    event.shaped("waterframes:projector", [
        "III",
        "IFG",
        "III"
    ], {
        F: "waterframes:frame",
        I: "gtceu:iron_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:projector")

    event.shaped("waterframes:tv", [
        "III",
        "GFG",
        "III"
    ], {
        F: "waterframes:frame",
        I: "gtceu:iron_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:tv")

    event.shaped("waterframes:big_tv", [
        "III",
        "GFG",
        "III"
    ], {
        F: "waterframes:tv",
        I: "gtceu:iron_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:big_tv")

    event.shaped("waterframes:remote", [
        "IRI",
        "ICI",
        "ICI"
    ], {
        R: "minecraft:redstone",
        I: "gtceu:iron_plate",
        C: "gtceu:copper_plate"
    }).id("waterframes:remote")

    // Stonecut p2p tunnels, attunement sucks
    const p2p = ["redstone", "item", "fluid", "fe", "light"]
    p2p.forEach(type => {
        event.stonecutting(`ae2:${type}_p2p_tunnel`, "ae2:me_p2p_tunnel")
    })
    const mae2_p2p = ["pattern", "eu"]
    mae2_p2p.forEach(type => {
        event.stonecutting(`mae2:${type}_p2p_tunnel`, "ae2:me_p2p_tunnel")
    })
    const multi_p2p = ["pattern", "redstone", "fluid", "fe", "eu"]
    multi_p2p.forEach(type => {
        event.stonecutting(`mae2:${type}_multi_p2p_tunnel`, "mae2:item_multi_p2p_tunnel")
    })

    // Stonecutting CCI blocks
    let sameItemsTags = ["#chisel_chipped_integration:factory_block", "#chisel_chipped_integration:technical_block", "#chisel_chipped_integration:laboratory_block", "#chisel_chipped_integration:tyrian"]; // What item tags to go through (change this so you have your tags)
    sameItemsTags.forEach(tag => {
        let sameItems = Ingredient.of(tag).stacks; // Get all of the items with that tag
        sameItems.forEach(input => {
            sameItems.forEach(output => { // Loop through the items so all combination of input and output are met
                if (input != output) // Ignore recipes where input and output are the same item
                    event.stonecutting(output, input); // Make the recipe
            });
        });
    });

    // Stonecut GTCEU warning blocks into each other
    let hazardNames = [
        "acid", "antimatter", "bio", "boss", "causality", "explosion", "fire",
        "generic", "gregification", "high_pressure", "high_temperature", "high_voltage",
        "laser", "magic", "magnetic", "mob_infestation", "mob_spawner", "noise",
        "radioactive", "spatial_storage", "turret", "void"
    ];
    for (let hazardName of hazardNames) {
        let hazard = `gtceu:${hazardName}_hazard_sign_block`
        event.stonecutting(hazard, "gtceu:solid_machine_casing")
        event.stonecutting("gtceu:solid_machine_casing", hazard)
    }

    // Stonecutting Marble
    let MarbleTag = ["#moni:marble"]; // What item tags to go through (change this so you have your tags)
    MarbleTag.forEach(tag => {
        let Marbles = Ingredient.of(tag).stacks; // Get all of the items with that tag
        Marbles.forEach(input => {
            Marbles.forEach(output => { // Loop through the items so all combination of input and output are met
                if (input != output) // Ignore recipes where input and output are the same item
                    event.stonecutting(output, input); // Make the recipe
            });
        });
    });


    event.remove({ id: "gtceu:shaped/mega_blast_furnace" })
    event.recipes.gtceu.assembly_line("kubejs:mega_blast_furnace")
        .itemInputs("gtceu:electric_blast_furnace", "4x #gtceu:circuits/zpm", "4x gtceu:luv_field_generator", "4x gtceu:naquadah_alloy_spring", "4x gtceu:dense_naquadah_alloy_plate", "4x gtceu:uranium_rhodium_dinaquadide_quadruple_wire")
        .inputFluids("gtceu:soldering_alloy 9216")
        .itemOutputs("gtceu:mega_blast_furnace")
        .duration(3000)
        .EUt(30720)
        .stationResearch(b => b.researchStack("gtceu:electric_blast_furnace").CWUt(16, 64000).EUt(30720))

    event.remove({ id: "gtceu:shaped/mega_vacuum_freezer" })
    event.recipes.gtceu.assembly_line("kubejs:mega_vacuum_freezer")
        .itemInputs("gtceu:vacuum_freezer", "4x #gtceu:circuits/zpm", "4x gtceu:luv_field_generator", "4x gtceu:naquadah_normal_fluid_pipe", "4x gtceu:dense_naquadah_alloy_plate", "4x gtceu:uranium_rhodium_dinaquadide_quadruple_wire")
        .inputFluids("gtceu:soldering_alloy 9216")
        .itemOutputs("gtceu:mega_vacuum_freezer")
        .duration(3000)
        .EUt(30720)
        .stationResearch(b => b.researchStack("gtceu:vacuum_freezer").CWUt(16, 64000).EUt(30720))

    event.recipes.minecraft.smelting("kubejs:pulsating_dust", ["gtceu:uraninite_dust"])
    event.recipes.minecraft.smelting("kubejs:pulsating_dust", ["kubejs:resonant_clathrate"])

    // Electrum
    event.replaceInput({ id: /redstone_arsenal/ }, "redstone_arsenal:flux_metal_block", "gtceu:electrum_flux_block")

    // Neutronium Buff
    event.remove({ id: "gtceu:fusion_reactor/americium_and_naquadria_to_neutronium_plasma" })
    event.recipes.gtceu.fusion_reactor("neutronium_buffed")
        .inputFluids("gtceu:americium 128", "gtceu:naquadah 128")
        .outputFluids("gtceu:neutronium 32")
        .duration(130)
        .EUt(98304)
        .fusionStartEU(600000000)

    event.recipes.gtceu.extractor("resonant_ender_from_pearl")
        .itemInputs("1x minecraft:ender_pearl")
        .outputFluids(Fluid.of("kubejs:liquid_ender", 250))
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.fluid_solidifier("pearl_from_resonant_ender")
        .notConsumable("gtceu:ball_casting_mold")
        .inputFluids(Fluid.of("kubejs:liquid_ender", 250))
        .itemOutputs("1x minecraft:ender_pearl")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LV])

    // Cleanroom Hatch
    event.remove({ id: "gtceu:shaped/maintenance_hatch_cleaning" })
    event.shaped("gtceu:cleaning_maintenance_hatch", [
        "CMC",
        "RHR",
        "WCW"
    ], {
        R: "gtceu:iv_robot_arm",
        W: "gtceu:graphene_single_cable",
        M: "gtceu:auto_maintenance_hatch",
        H: "gtceu:iv_machine_hull",
        C: "#gtceu:circuits/iv"
    })

    // Cleanroom Hatch Decomp fix
    event.replaceOutput({ id: "gtceu:arc_furnace/arc_cleaning_maintenance_hatch" }, "gtceu:darmstadtium_ingot", "8x gtceu:tungsten_steel_ingot")
    event.replaceOutput({ id: "gtceu:arc_furnace/arc_cleaning_maintenance_hatch" }, "gtceu:yttrium_barium_cuprate_ingot", "2x gtceu:graphene_ingot")
    event.replaceOutput({ id: "gtceu:macerator/macerate_cleaning_maintenance_hatch" }, "gtceu:darmstadtium_dust", "8x gtceu:tungsten_steel_dust")
    event.replaceOutput({ id: "gtceu:macerator/macerate_cleaning_maintenance_hatch" }, "gtceu:yttrium_barium_cuprate_dust", "2x gtceu:graphene_dust")

    // ZPM Field Gen
    event.remove({ id: "gtceu:field_generator_zpm" })
    event.recipes.gtceu.assembly_line("kubejs:zpm_field_generator")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadah_alloy_plate", "gtceu:quantum_star", "2x gtceu:zpm_emitter", "2x #gtceu:circuits/zpm", "64x gtceu:fine_uranium_rhodium_dinaquadide_wire", "64x gtceu:fine_uranium_rhodium_dinaquadide_wire", "4x gtceu:vanadium_gallium_single_cable")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:cryococcus 1152")
        .itemOutputs("gtceu:zpm_field_generator")
        .duration(600)
        .EUt(24000)
        .stationResearch(b => b.researchStack("gtceu:luv_field_generator").CWUt(4, 16000).EUt(30720))

    // Quantum Ring Assembler Recipes
    event.recipes.gtceu.assembler("kubejs:quantum_ring")
        .itemInputs("4x gtceu:stainless_steel_plate", "2x ae2:calculation_processor", "2x ae2:engineering_processor", "gtceu:quantum_star")
        .itemOutputs("ae2:quantum_ring")
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.assembler("kubejs:quantum_link")
        .itemInputs("4x ae2:fluix_pearl", "4x ae2:quartz_glass", "gtceu:certus_quartz_plate")
        .itemOutputs("ae2:quantum_link")
        .duration(100)
        .EUt(30)

    // Dragon Breath canning and uncanning
    event.recipes.gtceu.canner("dragon_breath_unbottling")
        .itemInputs("minecraft:dragon_breath")
        .itemOutputs("minecraft:glass_bottle")
        .outputFluids("gtceu:dragon_breath 250")
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.canner("dragon_breath_bottling")
        .itemInputs("minecraft:glass_bottle")
        .inputFluids("gtceu:dragon_breath 250")
        .itemOutputs("minecraft:dragon_breath")
        .duration(400)
        .EUt(2)

    // JEAN Gasoline consumption
    event.recipes.gtceu.combustion_generator("jean_gasoline_generator")
        .inputFluids("gtceu:jean_gasoline 1")
        .duration(160)
        .EUt(-GTValues.V[GTValues.MV])

    // JEAN Gasoline
    event.recipes.gtceu.large_chemical_reactor("kubejs:jean_gasoline")
        .itemInputs("3x gtceu:netherrack_dust")
        .inputFluids("gtceu:high_octane_gasoline 8000", "gtceu:rocket_fuel 5000", "gtceu:chlorine_trifluoride 2000", "gtceu:tetraethyllead 1000", "gtceu:dragon_breath 500")
        .outputFluids("gtceu:jean_gasoline 16000")
        .duration(200)
        .EUt(7680)
        .circuit(24)

    event.recipes.gtceu.chemical_reactor("kubejs:chloroethane")
        .inputFluids("gtceu:ethylene 1000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:chloroethane 1000")
        .duration(60)
        .EUt(30)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor("kubejs:tetraethyllead")
        .itemInputs("8x gtceu:sodium_lead_alloy_dust")
        .inputFluids("gtceu:chloroethane 4000")
        .outputFluids("gtceu:tetraethyllead 1000")
        .itemOutputs("8x gtceu:salt_dust", "3x gtceu:lead_dust")
        .duration(300)
        .EUt(480)

    event.recipes.gtceu.chemical_reactor("kubejs:chlorine_trifluoride")
        .inputFluids("gtceu:fluorine 3000", "gtceu:chlorine 1000")
        .outputFluids("gtceu:chlorine_trifluoride 1000")
        .duration(60)
        .EUt(7)

    event.recipes.gtceu.mixer("kubejs:sodium_lead_alloy")
        .itemInputs("gtceu:sodium_dust", "gtceu:lead_dust")
        .itemOutputs("2x gtceu:sodium_lead_alloy_dust")
        .duration(200)
        .EUt(7)

    // Clay synthesis from Dust
    event.recipes.gtceu.forge_hammer("dust")
        .itemInputs("minecraft:sand")
        .itemOutputs("kubejs:dust")
        .duration(16)
        .EUt(10)

    event.recipes.gtceu.chemical_reactor("gt_clay")
        .itemInputs("kubejs:dust")
        .itemOutputs("minecraft:clay")
        .inputFluids("water")
        .duration(20)
        .EUt(15)

    // Break Clay blocks into balls
    event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"]);

    // Parallel Implosion Compressor
    event.recipes.gtceu.assembly_line("gtceu:implosion_collider")
        .itemInputs("8x gtceu:dense_obsidian_plate", "2x #gtceu:circuits/zpm", "gtceu:solid_machine_casing", "3x gtceu:niobium_nitride_double_cable", "2x gtceu:zpm_electric_piston")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:osmium 1152")
        .itemOutputs("gtceu:implosion_collider")
        .duration(900)
        .EUt(32000)
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("gtceu:implosion_compressor").EUt(6000).duration(1800))

    // Froglights
    event.recipes.gtceu.atomic_reconstruction("ochre_froglight")
        .itemInputs("minecraft:magma_block")
        .itemOutputs("minecraft:ochre_froglight")
        .duration(20)
        .EUt(15)

    event.recipes.gtceu.atomic_reconstruction("verdant_froglight")
        .itemInputs("minecraft:ochre_froglight")
        .itemOutputs("minecraft:verdant_froglight")
        .duration(20)
        .EUt(15)

    event.recipes.gtceu.atomic_reconstruction("pearlescent_froglight")
        .itemInputs("minecraft:verdant_froglight")
        .itemOutputs("minecraft:pearlescent_froglight")
        .duration(20)
        .EUt(15)

    // Sodium to Sodium Hydroxide
    event.recipes.gtceu.chemical_reactor("na_to_naoh")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .duration(50)
        .EUt(120)

    // Chipped tinker's table
    event.replaceInput({ id: "chipped:benches/mechanist_workbench" }, "minecraft:tnt", "#forge:chests")

    // Phantom Paste
    event.shaped("framedblocks:phantom_paste", [
        "SSS",
        "SCS",
        "SSS"
    ], {
        S: "#forge:slimeballs",
        C: "minecraft:chorus_fruit",
    })

    // Let Oilsands have multiple types of oil
    event.remove({ id: "gtceu:centrifuge/oilsands_dust_separation" })
    event.recipes.gtceu.centrifuge("oilsands_to_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 2500, 0)
        .outputFluids("gtceu:oil 1000")
        .duration(200)
        .EUt(30)
        .circuit(3)

    event.recipes.gtceu.centrifuge("oilsands_to_light_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 2500, 0)
        .outputFluids("gtceu:oil_light 500")
        .duration(200)
        .EUt(30)
        .circuit(4)

    event.recipes.gtceu.centrifuge("oilsands_to_heavy_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 2500, 0)
        .outputFluids("gtceu:oil_heavy 2000")
        .duration(200)
        .EUt(30)
        .circuit(2)

    event.recipes.gtceu.centrifuge("oilsands_to_raw_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 2500, 0)
        .outputFluids("gtceu:oil_medium 1000")
        .duration(200)
        .EUt(30)
        .circuit(1)

    // Fix ilmenite -> rutile stoich
    event.remove({ id: "gtceu:electric_blast_furnace/rutile_from_ilmenite" })

    event.recipes.gtceu.electric_blast_furnace("rutile_from_ilmenite")
        .itemInputs("10x gtceu:ilmenite_dust", "2x gtceu:carbon_dust")
        .itemOutputs("2x gtceu:wrought_iron_ingot", "6x gtceu:rutile_dust")
        .outputFluids("gtceu:carbon_dioxide 2000")
        .duration(1600)
        .blastFurnaceTemp(1700)
        .EUt(480)

    // Germanium is used in diodes
    event.replaceInput({ output: "gtceu:diode"}, "gtceu:silicon_wafer", "gtceu:small_germanium_dust")
    event.recipes.gtceu.assembler("germanium_smd_diode")
        .itemInputs("1x gtceu:germanium_dust", "8x gtceu:fine_platinum_wire")
        .inputFluids("gtceu:polyethylene 288")
        .itemOutputs("64x gtceu:smd_diode")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.fluid_solidifier("petri_dish_borosilicate")
        .notConsumable("gtceu:cylinder_casting_mold")
        .inputFluids("gtceu:borosilicate_glass 18")
        .itemOutputs("2x gtceu:petri_dish")
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV])

    // Alternate Recipe for Octane
    event.recipes.gtceu.chemical_reactor("synthetic_octane")
        .chancedFluidInput("gtceu:sulfuric_acid 500", 5000, 0)
        .inputFluids("gtceu:butene 1000", "gtceu:butane 1000")
        .outputFluids("gtceu:octane 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(1)

    // Give Acetic Acid from Methanol a Circuit
    event.recipes.gtceu.chemical_reactor("acetic_acid_from_methanol_circuit")
        .inputFluids("gtceu:methanol 1000", "gtceu:carbon_monoxide 1000")
        .outputFluids("gtceu:acetic_acid 1000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    // Gunpowder Decomp into Carbon Dust
    event.recipes.gtceu.electrolyzer("electrolyzing_gunpowder_carbon_dust")
        .itemInputs("6x minecraft:gunpowder")
        .itemOutputs("2x gtceu:saltpeter_dust", "gtceu:sulfur_dust", "3x gtceu:carbon_dust")
        .duration(110)
        .EUt(GTValues.VA[GTValues.MV])

    // Gilded Blackstone maceration
    event.recipes.gtceu.macerator("macerate_gilded_blackstone")
        .itemInputs("minecraft:gilded_blackstone")
        .itemOutputs("gtceu:blackstone_dust")
        .chancedOutput("gtceu:gold_dust", 2500, 0)
        .duration(66)
        .EUt(2)

    // NCN Rhodochrosite crafting
    event.recipes.gtceu.chemical_reactor("manganese_nitrate_from_manganese")
        .itemInputs("1x gtceu:manganese_dioxide_dust")
        .inputFluids("gtceu:nitrogen_dioxide 1000", "gtceu:distilled_water 2000")
        .itemOutputs("3x gtceu:manganese_nitrate_dust")
        .duration(320)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor("rhodochrosite_from_mangnitrate")
        .itemInputs("1x gtceu:manganese_nitrate_dust")
        .inputFluids("gtceu:ammonia 1000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("1x gtceu:rhodochrosite_dust", "1x gtceu:ammonium_nitrate_dust")
        .duration(70)
        .EUt(GTValues.VHA[GTValues.HV])

    // Cant find the original EXP solification recipe, so replacing it here
    event.remove({ id:"gtceu:fluid_solidifier/one_experience_solid"})
    event.recipes.gtceu.fluid_solidifier("one_experience_solid")
        .notConsumable("gtceu:ball_casting_mold")
        .inputFluids("cofh_core:experience 140")
        .itemOutputs("kubejs:solidified_experience")
        .duration(25*20)
        .EUt(16)

    // NCN plates
    event.shaped("4x kubejs:heavy_radiation_shielding_plate", [
        "BAB",
        "ACA",
        "BAB"
    ], {
        A: "gtceu:dense_tough_alloy_plate",
        B: "gtceu:yttrium_barium_cuprate_plate",
        C: "gtceu:lead_dust"
    }).id("kubejs:ncn_heavy_plate")
    event.shaped("kubejs:du_radiation_shielding_plate", [
        "BAB",
        "ACA",
        "BAB"
    ], {
        A: "gtceu:double_uranium_plate",
        B: "gtceu:hard_carbon_rod",
        C: "kubejs:heavy_radiation_shielding_plate"
    }).id("kubejs:ncn_du_plate")
    event.shaped("kubejs:elite_radiation_shielding_plate", [
        "BAB",
        "ACA",
        "BAB"
    ], {
        A: "gtceu:rhodochrosite_dust",
        B: "gtceu:trinaquadalloy_plate",
        C: "kubejs:du_radiation_shielding_plate"
    }).id("kubejs:elite_heavy_plate")

    // EIO Crystals
    event.recipes.gtceu.autoclave("prescient_crystal")
        .itemInputs("gtceu:glass_gem", "gtceu:beryllium_dust")
        .inputFluids("gtceu:vibrant_alloy 288")
        .itemOutputs("kubejs:prescient_crystal")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(600)
    event.recipes.gtceu.autoclave("weather_crystal")
        .itemInputs("gtceu:glass_gem", "gtceu:gallium_arsenide_dust")
        .inputFluids("gtceu:vanadium_steel 288")
        .itemOutputs("kubejs:weather_crystal")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(600)

    // Spartan mods
    event.shapeless("spartanweaponry:simple_handle", ["#forge:rods/wooden", "gtceu:sticky_resin"])

    // Random tnt recipe
    event.remove({id:"mynethersdelight:crafting/tnt_alt"})
    event.shaped("gtceu:powderbarrel", [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "mynethersdelight:powder_cannon",
        B: "#minecraft:planks"
    })

    // Tiered pumps
    event.shaped("gtceu:steel_pump", [
        "IPS",
        "RCD",
        "LQL"
    ], {
        I: "gtceu:rubber_ring",
        P: "gtceu:bronze_normal_fluid_pipe",
        S: "gtceu:tin_screw",
        R: "gtceu:tin_rotor",
        C: "gtceu:solid_machine_casing",
        D: "#gtceu:tools/crafting_screwdrivers",
        L: "gtceu:steel_plate",
        Q: "gtceu:bronze_large_fluid_pipe"
    }).damageIngredient("#gtceu:tools/crafting_screwdrivers")
    event.shaped("gtceu:aluminium_pump", [
        "IPS",
        "RCD",
        "LQL"
    ], {
        I: "gtceu:rubber_ring",
        P: "gtceu:steel_normal_fluid_pipe",
        S: "gtceu:bronze_screw",
        R: "gtceu:bronze_rotor",
        C: "gtceu:frostproof_machine_casing",
        D: "#gtceu:tools/crafting_screwdrivers",
        L: "gtceu:aluminium_plate",
        Q: "gtceu:steel_large_fluid_pipe"
    }).damageIngredient("#gtceu:tools/crafting_screwdrivers")
    event.shaped("gtceu:stainless_steel_pump", [
        "IPS",
        "RCD",
        "LQL"
    ], {
        I: "gtceu:rubber_ring",
        P: "gtceu:stainless_steel_normal_fluid_pipe",
        S: "gtceu:steel_screw",
        R: "gtceu:steel_rotor",
        C: "gtceu:clean_machine_casing",
        D: "#gtceu:tools/crafting_screwdrivers",
        L: "gtceu:stainless_steel_plate",
        Q: "gtceu:stainless_steel_large_fluid_pipe"
    }).damageIngredient("#gtceu:tools/crafting_screwdrivers")

    // Curvy Pipes
    event.remove({id:"curvy_pipes:redstone_cable"})
    event.remove({id:"curvy_pipes:energy_base"})
    event.shaped("8x curvy_pipes:redstone_cable", [
        "ABA",
        "CCC",
        "ABA"
    ], {
        A: "minecraft:redstone",
        B: "gtceu:sticky_resin",
        C: "gtceu:red_alloy_single_wire"
    }).id("kubejs:curvypipes_redstone_wire")
    event.shaped("3x curvy_pipes:small_energy_pipe", [
        "ABA",
        "CCC",
        "ABA"
    ], {
        A: "gtceu:styrene_butadiene_rubber_foil",
        B: "gtceu:gold_ring",
        C: "gtceu:annealed_copper_double_wire"
    }).id("kubejs:curvypipes_energy_wire")

    // Modded seed oil compat
    function seedOil(mod, seed, fluid) {
        event.recipes.gtceu.extractor(`seed_oil_from_${seed}`)
            .itemInputs(`${mod}:${seed}`)
            .outputFluids(`gtceu:seed_oil ${fluid}`)
            .duration(1.6*20)
            .EUt(2)
    }
    seedOil("farmersdelight", "rice", 10)
    seedOil("farmersdelight", "cabbage_seeds", 6)
    seedOil("farmersdelight", "tomato_seeds", 6)
    seedOil("rusticdelight", "cotton_seeds", 3)
    seedOil("rusticdelight", "bell_pepper_seeds", 6)
    seedOil("rusticdelight", "coffee_beans", 3)
    seedOil("vinery", "red_grape_seeds", 3)
    seedOil("vinery", "white_grape_seeds", 3)
    seedOil("vinery", "savanna_grape_seeds_red", 3)
    seedOil("vinery", "savanna_grape_seeds_white", 3)
    seedOil("vinery", "taiga_grape_seeds_red", 3)
    seedOil("vinery", "taiga_grape_seeds_white", 3)
    seedOil("vinery", "jungle_grape_seeds_red", 3)
    seedOil("vinery", "jungle_grape_seeds_white", 3)
    seedOil("farm_and_charm", "kernels", 10)
    seedOil("farm_and_charm", "oat_seeds", 10)
    seedOil("farm_and_charm", "barley_seeds", 10)
    seedOil("farm_and_charm", "lettuce_seeds", 6)
    // seedOil("farm_and_charm", "tomato_seeds", 6)
    seedOil("farm_and_charm", "strawberry_seeds", 3)
    seedOil("brewery", "hops_seeds", 10)

    // Pump water production
    event.recipes.gtceu.steel_pump("water_production_steel")
        .circuit(1)
        .outputFluids("minecraft:water 300")
        .duration(20)
    event.recipes.gtceu.aluminium_pump("water_production_aluminium")
        .circuit(1)
        .outputFluids("minecraft:water 600")
        .duration(20)
    event.recipes.gtceu.stainless_steel_pump("water_production_stainless_steel")
        .circuit(1)
        .outputFluids("minecraft:water 1200")
        .duration(20)

    // Green steel mixer
    event.recipes.gtceu.mixer("green_steel_mixing")
        .itemInputs("1x gtceu:scandium_dust", "1x gtceu:emerald_dust", "4x gtceu:black_steel_dust", "2x gtceu:steel_dust")
        .itemOutputs("8x gtceu:green_steel_dust")
        .EUt(7)
        .duration(20*40)
        .circuit(1)

    // PCL is nylon-6, so it should make good carbon fibers by GT logic
    event.recipes.gtceu.autoclave("carbon_fibers_pcl")
        .itemInputs("4x #forge:dusts/carbon")
        .inputFluids("gtceu:polycaprolactam 9")
        .itemOutputs("16x gtceu:carbon_fibers")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(1.85*20)

    // Fixing chromatic steel recipe
    event.remove({id:"gtceu:alloy_blast_smelter/chromatic_steel"})
    event.remove({id:"gtceu:alloy_blast_smelter/chromatic_steel_gas"})
    event.recipes.gtceu.alloy_blast_smelter("chromatic_steel")
        .itemInputs("gtceu:red_steel_dust", "gtceu:blue_steel_dust", "gtceu:green_steel_dust", "6x kubejs:prism_pane")
        .outputFluids("gtceu:molten_chromatic_steel 432")
        .duration(101.25*20)
        .blastFurnaceTemp(15780)
        .EUt(GTValues.VA[GTValues.UIV])
        .circuit(3)
    event.recipes.gtceu.alloy_blast_smelter("chromatic_steel_gas")
        .itemInputs("gtceu:red_steel_dust", "gtceu:blue_steel_dust", "gtceu:green_steel_dust", "6x kubejs:prism_pane")
        .inputFluids("gtceu:xenon 90")
        .outputFluids("gtceu:molten_chromatic_steel 432")
        .duration(67.8*20)
        .blastFurnaceTemp(15780)
        .EUt(GTValues.VA[GTValues.UIV])
        .circuit(13)
})  
