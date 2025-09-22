// priority: 1
/**
 * Material Registry for content from mods other than GregTech.
 */


// Thermal

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("lumium")
        .ingot().fluid()
        .color(0xf6ff99).secondaryColor(0xff7400)
        .iconSet("magic")
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .cableProperties(8192, 3, 0, true)
        .fluidPipeProperties(4500, 256, true, true, true, false)
        .components("4x tin_alloy", "2x sterling_silver", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("signalum")
        .ingot().fluid()
        .color(0xff6b0f).secondaryColor(0xc32e00)
        .iconSet("magic")
        .blastTemp(4000, "high", GTValues.VA[GTValues.IV], 1400)
        .cableProperties(32768, 3, 0, true)
        .components("4x annealed_copper", "2x red_steel", "2x red_alloy", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("enderium")
        .ingot().fluid()
        .color(0x1f6b62).secondaryColor(0x16455f)
        .iconSet("magic")
        .blastTemp(6400, "highest", GTValues.VA[GTValues.LuV], 1600)
        .cableProperties(131072, 4, 0, true)
        .components("4x lead", "2x platinum", "blue_steel", "osmium", "tantalum", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("twinite")
        .ingot().fluid()
        .color(0xf34bd4).secondaryColor(0xbb1fa4)
        .iconSet("magic")
        .blastTemp(7000, "highest", GTValues.VA[GTValues.ZPM], 1800)
        .cableProperties(524288, 4, 0, true)
        .components("4x titanium", "2x lumium", "2x trinium", "2x niobium", "1x duranium", "1x rhodium", "2x mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("shellite")
        .ingot().fluid()
        .color(0x8c41c5).secondaryColor(0x4a216d)
        .iconSet("magic")
        .blastTemp(8200, "highest", GTValues.VA[GTValues.UV], 2400)
        .cableProperties(2097152, 4, 0, true)
        .components("4x curium", "2x signalum", "4x calcite", "2x cadmium", "1x nihonium", "2x rubidium", "2x mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("dragonsteel")
        .ingot().fluid()
        .color(0x4f41ab).secondaryColor(0x1d0482)
        .iconSet("magic")
        .blastTemp(8800, "highest", GTValues.VA[GTValues.UHV], 2600)
        .cableProperties(8388608, 6, 0, true)
        .components("4x mendelevium", "2x enderium", "4x black_bronze", "2x germanium", "2x tennessine", "2x mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("prismalium")
        .ingot().fluid()
        .color(0x3fd4aa).secondaryColor(0xabdfdc)
        .iconSet("magic")
        .blastTemp(9600, "highest", GTValues.VA[GTValues.UEV], 3000)
        .cableProperties(33554432, 6, 0, true)
        .components("4x silicon_dioxide", "2x rare_earth", "2x nobelium", "2x twinite", "4x promethium", "4x mana") // TODO: Glass and prismarine are placeholders!
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("melodium")
        .ingot().fluid()
        .color(0xc486e0).secondaryColor(0x9b47c2)
        .iconSet("magic")
        .blastTemp(10200, "highest", GTValues.VA[GTValues.UIV], 3200)
        .cableProperties(134217728, 6, 0, true)
        .components("4x amethyst", "2x emerald", "2x shellite", "2x gadolinium", "2x copernicium", "4x mana") // TODO: replace emerald with taaffeite
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("stellarium")
        .ingot().fluid()
        .color(0xc6ddd9).secondaryColor(0x7c9995)
        .iconSet("magic")
        .blastTemp(12000, "highest", GTValues.VA[GTValues.UXV], 4000)
        .cableProperties(536870912, 8, 0, true)
        .components("3x stellite_100", "4x neutronium", "2x lutetium", "2x aetherium", "3x antimatter", "8x mana") // TODO: Neutronium is placeholder for gravistars 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)
        .formula("(Fe4Cr3W2Mo)3❇4Lu2❂2∅3ᛗ8")
})

// EnderIO
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("dark_steel")
        .ingot().fluid()
        .color(0x414751).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "obsidian")

    event.create("conductive_alloy") // Conductive Iron
        .ingot().fluid()
        .color(0xf7b29b).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components("iron", "redstone")
        .cableProperties(32, 1, 0, true)

    event.create("energetic_alloy")
        .ingot().fluid()
        .color(0xffb545).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .blastTemp(1250, "low", 120, 400)
        .components("2x gold", "redstone", "glowstone")
        .cableProperties(128, 1, 0, true)
        .formula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)");

    event.create("vibrant_alloy")
        .ingot().fluid()
        .color(0xa4ff70).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .blastTemp(1350, "low", 120, 400)
        .components("energetic_alloy", "ender_pearl")
        .cableProperties(512, 2, 0, true)
        .formula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5)");

    event.create("pulsating_alloy") // Pulsating Iron
        .ingot().fluid()
        .color(0x2AB38F).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron")
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("steel", "silicon")

    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .blastTemp(2700, "mid", 480, 900)
        .toolStats(new ToolProperty(4.0, 3.5, 1024, 3, []))
        .cableProperties(2048, 2, 0, true)
        .components("dark_steel", "endstone", "vibrant_alloy")
        .formula("Fe(SiO2)(Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5))");

    event.create("soularium")
        .ingot().fluid()
        .color(0x7c674d).iconSet("metallic")
        .components("gold")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("dark_soularium")
        .ingot()
        .color(0x7c674d).iconSet("metallic")
        .components("soularium", "dark_steel", "tritium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)
})


