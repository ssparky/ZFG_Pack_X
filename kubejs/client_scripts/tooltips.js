/**
 * Tooltips under item names
 */

const FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")

ItemEvents.tooltip(tooltip => {
    // Microminers
    function microminer_tooltip(tier) {
        tooltip.add(`kubejs:microminer_t${tier}`, Text.translatable(`item.kubejs.microminer_t${tier}.desc`))
    }
    for (let i = 1; i <= 12; i++) {
        microminer_tooltip(i)
    }

    tooltip.add("kubejs:microminer_t2half", Text.translatable("item.kubejs.microminer_t2half.desc"))
    tooltip.add("kubejs:microminer_t4half", Text.translatable("item.kubejs.microminer_t4half.desc"))
    tooltip.add("kubejs:microminer_t8half", Text.translatable("item.kubejs.microminer_t8half.desc"))

    tooltip.addAdvanced(["/kubejs:stabilized_microminer/"], (item, adv, text) => {
        text.add(1, Text.translatable("item.kubejs.stabilized_microminer.tooltip.1"))
        text.add(2, Text.translatable("item.kubejs.stabilized_microminer.tooltip.2"))
        text.add(3, Text.translatable("item.kubejs.stabilized_microminer.tooltip.3"))
    })

    tooltip.addAdvanced(["/kubejs:microminer.*damaged/"], (item, adv, text) => {
        text.add(1, Text.translatable("item.kubejs.damaged_microminer.tooltip"))
    })

    // Microminer Components
    tooltip.add("kubejs:universal_navigator", Text.translatable("kubejs.universal_navigator.tooltip"))

    // Assembly line ordering
    tooltip.add("gtceu:assembly_line", Text.translatable("gtceu.assembly_line.tooltip.normalandhardmode"))

    // Meowni Plush
    tooltip.add("kubejs:meowni_plush", Text.translatable("kubejs.meowni_plush.tooltip.hardmode.1"))
    tooltip.add("kubejs:meowni_plush", Text.translatable("kubejs.meowni_plush.tooltip.hardmode.2"))

    // Questbook
    tooltip.addAdvanced("ftbquests:book", (item, adv, text) => { text.add(2, Text.gray(Text.translatable("ftbquests.book.tooltip"))) })

    tooltip.add("patchouli:guide_book", Text.translatable("item.patchouli.guide_book.tooltip"))
    // Redstone Clock
    tooltip.add("redstoneclock:redstone_clock", Text.translatable("redstoneclock.redstone_clock.tooltip"))

    // HNN Data Model
    tooltip.add("hostilenetworks:blank_data_model", Text.translatable("hostilenetworks.blank_data_model.tooltip"))

    // HNN Matters
    tooltip.add("hostilenetworks:overworld_prediction", Text.translatable("hostilenetworks.overworld_prediction.tooltip"))
    tooltip.add("hostilenetworks:nether_prediction", Text.translatable("hostilenetworks.nether_prediction.tooltip"))
    tooltip.add("hostilenetworks:end_prediction", Text.translatable("hostilenetworks.end_prediction.tooltip"))

    // Circuits
    tooltip.addAdvanced("kubejs:bioware_processor_mainframe", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uev_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:bioware_processor_computer", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uhv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:bioware_processor_assembly", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:bioware_processor", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.zpm_tier_circuit"))) })
    tooltip.addAdvanced(["kubejs:bioware_processor_mainframe", "kubejs:bioware_processor_computer", "kubejs:bioware_processor_assembly", "kubejs:bioware_processor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("item.kubejs.bioware_circuit.tooltip"))) })

    tooltip.addAdvanced("kubejs:optical_processor_mainframe", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uiv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:optical_processor_computer", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uev_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:optical_processor_assembly", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uhv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:optical_processor", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uv_tier_circuit"))) })
    tooltip.addAdvanced(["kubejs:optical_processor_mainframe", "kubejs:optical_processor_computer", "kubejs:optical_processor_assembly", "kubejs:optical_processor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("item.kubejs.optical_circuit.tooltip"))) })

    tooltip.addAdvanced("kubejs:matter_processor_mainframe", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uxv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:matter_processor_computer", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uiv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:matter_processor_assembly", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uev_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:matter_processor", (item, adv, text) => { text.add(1, Text.gold(Text.translatable("item.kubejs.uhv_tier_circuit"))) })
    tooltip.addAdvanced(["kubejs:matter_processor_mainframe", "kubejs:matter_processor_computer", "kubejs:matter_processor_assembly", "kubejs:matter_processor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("item.kubejs.matter_circuit.tooltip"))) })

    tooltip.addAdvanced("kubejs:extradimensional_processor_mainframe", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.opv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:extradimensional_processor_computer", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.uxv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:extradimensional_processor_assembly", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.uiv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:extradimensional_processor", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.uev_tier_circuit"))) })
    tooltip.addAdvanced(["kubejs:extradimensional_processor_mainframe", "kubejs:extradimensional_processor_computer", "kubejs:extradimensional_processor_assembly", "kubejs:extradimensional_processor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("item.kubejs.extradimensional_circuit.tooltip"))) })

    tooltip.addAdvanced("kubejs:multiversal_processor_mainframe", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.max_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:multiversal_processor_computer", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.opv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:multiversal_processor_assembly", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.uxv_tier_circuit"))) })
    tooltip.addAdvanced("kubejs:multiversal_processor", (item, adv, text) => { text.add(1, Text.darkPurple(Text.translatable("item.kubejs.uiv_tier_circuit"))) })
    tooltip.addAdvanced(["kubejs:multiversal_processor_mainframe", "kubejs:multiversal_processor_computer", "kubejs:multiversal_processor_assembly", "kubejs:multiversal_processor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("item.kubejs.multiversal_circuit.tooltip"))) })

    // Multiblocks
    tooltip.add("gtceu:discharger", Text.translatable("gtceu.multiblock.discharger.description"))
    tooltip.add("gtceu:greenhouse", Text.translatable("gtceu.multiblock.greenhouse.description"))
    tooltip.add("gtceu:large_naquadah_reactor", Text.translatable("gtceu.multiblock.large_naquadah_reactor.description"))
    tooltip.add("gtceu:naquadah_refinery", Text.translatable("gtceu.multiblock.naquadah_refinery.description"))
    tooltip.add("gtceu:simulation_supercomputer", Text.translatable("gtceu.multiblock.simulation_supercomputer.description"))
    tooltip.add("gtceu:loot_superfabricator", Text.translatable("gtceu.multiblock.loot_superfabricator.description"))
    tooltip.add("gtceu:fission_reactor_rtg", Text.translatable("gtceu.multiblock.fission_reactor_rtg.description"))
    tooltip.add("gtceu:fission_reactor_power", Text.translatable("gtceu.multiblock.fission_reactor_power.description"))
    tooltip.add("gtceu:fission_reactor_breeder", Text.translatable("gtceu.multiblock.fission_reactor_breeder.description"))
    tooltip.add("gtceu:steel_pump", Text.translatable("gtceu.multiblock.steel_pump.description"))
    tooltip.add("gtceu:aluminium_pump", Text.translatable("gtceu.multiblock.aluminium_pump.description"))
    tooltip.add("gtceu:stainless_steel_pump", Text.translatable("gtceu.multiblock.stainless_steel_pump.description"))
    tooltip.add("gtceu:lapidary_dynamo", Text.translatable("gtceu.multiblock.lapidary_dynamo.description"))

    // Singleblocks
    tooltip.addAdvanced(["gtceu:lv_atomic_reconstructor", "gtceu:mv_atomic_reconstructor", "gtceu:hv_atomic_reconstructor", "gtceu:ev_atomic_reconstructor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.lvev_atomic_reconstructor.desc"))) })
    tooltip.addAdvanced(["gtceu:iv_atomic_reconstructor", "gtceu:luv_atomic_reconstructor", "gtceu:zpm_atomic_reconstructor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.ivzpm_atomic_reconstructor.desc"))) })
    tooltip.addAdvanced(["gtceu:uv_atomic_reconstructor", "gtceu:uhv_atomic_reconstructor", "gtceu:uev_atomic_reconstructor", "gtceu:uiv_atomic_reconstructor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.uvuiv_atomic_reconstructor.desc"))) })
    tooltip.addAdvanced(["gtceu:uxv_atomic_reconstructor", "gtceu:opv_atomic_reconstructor"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.uxvmax_atomic_reconstructor.desc"))) })

    tooltip.addAdvanced(["gtceu:lv_soul_binder", "gtceu:mv_soul_binder", "gtceu:hv_soul_binder", "gtceu:ev_soul_binder"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.lvev_soul_binder.desc"))) })
    tooltip.addAdvanced(["gtceu:iv_soul_binder", "gtceu:luv_soul_binder", "gtceu:zpm_soul_binder"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.ivzpm_soul_binder.desc"))) })
    tooltip.addAdvanced(["gtceu:uv_soul_binder", "gtceu:uhv_soul_binder", "gtceu:uev_soul_binder", "gtceu:uiv_soul_binder"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.uvuiv_soul_binder.desc"))) })
    tooltip.addAdvanced(["gtceu:uxv_soul_binder", "gtceu:opv_soul_binder"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.uxvmax_soul_binder.desc"))) })

    tooltip.addAdvanced(["gtceu:lv_polymerization_chamber", "gtceu:mv_polymerization_chamber", "gtceu:hv_polymerization_chamber", "gtceu:ev_polymerization_chamber"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.lvev_polymerization_chamber.desc"))) })
    tooltip.addAdvanced(["gtceu:iv_polymerization_chamber", "gtceu:luv_polymerization_chamber", "gtceu:zpm_polymerization_chamber"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.ivzpm_polymerization_chamber.desc"))) })
    tooltip.addAdvanced(["gtceu:uv_polymerization_chamber", "gtceu:uhv_polymerization_chamber", "gtceu:uev_polymerization_chamber", "gtceu:uiv_polymerization_chamber"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.uvuiv_polymerization_chamber.desc"))) })
    tooltip.addAdvanced(["gtceu:uxv_polymerization_chamber", "gtceu:opv_polymerization_chamber"], (item, adv, text) => { text.add(1, Text.gray(Text.translatable("block.gtceu.uxvmax_polymerization_chamber.desc"))) })

    tooltip.addAdvanced("gtceu:naquadah_reactor", (item, adv, text) => {
        text.add(1, [Text.gray("A reactor that produces energy from "), Text.gold(Text.translate("item.kubejs.naquadah_fuel_rod")), Text.gray(" decay.")])
    })


    // Parallel multiblocks
    const parallelMultis = [
        ["rock_cycle_simulator", "rock_cycle_simulator"],
        ["atmospheric_accumulator", "gas_collector"],
        ["matter_alterator", "atomic_reconstruction"],
        ["implosion_collider", "implosion_compressor"],
        ["quintessence_infuser", "soul_binding"],
        ["dimensional_superassembler", "assembly_line"],
        ["sculk_biocharger", "discharger"],
        ["simulation_quantumcomputer", "simulation_supercomputer"],
        ["loot_quantumfabricator", "loot_superfabricator"],
        ["gem_growing_vat", "gem_growing_vat"],
        ["neutron_chamber", "neutron_chamber"],
        ["mega_chemical_reactor", "large_chemical_reactor"],
        ["large_auto_crafter", "large_auto_crafter"],
        ["hydroponics_plant", "greenhouse"],
        ["industrial_fishery", "industrial_fishery"],
        ["ore_processing_factory", "ore_processing_factory"],
        ["polymer_multi", "polymerization"],
        ["universal_synchronizer", "universal_synchronizer"]
    ]

    parallelMultis.forEach(multi => {
        tooltip.addAdvanced(`gtceu:${multi[0]}`, (item, adv, text) => {
            text.add(1, Text.translatable("gtceu.multiblock.parallelizable.tooltip"))
            text.add(2, Text.translatable("gtceu.machine.available_recipe_map_1.tooltip", Text.translatable(`gtceu.${multi[1]}`)))
            text.add(3, Text.translatable(`gtceu.multiblock.${multi[0]}.description`))
        })
    })

    tooltip.addAdvanced("gtceu:helical_fusion_reactor", (item, adv, text) => {
        text.add(1, Text.translatable("gtceu.machine.fusion_reactor.capacity", Math.trunc(FusionReactorMachine.calculateEnergyStorageFactor(GTValues.UHV, 16) / 1000000)))
        text.add(2, Text.translatable("gtceu.multiblock.parallelizable.tooltip"))
        text.add(3, Text.translatable("gtceu.machine.available_recipe_map_1.tooltip", Text.translatable("gtceu.fusion_reactor")))
        text.add(4, Text.translatable("gtceu.multiblock.helical_fusion_reactor.description"))
    })

    tooltip.addAdvanced("gtceu:mega_alloy_blast_smelter", (item, adv, text) => {
        text.add(1, Text.translatable("gtceu.multiblock.parallelizable.tooltip"))
        text.add(2, Text.translatable("gtceu.machine.available_recipe_map_1.tooltip", Text.translatable("gtceu.alloy_blast_smelter")))
        text.add(3, Text.translatable("gtceu.machine.electric_blast_furnace.tooltip.0"))
        text.add(4, Text.translatable("gtceu.machine.electric_blast_furnace.tooltip.1"))
        text.add(5, Text.translatable("gtceu.machine.electric_blast_furnace.tooltip.2"))
    })

    tooltip.addAdvanced("gtceu:antimatter_collider", (item,adv,text) => {
        text.add(1, Text.translatable("gtceu.multiblock.antimatter_collider.tooltip.0"))
        text.add(2, Text.translatable("gtceu.multiblock.antimatter_collider.tooltip.1"))
        text.add(3, Text.translatable("gtceu.multiblock.antimatter_collider.tooltip.2"))
        text.add(4, Text.translatable("gtceu.multiblock.antimatter_collider.tooltip.3"))
        text.add(5, Text.translatable("gtceu.multiblock.antimatter_collider.tooltip.4"))
    })

    tooltip.addAdvanced("kubejs:bathyal_energy_core", (item, adv, text) => text.add(1, Text.of(String(item.damageValue) + " / 2000000 RF")))
    tooltip.addAdvanced("kubejs:abyssal_energy_core", (item, adv, text) => text.add(1, Text.of(String(item.damageValue) + " / 4000000 RF")))
    tooltip.addAdvanced("kubejs:hadal_energy_core", (item, adv, text) => text.add(1, Text.of(String(item.damageValue) + " / 8000000 RF")))

    // Parallel hatches
    tooltip.add("gtceu:uhv_uhv_parallel_hatch", Text.translatable("gtceu.giga_parallel_hatch.desc"))
    tooltip.add("gtceu:uev_uev_parallel_hatch", Text.translatable("gtceu.omega_parallel_hatch.desc"))

    // Coils - TODO: uiv/uxv/opv
    tooltip.add("kubejs:uhv_voltage_coil", Text.translatable("gtceu.uhv_voltage_coil.desc"))
    tooltip.add("kubejs:uev_voltage_coil", Text.translatable("gtceu.uev_voltage_coil.desc"))

    // Assorted info & warnings for GT machines
    tooltip.add("gtceu:basic_tape", Text.translatable("gtceu.basic_tape.tooltip"));
    tooltip.add("gtceu:nightvision_goggles", Text.translatable("gtceu.nightvision_goggles.tooltip"));
    tooltip.add(/^gtceu:.*_robot_arm$/, Text.translatable("gtceu:robot_arm.tooltip"))
    tooltip.add(/^gtceu:.*_fluid_regulator$/, Text.translatable("gtceu:fluid_regulator.tooltip"))

    // Sophisticated Storage
    tooltip.add("functionalstorage:storage_controller", Text.translatable("functionalstorage.storage_controller.tooltip"));
    tooltip.add("functionalstorage:framed_storage_controller", Text.translatable("functionalstorage.framed_storage_controller.tooltip"));

    // AE2
    tooltip.add("ae2:facade", Text.gray(Text.translatable("ae2.facade.tooltip")));
    tooltip.add("ae2:memory_card", Text.gray(Text.translatable("ae2.memory_card.tooltip")));
    tooltip.add("betterp2p:advanced_memory_card", Text.gray(Text.translatable("betterp2p.advanced_memory_card.tooltip")));

    // Misc
    tooltip.add("gtceu:infinity_ingot", Text.darkGray(Text.translatable("gtceu.infinity_ingot.tooltip")));
    tooltip.add("gtceu:monium_ingot", Text.darkGray(Text.translatable("gtceu.monium_ingot.tooltip")));
    tooltip.add("extendedcrafting:the_ultimate_catalyst", Text.darkGray(Text.translatable("extendedcrafting.the_ultimate_catalyst.tooltip")));
    tooltip.add("extendedcrafting:the_ultimate_component", Text.darkGray(Text.translatable("extendedcrafting.the_ultimate_component.tooltip")));

    tooltip.add("extendedcrafting:auto_flux_crafter", Text.translatable("extendedcrafting.auto_flux_crafter.tooltip"));
    tooltip.add("extendedcrafting:flux_alternator", Text.translatable("extendedcrafting.flux_alternator.tooltip"));
    tooltip.addAdvanced(["extendedcrafting:basic_auto_table", "extendedcrafting:advanced_auto_table", "extendedcrafting:elite_auto_table", "extendedcrafting:ultimate_auto_table", "extendedcrafting:epic_auto_table", "extendedcrafting:auto_flux_crafter"], (item, adv, text) => {
        text.add(1, Text.translatable("extendedcrafting.auto_table.tooltip.1"))
        text.add(2, Text.translatable("extendedcrafting.auto_table.tooltip.2"))
    })

    tooltip.add("kubejs:excitationcoil", Text.translatable("kubejs.excitationcoil.tooltip"));
    tooltip.add("gtceu:terminal", Text.translatable("gtceu.terminal.tooltip"));

    tooltip.add(["gtceu:prospector.lv", "gtceu:prospector.hv", "gtceu:prospector.luv"], Text.translatable("gtceu.prospector.tooltip.1"));
    tooltip.add(["gtceu:prospector.lv", "gtceu:prospector.hv", "gtceu:prospector.luv"], Text.translatable("gtceu.prospector.tooltip.2"));


    tooltip.addAdvanced(["/^kubejs:.+infinity_dust_block$/", "kubejs:infinity_dust_block"], (item, adv, text) => {
        text.add(1, Text.translatable("item.kubejs.infinity_dust_block.tooltip"))
    })

    // Wooden pipe, tank warning
    tooltip.add([
        "gtceu:wood_small_fluid_pipe",
        "gtceu:treated_wood_small_fluid_pipe",
        "gtceu:wood_normal_fluid_pipe",
        "gtceu:treated_wood_normal_fluid_pipe",
        "gtceu:wood_large_fluid_pipe",
        "gtceu:treated_wood_large_fluid_pipe",
        "gtceu:wooden_multiblock_tank"
    ], Text.translatable("gtceu.wood_pipe_warning.tooltip"))

    // Chipped workbenches
    tooltip.addAdvanced([
        "chipped:botanist_workbench",
        "chipped:glassblower",
        "chipped:carpenters_table",
        "chipped:loom_table",
        "chipped:mason_table",
        "chipped:alchemy_bench",
        "chipped:tinkering_table"], (item, adv, text) => {
        text.add(1, Text.translatable("chipped.workbenches.tooltip.1"))
        text.add(2, Text.translatable("chipped.workbenches.tooltip.2"))
    })
    tooltip.add("chisel_chipped_integration:drill", Text.translatable("chipped.drill.tooltip"))

    // TaCZ ammo molds crafting tooltip
    tooltip.add(/^kubejs:ammo_mold_.*$/, Text.translatable("kubejs:ammo_mold.tooltip"))

    // Nuclear Fuel tooltips
    const nuclearFuels = [
        ["thorium_230", 120, 0.94, "IV"],
        ["thorium_232", 180, 0.52, "IV"],
        ["uranium_233", 90, 0.26, "LuV"],
        ["uranium_235", 140, 0.88, "IV"],
        ["uranium_238", 240, 0.78, "EV"],
        ["neptunium_236", 70, 0.37, "LuV"],
        ["neptunium_237", 240, 0.43, "IV"],
        ["plutonium_238", 85, 0.98, "LuV"],
        ["plutonium_239", 150, 0.52, "LuV"],
        ["plutonium_241", 110, 0.67, "LuV"],
        ["plutonium_242", 240, 0.71, "IV"],
        ["americium_241", 60, 0.36, "ZPM"],
        ["americium_242", 120, 0.85, "LuV"],
        ["americium_243", 240, 0.25, "LuV"],
        ["curium_243", 90, 0.47, "ZPM"],
        ["curium_245", 140, 0.37, "ZPM"],
        ["curium_246", 240, 0.31, "LuV"],
        ["curium_247", 180, 0.29, "ZPM"],
        ["berkelium_247", 240, 0.37, "LuV"],
        ["berkelium_248", 65, 0.6, "ZPM"],
        ["californium_249", 130, 0.44, "ZPM"],
        ["californium_250", 100, 0.34, "UV"],
        ["californium_251", 110, 0.75, "ZPM"],
        ["californium_252", 240, 0.73, "LuV"],
        ["einsteinium_252", 240, 0.92, "LuV"],
        ["einsteinium_253", 135, 0.26, "UV"],
        ["einsteinium_254", 100, 0.32, "UV"],
        ["fermium_255", 80, 0.61, "UV"],
        ["fermium_257", 180, 0.69, "ZPM"],
        ["mendelevium_259", 90, 0.76, "UV"],
        ["nobelium_259", 75, 0.36, "UHV"],
    ]

    for (const [fuel, time, power, tier] of nuclearFuels) {
        tooltip.add(`kubejs:${fuel}_fuel_pellet`, `§eBurns for ${time} seconds, generating ${power}A @ ${tier}`)
    }
})
