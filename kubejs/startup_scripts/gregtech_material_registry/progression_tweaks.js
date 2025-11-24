/**
 * Material Registry for content that directly modifies base GregTech Modern progression, such as advanced solders.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Neptunium Palladium Aluminium
    event.create("neptunium_palladium_aluminium")
        .fluid().ingot()
        .color(0x69595A)
        .components(GTMaterials.Neptunium.multiply(1), GTMaterials.Palladium.multiply(5), GTMaterials.Aluminium.multiply(2))
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.HV], 61.5 * 20)
        .cableProperties(GTValues.VA[GTValues.LuV], 8, 8, false);

    // Lanthanum Gold Cadmium Curium Sulfate
    event.create("lanthanum_gold_cadmium_curium_sulfate")
        .fluid().ingot()
        .color(0x961e30)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .components(GTMaterials.Lanthanum.multiply(2), GTMaterials.Gold.multiply(3), GTMaterials.Cadmium.multiply(3), GTMaterials.Curium.multiply(1), GTMaterials.Sulfur.multiply(1), GTMaterials.Oxygen.multiply(4))
        .blastTemp(7400, "higher", GTValues.VA[GTValues.LuV], 65 * 20)
        .cableProperties(GTValues.VA[GTValues.UHV], 12, 8, false);

    // Advanced Solders
    // TODO: mixer, ABS | processing lines
    event.create("gtceu:advanced_soldering_alloy")
        .ingot()
        .fluid()
        .color(0x74b59b)
        .iconSet("dull")
        .components("15x bismuth", "11x tin", "9x zinc", "4x germanium")

    event.create("living_solder_base")
        .dust()
        .liquid(2896)
        .color(0xafb4c7).secondaryColor(0x675f5a)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components(GTMaterials.RoseGold.multiply(5), GTMaterials.TinAlloy.multiply(12), GTMaterials.Gallium.multiply(11), GTMaterials.Molybdenum.multiply(7))

    event.create("living_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0xD20D17)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.get("living_solder_base").multiply(7), GTMaterials.Meat.multiply(3))

    event.create("universal_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0x7B34FF)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("5x green_steel", "4x rubidium", "16x tin_alloy", "12x bismuth", "8x indium", "20x neutronium", "6x germanium", "4x tellurium")
        .formula("(Sc(Be3Al2Si6O18)(Ni(AuAgCu3)Fe3)4Fe2)5Rb4(SnFe)16Bi12In8Nt20Ge6Te4")

    // Lubes
    event.create("trichlorosilane")
        .fluid()
        .color(0xD1E07A)
        .iconSet("dull")
        .formula("HSiCl3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("chloropropyltrichlorosilane")
        .fluid()
        .color(0x91C15A)
        .iconSet("dull")
        .formula("C3H6ClSiCl3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("trifluoropropyltrichlorosilane")
        .fluid()
        .color(0x7FE3E8)
        .iconSet("dull")
        .formula("C3H5F3SiCl3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("gtceu:silicone_lubricant")
        .fluid()
        .color(0xBBCCC6).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("(C2H6OSi)(C6H11F3OSi)")

    event.create("ultra_pure_water")
        .fluid()
        .color(0xADC4DA).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x hydrogen", "1x oxygen")
        .formula("H2O")

    // Rubbers
    event.create("vinylacetylene")
        .fluid()
        .color(0xD27A3A)
        .iconSet("dull")
        .formula("C4H4")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("chloroprene")
        .fluid()
        .color(0xCFE16C)
        .iconSet("dull")
        .formula("C4H5Cl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("potassium_persulfate")
        .dust()
        .color(0xC4E3FF).secondaryColor(0x84A1BB)
        .iconSet("dull")
        .formula("K2S2O8")
        .components("2x potassium", "2x sulfur", "8x oxygen");

    event.create("polychloroprene")
        .fluid()
        .color(0x3A7F6E)
        .iconSet("dull")
        .formula("C4H5Cl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("neoprene")
        .polymer().fluid()
        .color(0x487AF8).secondaryColor(0x1D2730).iconSet("dull") // In reference to wiki image of dry suit
        .formula("C4H5Cl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("sodium_stearate")
        .dust()
        .color(0xF5F2E8).secondaryColor(0xBFA2C7)
        .iconSet("dull")
        .formula("C18H35NaO2")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("nbr_latex")
        .fluid()
        .color(0xF3E7C6)
        .iconSet("dull")
        .formula("(C4H6)(C3H3N)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("nitrile_rubber")
        .polymer().fluid()
        .color(0xD5C3DC).secondaryColor(0x1D191E).iconSet("dull")
        .formula("(C4H6)(C3H3N)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("anhydrous_rhodium_chloride")
        .dust()
        .color(0x8B1A1A).secondaryColor(0x5D1010)
        .iconSet("shiny")
        .formula("RhCl3")
        .components("1x rhodium", "3x chlorine");

    event.create("rhodium_chloride_hydrate")
        .dust()
        .color(0xB62424).secondaryColor(0x7F1212)
        .iconSet("shiny")
        .formula("RhCl3·3(H2O)")
        .components("1x rhodium", "3x chlorine", "3x water");

    event.create("triphenylphosphine")
        .dust()
        .color(0xD5ADEF).secondaryColor(0x9C73B8)
        .iconSet("dull")
        .formula("C18H15P")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("wilkinsons_catalyst")
        .dust()
        .color(0xD6368C).color(0xA01A62)
        .iconSet("shiny")
        .formula("RhCl(P(C6H5)3)3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create("hydrogenated_nitrile_rubber")
        .polymer().fluid()
        .color(0xB5ABB9).secondaryColor(0x1B191E).iconSet("dull")
        .formula("(C4H8)(C3H3N)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)
})