// Actually Additions

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("restonia")
        .gem()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("enori")
        .gem()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("void")
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("palis")
        .gem()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.LAPIS)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("diamatine")
        .gem()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("emeradic")
        .gem()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("black_quartz")
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.QUARTZ)
})


// AE2

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("charged_certus_quartz")
        .gem()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("certus_quartz")

    event.create("fluix")
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components("charged_certus_quartz", "redstone", "nether_quartz")
})


// IC2 Advanced Solars

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("sunnarium")
        .dust()
        .color(0xDDD692)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)

    event.create("enriched_sunnarium")
        .dust()
        .color(0xACFFC2)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)
})


// One-offs/Miscellaneous

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Fluxed Electrum is from Redtone Arsenal.

    event.create("electrum_flux")
        .ingot().fluid()
        .color(0xf7be20).secondaryColor(0xffc400)
        .iconSet("metallic")
        .blastTemp(1100, "low")
        .components("6x electrum", "lumium", "signalum")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    // Mythril isn't from any mod in specific to my knwoledge, but it's used mostly exclusively for crafting Thermal machines.
    // Also it was originally in thermal.js and I don't know where else I'd put it.

    event.create("mythril")
        .ingot().liquid()
        .color(0x00d5ff).secondaryColor(0x0067ff)
        .iconSet("magic")
        .blastTemp(2141, null)
        .components("titanium", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    // Trinaquadalloy is, to my knowledge, from a GregTech addon that has since been removed from the pack.

    event.create("trinaquadalloy")
        .fluid()
        .ingot()
        .color(0x281832)
        .iconSet("bright")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        .components("6x trinium", "2x naquadah", "1x carbon")
        .blastTemp(8747, "higher", GTValues.VA[GTValues.ZPM], 1200)

    // Microversium is *technically* original to OmNoMoniTM, but it's a fairly direct riff on Modularium.

    event.create("microversium")
        .ingot().liquid()
        .color(0x9b61b8).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x steel", "glowstone", "redstone", "deuterium")
        .blastTemp(1700, "mid", 120, 600)
        .cableProperties(128, 4, 2, false)
        .formula("Fe2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)D");

    // Ardite isn't here since it's more closely related to nethline than actually being a TiC material.
})
