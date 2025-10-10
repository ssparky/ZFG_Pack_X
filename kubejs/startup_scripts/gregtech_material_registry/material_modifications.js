// priority: -20
/**
 * Material Registry for various modifications to materials, mostly ones from base GregTech.
 */

const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty")
const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
const $FluidStorageKeys = Java.loadClass("com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys")
const $FluidPipeProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties")
const $WireProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $FluidBuilder = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder");
const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty");

// AE2 ItemLike suppliers
const $AEItems = Java.loadClass("appeng.core.definitions.AEItems")
const $AEBlocks = Java.loadClass("appeng.core.definitions.AEBlocks")


let addFluid = (mat, key, temp) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder().temperature(temp))
    mat.setProperty(PropertyKey.FLUID, prop)
}

GTCEuStartupEvents.registry("gtceu:material", event => {
    // Existing materials that get an item form
    GTMaterials.Scandium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Selenium.setProperty($PropertyKey.DUST, new $DustProperty())
    GTMaterials.Rubidium.setProperty($PropertyKey.DUST, new $DustProperty())
    GTMaterials.Strontium.setProperty($PropertyKey.DUST, new $DustProperty())
    GTMaterials.Zirconium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Lutetium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Technetium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Tellurium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Praseodymium.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Promethium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Gadolinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dysprosium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Holmium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Erbium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Thulium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Ytterbium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    
    GTMaterials.Hafnium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Rhenium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Thallium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Polonium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Astatine.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Francium.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Radium.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Protactinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Fermium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Mendelevium.setProperty($PropertyKey.INGOT, new $IngotProperty());

    GTMaterials.Nobelium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Lawrencium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Rutherfordium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dubnium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Seaborgium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Bohrium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Hassium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Meitnerium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Roentgenium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Copernicium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Nihonium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Flerovium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Moscovium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Livermorium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Tennessine.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Oganesson.setProperty($PropertyKey.DUST, new $DustProperty());

    GTMaterials.Actinium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Actinium.setMaterialARGB(0xaa3399)
    GTMaterials.Actinium.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW)

    GTMaterials.Germanium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Germanium.setMaterialARGB(0x66806d)
    GTMaterials.Germanium.setMaterialSecondaryARGB(0x5d5e3a)
    GTMaterials.Germanium.addFlags(GTMaterialFlags.GENERATE_PLATE)

    GTMaterials.Terbium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Terbium.setMaterialARGB(0x8C8F7A)
    GTMaterials.Terbium.setProperty($PropertyKey.BLAST, new $BlastProperty(7200, "higher", 524288, 900, -1, -1));
    GTMaterials.Terbium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)

    // Existing materials that get new material forms
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Graphite.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.MagnesiumDiboride.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.VanadiumGallium.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Trinium.addFlags(GTMaterialFlags.GENERATE_SPRING)
    GTMaterials.Tritanium.addFlags(GTMaterialFlags.GENERATE_SPRING)

    // Small Springs for Power Transformer recipes
    GTMaterials.RedAlloy.addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL)
    GTMaterials.Europium.addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL)

    // Gears for Thermal Expansion
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_GEAR)

    // Radioactive materials that get liquid forms and/or a new color
    addFluid(GTMaterials.Polonium, $FluidStorageKeys.LIQUID, 527);
    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID, 1259);
    GTMaterials.Berkelium.setMaterialARGB(0xa33f20);
    //GTMaterials.Berkelium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID, 1173);
    GTMaterials.Californium.setMaterialARGB(0x7d0222)
    GTMaterials.Californium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID, 913);
    GTMaterials.Neptunium.setMaterialARGB(0x486d7b)
    GTMaterials.Neptunium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID, 1618);
    GTMaterials.Curium.setMaterialARGB(0x58307f)
    GTMaterials.Curium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    addFluid(GTMaterials.NetherStar, $FluidStorageKeys.LIQUID, 1337);
    GTMaterials.Thorium.setMaterialARGB(0x273420)
    addFluid(GTMaterials.Actinium, $FluidStorageKeys.LIQUID, 1324);
    GTMaterials.Einsteinium.setProperty($PropertyKey.INGOT, new $IngotProperty())

    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.LIQUID, 1029);
    GTMaterials.Oganesson.setMaterialARGB(0x272727)

    // Other new colors
    GTMaterials.Scandium.setMaterialARGB(0x58f591);
    GTMaterials.Germanium.setMaterialARGB(0x525151);
    GTMaterials.Selenium.setMaterialARGB(0x2a1f1f);
    GTMaterials.Rubidium.setMaterialARGB(0xeb9b9b);
    GTMaterials.Strontium.setMaterialARGB(0xdede98);
    GTMaterials.Zirconium.setMaterialARGB(0xe1d7af);
    GTMaterials.Technetium.setMaterialARGB(0xdab9de);
    GTMaterials.Tellurium.setMaterialARGB(0xeb458e);
    GTMaterials.Promethium.setMaterialARGB(0x84ffc1);
    GTMaterials.Dysprosium.setMaterialARGB(0xebc891);
    GTMaterials.Erbium.setMaterialARGB(0xdbebbe);
    GTMaterials.Thulium.setMaterialARGB(0x3f525c);
    GTMaterials.Ytterbium.setMaterialARGB(0xebede0);
    GTMaterials.Seaborgium.setMaterialARGB(0x6fbfbf);
    GTMaterials.Nihonium.setMaterialARGB(0xfad6f7);

    // Liquid Sculk
    let liquid_sculk_prop = new $FluidProperty();
    liquid_sculk_prop.getStorage().enqueueRegistration($FluidStorageKeys.LIQUID, new $FluidBuilder().temperature(310).customStill())
    GTMaterials.Sculk.setProperty($PropertyKey.FLUID, liquid_sculk_prop)

    let liquid_meat_prop = new $FluidProperty();
    liquid_meat_prop.getStorage().enqueueRegistration($FluidStorageKeys.LIQUID, new $FluidBuilder()
        .temperature(310)
        .textures(true, true)
        .name("blood")
    )
    GTMaterials.Meat.setProperty($PropertyKey.FLUID, liquid_meat_prop)

    // Osmiridium Ore (to go with Iridosmine ore)
    let osmiridium_ore_prop = new $OreProperty();
    osmiridium_ore_prop.setOreByProducts(GTMaterials.Iridium, GTMaterials.Osmium, GTMaterials.Ruthenium)
    GTMaterials.Osmiridium.setProperty($PropertyKey.ORE, osmiridium_ore_prop)

    // Give Zincite an ore form
    let zincite_ore_prop = new $OreProperty(2, 2);
    zincite_ore_prop.setOreByProducts(GTMaterials.Iron, GTMaterials.Manganese)
    GTMaterials.Zincite.setProperty($PropertyKey.ORE, zincite_ore_prop)

    // Give Borax an ore form
    let borax_ore_prop = new $OreProperty(1, 2);
    borax_ore_prop.setOreByProducts(GTMaterials.Salt, GTMaterials.Boron, GTMaterials.RockSalt)
    GTMaterials.Borax.setProperty($PropertyKey.ORE, borax_ore_prop)

    // Give Rutile an ore form
    let rutile_ore_prop = new $OreProperty(1, 1);
    rutile_ore_prop.setOreByProducts(GTMaterials.Iron, GTMaterials.Quartzite, GTMaterials.Rutile)
    GTMaterials.Rutile.setProperty($PropertyKey.ORE, rutile_ore_prop)

    // Give Uvarovite an ore form
    let uvarovite_ore_prop = new $OreProperty(2, 1);
    uvarovite_ore_prop.setOreByProducts(GTMaterials.Calcium, GTMaterials.Chromium, GTMaterials.Silicon)
    GTMaterials.Uvarovite.setProperty($PropertyKey.ORE, uvarovite_ore_prop)

    // Give Andradite an ore form
    let andradite_ore_prop = new $OreProperty(2, 1);
    andradite_ore_prop.setOreByProducts(GTMaterials.Calcium, GTMaterials.Iron, GTMaterials.Silicon)
    GTMaterials.Andradite.setProperty($PropertyKey.ORE, andradite_ore_prop)

    // Give Iron II Chloride a dust form to replace fluid & recolor to match IRL anhydride.
    // Removing the FluidProperty causes errors in GT's hard-coded recipes so we add the fluid to the nukelist instead
    GTMaterials.Iron2Chloride.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Iron2Chloride.setMaterialARGB(0xC5E1A5)

    // HM-exclusive modifications
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty());
})

