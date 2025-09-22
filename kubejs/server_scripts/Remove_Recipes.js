/**
 * Recipe removals that don't belong in other files.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */

ServerEvents.recipes(event => {
    // Snad
    event.remove("snad:snadrecipe")
    event.remove("snad:red_snad")

    // GT
    event.remove({ id: "gtceu:mixer/rhodium_plated_palladium" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_gunpowder"})
    event.remove({ id: "gtceu:assembly_line/field_generator_zpm"})
    event.remove({ id: "gtceu:assembly_line/field_generator_zpm/advanced_soldering_alloy"})

    // Redstone arsenal
    event.remove({ id: "redstone_arsenal:materials/flux_dust" })
    event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge_from_dust" })
    event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge" })
    event.remove({ id: "redstone_arsenal:smelting/flux_ingot_from_dust_blasting" })
    event.remove({ id: "redstone_arsenal:smelting/flux_ingot_from_dust_smelting" })
    event.remove({ id: "redstone_arsenal:storage/flux_ingot_from_block" })
    event.remove({ id: "redstone_arsenal:storage/flux_metal_block" })

    // Water Collector
    event.remove({ output: /water_collector/ });
})
