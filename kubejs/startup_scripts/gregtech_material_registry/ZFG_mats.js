GTCEuStartupEvents.registry("gtceu:material", event => {
    // Dyes
    event.create("basic_copper_chromate")
        .dust()
        .color(0x743C13).secondaryColor(0x3E1B06).iconSet("dull")
        .components("3x copper", "1x chromium", "6x oxygen", "2x hydrogen")
        .formula("CuCrO4·2(Cu(OH)2)")

    event.create("cadmium_selenide")
        .dust()
        .color(0xD32F2F).secondaryColor(0x9E1F1F).iconSet("dull")
        .components("1x cadmium", "1x selenium")
        .formula("CdSe")

    event.create("lead_chromate")
        .dust()
        .color(0xE4BB34).secondaryColor(0xDC8E3F).iconSet("dull")
        .components("1x lead", "1x chromium", "4x oxygen")
        .formula("PbCrO4")

    event.create("bismuth_vanadate")
        .dust()
        .color(0xF8D71F).secondaryColor(0xE5B217).iconSet("dull")
        .components("1x bismuth", "1x vanadium", "4x oxygen")
        .formula("BiVO4")

    event.create("strontium_chromate")
        .dust()
        .color(0xE0CD50).secondaryColor(0xB29D46).iconSet("dull")
        .components("1x strontium", "1x chromium", "4x oxygen")
        .formula("SrCrO4")

    event.create("barium_chromate")
        .dust()
        .color(0xC5E050).secondaryColor(0xA2B246).iconSet("dull")
        .components("1x barium", "1x chromium", "4x oxygen")
        .formula("BaCrO4")

    event.create("uranium_trioxide")
        .dust()
        .color(0xB7E050).secondaryColor(0x85B246).iconSet("dull")
        .components("1x uranium", "3x oxygen")
        .formula("UO3")

    event.create("chromia")
        .dust()
        .color(0x63AA52).secondaryColor(0x4E7A3C).iconSet("dull")
        .components("2x chromium", "3x oxygen")
        .formula("Cr2O3")

    event.create("nickel_sulfate_hexahydride")
        .dust()
        .color(0x30BE91).secondaryColor(0x309492).iconSet("dull")
        .components("1x nickel", "4x sulfur", "10x oxygen", "12x hydrogen")
        .formula("NiSO4(H2O)6")

    event.create("copper_sulfate_pentahydride")
        .dust()
        .color(0x4CAFDD).secondaryColor(0x066199).iconSet("shiny")
        .components("1x copper", "4x sulfur", "9x oxygen", "10x hydrogen")
        .formula("CuSO4(H2O)5")

    event.create("cobalt_blue")
        .dust()
        .color(0x3571BE).secondaryColor(0x3658BD).iconSet("dull")
        .components("1x cobalt", "2x aluminium", "4x oxygen")
        .formula("CoAl2O4")

    event.create("potassium_permanganate")
        .dust()
        .color(0x48286A).secondaryColor(0x1A1321).iconSet("shiny")
        .components("1x potassium", "1x manganese", "4x oxygen")
        .formula("KMnO4")

    event.create("cobalt_phosphate")
        .dust()
        .color(0x8876C5).secondaryColor(0x453968).iconSet("dull")
        .components("3x cobalt", "2x phosphate")
        .formula("Co3(PO4)2")

    event.create("erbium_oxide")
        .dust()
        .color(0xD3A9D3).secondaryColor(0xB17CB1).iconSet("dull")
        .components("2x erbium","3x oxygen")
        .formula("Er2O3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cobalt_carbonate")
        .dust()
        .color(0xD371D0).secondaryColor(0x9D3EAB).iconSet("shiny")
        .components("1x cobalt", "1x carbon", "3x oxygen")
        .formula("CoCO3")

    event.create("cobalt_chloride_hexahydride")
        .dust()
        .color(0xBD1E83).secondaryColor(0x710959).iconSet("dull")
        .components("1x cobalt", "2x chlorine", "6x oxygen", "12x hydrogen")
        .formula("CoCl2·6(H2O)")

    event.create("molybdenum_dioxide")
        .dust()
        .color(0xA6349F).secondaryColor(0x8D1871).iconSet("dull")
        .components("1x molybdenum", "2x oxygen")
        .formula("MoO2")

    event.create("cobaltic_oxide")
        .dust()
        .color(0x151315).secondaryColor(0x060506).iconSet("metallic")
        .components("2x cobalt", "3x oxygen")
        .formula("Co2O3")

    event.create("manganese_dioxide")
        .dust()
        .color(0x272727).secondaryColor(0x0A0A0A).iconSet("dull")
        .components("1x manganese", "2x oxygen")
        .formula("MnO2")

    event.create("antimony_tin_oxide")
        .dust()
        .color(0x838383).secondaryColor(0x423D40).iconSet("shiny")
        .components("1x antimony", "1x tin", "1x oxygen")
        .formula("SbSnO")

    event.create("titanium_suboxide")
        .dust()
        .color(0xA3A3A3).secondaryColor(0x8E8D8D).iconSet("dull")
        .components("4x titanium", "7x oxygen")
        .formula("Ti4O7")

    // Machine alloys
    event.create("tiberium")
        .ingot().fluid()
        .element(GTElements.get("tiberium"))
        .color(0x45DA40).secondaryColor(0x14831F).iconSet("bright")
        .blastTemp(15000, "highest", GTValues.VHA[GTValues.UIV], 600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .cableProperties(8388608*4, 64, 128, false);

    event.create("raw_tiberium")
        .gem()
        .color(0x27C721).secondaryColor(0x067110).iconSet("certus")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x calcium", "4x iron", "1x tiberium", "1x silicon_dioxide", "4x phosphate")
        .formula("Ca2Fe4?(SiO2)(PO4)4")

    event.create("taranium")
        .ingot().fluid()
        .element(GTElements.get("tiberium"))
        .color(0xDA40DA).secondaryColor(0x831474).iconSet("bright")
        .blastTemp(10000, "higher", GTValues.VA[GTValues.UHV], 400)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FOIL)

    // TODO:
    event.create("promethium_technetium_tiberate") // UIV Hull

    event.create("degenerate_rutherfordium_seaborgium_telluride") // UXV Hull

    event.create("finalite") // MAX Hull / Pipe

    event.create("green_steel") // EV SC
        .ingot().fluid()
        .components("1x scandium", "1x emerald", "4x black_steel", "2x steel")
        .color(0x3B8844).secondaryColor(0x155527).iconSet("metallic")
        .blastTemp(1813, "low", GTValues.VHA[GTValues.EV], 600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .cableProperties(2048, 4, 0, true);

    event.create("chromatic_steel") // UXV Cable
        .ingot().fluid()
        .components("1x red_steel", "1x blue_steel", "1x green_steel")
        .color(0xD9D9D9).secondaryColor(0x1F1F1F).iconSet("metallic")
        .blastTemp(15780, "highest", GTValues.VA[GTValues.UIV], 900)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .cableProperties(134217728, 128, 512, false);

    event.create("aetherium_roentgenium_nihonium_rubidium_iodate") // OpV Cable

    event.create("rare_earth_taraniate") // UEV SC

    event.create("osmium_taranium_einsteinium_caesium_omniate") // UIV SC

    event.create("eltic_neptunium_seaborgium_terbium_germanium_carbide") // UXV SC

    event.create("nobelium_polonium_oganesson_promethium_selenium_silicide") // OpV SC

    event.create("omnium_doped_niobium_yttrium_neutronate") // UIV Pipe

    event.create("warped_null") // OpV Pipe

    event.create("hafnium_carbonitride") // UEV Coil

    event.create("omnic_rhenium_tungstide") // UIV Coil

    event.create("eltic_hassium") // UXV Coil

    event.create("eternium") // OpV/MAX Coil

    event.create("hss_x") // ZPM/UV/UHV electrode - include praseodymium perhaps?

    event.create("rubidium_yttrium_ytterbium_germanium_nitride") // UXV/OpV electrode

    event.create("samarium_cobalt") // Samarium magnet replacement

    event.create("rare_earth_complex") // UEV/UIV magnet

    event.create("cosmic_platinum_cobalt") // UXV/OpV magnet

    event.create("rutherfordium_carbide") // UHV/UEV lathe

    event.create("seaborgium_darmstadtium_flerovide") // UIV/UXV lathe

    event.create("degenerate_trinium_neutronate") // OpV lathe

    event.create("dubnium_dilivermoride") // UXV rotor gear, UXV piston material

    event.create("nihonium_caesium_astatide") // UXV pump rotor

    event.create("cosmic_hss_x_complex") // OpV pump rotor

    event.create("ytterbium_dysprosium_rubidium_oxide") // ZPM Emitter rod

    event.create("cosmic_electrum") // UXV Emitter rod

    event.create("ultrachroma") // OpV Emitter rod, OpV Emitter Foil

    event.create("lutetium_garnet") // UV Emitter crystal

    event.create("holmium_chromium_thulium_yag") // UHV Emitter crystal

    event.create("gadolinium_naquadriide") // UV Emitter Foil

    event.create("taranium_silver_lutetium") // UEV Emitter Foil

    event.create("ceric_ammonium_nitrate") // UIV+ etchant

    // Polymers and Rubbers
    event.create("polypropylene")
        .fluid().polymer()
        .color(0xda5653).secondaryColor(0x772929).iconSet("dull")
        .formula("(C3H6)n")
        .itemPipeProperties(256, 8)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("acrylonitrile")
        .fluid().color(0x8D8791)
        .formula("C3H3N")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("acrylic_acid")
        .fluid().color(0x7A8376)
        .formula("C3H4O2")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    
    event.create("polyacrylonitrile")
        .fluid().polymer()
        .color(0xffffff).secondaryColor(0xaeaeae).iconSet("dull")
        .formula("(CH2CHCN)n")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    // Gem vat
    event.create("tiberium_seed")
        .dust()
        .color(0xD6FED6).secondaryColor(0x8FBEA7).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("silica_gem_stock")
        .fluid()
        .color(0xFCECCD).secondaryColor(0xDCCCAD).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("corundum_gem_stock")
        .fluid()
        .color(0xF2D18F).secondaryColor(0xA78D5A).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("beryl_gem_stock")
        .fluid()
        .color(0xCDE7A1).secondaryColor(0xA3D28E).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("garnet_gem_stock")
        .fluid()
        .color(0xE7ADA1).secondaryColor(0xD2978E).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sodalite_gem_stock")
        .fluid()
        .color(0xA1A6E7).secondaryColor(0x938ED2).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("phosphate_gem_stock")
        .fluid()
        .color(0xC0B185).secondaryColor(0x9A8D5E).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // AdAstra air
    event.create("moon_air")
        .gas()
        .color(0xCCC9C7)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("liquid_moon_air")
        .fluid()
        .color(0x979694)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("mars_air")
        .gas()
        .color(0xD8BCAA)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("liquid_mars_air")
        .fluid()
        .color(0xC8A58F)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("venus_air")
        .gas()
        .color(0xEAD890)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("liquid_venus_air")
        .fluid()
        .color(0xBEAD6B)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("mercury_air")
        .gas()
        .color(0xCCC9C7)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("liquid_mercury_air")
        .fluid()
        .color(0x979694)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("glacio_air")
        .gas()
        .color(0xAAD8D6)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    event.create("liquid_glacio_air")
        .fluid()
        .color(0x8FC3C8)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Other
    event.create("manganese_nitrate")
        .dust()
        .color(0xFFE0FE).secondaryColor(0x94778F).iconSet("dull")
        .components("1x manganese", "2x nitrogen", "10x oxygen", "8x hydrogen")
        .formula("Mn(NO3)2·4(H2O)")

    event.create("ammonium_nitrate")
        .dust()
        .color(0xEFEFEF).secondaryColor(0x757575).iconSet("dull")
        .components("2x nitrogen", "4x hydrogen", "3x oxygen")
        .formula("NH4NO3")

    event.create("photovoltaic_compound")
        .dust()
        .color(0x578691).secondaryColor(0x1D214E).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})