GTCEuStartupEvents.materialModification(event => {
    // Change materials' components
    GTMaterials.EchoShard.setComponents(GTMaterials.Quartzite.multiply(3), GTMaterials.Sculk.multiply(2))

    GTMaterials.Glowstone.setComponents(GTMaterials.TricalciumPhosphate.multiply(1), GTMaterials.Gold.multiply(1))
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    GTMaterials.RhodiumPlatedPalladium.setComponents(GTMaterials.Palladium.multiply(3), GTMaterials.Rhodium.multiply(1), "2x lumium")
    GTMaterials.RhodiumPlatedPalladium.setFormula("Pd3Rh(SnFe)4(CuAg4)2", true)

    GTMaterials.Sugar.setComponents(GTMaterials.Carbon.multiply(12), GTMaterials.Water.multiply(11))
    GTMaterials.Sugar.setFormula("C12H22O11", true)

    // We keep Ingots in the material definition so we can replace it in the Ore Processing Diagram with vanilla Netherite Scrap, then remove it here.
    TagPrefix.ingot.setIgnored(GTMaterials.get("netherite_scrap"), Ingredient.of("minecraft:netherite_scrap"))

    GTMaterials.Neutronium.getProperty(PropertyKey.FLUID_PIPE).setThroughput(400)
    GTMaterials.Neutronium.getProperty(PropertyKey.FLUID_PIPE).setMaxFluidTemperature(10000)
    GTMaterials.Ultimet.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(4)
    GTMaterials.Osmiridium.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(12)
    GTMaterials.Americium.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(20)

    // SetIgnoreds for AE2 materials
    TagPrefix.gem.setIgnored(GTMaterials.CertusQuartz, $AEItems.CERTUS_QUARTZ_CRYSTAL)
    TagPrefix.gem.setIgnored(GTMaterials.get("charged_certus_quartz"), $AEItems.CERTUS_QUARTZ_CRYSTAL_CHARGED)
    TagPrefix.gem.setIgnored(GTMaterials.get("fluix"), $AEItems.FLUIX_CRYSTAL)

    TagPrefix.dust.setIgnored(GTMaterials.CertusQuartz, $AEItems.CERTUS_QUARTZ_DUST)
    TagPrefix.dust.setIgnored(GTMaterials.get("fluix"), $AEItems.FLUIX_DUST)

    TagPrefix.block.setIgnored(GTMaterials.CertusQuartz, $AEBlocks.QUARTZ_BLOCK.asItem())
    TagPrefix.block.setIgnored(GTMaterials.get("fluix"), $AEBlocks.FLUIX_BLOCK.asItem())

    // Modifying actinite symbols
    GTMaterials.Thorium.setFormula("Th²³⁰")
    GTMaterials.Neptunium.setFormula("Np²³⁷")
    GTMaterials.Americium.setFormula("Am²⁴³")
    GTMaterials.Curium.setFormula("Cm²⁴⁶")
    GTMaterials.Berkelium.setFormula("Bk²⁴⁷")
    GTMaterials.Californium.setFormula("Cf²⁵¹")
    GTMaterials.Einsteinium.setFormula("Es²⁵²")
    GTMaterials.Fermium.setFormula("Fm²⁵⁷")
    GTMaterials.Mendelevium.setFormula("Md²⁵⁹")
    GTMaterials.Nobelium.setFormula("No²⁵⁹")
})

