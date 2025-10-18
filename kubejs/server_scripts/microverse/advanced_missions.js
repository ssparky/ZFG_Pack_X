/**
 * Recipe definitions for advanced microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM missions
    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:cobalt_brass_drill_head")
            .itemInputs("8x kubejs:wither_realm_data")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "48x gtceu:raw_chalcocite",
                "48x gtceu:raw_pentlandite",
                "24x gtceu:raw_bornite",
                "24x gtceu:raw_cooperite",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "24x minecraft:raw_iron_block",
                "32x minecraft:raw_copper_block",
                "12x gtceu:raw_tin_block",
                "8x minecraft:raw_gold_block",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "8x gtceu:raw_lapis_block",
                "20x gtceu:raw_emerald_block",
                "16x gtceu:raw_coal_block",
                "32x gtceu:raw_redstone_block",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:vanadium_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_pollucite",
                "64x gtceu:raw_pollucite",
                "64x gtceu:raw_apatite",
                "64x gtceu:raw_apatite",
                "64x gtceu:raw_tricalcium_phosphate",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:stainless_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_tetrahedrite",
                "32x gtceu:raw_realgar",
                "24x gtceu:raw_stibnite",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:wrought_iron_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_thorium",
                "64x gtceu:raw_thorium",
                "48x gtceu:raw_thorium",
                "32x gtceu:raw_pitchblende",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("32x kubejs:aerotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:ultimet_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_beryllium",
                "64x gtceu:raw_chrysoberyl",
                "64x gtceu:raw_aquamarine",
                "64x gtceu:raw_euclase",
                "48x gtceu:raw_red_beryl",
                "48x gtceu:raw_milarite",
                "32x gtceu:raw_morganite",
                "32x gtceu:raw_taaffeite",
                "16x gtceu:raw_pezzottaite",
                "16x gtceu:raw_musgravite",
                "16x gtceu:raw_bazzite",
            )
            .damageRate(1)
    })

    // T5MM missions
    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_plutonium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:hsse_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "48x gtceu:raw_pollucite",
                "24x gtceu:raw_barite",
                "64x gtceu:raw_snowchestite",
                "64x gtceu:raw_snowchestite",
                "24x gtceu:raw_kaemanite",
            )
            .damageRate(3)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:tungsten_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_pyrochlore",
                "64x gtceu:raw_pyrochlore",
                "16x gtceu:raw_lindgrenite",
                "32x gtceu:raw_molybdenite",
                "24x gtceu:raw_columbite",
                "16x gtceu:raw_samarskite-yb",
            )
            .damageRate(2)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:vanadium_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_guyanaite",
                "64x gtceu:raw_vanadium_magnetite",
                "64x gtceu:raw_chromite",
                "48x gtceu:raw_zincochromite",
                "24x gtceu:raw_tarapacaite",
            )
            .damageRate(2)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x kubejs:radium_salt",
                "48x kubejs:radium_salt",
                "64x gtceu:raw_borax",
                "64x gtceu:raw_datolite",
                "64x gtceu:raw_dilithium",
                "48x gtceu:raw_dilithium",
            )
            .damageRate(2)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:invar_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_borax",
                "48x gtceu:raw_borax",
                "64x gtceu:raw_suanite",
                "64x gtceu:raw_ulexite",
                "64x gtceu:raw_datolite",
                "48x gtceu:raw_chambersite",
                "32x gtceu:raw_tusionite",
            )
            .damageRate(2)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:blue_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_aragonite",
                "48x gtceu:raw_otavite",
                "64x gtceu:raw_hawleyite",
                "64x gtceu:raw_cadmoindite",
                "32x gtceu:raw_indite"
            )
            .damageRate(2)
    })

    // T6MM missions
    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:naquadah_alloy_drill_head")
            .itemInputs("16x kubejs:wither_realm_data")
            .damageRate(4)
            .itemOutputs(
                "64x gtceu:raw_uraninite",
                "64x gtceu:raw_uraninite",
                "48x gtceu:raw_ekanite",
                "64x gtceu:raw_plutonium",
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_curium")
            .itemInputs("kubejs:blasting_kit")
            .itemInputs("64x kubejs:wither_realm_data")
            .damageRate(4)
            .itemOutputs(
                "64x gtceu:raw_nether_quartz",
                "64x gtceu:raw_nether_quartz",
                "64x minecraft:ancient_debris",
                "48x minecraft:ancient_debris",
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 6, 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_plutonium")
            .itemInputs("8x kubejs:dragon_lair_data")
            .damageRate(-40)
            .itemOutputs(
                "32x minecraft:dragon_egg",
                "64x kubejs:ender_dragon_scale",
                "32x minecraft:dragon_breath",
            )
            .requiredMicroverse(2) // Hostile : Normal
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:tungsten_carbide_drill_head")
            .damageRate(4)
            .itemOutputs(
                "32x gtceu:raw_monazite",
                "64x gtceu:raw_fergusonite",
                "64x gtceu:raw_xenotime",
                "48x gtceu:raw_thortveitite",
                "32x gtceu:raw_bastnasite",
                "16x gtceu:raw_redstone"
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:vanadium_steel_drill_head")
            .damageRate(4)
            .itemOutputs(
                "32x gtceu:raw_cadmoindite",
                "64x gtceu:raw_indite",
                "64x gtceu:raw_dzhalindite",
                "48x gtceu:raw_coccinite",
                "32x gtceu:raw_iodargyrite",
                "16x gtceu:raw_stibiotantalite"
            )
            .requiredMicroverse(1) // Normal
    })
})