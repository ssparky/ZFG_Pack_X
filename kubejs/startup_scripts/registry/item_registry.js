/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry("item", event => {
    const miners = [
        "1",
        "2",
        "2half",
        "2half_damaged",
        "3",
        "4",
        "4half",
        "4half_damaged",
        "5",
        "6",
        "6_damaged",
        "7",
        "7_damaged",
        "8",
        "8_damaged",
        "8half",
        "9",
        "10",
        "11",
        "12"
    ]

    const stabilized_miners = [
        "2half",
        "4half",
        "6",
        "7",
        "8",
    ]

    // Regular Microminers
    for (const tier of miners) {
        event.create(`microminer_t${tier}`)
            .maxStackSize(16)
            .texture(`kubejs:item/microverse/miner/microminer_t${tier}`)
    }

    // Stabilized Miners
    for (const tier of stabilized_miners) {
        event.create(`stabilized_microminer_t${tier}`)
            .maxStackSize(16)
            .texture(`kubejs:item/microverse/miner/microminer_t${tier}`)
            .glow(true);
    }

    // Microminer Components
    event.create("basic_mining_laser")
        .texture("kubejs:item/microverse/component/basic_mining_laser")
        .displayName("§eBasic Mining Laser")
    event.create("reinforced_mining_laser")
        .texture("kubejs:item/microverse/component/reinforced_mining_laser")
        .displayName("§bReinforced Mining Laser")
    event.create("supercharged_laser_array")
        .texture("kubejs:item/microverse/component/supercharged_laser_array")
        .displayName("§eSupercharged Laser Array")
    event.create("basic_micro_miner_guidance_system")
        .texture("kubejs:item/microverse/component/basic_micro_miner_guidance_system")
        .displayName("§eBasic Micro Miner Guidance System")
    event.create("advanced_micro_miner_guidance_system")
        .texture("kubejs:item/microverse/component/advanced_micro_miner_guidance_system")
        .displayName("§eAdvanced Micro Miner Guidance System")
    event.create("warp_engine")
        .texture("kubejs:item/microverse/component/warp_engine")
        .displayName("§dWarp Engine")
    event.create("hadal_warp_engine")
        .texture("kubejs:item/microverse/component/hadal_warp_engine")
        .displayName("§dHadal Warp Engine")
    event.create("universal_navigator")
        .texture("kubejs:item/microverse/component/universal_navigator")
        .displayName("§dUniversal Navigator")
    event.create("extradimensional_navigator")
        .texture("kubejs:item/microverse/component/extradimensional_navigator")
        .displayName("§dExtradimensional Navigator")

    // Quantum Flux & Universe Creation Data
    event.create("quantum_flux")
        .texture("kubejs:item/microverse/quantum_flux")
        .displayName("§dQuantum Flux")
    event.create("universe_creation_data")
        .displayName("§dUniverse Creation Data")
    event.create("shattered_universe_data")
        .displayName("§dShattered Universe Data")
    event.create("corrupted_universe_data")
        .displayName("§dCorrupted Universe Data")

    // Miner kits
    event.create("gem_sensor")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/gem_sensor")
        .displayName("Gemstone Sensor")
    event.create("basic_drilling_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/basic_drilling_kit")
    event.create("advanced_drilling_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/advanced_drilling_kit")
    event.create("elite_drilling_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/elite_drilling_kit")
    event.create("blasting_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/blasting_kit")
    event.create("microversal_alchemy_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/microversal_alchemy_kit")

    // T9+ Devices
    event.create("gravitational_amplifier")
        .maxStackSize(16)
    event.create("universal_collapse_device")
        .maxStackSize(16)
    event.create("field_stabilised_omnic_pulsar_compound")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/field_stabilised_prismatic_pulsar_compound")
        .displayName("Field-Stabilized Prismatic Pulsar Compound")

    // Heavy platings
    event.create("quantum_fluxed_eternium_heavy_plating")
        .displayName("§dQuantum Fluxed Eternium Heavy Plating")
        .texture("kubejs:item/heavy_plating/eternium")
    event.create("universe_resistant_neutronium_heavy_plating")
        .displayName("§dUniverse Resistant Neutronium Heavy Plating")
        .texture("kubejs:item/heavy_plating/neutronium")
    event.create("elementally_infused_omnic_matrix_heavy_plating")
        .displayName("§dElementally Infused Omnic Matrix Heavy Plating")
        .texture("kubejs:item/heavy_plating/omnic_matrix")
    event.create("dimensionally_stabilized_infinity_heavy_plating")
        .displayName("§dDimensionally Stabilized Infinity Heavy Plating")
        .texture("kubejs:item/heavy_plating/infinity")
    event.create("causality_exempt_monic_heavy_plating")
        .displayName("§9Causality Exempt Monic Heavy Plating")
        .texture("kubejs:item/heavy_plating/monium")

    // Magnetron
    event.create("magnetron")
        .texture("kubejs:item/magnetron")

    // Spacefaring Items
    event.create("radiation_layer")
        .texture("kubejs:item/mod/ad_astra/space_suit/radiation_layer")
    event.create("pressure_layer")
        .texture("kubejs:item/mod/ad_astra/space_suit/pressure_layer")
    event.create("thermal_cloth")
        .texture("kubejs:item/mod/ad_astra/space_suit/thermal_cloth")
    event.create("unprepared_space_helmet")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_helmet")
    event.create("unprepared_space_suit")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_suit")
    event.create("unprepared_space_pants")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_pants")
    event.create("unprepared_space_boots")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_boots")

    // HNN Datas
    event.create("impossible_realm_data")
        .displayName("§bImpossible Realm Data")
    event.create("dragon_lair_data")
        .displayName("§dDragon Lair Data")
    event.create("wither_realm_data")
        .displayName("§dWither Realm Data")
    event.create("deep_dark_data")
        .displayName("§dDeep Dark Data")
    event.create("lair_of_the_warden_data")
        .displayName("§dLair Of The Warden Data")

    // Endgame Items
    event.create("neutron_emitter")
        .texture("kubejs:item/lines/actinium/neutron_emitter")
    event.create("heart_of_a_universe")
        .texture("kubejs:item/heart_of_a_universe")
        .displayName("§dHeart Of A Universe")
    event.create("quasi_stable_neutron_star")
        .texture("kubejs:item/quasi_stable_neutron_star")
        .displayName("Quasi-Stable Neutron Star")

    // INFINITY AND PRISMAC

    // APC
    event.create("inert_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/0_blank_core")
    event.create("red_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/1_red_core")
    event.create("yellow_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/2_yellow_core")
    event.create("green_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/3_green_core")
    event.create("cyan_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/4_cyan_core")
    event.create("blue_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/5_blue_core")
    event.create("active_prismatic_core")
        .rarity("rare")
        .texture("kubejs:item/lines/prismac/infinity/core/6_prismatic_core")

    // SPC
    event.create("orange_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/7_orange_core")
    event.create("lime_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/8_lime_core")
    event.create("teal_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/9_teal_core")
    event.create("azure_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/a_azure_core")
    event.create("indigo_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/b_indigo_core")
    event.create("supercritical_prismatic_core")
        .rarity("epic")
        .texture("kubejs:item/lines/prismac/infinity/core/c_supercritical_prismatic_core")

    // Callibration Devices
    event.create("chromatic_stabilizer")
        .texture("kubejs:item/lines/prismac/stabilizer/chromatic_stabilizer")
    event.create("chromatic_capacitor_empty")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_empty")
        .displayName("Chromatic Capacitor: §7Empty§r")
    event.create("chromatic_capacitor_red")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_red")
        .displayName("Chromatic Capacitor: §4Red§r")
    event.create("chromatic_capacitor_yellow")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_yellow")
        .displayName("Chromatic Capacitor: §eYellow§r")
    event.create("chromatic_capacitor_green")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_green")
        .displayName("Chromatic Capacitor: §2Green§r")
    event.create("chromatic_capacitor_cyan")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_cyan")
        .displayName("Chromatic Capacitor: §bCyan§r")
    event.create("chromatic_capacitor_blue")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_blue")
        .displayName("Chromatic Capacitor: §1Blue§r")
    event.create("chromatic_capacitor_magenta")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_magenta")
        .displayName("Chromatic Capacitor: §dMagenta§r")

    // Infinity Tools
    event.create("infinity_file")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_hammer")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_screwdriver")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_wrench")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_wire_cutter")
        .rarity("epic")
        .maxStackSize(1)

    // Optical Circuit intermediates
    event.create("sapphire_seed_crystal")
        .texture("kubejs:item/circuits/theme/optical/wafer/sapphire_seed_crystal")
    event.create("sapphire_boule")
        .texture("kubejs:item/circuits/theme/optical/wafer/sapphire_boule")
    event.create("sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/sapphire_wafer")
    event.create("coated_sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/coated_sapphire_wafer")
    event.create("engraved_sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/engraved_sapphire_wafer")
    event.create("incomplete_sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/incomplete_sapphire_wafer")
    event.create("completed_optical_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/completed_optical_wafer")
    event.create("optical_chip")
        .texture("kubejs:item/circuits/theme/optical/wafer/optical_chip")
    event.create("electro_optic_modulator")
        .texture("kubejs:item/circuits/theme/optical/electro_optic_modulator")
    event.create("carbon_mesh_reinforced_circuit_board")
        .texture("kubejs:item/circuits/theme/optical/board/carbon_mesh_reinforced_circuit_board")
    event.create("carbon_mesh_reinforced_printed_circuit_board")
        .texture("kubejs:item/circuits/theme/optical/board/carbon_mesh_reinforced_printed_circuit_board")
    event.create("optical_processing_unit")

    // Solidified Elements
    const solidified_elements = [
        ["argon", "#00FF00", "#00a332"],
        ["chlorine", "#39abab", "#1e5961"],
        ["fluorine", "#79afde", "#3872c2"],
        ["helium", "#FCFF90", "#c7b258"],
        ["hydrogen", "#2b39e0", "#0000B5"],
        ["krypton", "#80FF80", "#44d170"],
        ["mercury", "#f5f5f5", "#aa1425"],
        ["neon", "#FAB4B4", "#d6848d"],
        ["nitrogen", "#00BFC1", "#0081a8"],
        ["oxygen", "#4CC3FF", "#005bd6"],
        ["radon", "#FF39FF", "#bd0057"],
        ["xenon", "#00FFFF", "#00a5d6"],
        ["experience", "#d1ff3b", "#46eb12"],
        ["bromine", "#D53C0D", "#962A0A"]
    ]

    for (const [element, elemColor, elemColorSecondary] of solidified_elements) {
        event.create(`solidified_${element}`)
            .textureJson({ 
                layer0: "kubejs:item/solidified",
                layer1: "kubejs:item/solidified_secondary",
                layer2: "kubejs:item/solidified_overlay"
            })
            .color(0, elemColor)
            .color(1, elemColorSecondary);
    }

    // Stabilized Elements
    const stabilized_elements = [
        ["berkelium", "#a33f20", "#87001c"],
        ["neptunium", "#486d7b", "#003064"],
        ["plutonium", "#ba2727", "#222730"],
        ["uranium", "#1d891d", "#33342c"],
        ["curium", "#58307f", "#221255"],
        ["californium", "#7d0222", "#410022"],
        ["americium", "#287869", "#083946"]
    ]

    for (const [element, elemColor, elemColorSecondary] of stabilized_elements) {
        event.create(`stabilized_${element}`)
            .textureJson({ 
                layer0: "kubejs:item/stabilized",
                layer1: "kubejs:item/stabilized_secondary",
                layer2: "kubejs:item/stabilized_overlay"
            })
            .color(0, elemColor)
            .color(1, elemColorSecondary);
    }

    // Misc Items
    event.create("ender_star")
        .texture("kubejs:item/ender_star")
        .glow(true)
    event.create("endest_star")
        .texture("kubejs:item/endest_star")
        .glow(true)
    event.create("grains_of_innocence")
        .texture("kubejs:item/mod/enderio/grains_of_innocence")
    event.create("radium_salt")
        .rarity("Epic")
        .texture("kubejs:item/radium_salt")

    // Thrusters
    const thrusters = [
        ["conductive_iron", "#f7b29b", "#e15757", "#c55252", "#C80000", "redstone", "eio"],
        ["electrical_steel", "#b2c0c1", "#4e7d87", "#b2c0c1", "#4e7d87", "pulsating", "eio"],
        ["energetic", "#ffb545", "#e13923", "#ffb545", "#e13923", "vibrant", "eio"],
        ["vibrant", "#a4ff70", "#24e048", "#a4ff70", "#24e048", "prescient", "eio"],
        ["dark_soularium", "#7c674d", "#644534", "#644534", "#501919", "weather", "eio"],
        ["leadstone", "#7e6f82", "#290633", "#495466", "#06070a", "thermal", "thermal"],
        ["hardened", "#e2e8e1", "#495d57", "#7e6f82", "#290633", "thermal", "thermal"],
        ["reinforced", "#ffff8b", "#ff8533", "#7db9d8", "#756ac9", "thermal", "thermal"],
        ["resonant", "#1f6b62", "#16455f", "#7db9d8", "#756ac9", "thermal", "thermal"],
        ["fluxed", "#ff6b0f", "#c32e00", "#f7be20", "#ffc400", "thermal", "thermal"]
    ]

    for (const [alloy, primaryBot, secondaryBot, primaryTop, secondaryTop, flavor, variety] of thrusters) {
        event.create(`${alloy}_thruster`)
            .textureJson({
                layer0: `kubejs:item/microverse/component/thruster/thruster_bot_${variety}`,
                layer1: `kubejs:item/microverse/component/thruster/thruster_bot_${variety}_secondary`,
                layer2: `kubejs:item/microverse/component/thruster/thruster_top_${variety}`,
                layer3: `kubejs:item/microverse/component/thruster/thruster_top_${variety}_secondary`,
                layer4: `kubejs:item/microverse/component/thruster/thruster_ring_${flavor}`
            })
            .color(0, primaryBot)
            .color(1, secondaryBot)
            .color(2, primaryTop)
            .color(3, secondaryTop)
    }

    // Planet dusts
    event.create("moon_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/moon_dust")
    event.create("mars_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/mars_dust")
    event.create("venus_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/venus_dust")
    event.create("mercury_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/mercury_dust")
    event.create("glacio_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/glacio_dust")


    // Thermal Series item ports
    event.create("aerotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/aerotheum_blend")
    event.create("cryotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/cryotheum_blend")
    event.create("petrotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/petrotheum_blend")
    event.create("pyrotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/pyrotheum_blend")
    event.create("primal_mana")
        .rarity("epic")
        .texture("kubejs:item/mod/thermal/elemental_dusts/primal_mana")

    event.create("destabilized_clathrate")
        .rarity("uncommon")
        .texture("kubejs:item/mod/thermal/clathrate/destabilized_clathrate")
    event.create("energized_clathrate")
        .rarity("uncommon")
        .texture("kubejs:item/mod/thermal/clathrate/energized_clathrate")
    event.create("resonant_clathrate")
        .rarity("rare")
        .texture("kubejs:item/mod/thermal/clathrate/resonant_clathrate")

    // Ender Spore
    event.create("ender_spore")
        .texture("kubejs:item/ender_spore")

    // Extra Utilities 2
    event.create("resonating_crystal")
        .texture("kubejs:item/mod/extrautils2/resonating_crystal")
    event.create("ender_shard")
        .texture("kubejs:item/mod/extrautils2/ender_shard")

    // Nether Star Crafting Components
    event.create("nether_star_north")
        .texture("kubejs:item/mod/thermal/nether_star_north")
        .displayName("Nether Star North Tip")
    event.create("nether_star_south")
        .texture("kubejs:item/mod/thermal/nether_star_south")
        .displayName("Nether Star South Tip")
    event.create("nether_star_east")
        .texture("kubejs:item/mod/thermal/nether_star_east")
        .displayName("Nether Star East Tip")
    event.create("nether_star_west")
        .texture("kubejs:item/mod/thermal/nether_star_west")
        .displayName("Nether Star West Tip")
    event.create("nether_star_center")
        .texture("kubejs:item/mod/thermal/nether_star_center")
        .displayName("Nether Star Center")

    // ArmorPlus monster drops
    event.create("guardian_scale")
        .rarity("rare")
        .texture("kubejs:item/lines/mob_guts/guardian_scale")
    event.create("ender_dragon_scale")
        .rarity("epic")
        .texture("kubejs:item/lines/mob_guts/ender_dragon_scale")
    event.create("ender_dragon_scale_dust")
        .texture("kubejs:item/lines/mob_guts/ender_dragon_scale_dust")
    event.create("wither_bone")
        .texture("kubejs:item/lines/mob_guts/wither_bone")
    event.create("the_ultimate_material")
        .texture("kubejs:item/lines/mob_guts/the_ultimate_material")

    // Crushed Shulker Shell (Shulker Shell recycling)
    event.create("crushed_shulker_shell")
        .texture("kubejs:item/lines/mob_guts/crushed_shulker_shell")
    event.create("niobium_palladium_grit")
        .texture("kubejs:item/lines/mob_guts/niobium_palladium_grit")

    // Pulsating Items
    event.create("pulsating_mesh")
        .texture("kubejs:item/mod/hostilenetworks/pulsating_mesh")
    event.create("pulsating_dust")
        .texture("kubejs:item/mod/hostilenetworks/pulsating_dust")

    // Sculk Items
    event.create("warden_horn")
        .texture("kubejs:item/lines/mob_guts/warden_horn")
    event.create("dischargement_core")
        .texture("kubejs:item/sculk/dischargement_core")
    event.create("warden_heart")
        .texture("kubejs:item/lines/mob_guts/warden_heart")
    event.create("hadal_shard")
        .texture("kubejs:item/sculk/hadal_shard")
    event.create("petri_dish_sterile")
    event.create("petri_dish_sculk")
        .texture("kubejs:item/lines/bioalloy/petri_dish_sculk")
    event.create("petri_dish_bacteria")
        .texture("kubejs:item/circuits/theme/wetware/petri_dish_bacteria")
    event.create("amalgamated_sculk")
        .texture("kubejs:item/lines/bioalloy/amalgamated_sculk")
    const energyCores = [
        ["bathyal", 2000000], // If changing values remember to also change tooltips
        ["abyssal", 4000000],
        ["hadal", 8000000]
    ]
    for (const [core, val] of energyCores) {
        let capacity = val
        event.create(`${core}_energy_core`)
            .attachCapability(CapabilityBuilder.ENERGY.customItemStack()
                .canReceive(i => true)
                .getEnergyStored(i => i.damageValue)
                .getMaxEnergyStored(i => capacity)
                .receiveEnergy((item, amount, sim) => {
                    let energy = item.damageValue
                    let recieved = Math.min(capacity - energy, amount)
                    if (!sim) {item.damageValue += recieved}
                    return recieved
                })
            )
            .maxStackSize(1)
            .barWidth(i => i.damageValue ? i.damageValue / capacity * 13 : 0)
            .barColor(i => Color.RED)
            .textureJson({ layer0: `kubejs:item/sculk/core/${core}_energy_core`, layer1: "kubejs:item/sculk/core/electric" })
        event.create(`empty_${core}_energy_core`)
            .texture(`kubejs:item/sculk/core/${core}_energy_core`)
    }

    // Nethline intermediate products
    event.create("dusty_netherite_cluster")
        .texture("kubejs:item/lines/netherite/dusty_netherite_cluster")
    event.create("ardite_sponge")
        .texture("kubejs:item/lines/netherite/ardite_sponge")
    event.create("netherite_cluster")
        .texture("kubejs:item/lines/netherite/netherite_cluster")
    event.create("netherite_shards")
        .texture("kubejs:item/lines/netherite/netherite_shards")
    event.create("reactive_netherite_cluster")
        .texture("kubejs:item/lines/netherite/reactive_netherite_cluster")
    event.create("activated_netherite_scrap")
        .texture("kubejs:item/lines/netherite/pure_netherite_scrap")
        .glow(true);
    event.create("inert_nether_compound_ingot")
        .texture("kubejs:item/lines/netherite/inert_nether_compound_ingot")

    // Solid Naquadah Fuel Line
    event.create("empty_fuel_rod")
        .texture("kubejs:item/lines/naquadah_fuel/empty_fuel_rod")
    event.create("naquadah_fuel_mixture_dust")
    event.create("unsintered_naquadah_fuel_pellet")
    event.create("naquadah_fuel_pellet")
    event.create("naquadah_fuel_rod")
    event.create("hot_naquadah_fuel_rod")
    event.create("hot_depleted_naquadah_fuel_rod")
    event.create("depleted_naquadah_fuel_rod")
    event.create("depleted_naquadah_fuel_pellet")
    event.create("naquadah_waste")
    event.create("depleted_naquadah_fuel_dust")

    // Crystal Matrix Line
    event.create("raw_nanotube_substrate")
        .texture("kubejs:item/lines/matrix/raw_nanotube_substrate")
    event.create("prepared_nanotube_substrate")
        .texture("kubejs:item/lines/matrix/prepared_nanotube_substrate")
    event.create("graphite_electrode")
        .texture("kubejs:item/lines/matrix/graphite_electrode")
    event.create("nanotube_soot")
        .texture("kubejs:item/lines/matrix/nanotube_soot")
    event.create("grown_nanotube_substrate")
        .texture("kubejs:item/lines/matrix/grown_nanotube_substrate")
    event.create("carbon_nanotubes")
        .texture("kubejs:item/lines/matrix/carbon_nanotubes")
    event.create("adhered_matrix_mesh")
        .texture("kubejs:item/lines/matrix/adhered_matrix_mesh")

    // Terbium Line
    event.create("rare_earth_sulfate")
        .texture("kubejs:item/lines/terbium/rare_earth_sulfate")
    event.create("rare_earth_oxide")
        .texture("kubejs:item/lines/terbium/rare_earth_oxide")
    event.create("rare_earth_salt")
        .texture("kubejs:item/lines/terbium/rare_earth_salt")

    // Alien Scrapline
    event.create("alien_scrap")
        .texture("kubejs:item/lines/scrap/alien_scrap")
    event.create("ruined_hull")
        .texture("kubejs:item/lines/scrap/ruined_hull")
    event.create("ruined_machine_parts")
        .texture("kubejs:item/lines/scrap/ruined_machine_parts")
    event.create("ruined_capacitor")
        .texture("kubejs:item/lines/scrap/part/ruined_capacitor")
    event.create("ruined_sensor")
        .texture("kubejs:item/lines/scrap/part/ruined_sensor")
    event.create("ruined_emitter")
        .texture("kubejs:item/lines/scrap/part/ruined_emitter")
    event.create("crushed_capacitor")
        .texture("kubejs:item/lines/scrap/crushed_capacitor")
    event.create("magnetic_capacitor_dust")
        .texture("kubejs:item/lines/scrap/magnetic_capacitor_dust")
    event.create("crushed_sensor")
        .texture("kubejs:item/lines/scrap/crushed_sensor")
    event.create("necrosiderite_compound")
        .texture("kubejs:item/lines/scrap/necrosiderite_compound")
    event.create("necrosiderite_oxide_glass_dust")
        .texture("kubejs:item/lines/scrap/necrosiderite_oxide_glass_dust")

    // Photonic SoCs
    event.create("photonic_soc_base")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_base")
        .displayName("Photonic SoC Base")
    event.create("photonic_soc_inert")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_inert")
        .displayName("Photonic SoC: §7Inert§r")
    event.create("photonic_soc_red")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_r")
        .displayName("Photonic SoC: §4Red§r")
    event.create("photonic_soc_yellow")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_y")
        .displayName("Photonic SoC: §eYellow§r")
    event.create("photonic_soc_green")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_g")
        .displayName("Photonic SoC: §2Green§r")
    event.create("photonic_soc_cyan")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_c")
        .displayName("Photonic SoC: §bCyan§r")
    event.create("photonic_soc_blue")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_b")
        .displayName("Photonic SoC: §1Blue§r")
    event.create("photonic_soc_magenta")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_m")
        .displayName("Photonic SoC: §dMagenta§r")
    event.create("photonic_soc_active")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_active")
        .displayName("Photonic SoC: Active")

    // Endgame Wafer items
    event.create("uxpic_wafer")
        .texture("kubejs:item/circuits/component/wafer/uxpic/wafer")
    event.create("uxpic_chip")
        .texture("kubejs:item/circuits/component/wafer/uxpic/chip")
        .displayName("UXPIC Chip")
    event.create("universe_boule")
        .texture("kubejs:item/circuits/component/wafer/heart_boule/boule")
        .displayName("Universe-doped Monocrystalline Silicon Boule")
    event.create("universe_wafer")
        .texture("kubejs:item/circuits/component/wafer/heart_boule/wafer")
        .displayName("Universe-doped Wafer")
    event.create("unactivated_multidimensional_cpu_wafer")
        .texture("kubejs:item/circuits/component/wafer/multidimensional_cpu/wafer_base")
        .displayName("Unactivated Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_wafer")
        .texture("kubejs:item/circuits/component/wafer/multidimensional_cpu/wafer")
        .displayName("Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_chip")
        .texture("kubejs:item/circuits/component/wafer/multidimensional_cpu/chip")
        .displayName("Multidimensional CPU Chip")
    event.create("hyperdynamic_ram_wafer")
        .texture("kubejs:item/circuits/component/wafer/hyperdynamic_ram/wafer")
        .displayName("Hyperdynamic RAM Wafer")
    event.create("hyperdynamic_ram_chip_base")
        .texture("kubejs:item/circuits/component/wafer/hyperdynamic_ram/chip_base")
        .displayName("Hyperdynamic RAM Chip Base")
    event.create("hyperdynamic_ram_chip")
        .texture("kubejs:item/circuits/component/wafer/hyperdynamic_ram/chip")
        .displayName("Hyperdynamic RAM Chip")

    // Complex SMDs
    const smds = [
        "transistor",
        "resistor",
        "capacitor",
        "diode",
        "inductor"
    ]

    for (const name of smds) {
        event.create(`complex_smd_${name}`).texture(`kubejs:item/circuits/component/smd/complex/${name}`)
    }

    // Extradim Circuit Intermediates
    event.create("miniature_microverse_container")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/miniature_microverse_container" })
    event.create("microverse_containment_unit")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/microverse_containment_unit"})
    event.create("extradimensional_quantum_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_quantum_cpu_core"})
    event.create("extradimensional_crystal_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_crystal_cpu_core"})
    event.create("extradimensional_wetware_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_wetware_cpu_core"})
    event.create("extradimensional_optical_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/microverse_containment_unit",
            layer1: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_optical_cpu_red",
            layer2: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_optical_cpu_green",
            layer3: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_optical_cpu_blue"
        })

    // Post-tank circuits, circuit boards, processing units
    function Circuit(theme, type, volt) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function MainframeNoLights(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_processor_mainframe_base`})
            .tag(`gtceu:circuits/${volt}`)
    }

    function Mainframe(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_processor_mainframe_lights` })
            .tag(`gtceu:circuits/${volt}`)
    }

    // Biowares
    Circuit("bioware", "processor", "zpm")
    Circuit("bioware", "processor_assembly", "uv")
    Circuit("bioware", "processor_computer", "uhv")
    MainframeNoLights("bioware", "uev")

    event.create("bioware_circuit_board")
        .textureJson({ layer0: "kubejs:item/circuits/theme/bioware/board/bioware_circuit_board" })
    event.create("bioware_processing_unit")
        .textureJson({ layer0: "kubejs:item/circuits/theme/bioware/board/bioware_processing_unit" })
        
    // Optical
    Circuit("optical", "processor", "uv")
    Circuit("optical", "processor_assembly", "uhv")
    Circuit("optical", "processor_computer", "uev")
    Mainframe("optical", "uiv")

    // Particle
    Circuit("matter", "processor", "uhv")
    Circuit("matter", "processor_assembly", "uev")
    Circuit("matter", "processor_computer", "uiv")
    Mainframe("matter", "uxv")

    event.create("matter_circuit_board")
        .textureJson({ layer0: "kubejs:item/circuits/theme/matter/board/matter_circuit_board" })
    event.create("matter_processing_unit")
        .textureJson({ layer0: "kubejs:item/circuits/theme/matter/board/matter_processing_unit" })

    // Extradimensional
    event.create("null_infused_circuit_board")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/board/null_infused_circuit_board" })
    event.create("null_infused_printed_circuit_board")
        .textureJson({
            layer0: "kubejs:item/circuits/theme/extradimensional/board/null_infused_circuit_board",
            layer1: "kubejs:item/circuits/theme/extradimensional/board/null_infused_printed_circuit_board"
        })
    event.create("extradimensional_processing_unit")
        .textureJson({
            layer0: "kubejs:item/circuits/theme/extradimensional/board/null_infused_circuit_board",
            layer1: "kubejs:item/circuits/theme/extradimensional/board/extradimensional_processing_unit"
        })
    Circuit("extradimensional", "processor", "uev")
    Circuit("extradimensional", "processor_assembly", "uiv")
    Circuit("extradimensional", "processor_computer", "uxv")
    Mainframe("extradimensional", "opv")

    // Monic/Multiversal
    Circuit("multiversal", "processor", "uiv")
    Circuit("multiversal", "processor_assembly", "uxv")
    Circuit("multiversal", "processor_computer", "opv")
    Mainframe("multiversal", "max")

    event.create("multiversal_circuit_board")
        .textureJson({ layer0: "kubejs:item/circuits/theme/multiversal/board/multiversal_circuit_board" })
    event.create("multiversal_processing_unit")
        .textureJson({ layer0: "kubejs:item/circuits/theme/multiversal/board/multiversal_processing_unit" })

    // Smores
    const smoreHunger = [
        4, 10, 22, 46, 94, 190, 382
    ]
    const smoreSaturation = [
        12, 76, 379, 1675, 7032, 28805, 116587
    ]
    let effDuration = 300;

    for (let i = 0; i <= 6; i++) {
        event.create(`smore_${2 ** i}`).food(food => {
            food.hunger(smoreHunger[i] * 2);
            food.saturation(smoreSaturation[i] / (1 + 4 * smoreHunger[i]) * 2);
            food.effect("absorption", effDuration, 1, 1);
            food.effect("speed", effDuration, 1, 1);
            food.effect("haste", effDuration, 1, 1);

            if (i > 2) {
                food.effect("saturation", effDuration, 1, 1);
                food.effect("health_boost", effDuration, 1, 1);
            }

            food.alwaysEdible();

        }).texture(`kubejs:item/smore/smore_${2 ** i}`)

        effDuration *= 2;
    }

    // Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv"]
    tiers.forEach((universal_circuit) => {
        event.create(`${universal_circuit}_universal_circuit`)
            .tag(`gtceu:circuits/${universal_circuit}`)
            .tag("gtceu:circuits/universal")
            .displayName(`${universal_circuit.toUpperCase()} Universal Circuit`)
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })

    // Phantom Paste
    event.create("framedblocks:phantom_paste")

    // Priscore Line
    event.create("chromatically_reactive_cluster")
        .texture("kubejs:item/lines/prismac/infinity/intermediates/chromatically_reactive_cluster")
        .displayName("Chromatically Reactive Cluster")
    event.create("chromatically_reactive_shard")
        .texture("kubejs:item/lines/prismac/infinity/intermediates/chromatically_reactive_shard")
        .displayName("Chromatically Reactive Shard")
    event.create("chromatically_inert_frame")
        .texture("kubejs:item/lines/prismac/infinity/intermediates/chromatically_inert_frame")
        .displayName("Chromatically Inert Frame")

    // Protomatter
    event.create("protomatter")
        .texture("kubejs:item/lines/antimatter/protomatter")

    // P.R.I.S.M. Panes
    event.create("prism_pane")
        .texture("kubejs:item/lines/prismac/psoc/prism_pane")
        .displayName("P.R.I.S.M. Glass Pane")

    // NCN replacement fuel pellets
    const fuels = [
        ["thorium_230", "Thorium 230", "#4A5346"],
        ["thorium_232", "Thorium 232", "#25411b"],
        ["uranium_233", "Uranium 233", "#23BA23"],
        ["uranium_235", "Uranium 235", "#46FA46"],
        ["uranium_238", "Uranium 238", "#1d891d"],
        ["neptunium_236", "Neptunium 236", "#3C6598"],
        ["neptunium_237", "Neptunium 237", "#486d7b"],
        ["plutonium_238", "Plutonium 238", "#A20404"],
        ["plutonium_239", "Plutonium 239", "#ba2727"],
        ["plutonium_241", "Plutonium 241", "#ff4c4c"],
        ["plutonium_242", "Plutonium 242", "#D75E5E"],
        ["americium_241", "Americium 241", "#145F51"],
        ["americium_242", "Americium 242", "#308D7C"],
        ["americium_243", "Americium 243", "#287869"],
        ["curium_243", "Curium 243", "#240840"],
        ["curium_245", "Curium 245", "#38145D"],
        ["curium_246", "Curium 246", "#58307f"],
        ["curium_247", "Curium 247", "#60229E"],
        ["berkelium_247", "Berkelium 247", "#a33f20"],
        ["berkelium_248", "Berkelium 248", "#8E2A0C"],
        ["californium_249", "Californium 249", "#B50B38"],
        ["californium_250", "Californium 250", "#550218"],
        ["californium_251", "Californium 251", "#7d0222"],
        ["californium_252", "Californium 252", "#62031C"],
        ["einsteinium_252", "Einsteinium 252", "#CE9F00"],
        ["einsteinium_253", "Einsteinium 253", "#A07C05"],
        ["einsteinium_254", "Einsteinium 254", "#F0BB0C"],
        ["fermium_255", "Fermium 255", "#B180D4"],
        ["fermium_257", "Fermium 257", "#c99fe7"],
        ["mendelevium_259", "Mendelevium 259", "#1D4ACF"],
        ["nobelium_259", "Nobelium 259", "#3e4758"]
    ]

    for (const [id, name, baseColor] of fuels) {
        event.create(`${id}_fuel_pellet`)
            .texture("kubejs:item/nuclear/fuel_pellet")
            .displayName(`${name} Fuel Pellet`)
            .color(0, baseColor);
        event.create(`depleted_${id}_fuel_pellet`)
            .texture("kubejs:item/nuclear/fuel_pellet_depleted")
            .displayName(`Depleted ${name} Fuel Pellet`)
            .color(0, baseColor);
    }

    // TacZ ammo molds
    const tacz_ammo = [
        ["68x51_fury", "6.8x51mm Fury"],
        ["9mm", "9mm"],
        ["338_lapua", ".338 Lapua"],
        ["308_winchester", ".308 Winchester"],
        ["357_magnum", ".357 Magnum"],
        ["46mm_ap", "4.6mm AP"],
        ["57x28mm_ap", "5.7x28mm AP"],
        ["45_acp", ".45 ACP"],
        ["50_bmg", ".50 BMG"],
        ["40mm_grenade", "40mm Grenade"],
        ["12_gauge", "12 Gauge"],
        ["30_06_springfield", ".30-06 Springfield"],
        ["50_ae", ".50 AE"],
        ["45_70", "45-70"],
        ["rpg_7", "RPG-7"],
        ["762x25mm_tokarev", "7.62x25mm Tokarev"],
        ["556x45mm", "5.56x45mm"],
        ["58mm_dbp87", "5.8mm DBP87"],
        ["762x39mm", "7.62x39mm"],
        ["762x54mm", "7.62x54mm"]
    ]
    
    for (const [id, name] of tacz_ammo) {
        event.create(`ammo_mold_${id}`)
            .displayName(`${name} Ammunition Mold`)
            .texture(`kubejs:item/tacz/ammo_mold_${id}`)
    }

    event.create('ammo_mold_blank')
            .displayName('Blank Ammunition Mold')
            .texture('kubejs:item/tacz/ammo_mold_blank')

    // NCN plate replacements
    event.create("heavy_radiation_shielding_plate")
        .displayName("Heavy Radiation Shielding Plate")
        .texture("kubejs:item/nuclear/heavy_plate")
    event.create("du_radiation_shielding_plate")
        .displayName("Depleted Uranium Radiation Shielding Plate")
        .texture("kubejs:item/nuclear/du_plate")
    event.create("elite_radiation_shielding_plate")
        .displayName("Elite Radiation Shielding Plate")
        .texture("kubejs:item/nuclear/elite_plate")

    // KJS Withering powder
    event.create("withering_powder")
        .displayName("Withering Powder")
        .texture("kubejs:item/lines/mob_guts/withering_powder")

    // EIO Crystals
    event.create("prescient_crystal")
        .displayName("Prescient Crystal")
        .texture("kubejs:item/prescient_crystal")
    event.create("weather_crystal")
        .displayName("Weather Crystal")
        .texture("kubejs:item/weather_crystal")
})
