/**
 * Material Registry for content that directly modifies base GregTech Modern progression, such as advanced solders.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Neptunium Palladium Aluminium
    event.create("neptunium_palladium_aluminium")
        .fluid().ingot()
        .color(0x69595A)
        .components(GTMaterials.Neptunium.multiply(1), GTMaterials.Palladium.multiply(5), GTMaterials.Aluminium.multiply(2))
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .blastTemp(3600, "mid")
        .cableProperties(GTValues.VA[GTValues.ZPM], 16, 8, false);

    // Advanced Solders
    // TODO: mixer, ABS | processing lines
    event.create("gtceu:advanced_soldering_alloy")
        .ingot()
        .fluid()
        .color(0x74b59b)
        .iconSet("dull")
        .components("15x bismuth", "11x tin", "9x zinc", "4x germanium")

    event.create("living_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0xD20D17)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.RoseGold.multiply(5), GTMaterials.TinAlloy.multiply(12), GTMaterials.Gallium.multiply(10), GTMaterials.Molybdenum.multiply(10), GTMaterials.Sculk.multiply(3))

    event.create("universal_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0x7B34FF)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("5x green_steel", "4x rubidium", "16x tin_alloy", "12 bismuth", "8x indium", "20x neutronium", "6x germanium", "4x tellurium")


})
