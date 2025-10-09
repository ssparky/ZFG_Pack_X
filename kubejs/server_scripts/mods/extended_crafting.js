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
        "gtceu:cryococcus_plate", ["2x redstone_arsenal:flux_plating", "3x kubejs:quantum_flux"],
        1600000, 160000
    )

    event.recipes.extendedcrafting.combination(
        "kubejs:universe_resistant_neutronium_heavy_plating",
        "gtceu:neutronium_plate", ["gtceu:omnium_nugget", "3x gtceu:quantum_eye"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "kubejs:elementally_infused_omnic_matrix_heavy_plating",
        "gtceu:omnium_plate", ["2x monilabs:crystal_matrix_plate", "gtceu:gravi_star", "gtceu:neutron_reflector", "3x kubejs:primal_mana"],
        10000000, 1000000
    )

    event.recipes.extendedcrafting.combination(
        "kubejs:dimensionally_stabilized_infinity_heavy_plating",
        "gtceu:infinity_plate", ["2x gtceu:activated_netherite_plate", "kubejs:quasi_stable_neutron_star", "2x gtceu:neutron_reflector", "2x kubejs:the_ultimate_material"],
        16000000, 1600000
    )

    // Infinity Ingots
    event.recipes.extendedcrafting.combination(
        "gtceu:infinity_ingot",
        "kubejs:active_prismatic_core", ["4x gtceu:activated_netherite_ingot", "4x gtceu:neutronium_ingot"],
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
    // MB Recipe TODO: !!

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

    // Ultimate

    // Epic
})
