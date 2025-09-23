// priority: -10
/**
 * Material Registry for ores.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Snowchestite is part of harder Naquadah Processing
    event.create("snowchestite")
        .dust().ore()
        .color(0x274c9f).iconSet("shiny")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("3x naquadah_oxide", "pyromorphite")
        .addOreByproducts("chalcopyrite", "vanadium_magnetite", "naquadah_hydroxide")

    // Earth
    event.create("azurite")
        .dust().ore(2, 3)
        .iconSet(GTMaterialIconSet.SHINY)
        .color(0x162eba).secondaryColor(0x053f2b)
        .components(GTMaterials.Copper.multiply(3), GTMaterials.Carbon.multiply(2), GTMaterials.Oxygen.multiply(8), GTMaterials.Hydrogen.multiply(2))
        .formula("Cu3(CO3)2(OH)2")
        .addOreByproducts(GTMaterials.Calcite, GTMaterials.CalciumHydroxide, GTMaterials.Barite, GTMaterials.Malachite)
        .washedIn(GTMaterials.NitricAcid)
        .oreSmeltInto(GTMaterials.Copper)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Moon
    event.create("dilithium")
        .gem().ore(2, 1)
        .iconSet("dilithium")
        .color(0xfdd2df).secondaryColor(0xfa52b5)
        .element(GTElements.get("dilithium"))
        .addOreByproducts(GTMaterials.Lithium, GTMaterials.Cobalt, GTMaterials.Platinum)

    event.create("fluorite")
        .gem().ore()
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0x0c9949)
        .components(GTMaterials.Calcium.multiply(1), GTMaterials.Fluorine.multiply(2))
        .addOreByproducts(GTMaterials.Calcite, GTMaterials.Barite)

    event.create("anorthite")
        .gem().ore(2, 2)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .color(0xddd4af).secondaryColor(0x575d60)
        .components(GTMaterials.Calcium.multiply(1), GTMaterials.Aluminium.multiply(2), GTMaterials.Silicon.multiply(2), GTMaterials.Oxygen.multiply(8))
        .addOreByproducts(GTMaterials.Sodium, GTMaterials.Sodium, GTMaterials.Aluminium)
        .washedIn(GTMaterials.NitricAcid)

    // Mars
    event.create("columbite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x304868).secondaryColor(0x161a1e)
        .components(GTMaterials.Iron.multiply(1), GTMaterials.Niobium.multiply(2), GTMaterials.Oxygen.multiply(6))
        .addOreByproducts(GTMaterials.Manganese, GTMaterials.Tantalum, GTMaterials.Niobium)
        .washedIn(GTMaterials.NitricAcid)

    event.create("arsenopyrite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .color(0xced89c).secondaryColor(0x375944)
        .components(GTMaterials.Iron.multiply(1), GTMaterials.Arsenic.multiply(1), GTMaterials.Sulfur.multiply(1))
        .addOreByproducts(GTMaterials.Sulfur, GTMaterials.Cobalt, GTMaterials.Sulfur)
        .washedIn(GTMaterials.NitricAcid)

    event.create("carnotite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0xe8de29).secondaryColor(0xb58c34)
        .components(GTMaterials.Potassium.multiply(2), GTMaterials.Uraninite.multiply(6), GTMaterials.Vanadium.multiply(2), GTMaterials.Oxygen.multiply(8), GTMaterials.Water.multiply(9))
        .formula("K2(UO2)2(VO4)2(H2O)3")
        .addOreByproducts(GTMaterials.Uraninite, GTMaterials.Potassium, GTMaterials.Vanadium)
        .washedIn(GTMaterials.NitricAcid)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Venus
    event.create("cuprorhodsite")
        .dust().ore()
        .iconSet(GTMaterialIconSet.BRIGHT)
        .color(0xc1aa82)
        .components(GTMaterials.Copper.multiply(1), GTMaterials.Iron.multiply(1), GTMaterials.Rhodium.multiply(4), GTMaterials.Sulfur.multiply(8))
        .addOreByproducts(GTMaterials.Chalcocite, GTMaterials.Platinum, GTMaterials.Ruthenium)

    event.create("argentite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .color(0xc6c6b8).secondaryColor(0x1c1c28)
        .components(GTMaterials.Silver.multiply(2), GTMaterials.Sulfur.multiply(1))
        .addOreByproducts(GTMaterials.Lead, GTMaterials.Sulfur, GTMaterials.Zinc)
        .washedIn(GTMaterials.NitricAcid)
        .oreSmeltInto(GTMaterials.Silver)

    event.create("titanite")
        .gem().ore(2, 2)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .color(0xa3ba3d).secondaryColor(0x355b30)
        .components(GTMaterials.Calcium.multiply(1), GTMaterials.Titanium.multiply(1), GTMaterials.Silicon.multiply(1), GTMaterials.Oxygen.multiply(5))
        .addOreByproducts(GTMaterials.Calcium, GTMaterials.Rutile, GTMaterials.get("fluorite"), GTMaterials.RareEarth)
        .washedIn(GTMaterials.NitricAcid)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("xenotime")
        .gem().ore(1, 2)
        .color(0xaa802a).secondaryColor(0x211a14)
        .components(GTMaterials.Yttrium.multiply(1), GTMaterials.Phosphate.multiply(1))
        .addOreByproducts(GTMaterials.Yttrium, GTMaterials.RareEarth, GTMaterials.Samarium)
        .washedIn(GTMaterials.NitricAcid)

    event.create("gallite")
        .dust().ore(1, 2)
        .color(0xedb376).secondaryColor(0x5b5563)
        .components(GTMaterials.Copper.multiply(1), GTMaterials.Gallium.multiply(1), GTMaterials.Sulfur.multiply(2))
        .addOreByproducts(GTMaterials.Chalcopyrite, GTMaterials.Gallium, GTMaterials.Gallium, GTMaterials.get("germanium_disulfide"))
        .washedIn(GTMaterials.NitricAcid)

    event.create("briartite")
        .dust().ore()
        .color(0xc4bf60).secondaryColor(0xa5a598)
        .components(GTMaterials.Chalcocite.multiply(3), GTMaterials.Sphalerite.multiply(2), "3x germanium_disulfide")
        .addOreByproducts(GTMaterials.Copper, GTMaterials.Sphalerite, GTMaterials.get("germanium_disulfide"))
        .washedIn(GTMaterials.Mercury)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    // Mercury
    event.create("laurite")
        .dust().ore()
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0x6f2c23)
        .components("ruthenium", "2x sulfur")
        .addOreByproducts("pyrite", "ruthenium", "rhodium")

    event.create("wolframite")
        .dust().ore(2, 2)
        .color(0xa0734e).secondaryColor(0x405275)
        .components(GTMaterials.Iron.multiply(1), GTMaterials.Manganese.multiply(1), GTMaterials.Tungsten.multiply(2), GTMaterials.Oxygen.multiply(8))
        .formula("(Fe,Mn)(WO3)O")
        .addOreByproducts(GTMaterials.Iron, GTMaterials.Manganese, GTMaterials.get("fluorite"))
        .washedIn(GTMaterials.NitricAcid)
        .separatedInto(GTMaterials.Iron)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("bismite")
        .dust().ore(2, 2)
        .color(0xd3e298).secondaryColor(0x43dbad)
        .components(GTMaterials.Bismuth.multiply(2), GTMaterials.Oxygen.multiply(3))
        .addOreByproducts(GTMaterials.Tin, GTMaterials.Bismuth)
        .washedIn(GTMaterials.NitricAcid)

    event.create("sperrylite")
        .gem().ore(2, 2)
        .color(0xaaa399).secondaryColor(0x37474F)
        .components(GTMaterials.Platinum.multiply(1), GTMaterials.Arsenic.multiply(2))
        .addOreByproducts(GTMaterials.Platinum, GTMaterials.Nickel, GTMaterials.Palladium)
        .washedIn(GTMaterials.NitricAcid)

    // Glacio
    event.create("iridosmine")
        .dust().ore()
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x54afff).secondaryColor(0x1b5651)
        .components("2x osmium", "1x iridium")
        .addOreByproducts("osmium", "iridium", "rhodium")

    event.create("kaemanite")
        .dust().ore()
        .iconSet(GTMaterialIconSet.BRIGHT)
        .color(0xe7413c)
        .components("trinium", "tantalum", "4x oxygen")
        .addOreByproducts("niobium", "trinium_sulfide", "trinium")

    event.create("stolzite")
        .gem().ore(2, 3)
        .color(0xa5591f).secondaryColor(0x564517)
        .components(GTMaterials.Lead.multiply(1), GTMaterials.Tungsten.multiply(1), GTMaterials.Oxygen.multiply(4))
        .formula("Pb(WO3)O")
        .addOreByproducts(GTMaterials.Lead, GTMaterials.Manganese, GTMaterials.Molybdenum)
        .washedIn(GTMaterials.NitricAcid)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_LENS)

    // MM-Exclusive
    event.create("darmstadtite")
        .dust().ore(2, 1)
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x99AA87)
        .components(GTMaterials.Darmstadtium.multiply(2), GTMaterials.Sulfur.multiply(3))
        .addOreByproducts(GTMaterials.RhodiumSulfate, GTMaterials.RareEarth, GTMaterials.Darmstadtium)

    event.create("dulysite")
        .gem().ore(2, 1)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0xF5EFC0)
        .components(GTMaterials.Duranium, GTMaterials.Chlorine.multiply(3))
        .addOreByproducts(GTMaterials.Sphalerite, GTMaterials.Duranium, GTMaterials.Europium)

    // ZFG-Exclusive
    event.create("anatase")
        .gem().ore(2, 1)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .color(0x0d0803).secondaryColor(0x062038)
        .components(GTMaterials.Titanium.multiply(1), GTMaterials.Oxygen.multiply(2))
        .addOreByproducts(GTMaterials.Magnetite, GTMaterials.Rutile, GTMaterials.Zirconium)
        .washedIn(GTMaterials.Mercury)
        .flags(GTMaterialFlags.GENERATE_LENS)
    
    event.create("black_opal")
        .gem().ore(3, 1)
        .iconSet(GTMaterialIconSet.OPAL)
        .color(0x201457).secondaryColor(0xe00f4f)
        .components(GTMaterials.Silicon.multiply(1), GTMaterials.Oxygen.multiply(2), GTMaterials.Water.multiply(1))
        .formula("SiO2·H2O")
        .addOreByproducts(GTMaterials.Opal, GTMaterials.Quartzite, GTMaterials.YellowLimonite)

    event.create('brookite')
        .gem().ore(1, 1)
        .iconSet(GTMaterialIconSet.CERTUS)
        .color(0xf08400).secondaryColor(0x402300)
        .components(GTMaterials.Titanium.multiply(1), GTMaterials.Oxygen.multiply(2))
        .addOreByproducts(GTMaterials.Hematite, GTMaterials.Niobium, GTMaterials.Tantalite)
        .washedIn(GTMaterials.Mercury)
    
    event.create("vanadium_pentoxide") // Move back to chemline_harder_misc.js if possible
        .dust()
        .color(0xffcf33).iconSet("rough")
        .components("2x vanadium", "5x oxygen")
    
    event.create('cavansite')
        .gem().ore(1, 1)
        .iconSet(GTMaterialIconSet.LAPIS)
        .color(0x1a99ff).secondaryColor(0x2bb8e3)
        .components(GTMaterials.Calcium.multiply(1), GTMaterials.Vanadium.multiply(1), GTMaterials.Silicon.multiply(4), GTMaterials.Oxygen.multiply(11), GTMaterials.Water.multiply(4))
        .formula("Ca(VO)Si4O10·4H2O")
        .addOreByproducts("vanadium_pentoxide", "vanadium_pentoxide", "vanadium_pentoxide")
        // .addOreByproducts(GTMaterials.CertusQuartz, GTMaterials.Calcium, "vanadium_pentoxide")

    event.create('chambersite')
        .gem().ore(1, 1)
        .iconSet(GTMaterialIconSet.RUBY) // TODO: custom triangular iconSet
        .color(0x7e5c9e).secondaryColor(0x291140)
        .components(GTMaterials.Manganese.multiply(3), GTMaterials.Boron.multiply(7), GTMaterials.Oxygen.multiply(13), GTMaterials.Chlorine.multiply(1))
        .addOreByproducts(GTMaterials.RockSalt, GTMaterials.Salt, GTMaterials.Borax)
    
    event.create('chrysoberyl')
        .gem().ore(3, 1)
        .iconSet(GTMaterialIconSet.EMERALD)
        .color(0xedf03f).secondaryColor(0xd8d9a0)
        .components(GTMaterials.Beryllium.multiply(1), GTMaterials.Aluminium.multiply(2), GTMaterials.Oxygen.multiply(4))
        .addOreByproducts(GTMaterials.Quartzite, GTMaterials.Lithium, GTMaterials.Niobium)
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
    
    event.create('citrine')
        .gem().ore(3, 1)
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xfdff7d).secondaryColor(0xebb44c)
        .components(GTMaterials.Silicon.multiply(1), GTMaterials.Oxygen.multiply(2))
        .addOreByproducts(GTMaterials.NetherQuartz, GTMaterials.YellowLimonite, GTMaterials.YellowLimonite)
        .washedIn(GTMaterials.get("hexafluorosilicic_acid"))
        .flags(GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('cryolite')
        .dust().ore(1, 1)
        .iconSet(GTMaterialIconSet.DULL)
        .color(0xfff9df).secondaryColor(0xe3dae2)
        .components(GTMaterials.Sodium.multiply(3), GTMaterials.Aluminium.multiply(1), GTMaterials.Fluorine.multiply(6))
        .addOreByproducts(GTMaterials.Salt, GTMaterials.Bauxite, GTMaterials.Iodine)

    event.create('ekanite')
        .gem().ore(1, 1)
        .iconSet(GTMaterialIconSet.EMERALD)
        .color(0xa1bd57).secondaryColor(0x6c8038)
        .components(GTMaterials.Calcium.multiply(2), GTMaterials.Thorium.multiply(1), GTMaterials.Silicon.multiply(8), GTMaterials.Oxygen.multiply(20))
        .addOreByproducts(GTMaterials.Magnetite, GTMaterials.Lead, GTMaterials.Uraninite)

    event.create('fergusonite')
        .dust().ore(1, 1)
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x706b55).secondaryColor(0xb09569)
        .components("1x yttrium", '1x rare_earth', "1x niobium", "4x oxygen")
        .addOreByproducts("scandium", "tantalite", "thorium", "scheelite")
        .formula("(Y,?)NbO4")

    event.create('gadolinite')
        .dust().ore(1, 1)
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x80634f).secondaryColor(0x212833)
        .components("2x rare_earth", "1x iron", "2x beryllium", "2x silicon", "10 oxygen")
        .addOreByproducts("beryllium_oxide", "thorium", "gadolinium", "monazite")
        .formula("(Ce,La,Nd,Y)2FeBe2Si2O10")
        .washedIn(GTMaterials.get("hexafluorosilicic_acid"))

    event.create('germanite')
        .dust().ore(1, 1)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .color(0x788c94).secondaryColor(0x595552)
        .components("26x copper", "4x germanium", "4x iron", "32x sulfur")
        .addOreByproducts("molybdenite", "realgar", "gallium", "briartite")
        .washedIn("sodium_persulfate")

    event.create("hawleyite")
        .dust().ore(1, 1)
        .color(0xf0d61c).secondaryColor(0xd4db3d)
        .iconSet(GTMaterialIconSet.SAND)
        .components("1x cadmium, 1x sulfur").formula("CdS")
        .addOreByproducts("sphalerite", "cadmium", "gallium")
        .washedIn(GTMaterials.get("hydrobromic_acid"))
        .oreSmeltInto("cadmium")

    event.create("hexagonite")
        .gem().ore(2, 1)
        .color(0xd4c7d6).secondaryColor(0x963d78)
        .iconSet(GTMaterialIconSet.LAPIS)
        .components("2x calcium", "5x magnesium", "8x silicon", "24x oxygen", "2x hydrogen")
        .formula("Ca2Mg5(Si8O22)(OH)2")
        .addOreByproducts("magnesite", "zincite", "manganese", "zincite")

    event.create("bromoargyrite")
        .dust()
        .color(0xB02E14).secondaryColor(0x665b54)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components("1x silver", "1x bromine")

    event.create("iodargyrite")
        .dust().ore(1, 1)
        .color(0xb05214).secondaryColor(0x665b54)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components("1x silver", "1x iodine")
        .addOreByproducts("galena", "silver", "bromoargyrite")
        .washedIn("hydrobromic_acid")
        .oreSmeltInto("silver")

    event.create("legrandite")
        .gem().ore(1, 1)
        .color(0xf7dd1a).secondaryColor(0xccad4d)
        .iconSet(GTMaterialIconSet.LAPIS)
        .components("2x zinc", "1x arsenic", "5x oxygen", "1x hydrogen", "1x water")
        .formula("Zn2(AsO4)(OH) * (H2O)")
        .addOreByproducts("goethite", "pyrite", "realgar")
        .oreSmeltInto("zinc")

    event.create("lorandite")
        .dust().ore(1, 1)
        .color(0xe81348).secondaryColor(0xa11538)
        .iconSet(GTMaterialIconSet.CERTUS)
        .components("1x thallium", "1x arsenic", "2x sulfur")
        .addOreByproducts("realgar", "cinnabar", "gold", "stibnite")
        .washedIn("mercury")

    event.create("madocite")
        .dust().ore(1, 1)
        .color(0xa0b593).secondaryColor(0x535452)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components("17x lead", "16x antimony", "16x arsenic", "41x sulfur")
        .formula("Pb17(Sb,As)16S41")
        .addOreByproducts("sphalerite", "stibnite", "pyrite", "selenium")
        .washedIn("mercury")

    event.create("manganite")
        .gem().ore(1, 1)
        .color(0x2a3026).secondaryColor(0x070d04)
        .iconSet(GTMaterialIconSet.LIGNITE)
        .components("1x manganese", "2x oxygen", "1x hydrogen")
        .formula("MnO(OH)")
        .addOreByproducts("goethite", "pyrolusite", "barite")
        .oreSmeltInto("manganese")
        .flags(GTMaterialFlags.GENERATE_LENS)

    event.create("melonite")
        .dust().ore(1, 1)
        .color(0xc2af28).secondaryColor(0x4d4a3c)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components("1x nickel", "2x tellurium")
        .washedIn("mercury")
        .oreSmeltInto("nickel")
        .addOreByproducts("pentlandite", "nickel", "sperrylite", "platinum")

    event.create("microcline")
        .dust().ore(1, 1)
        .color(0xf7e1e6).secondaryColor(0xc79887)
        .iconSet(GTMaterialIconSet.LAPIS)
        .components("1x potassium", "1x aluminium", "3x silicon", "8x oxygen")
        .addOreByproducts("alunite", "rubidium", "thallium")

    event.create("mohite")
        .dust().ore(1, 1)
        .color(0x505D57).secondaryColor(0x818150)
        .iconSet(GTMaterialIconSet.DULL)
        .components("2x copper", "1x tin", "3x sulfur")
        .washedIn("mercury")
        .oreSmeltInto("bronze")
        .addOreByproducts("tetrahedrite", "cassiterite", "chalcocite", "bronze")

    event.create('moissanite')

    event.create('nambulite')

    event.create('rubellite')

    event.create('russellite')

    event.create('samarskite-yb')

    event.create('schizolite')

    event.create('selenite')

    event.create('spinel')

    event.create('stibiotantalite')

    event.create('suanite')

    event.create('tarapacaite')

    event.create('teallite')

    event.create('thortveitite')

    event.create('triphyllite')

    event.create('tungstite')

    event.create('tusionite')

    event.create('ulexite')

    event.create('ullmannite')

    event.create('umangite')

    event.create('vanadinite')

    event.create('wodginite')

    event.create('xilingolite')

    event.create('euclase')

    event.create('bazzite')

    event.create('aquamarine')

    event.create('celestine')

    event.create('strontianite')

    event.create('aragonite')

    event.create('indite')

    event.create('cadmoindite')

    event.create('calomel')

    event.create('coccinite')

    event.create('zircon')

    event.create('datolite')

    event.create('dzhalindite')

    event.create('ferberite')

    event.create('fluoroapatite')

    event.create('zincochromite')

    event.create('guyanaite')

    event.create('heptasartorite')

    event.create('herderite')

    event.create('hubnerite')

    event.create('rheniite')

    event.create('lindgrenite')

    event.create('torbernite')

    event.create('turquoise')

    event.create('vivianite')

    event.create('phosphosiderite')

    event.create('kolbeckite')

    event.create('labyrinthite')

    event.create('manganvesuvianite')

    event.create('temagamite')
    
    event.create('merenskyite')

    event.create('morganite')

    event.create('pezzottaite')

    event.create('milarite')

    event.create('mixite')

    event.create('mottramite')

    event.create('musgravite')

    event.create('witherite')

    event.create('otavite')

    event.create('phosphophyllite')

    event.create('purpurite')

    event.create('red_beryl')

    event.create('rhodplumsite')

    event.create('taaffeite')
        .gem().ore()
        .iconSet(GTMaterialIconSet.EMERALD)
        .color(0x9247C0).secondaryColor(0x8F3997)
        .components("1x beryllium", "1x magnesium", "4x aluminium", "8x oxygen")
        .addOreByproducts("spinel", "chrysoberyl", "musgravite", "beryllium")
        .flags(GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.CRYSTALLIZABLE)

    event.create('triplite')

    event.create('vayrynenite')

    event.create('villiaumite')

    event.create('wakefieldite')

    event.create('xanthoconite')

    event.create('zavaritskite')

    event.create('zoisite')

})