// Ore byproduct modification
GTCEuStartupEvents.materialModification(event => {
    const modOres = [
        ['snowchestite', 'chalcopyrite', 'vanadium_magnetite', 'naquadah_hydroxide', 'kaemanite', null, null],
        ["titanite", "calcium", "rutile", "fluorite", "rare_earth", "nitric_acid", null],
        ["gallite", "chalcopyrite", "gallium", "gallium", "germanium_disulfide", "nitric_acid", null],
        ["briartite", "copper", "sphalerite", "germanium_disulfide", "mercury", null],
        ["wolframite", "iron", "manganese", "fluorite", "tungstite", "nitric_acid", null],
        ['cavansite', 'certus_quartz', 'calcium', 'vanadium_pentoxide', 'vanadium_magnetite', null, null],
        ['citrine', 'nether_quartz', 'yellow_limonite', 'yellow_limonite', 'amethyst', 'hexafluorosilicic_acid', null],
        ['gadolinite', 'beryllium_oxide', "thorium", "monazite", "gadolinium", "hexafluorosilicic_acid", null],
        ['germanite', "molybdenite", "realgar", "gallium", "briartite", "sodium_persulfate", "copper"],
        ["hawleyite", "sphalerite", "cadmium", "sulfur", "gallium", "hydrobromic_acid", "cadmium"],
        ["iodargyrite", "galena", "silver", "bromoargyrite", "bromoargyrite", "hydrobromic_acid", "silver"],
        ['melonite', 'pentlandite', 'nickel', 'sperrylite', 'platinum', "mercury", "nickel"],
        ["nambulite", "aragonite", "almandine", "grossular", "magnesite", "hexafluorosilicic_acid", null],
        ["rubellite", "lepidolite", "chromite", "microcline", "molybdenite", "hexafluorosilicic_acid", null],
        ["russellite", "cassiterite", "scheelite", "topaz", "tungstite", "mercury", "bismuth"],
        ["schizolite", "spodumene", "sodalite", "lapis", "pollucite", "hexafluorosilicic_acid", null],
        ["tarapacaite", "chromite", "potassium_chromate", "potassium_chromate", "chromium", null, null],
        ["thortveitite", "scandium", "nether_quartz", "rare_earth", "praseodymium", "hexafluorosilicic_acid", "scandium"],
        ["triphyllite", "phosphophyllite", "goethite", "manganese", "lithium", null, "iron"],
        ["umangite", "chalcocite", "mohite", "selenium", "tellurium", "sodium_persulfate", "copper"],
        ["vanadinite", "yellow_limonite", "galena", "ferberite", "hubnerite", "mercury", "lead"],
        ["wodginite", "tantalite", "microcline", "niobium", "niobium", null, null],
        ["xilingolite", "teallite", "sphalerite", "molybdenite", "xanthoconite", "mercury", "lead"],
        ["euclase", "certus_quartz", "fluorite", "anatase", "anatase", null, null],
        ["bazzite", "euclase", "hematite", "fluorite", "fluorite", null, null],
        ["aquamarine", "pyrite", "euclase", "brookite", "brookite", null, null],
        ["celestine", "selenite", "sulfur", "barite", "aragonite", null, null],
        ["strontianite", "aragonite", "barite", "celestine", "calcite", null, null],
        ["aragonite", "calcite", "strontianite", "witherite", "strontium", null, null],
        ["indite", "spinel", "pyrite", "tellurium", "dzhalindite", "hydrobromic_acid", null],
        ["cadmoindite", "spinel", "indite", "hawleyite", "cadmium", "hydrobromic_acid", null],
        ["calomel", "cinnabar", "yellow_limonite", "coccinite", "tetrahedrite", "hydrobromic_acid", null],
        ["coccinite", "pyrite", "calomel", "calomel", "iodine", "hydrobromic_acid", null],
        ["zircon", "citrine", "anatase", "hafnium", "hafnium", null, "zirconium"],
        ["datolite", "quartzite", "borax", "zircon", "zircon", null, null],
        ["dzhalindite", "cassiterite", "tin", "indite", "cadmoindite", "hydrobromic_acid", "indium"],
        ["ferberite", "magnetite", "hubnerite", "wolframite", "tungstite", "mercury", null],
        ["fluoroapatite", "fluorite", "apatite", "monazite", "monazite", null, null],
        ["zincochromite", "spinel", "chromite", "zincite", "uraninite", "sodium_persulfate", null],
        ["guyanaite", "zincochromite", "graphite", "zircon", "chromite", "sodium_persulfate", null],
        ["heptasartorite", "selenium", "tellurium", "lorandite", "cobaltite", "mercury", "lead"],
        ["herderite", "fluoroapatite", "fluorite", "iodine", "iodine", null, null],
        ["hubnerite", "pyrolusite", "ferberite", "wolframite", "brookite", "mercury", null],
        ["rheniite", "sphalerite", "molybdenite", "laurite", "molybdenite", "mercury", null],
        ["lindgrenite", "powellite", "molybdenite", "malachite", "rheniite", "sodium_persulfate", "copper"],
        ["torbernite", "uraninite", "lindgrenite", "azurite", "plutonium", "sodium_persulfate", "copper"],
        ["turquoise", "certus_quartz", "kyanite", "lindgrenite", "torbernite", "sodium_persulfate", null],
        ["vivianite", "aragonite", "magnesite", "phosphosiderite", "manganese", null, "iron"],
        ["phosphosiderite", "triphyllite", "turquoise", "vivianite", "phosphophyllite", null, "iron"],
        ["kolbeckite", "yttrium", "phosphosiderite", "rare_earth", "rare_earth", null, "scandium"],
        ["labyrinthite", "fluorite", "cerium", "rubidium", "thallium", "hexafluorosilicic_acid", null],
        ["manganvesuvianite", "calcite", "grossular", "manganite", "strontianite", "hexafluorosilicic_acid", null],
        ["temagamite", "melonite", "chalcopyrite", "galena", "silver", "nitric_acid", "lead"],
        ["merenskyite", "chalcopyrite", "temagamite", "palladium", "sperrylite", "mercury", null],
        ["morganite", "lepidolite", "euclase", "aquamarine", "aquamarine", null, null],
        ["pezzottaite", "morganite", "manganese", "rubidium", "caesium", "hexafluorosilicic_acid", null],
        ["milarite", "chrysoberyl", "emerald", "pezzottaite", "euclase", null, null],
        ["mixite", "malachite", "monazite", "xenotime", "azurite", "sodium_persulfate", "copper"],
        ["mottramite", "calcite", "vanadinite", "vanadium_magnetite", "russellite", "sodium_persulfate", null],
        ["musgravite", "taaffeite", "morganite", "thorium", "beryllium", null, null],
        ["witherite", "aragonite", "strontianite", "otavite", "barite", null, null],
        ["otavite", "aragonite", "malachite", "witherite", "strontianite", "hydrobromic_acid", null],
        ["phosphophyllite", "triphyllite", "chalcopyrite", "legrandite", "phosphosiderite", null, null],
        ["purpurite", "phosphosiderite", "hematite", "amethyst", "triphyllite", null, "manganese"],
        ["red_beryl", "emerald", "pyrolusite", "pezzottaite", "morganite", null, null],
        ["rhodplumsite", "teallite", "sperrylite", "platinum", "ruthenium", "mercury", null],
        ["taaffeite", "spinel", "chrysoberyl", "musgravite", "beryllium", null, null],
        ["triplite", "red_garnet", "almandine", "phosphosiderite", "purpurite", null, null],
        ["vayrynenite", "fluoroapatite", "red_beryl", "morganite", "phosphosiderite", null, null],
        ["villaumite", "sodalite", "lazurite", "fluorite", "lapis", "hydrobromic_acid", null],
        ["wakefieldite", "xenotime", "monazite", "cerium", "neodymium", "sodium_persulfate", null],
        ["xanthoconite", "galena", "teallite", "arsenic", "sperrylite", "mercury", "silver"],
        ["zavaritskite", "fluorite", "cassiterite", "gold", "bismite", null, "bismuth"],
        ["zoisite", "gypsum", "hexagonite", "rubellite", "mixite", null, null],

        // Vanilla GTCEu ores
        ["lepidolite", "lithium", "caesium", "boron", "rubidium", "nitric_acid", null],
        ["spodumene", "aluminium", "lithium", "rubidium", "caesium", null, null],
        ["calcite", "aragonite", "strontium", "sodalite", "lazurite", null, null],
        ["molybdenite", "molybdenum", "sulfur", "quartzite", "rheniite", "nitric_acid", "molybdenum"],
        ["saltpeter", "saltpeter", "potassium", "salt", "thallium", "nitric_acid", null]

    ]
    for (const [id, bp1, bp2, bp3, bp4, wash, smelt] of modOres) {
        if (GTMaterials.get(id).hasProperty(PropertyKey.ORE)) {
            GTMaterials.get(id).removeProperty(PropertyKey.ORE)
        }
        let temp_ore_prop = new $OreProperty()
        temp_ore_prop.setOreByProducts(bp1, bp2, bp3, bp4)
        if (wash != null) {
            temp_ore_prop.setWashedIn(GTMaterials.get(wash))
        }
        if (smelt != null) {
            temp_ore_prop.setDirectSmeltResult(smelt)
        }
        GTMaterials.get(id).setProperty($PropertyKey.ORE, temp_ore_prop)
            
    }
})

