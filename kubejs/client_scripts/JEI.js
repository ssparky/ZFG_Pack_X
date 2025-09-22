/**
 * Hide items, fluids, and recipes in EMI/JEI.
 * "/kjs inventory" and "/kjs hand" are your friends for finding item and fluid IDs.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */

JEIEvents.hideItems(event => {

    // Hide excess permutations of AE2 Facades
    event.hide("ae2:facade")
    event.hide(/ae2:facade/)

    // Hide excess permutations of EnderIO Clear glass, Fused Quartz
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)

    // snad
    event.hide("snad:soul_snad")

    // Simple Compacting Drawers (TEMPORARY UNTIL BUG FIXED)
    event.hide("functionalstorage:simple_compacting_drawer")
    event.hide("functionalstorage:framed_simple_compacting_drawer")

    // Hide GT ores to prevent clutter
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.hide([
            `gtceu:granite_${id.name}_ore`,
            `gtceu:diorite_${id.name}_ore`,
            `gtceu:andesite_${id.name}_ore`,
            `gtceu:red_granite_${id.name}_ore`,
            `gtceu:marble_${id.name}_ore`,
            `gtceu:deepslate_${id.name}_ore`,
            `gtceu:tuff_${id.name}_ore`,
            `gtceu:sand_${id.name}_ore`,
            `gtceu:red_sand_${id.name}_ore`,
            `gtceu:gravel_${id.name}_ore`,
            `gtceu:basalt_${id.name}_ore`,
            `gtceu:blackstone_${id.name}_ore`,
            `gtceu:moon_${id.name}_ore`,
            `gtceu:venus_${id.name}_ore`,
            `gtceu:mercury_${id.name}_ore`,
            `gtceu:mars_${id.name}_ore`,
            `gtceu:glacio_${id.name}_ore`
        ])
    })
})

JEIEvents.addItems(event => {
    // Add example AE2 facade after failing to hide all other facade permutations
    event.add(Item.of("ae2:facade", { item: "gtceu:infinity_block" }))

    // NuclearCraft
    event.add(["nuclearcraft:tough_alloy_ingot", "nuclearcraft:hard_carbon_ingot", "nuclearcraft:ferroboron_ingot", "nuclearcraft:rhodochrosite_dust"])
})

JEIEvents.hideFluids(event => {
    // hiding NuclearCraft Fluids
    // get all nc fluids from index
    let ncFluids = Fluid.getTypes().filter(id => id.includes("nuclearcraft"))

    // list of used fluids to not remove
    let ncUsedFluid = ["nuclearcraft:hydrated_gelatin", "nuclearcraft:gelatin", "nuclearcraft:sugar", "nuclearcraft:marshmallow", "nuclearcraft:cocoa_butter", "nuclearcraft:pasteurized_milk", "nuclearcraft:chocolate_liquor", "nuclearcraft:unsweetened_chocolate", "nuclearcraft:dark_chocolate", "nuclearcraft:milk_chocolate", "nuclearcraft:technical_water", "nuclearcraft:high_pressure_steam", "nuclearcraft:exhaust_steam"]

    // adds flowing fluid variants to the list so they aren't hidden
    ncUsedFluid.forEach(fluid => { ncUsedFluid.push(`${fluid}_flowing`) })

    // remove used fluids from the full list
    ncFluids = ncFluids.filter((el) => !ncUsedFluid.includes(el))

    // loops through the list and hides all the unwanted fluids for nc
    ncFluids.forEach(element => {
        event.hide(element)
    })

    // Hide Ad Astra fluids
    Fluid.getTypes().filter(id=>id.includes("ad_astra")).forEach(id => event.hide(id))

    // Hide Soph Core fluids
    event.hide("sophisticatedcore:xp_still")
})
