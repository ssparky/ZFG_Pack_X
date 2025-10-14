/**
 * Custom extended crafting recipes
 */
ServerEvents.recipes(event => {

    // All of the event.remove() here should REALLY be moved to Remove_Recipes.js for consistency

    // Components
    event.remove({ output: "extendedcrafting:basic_component" })
    event.shaped("extendedcrafting:basic_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:nether_quartz_plate",
        B: "gtceu:iron_plate"
    })

    event.remove({ output: "extendedcrafting:advanced_component" })
    event.shaped("extendedcrafting:advanced_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:electrum_plate",
        B: "gtceu:glowstone_plate"
    })

    event.remove({ output: "extendedcrafting:elite_component" })
    event.shaped("extendedcrafting:elite_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:aluminium_plate",
        B: "gtceu:ender_pearl_plate"
    })

    event.remove({ output: "extendedcrafting:ultimate_component" })
    event.shaped("extendedcrafting:ultimate_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:uranium_plate",
        B: "gtceu:emerald_plate"
    })

    event.remove({ output: "extendedcrafting:epic_component" })
    event.shaped("extendedcrafting:epic_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:activated_netherite_plate",
        B: "gtceu:red_steel_plate"
    })

    event.remove({ output: "extendedcrafting:the_ultimate_component" })
    event.shaped("extendedcrafting:the_ultimate_component", [
        " B ",
        "ACE",
        " U "
    ], {
        A: "extendedcrafting:advanced_component",
        B: "extendedcrafting:basic_component",
        C: "extendedcrafting:crystaltine_component",
        E: "extendedcrafting:elite_component",
        U: "extendedcrafting:ultimate_component",
    })

    event.remove({ output: "extendedcrafting:crystaltine_component" })
    event.shaped("extendedcrafting:crystaltine_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:hssg_plate",
        B: "gtceu:diamond_plate"
    })

    event.remove({ output: "extendedcrafting:redstone_component" })
    event.shaped("extendedcrafting:redstone_component", [
        "SL ",
        "AB ",
        "   "
    ], {
        S: "gtceu:black_steel_plate",
        L: "extendedcrafting:luminessence",
        A: "gtceu:copper_plate",
        B: "gtceu:redstone_plate"
    })

    event.replaceInput({ id: /extendedcrafting/ }, "extendedcrafting:black_iron_ingot", "gtceu:black_steel_plate")

    // Catalysts
    event.remove({ output: "extendedcrafting:the_ultimate_catalyst" })
    event.shaped("extendedcrafting:the_ultimate_catalyst", [
        " B ",
        "ACE",
        " U "
    ], {
        A: "extendedcrafting:advanced_catalyst",
        B: "extendedcrafting:basic_catalyst",
        C: "extendedcrafting:crystaltine_catalyst",
        E: "extendedcrafting:elite_catalyst",
        U: "extendedcrafting:ultimate_catalyst",
    })

    // Tables
    event.remove({ output: "extendedcrafting:basic_table" })
    event.shaped("extendedcrafting:basic_table", [
        " B ",
        "BCB",
        " B "
    ], {
        B: "extendedcrafting:basic_component",
        C: "craftingstation:crafting_station",
    })

    event.remove({ output: "extendedcrafting:advanced_table" })
    event.shaped("extendedcrafting:advanced_table", [
        "EAE",
        "ABA",
        "EAE"
    ], {
        A: "extendedcrafting:advanced_component",
        B: "extendedcrafting:basic_table",
        E: "gtceu:electrum_ingot"
    })

    event.remove({ output: "extendedcrafting:elite_table" })
    event.recipes.extendedcrafting.shaped_table("extendedcrafting:elite_table", [
        "ASESA",
        "SCCCS",
        "ECTCE",
        "SCCCS",
        "ASESA"
    ], {
        A: "gtceu:aluminium_block",
        S: "gtceu:black_steel_plate",
        E: "extendedcrafting:elite_catalyst",
        C: "extendedcrafting:elite_component",
        T: "extendedcrafting:advanced_table"
    })

    event.remove({ output: "extendedcrafting:ultimate_table" })
    event.recipes.extendedcrafting.shaped_table("extendedcrafting:ultimate_table", [
        "ESSCSSE",
        "SUUUUUS",
        "SUSRSUS",
        "CURTRUC",
        "SUSRSUS",
        "SUUUUUS",
        "ESSCSSE"
    ], {
        E: "minecraft:emerald_block",
        S: "gtceu:black_steel_plate",
        C: "extendedcrafting:the_ultimate_catalyst",
        U: "extendedcrafting:ultimate_component",
        R: "extendedcrafting:crystaltine_component",
        T: "extendedcrafting:elite_table"
    })


    event.remove({ output: "extendedcrafting:epic_table" })
    event.recipes.extendedcrafting.shaped_table("extendedcrafting:epic_table", [
        "ESSSCSSSE",
        "SUUUUUUUS",
        "SUSSRSSUS",
        "SUSSRSSUS",
        "CURRTRRUC",
        "SUSSRSSUS",
        "SUSSRSSUS",
        "SUUUUUUUS",
        "ESSSCSSSE"
    ], {
        E: "#forge:storage_blocks/activated_netherite",
        S: "gtceu:double_black_steel_plate",
        C: "extendedcrafting:the_ultimate_catalyst",
        U: "extendedcrafting:epic_component",
        R: "extendedcrafting:crystaltine_component",
        T: "extendedcrafting:ultimate_table"
    })

    // Table duping. Only for more nested, higher-tier tables
    let dupable_tables = [
        ["elite", "aluminium"],
        ["ultimate", "emerald"],
        ["epic", "activated_netherite"]
    ]
    dupable_tables.forEach((value) => {
        event.shaped(`2x extendedcrafting:${value[0]}_table`, [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: `#forge:storage_blocks/${value[1]}`,
            B: `extendedcrafting:${value[0]}_catalyst`,
            C: `extendedcrafting:${value[0]}_table`
        }).id(`${value[0]}_table_dupe`)
    })

    event.remove({ output: "extendedcrafting:crafting_core" })
    event.shaped("extendedcrafting:crafting_core", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:black_steel_plate",
        B: "extendedcrafting:elite_catalyst",
        C: "extendedcrafting:elite_component",
        D: "gtceu:tungsten_carbide_block"
    })

    event.shaped("extendedcrafting:pedestal", [
        " P ",
        " P ",
        "PBP"
    ], {
        P: "gtceu:black_steel_plate",
        B: "gtceu:black_steel_block"
    })

    // Combination Crafts

    // Heavy Platings
    event.recipes.extendedcrafting.combination(
        "kubejs:quantum_fluxed_eternium_heavy_plating",
        "gtceu:double_cryococcus_plate", ["2x redstone_arsenal:flux_plating", "3x kubejs:quantum_flux"],
        1600000, 160000
    )

    event.recipes.extendedcrafting.combination(
        "kubejs:universe_resistant_neutronium_heavy_plating",
        "gtceu:double_neutronium_plate", ["gtceu:omnium_nugget", "3x gtceu:quantum_eye"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "kubejs:elementally_infused_omnic_matrix_heavy_plating",
        "gtceu:double_omnium_plate", ["2x monilabs:crystal_matrix_plate", "gtceu:gravi_star", "gtceu:neutron_reflector", "3x kubejs:primal_mana"],
        10000000, 1000000
    )

    event.recipes.extendedcrafting.combination(
        "kubejs:dimensionally_stabilized_infinity_heavy_plating",
        "gtceu:double_infinity_plate", ["2x gtceu:activated_netherite_plate", "kubejs:quasi_stable_neutron_star", "2x gtceu:neutron_reflector", "2x kubejs:the_ultimate_material"],
        16000000, 1600000
    )

    // Infinity Ingots
    event.recipes.extendedcrafting.combination(
        "2x gtceu:infinity_ingot",
        "kubejs:active_prismatic_core", ["2x gtceu:activated_netherite_ingot", "2x gtceu:neutronium_ingot", "4x monilabs:transcendental_matrix_ingot"],
        320000000, 8000000
    )

    // Omnic Synthesizer
    event.recipes.extendedcrafting.shaped_table("gtceu:omnic_synthesizer", [
        "ECFCE",
        "CALAC",
        "GLRLG",
        "CALAC",
        "ECFCE"
    ], {
        E: "gtceu:zpm_emitter",
        C: "ae2:controller",
        F: "gtceu:luv_field_generator",
        A: "gtceu:atomic_casing",
        L: "#gtceu:circuits/zpm",
        G: "gtceu:zpm_field_generator",
        R: "gtceu:research_station",
    }).id("kubejs:shaped/omnic_synthesizer")

    // Prismatic Focus
    event.recipes.extendedcrafting.combination(
        "monilabs:prismatic_focus",
        "minecraft:beacon", ["gtceu:diamond_lens", "gtceu:emerald_lens", "gtceu:ruby_lens", "gtceu:sapphire_lens", "gtceu:amethyst_lens", "gtceu:lithium_niobate_lens"],
        20000000, 2000000
    )

    // Luminessence
    event.remove({ id: "extendedcrafting:luminessence" })
    event.remove({ id: /phosphoric_acid_from_apatite/ })

    event.recipes.gtceu.chemical_reactor("phosphoric_acid_apatite")
        .itemInputs("9x gtceu:apatite_dust")
        .inputFluids("water 10000", "gtceu:sulfuric_acid 5000")
        .itemOutputs("40x gtceu:gypsum_dust")
        .outputFluids("gtceu:hydrochloric_acid 1000", "gtceu:phosphoric_acid 3000")
        .duration(320)
        .EUt(30)

    event.recipes.gtceu.mixer("luminessence")
        .itemInputs("minecraft:redstone", "minecraft:glowstone_dust", "2x gtceu:aluminium_dust")
        .inputFluids("gtceu:phosphoric_acid 4000")
        .itemOutputs("8x extendedcrafting:luminessence")
        .duration(20)
        .EUt(30)

    // GT Multiblock Autotable - TODO Don't forget to add recipes here if you define excrafting recipes for mb's or anything!
    // MB Recipe
    event.recipes.gtceu.assembly_line("large_auto_crafter")
        .itemInputs("3x gtceu:black_steel_frame", "6x gtceu:double_dark_steel_plate", "4x #gtceu:circuits/luv", "9x gtceu:iv_robot_arm",
            "4x gtceu:exquisite_emerald_gem", "8x gtceu:uranium_triplatinum_quadruple_wire", "9x minecraft:crafting_table"
        )
        .inputFluids("gtceu:polybenzimidazole 1440", "gtceu:lubricant 1000")
        .itemOutputs("gtceu:large_auto_crafter")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("extendedcrafting:ultimate_auto_table").EUt(480).duration(1200))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])

    // Advanced
    event.recipes.gtceu.large_auto_crafter("elite_table")
        .itemInputs("4x gtceu:aluminium_block", "8x gtceu:black_steel_plate", "4x extendedcrafting:elite_catalyst", "8x extendedcrafting:elite_component", 
            "1x extendedcrafting:advanced_table"
        )
        .itemOutputs("extendedcrafting:elite_table")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("enchanting_infuser")
        .itemInputs("1x #chipped:bookshelf", "3x gtceu:redstone_plate", "2x gtceu:amethyst_rod", "10x #chipped:crying_obsidian", 
            "2x #forge:flawless_gems", "1x minecraft:enchanting_table"
        )
        .itemOutputs("enchantinginfuser:enchanting_infuser")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("mm_t2half")
        .itemInputs("1x kubejs:basic_micro_miner_guidance_system", "2x minecraft:crossbow", "1x spartanweaponry:small_bolt_quiver", "6x gtceu:double_dark_steel_plate", 
            "1x gtceu:mv_field_generator", "2x create:steam_engine", "1x gtceu:bronze_crate", "2x kubejs:hardened_thruster"
        )
        .itemOutputs("kubejs:microminer_t2half")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("quintessence_infuser")
        .itemInputs("4x gtceu:zpm_sensor", "8x gtceu:double_dark_soularium_plate", "2x gtceu:luv_field_generator", "4x kubejs:dark_soularium_casing",
            "4x #gtceu:circuits/zpm", "2x gtceu:zpm_field_generator"
        )
        .itemOutputs("gtceu:quintessence_infuser")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("hyperbolic_mvs")
        .itemInputs("4x gtceu:uv_field_generator", "8x gtceu:double_microversium_plate", "4x gtceu:uhv_emitter", "4x #gtceu:circuits/uhv", "4x monilabs:microverse_casing",
            "1x gtceu:computer_monitor_cover"
        )
        .itemOutputs("monilabs:hyperbolic_microverse_projector")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("omnic_synthesizer")
        .itemInputs("4x gtceu:zpm_emitter", "8x ae2:controller", "2x gtceu:luv_field_generator", "4x gtceu:atomic_casing", "4x #gtceu:circuits/zpm",
            "2x gtceu:zpm_field_generator", "1x gtceu:research_station"
        )
        .itemOutputs("gtceu:omnic_synthesizer")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("reinforced_mining_laser")
        .itemInputs("2x #chipped:redstone_block", "9x #forge:glass", "4x kubejs:solidified_argon", "2x #chipped:quartz_block", "2x minecraft:quartz",
            "2x #gtceu:circuits/hv", "1x #gtceu:batteries/hv"
        )
        .itemOutputs("kubejs:reinforced_mining_laser")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("mm_t2")
        .itemInputs("1x kubejs:basic_micro_miner_guidance_system", "6x gtceu:double_titanium_plate", "1x gtceu:stainless_steel_crate", "2x kubejs:basic_mining_laser", 
            "2x gtceu:lv_field_generator", "1x kubejs:electrum_micro_miner_core", "1x gtceu:mv_combustion", "3x kubejs:electrical_steel_thruster"
        )
        .itemOutputs("kubejs:microminer_t2")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("angel_ring")
        .itemInputs("8x gtceu:rose_gold_ingot", "4x gtceu:gravitation_engine_unit", "1x kubejs:leadstone_thruster", "1x gtceu:advanced_nanomuscle_chestplate",
            "1x kubejs:conductive_iron_thruster", "1x kubejs:reinforced_thruster", "1x kubejs:energetic_thruster", "1x kubejs:fluxed_thruster",
            "1x gtceu:advanced_quarktech_chestplate", "1x kubejs:dark_soularium_thruster"
        )
        .itemOutputs("better_angel_ring:angel_ring")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.large_auto_crafter("nasa_workbench")
        .itemInputs("4x gtceu:hv_robot_arm", "10x gtceu:double_steel_plate", "2x gtceu:hv_emitter", "2x gtceu:hv_machine_casing", "4x #gtceu:circuits/hv",
            "1x gtceu:mv_assembler"
        )
        .itemOutputs("ad_astra:nasa_workbench")
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV])
    // Elite
    event.recipes.gtceu.large_auto_crafter("ultimate_table")
        .itemInputs("4x #chipped:emerald_block", "20x gtceu:black_steel_plate", "4x extendedcrafting:the_ultimate_catalyst", "16x extendedcrafting:ultimate_component", 
            "4x extendedcrafting:crystaltine_component", "1x extendedcrafting:elite_table"
        )
        .itemOutputs("extendedcrafting:ultimate_table")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.large_auto_crafter("mm_t4half")
        .itemInputs("2x kubejs:reinforced_mining_laser", "1x kubejs:basic_micro_miner_guidance_system", "2x redstone_arsenal:flux_sword", "16x gtceu:double_lumium_plate",
            "2x gtceu:hv_robot_arm", "3x kubejs:signalum_micro_miner_core", "2x gtceu:hv_field_generator", "4x gtceu:double_hsse_plate", "2x gtceu:large_combustion_engine",
            "3x kubejs:energetic_thruster"
        )
        .itemOutputs("kubejs:microminer_t4half")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.large_auto_crafter("advanced_enchanting_infuser")
        .itemInputs("1x #chipped:bookshelf", "4x gtceu:titanium_tungsten_carbide_plate", "4x gtceu:mythril_gear", "2x create_enchantment_industry:hyper_experience_bottle", 
            "4x gtceu:osmiridium_plate", "4x #forge:exquisite_gems",    "10x gtceu:dense_obsidian_plate", "2x minecraft:netherite_block", "9x #chipped:crying_obsidian", 
            "1x enchantinginfuser:enchanting_infuser"
        )
        .itemOutputs("enchantinginfuser:advanced_enchanting_infuser")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.large_auto_crafter("mm_t5")
        .itemInputs("2x kubejs:advanced_micro_miner_guidance_system", "12x gtceu:double_iridium_plate", "6x gtceu:double_signalum_plate", "1x kubejs:supercharged_laser_array",
            "2x gtceu:ev_field_generator", "1x gtceu:mv_super_chest", "2x kubejs:signalum_micro_miner_core", "1x gtceu:fission_reactor_power", "1x kubejs:fission_reactor_fuel_cell",
            "3x kubejs:vibrant_thruster"
        )
        .itemOutputs("kubejs:microminer_t5")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.large_auto_crafter("mm_t6")
        .itemInputs("4x kubejs:supercharged_laser_array", "2x kubejs:advanced_micro_miner_guidance_system", "20x gtceu:double_iridium_plate", "2x gtceu:mv_super_chest", 
            "2x kubejs:enderium_micro_miner_core", "2x gtceu:iv_field_generator", "1x gtceu:fission_reactor_power", "3x kubejs:fission_reactor_fuel_cell",
            "3x kubejs:resonant_thruster"
        )
        .itemOutputs("kubejs:microminer_t6")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.large_auto_crafter("mm_t3")
        .itemInputs("2x kubejs:basic_micro_miner_guidance_system", "15x gtceu:double_tungsten_carbide_plate", "2x gtceu:mv_field_generator", "3x gtceu:titanium_crate", 
            "2x kubejs:reinforced_mining_laser", "2x kubejs:electrum_micro_miner_core", "1x gtceu:hv_combustion", "3x kubejs:reinforced_thruster"
        )
        .itemOutputs("kubejs:microminer_t3")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.large_auto_crafter("mm_t4")
        .itemInputs("1x kubejs:basic_micro_miner_guidance_system", "2x kubejs:reinforced_mining_laser", "5x gtceu:double_tungsten_carbide_plate", "6x gtceu:double_signalum_plate",
            "2x gtceu:tungsten_steel_crate", "2x gtceu:hv_field_generator", "2x kubejs:signalum_micro_miner_core", "4x kubejs:energetic_thruster", "2x gtceu:large_combustion_engine"
        )
        .itemOutputs("kubejs:microminer_t4")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    // Ultimate
    event.recipes.gtceu.large_auto_crafter("epic_table")
        .itemInputs("4x gtceu:activated_netherite_block", "40x gtceu:double_black_steel_plate", "4x extendedcrafting:the_ultimate_catalyst", "24x extendedcrafting:epic_component", 
            "8x extendedcrafting:crystaltine_component", "1x extendedcrafting:ultimate_table"
        )
        .itemOutputs("extendedcrafting:epic_table")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("infinity_screwdriver")
        .notConsumable("#gtceu:tools/crafting_screwdrivers")
        .itemInputs("8x gtceu:infinity_rod", "8x monilabs:eltz_rod", "4x gtceu:neutronium_rod", "8x gtceu:omnium_ingot", "1x kubejs:supercritical_prismatic_core")
        .itemOutputs("kubejs:infinity_screwdriver")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("infinity_wrench")
        .notConsumable("#gtceu:tools/crafting_wrenches")
        .itemInputs("19x gtceu:neutronium_plate", "6x gtceu:infinity_plate", "1x kubejs:supercritical_prismatic_core", "8x monilabs:eltz_plate")
        .itemOutputs("kubejs:infinity_wrench")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("infinity_wire_cutter")
        .notConsumable("#gtceu:tools/crafting_wire_cutters")
        .itemInputs("17x gtceu:neutronium_plate", "8x gtceu:infinity_plate", "8x monilabs:eltz_plate", "1x kubejs:supercritical_prismatic_core", "15x gtceu:omnium_ingot")
        .itemOutputs("kubejs:infinity_wire_cutter")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("mm_t8half")
        .itemInputs("5x kubejs:supercharged_laser_array", "19x gtceu:double_naquadah_alloy_plate", "2x kubejs:advanced_micro_miner_guidance_system",
            "17x gtceu:double_trinium_plate", "2x gtceu:zpm_field_generator", "2x gtceu:zpm_emitter", Item.of('kubejs:abyssal_energy_core', '{Damage:4000000}'),
            "2x gtceu:naquadah_alloy_frame", "2x gtceu:luv_quantum_chest", "2x kubejs:warp_core", "2x kubejs:warp_controller", "6x kubejs:warp_engine"
        )
        .itemOutputs("kubejs:microminer_t8half")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("infinity_panel")
        .itemInputs("4x solarflux:sp_custom_neutronium", "40x gtceu:neutronium_plate", "36x gtceu:infinity_plate", "1x gtceu:infinity_frame")
        .itemOutputs("solarflux:sp_custom_infinity")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("infinity_file")
        .notConsumable("#gtceu:tools/crafting_files")
        .itemInputs("8x gtceu:neutronium_plate", "4x gtceu:infinity_plate", "8x monilabs:eltz_plate", "1x kubejs:supercritical_prismatic_core", "11x gtceu:omnium_ingot")
        .itemOutputs("kubejs:infinity_file")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("infinity_hammer")
        .notConsumable("#gtceu:tools/crafting_hammers")
        .itemInputs("9x gtceu:infinity_ingot", "8x monilabs:eltz_ingot", "5x gtceu:neutronium_ingot", "1x kubejs:supercritical_prismatic_core", "12x gtceu:omnium_ingot")
        .itemOutputs("kubejs:infinity_hammer")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("zpm_module")
        .itemInputs("14x kubejs:elite_radiation_shielding_plate", "5x kubejs:stabilized_berkelium", "4x kubejs:stabilized_californium", "10x #gtceu:circuits/zpm",
            "2x gtceu:zpm_field_generator"
        )
        .itemOutputs("gtceu:zero_point_module")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("mm_t9")
        .itemInputs("28x kubejs:quantum_fluxed_eternium_heavy_plating", "1x kubejs:universal_navigator", "1x gtceu:uv_field_generator", "2x gtceu:plasma_large_turbine",
            "2x gtceu:tungstensteel_gearbox", "1x kubejs:universal_warp_controller", "2x gtceu:ev_super_chest", "2x gtceu:uv_rotor_holder", "1x kubejs:universal_warp_core",
            "2x kubejs:hadal_warp_engine"   
        )
        .itemOutputs("kubejs:microminer_t9")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("mm_t10")
        .itemInputs("38x kubejs:universe_resistant_neutronium_heavy_plating", "2x kubejs:universal_navigator", "2x solarflux:sp_custom_neutronium", "2x kubejs:universal_warp_controller",
            "1x gtceu:energy_cluster", "2x kubejs:universal_warp_core", "1x gtceu:iv_quantum_chest", "4x kubejs:hadal_warp_engine"
        )
        .itemOutputs("kubejs:microminer_t10")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("mm_t7")
        .itemInputs("4x kubejs:supercharged_laser_array", "2x kubejs:advanced_micro_miner_guidance_system", "33x gtceu:double_cryolobus_plate", "16x gtceu:double_naquadah_plate",
            "3x kubejs:enderium_micro_miner_core", Item.of('kubejs:bathyal_energy_core', '{Damage:2000000}'), "2x gtceu:luv_field_generator", "1x kubejs:dischargement_core",
            Item.of('kubejs:bathyal_energy_core', '{Damage:2000000}'), "4x kubejs:warp_engine"
        )
        .itemOutputs("kubejs:microminer_t7")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    event.recipes.gtceu.large_auto_crafter("mm_t8")
        .itemInputs("2x kubejs:advanced_micro_miner_guidance_system", "18x monilabs:double_crystal_matrix_plate", "20x gtceu:double_rhodium_plated_palladium_plate", 
            "11x gtceu:double_duranium_plate", "3x kubejs:supercharged_laser_array", "4x gtceu:hv_super_chest", "1x gtceu:zpm_field_generator", 
            "2x kubejs:warp_controller", "2x kubejs:warp_core", "2x kubejs:warp_engine"
        )
        .itemOutputs("kubejs:microminer_t8")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])
    // Epic
    event.recipes.gtceu.large_auto_crafter("mm_t11")
        .itemInputs("2x gtceu:uhv_robot_arm", "19x monilabs:double_crystal_matrix_plate", "41x kubejs:elementally_infused_omnic_matrix_heavy_plating", "4x solarflux:sp_custom_neutronium", 
            "2x kubejs:universal_navigator", "1x gtceu:uhv_quantum_chest", "2x kubejs:universal_warp_controller", "2x kubejs:universal_warp_core", "6x kubejs:hadal_warp_engine"
        )
        .itemOutputs("kubejs:microminer_t11")
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.large_auto_crafter("mm_t12")
        .itemInputs("36x kubejs:dimensionally_stabilized_infinity_heavy_plating", "1x kubejs:extradimensional_navigator", "4x monilabs:dimensional_stabilization_netherite_casing",
            "4x solarflux:sp_custom_infinity", "1x kubejs:field_stabilised_omnic_pulsar_compound", "11x kubejs:universe_resistant_neutronium_heavy_plating",
            "2x kubejs:omnic_matrix_coil_block", "1x gtceu:uhv_quantum_chest", "2x gtceu:large_naquadah_reactor", "6x kubejs:hadal_warp_engine"
        )
        .itemOutputs("kubejs:microminer_t12")
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV])
})
