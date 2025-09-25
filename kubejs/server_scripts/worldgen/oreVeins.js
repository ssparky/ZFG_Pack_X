/**
 * Definitions for new ore veins using the GregTech: Modern API & tweaks for existing veins.
 *
 * Custom veiny veins don't use the edgeRoundoffBegin and maxEdgeRoundoff parameters
 * because those control how rounded or square vertical slices of the the vein look, which is a minute detail
 * for which reasonable default values are provided.
 *
 * edgeRoundoffBegin controls how close (in blocks) an ore block has to be to either limit of the height range
 * to be "rounded off",
 * while maxEdgeRoundoff controls how strong the rounding-off effect can get.
 *
 * Additionally, veined veins always have a density of 1.0 because the minRichness and maxRichness parameters
 * control density within the vein's context.
 */

const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {
    // Overworld veins
    event.add("overworld/uraninite", vein => {
        vein.weight(30)
        vein.density(1.0)
        vein.clusterSize(30)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(10, 40)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Uraninite).size(1))
            .middle(b => b.mat(GTMaterials.Uraninite).size(3))
            .bottom(b => b.mat(GTMaterials.Uraninite).size(2))
            .spread(b => b.mat(GTMaterials.Pitchblende))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Uraninite)
            .placement("above")
        )
    })

    event.add("overworld/azurite", vein => {
        vein.weight(50)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(20, 60)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Malachite, 1)
            .oreBlock(GTMaterials.get("azurite"), 2)
            .oreBlock(GTMaterials.Calcite, 1)
            .rareBlock(GTMaterials.Barite, 1)
            .veininessThreshold(0.001)
            .maxRichnessThreshold(0.1)
            .minRichness(0.4)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("azurite"))
            .placement("above")
        )
    })

    event.add("overworld/banded_iron_spherical", vein => {
        vein.weight(50)
        vein.density(0.9)
        vein.clusterSize(35)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(7).mat(GTMaterials.Hematite).size(1, 3))
                .layer(l => l.weight(5).mat(GTMaterials.YellowLimonite).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Gold).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("above")
        )
    })

    event.add("overworld/wolframite", vein => {
        vein.weight(20)
        vein.density(0.7)
        vein.clusterSize(25)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(7).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(6).mat(GTMaterials.Cassiterite).size(1, 1))
                .layer(l => l.weight(4).mat(GTMaterials.get("ferberite")).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.get("hubnerite")).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("ferberite"))
            .placement("above")
        )
    })

    event.add("overworld/lithotungsten", vein => {
        vein.weight(15)
        vein.density(0.6)
        vein.clusterSize(35)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-60, 5)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Tungstate, 4, -60, -25)
            .withBlock(GTMaterials.Scheelite, 4, -30, 5)
            .withBlock(GTMaterials.Lithium, 2, -20, 5)
            .withBlock(GTMaterials.get("tungstite"), 1, -60, -35)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("scheelite"))
            .placement("above")
        )
    })

    event.add("overworld/green_beryl", vein => {
        vein.weight(20)
        vein.density(0.8)
        vein.clusterSize(20)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-40, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Emerald).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Beryllium).size(1, 1))
                .layer(l => l.weight(4).mat(GTMaterials.get("chrysoberyl")).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.get("aquamarine")).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("bazzite")).size(2, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("chrysoberyl"))
            .placement("above")
        )
    })

    event.add("overworld/triphyllite", vein => {
        vein.weight(55)
        vein.density(0.6)
        vein.clusterSize(65)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-10, 75)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("triphyllite"), 5, -10, 75)
            .withBlock(GTMaterials.get("phosphophyllite"), 4, -10, 65)
            .withBlock(GTMaterials.get("phosphosiderite"), 3, -10, 25)
            .withBlock(GTMaterials.get("turquoise"), 2, 10, -45)
            .withBlock(GTMaterials.Mica, 5, 45, 75)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("triphyllite"))
            .placement("above")
        )
    })

    event.add("overworld/sulfur", vein => {
        vein.weight(50)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(0, 50)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Sphalerite, 3)
            .oreBlock(GTMaterials.Sulfur, 2)
            .oreBlock(GTMaterials.Pyrite, 2)
            .rareBlock(GTMaterials.get("hawleyite"), 1)
            .rareBlock(GTMaterials.get("xilingolite"), 2)
            .veininessThreshold(0.003)
            .maxRichnessThreshold(0.1)
            .minRichness(0.5)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sphalerite)
            .placement("above")
        )
    })

    event.add("overworld/certus_quartz", vein => {
        vein.weight(30)
        vein.density(0.9)
        vein.clusterSize(17)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-60, -10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.CertusQuartz).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Diamond).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Mica).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("moissanite")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.CertusQuartz)
            .placement("above")
        )
    })

    event.add("overworld/arseno_thallide", vein => {
        vein.weight(15)
        vein.density(0.8)
        vein.clusterSize(35)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-50, 5)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Chalcopyrite, 5, -30, 5)
            .withBlock(GTMaterials.Pyrite, 3, -50, 5)
            .withBlock(GTMaterials.Realgar, 4, -50, -25)
            .withBlock(GTMaterials.get("lorandite"), 2, -50, 0)
            .withBlock(GTMaterials.Gold, 1, -50, -30)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Realgar)
            .placement("above")
        )
    })

    event.add("overworld/gem_quartz", vein => {
        vein.weight(40)
        vein.density(0.6)
        vein.clusterSize(15)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(20, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('citrine')).size(1, 1))
                .layer(l => l.weight(5).mat(GTMaterials.Quartzite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get("black_opal")).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Opal).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Amethyst).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(2, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Opal)
            .placement("above")
        )
    })

    event.add("overworld/garnet", vein => {
        vein.weight(30)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-50, 0)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.GarnetSand, 3)
            .oreBlock(GTMaterials.GarnetRed, 2)
            .oreBlock(GTMaterials.get("zoisite"), 2)
            .rareBlock(GTMaterials.get("nambulite"), 1)
            .rareBlock(GTMaterials.GarnetYellow, 3)
            .veininessThreshold(0.001)
            .maxRichnessThreshold(0.1)
            .minRichness(0.6)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.GarnetRed)
            .placement("above")
        )
    })

    event.add("overworld/mixite", vein => {
        vein.weight(25)
        vein.density(0.7)
        vein.clusterSize(17)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(10, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Malachite).size(1, 2))
                .layer(l => l.weight(4).mat(GTMaterials.get("mixite")).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Trona).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.get("otavite")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("mixite"))
            .placement("above")
        )
    })

    event.add("overworld/sulfurous_lead", vein => {
        vein.weight(45)
        vein.density(0.8)
        vein.clusterSize(35)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-40, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Galena).size(1, 3))
                .layer(l => l.weight(4).mat(GTMaterials.get("teallite")).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("xilingolite")).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.get("xanthoconite")).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("teallite"))
            .placement("above")
        )
    })

    event.add("overworld/poor_pgm", vein => {
        vein.weight(10)
        vein.density(0.6)
        vein.clusterSize(18)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-40, 0)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.Chalcopyrite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("temagamite")).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get("sperrylite")).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("melonite")).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cooperite)
            .placement("above")
        )
    })

    // Nether veins
    event.add("nether/nickel_sulfur", vein => {
        vein.weight(60)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(-20, 120)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Sulfur, 3)
            .oreBlock(GTMaterials.Chalcopyrite, 2)
            .oreBlock(GTMaterials.Pentlandite, 2)
            .rareBlock(GTMaterials.get("mohite"), 1)
            .rareBlock(GTMaterials.get("ullmannite"), 3)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.2)
            .minRichness(0.7)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pentlandite)
            .placement("below")
        )
    })

    event.add("nether/leaded_sulfur", vein => {
        vein.weight(80)
        vein.density(0.5)
        vein.clusterSize(32)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(-10, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Sulfur).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("xanthoconite")).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.get("teallite")).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get("madocite")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("teallite"))
            .placement("above")
        )
    })

    event.add("nether/red_beryl", vein => {
        vein.weight(40)
        vein.density(0.5)
        vein.clusterSize(23)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(-60, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("red_beryl")).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("morganite")).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("pezzottaite")).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.get("milarite")).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get("vayrynenite")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("red_beryl"))
            .placement("above")
        )
    })

    event.add("nether/aragonite", vein => {
        vein.weight(60)
        vein.density(0.75)
        vein.clusterSize(100)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(20, 95)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("aragonite"), 5, 20, 95)
            .withBlock(GTMaterials.Calcite, 3, 60, 95)
            .withBlock(GTMaterials.get("witherite"), 3, 20, 55)
            .withBlock(GTMaterials.get("strontianite"), 2, 20, 40)
            .withBlock(GTMaterials.get("otavite"), 1, 40, 75)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("aragonite"))
            .placement("below")
        )
    })

    event.add("nether/chromium", vein => {
        vein.weight(40)
        vein.density(0.65)
        vein.clusterSize(70)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(-40, 40)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Chromite, 5, -40, 20)
            .withBlock(GTMaterials.get("zincochromite"), 4, -20, 40)
            .withBlock(GTMaterials.get("spinel"), 4, -40, 40)
            .withBlock(GTMaterials.get("guyanaite"), 2, -10, 30)
            .withBlock(GTMaterials.Ruby, 2, -30, 10)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("zincochromite"))
            .placement("above")
        )
    })

    event.add("nether/selenium", vein => {
        vein.weight(30)
        vein.density(0.75)
        vein.clusterSize(45)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(20, 100)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("selenite")).size(2, 3))
                .layer(l => l.weight(3).mat(GTMaterials.GraniticMineralSand).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.get("umangite")).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("selenite"))
            .placement("below")
        )
    })

    event.add("nether/mixed_molybdenum", vein => {
        vein.weight(15)
        vein.density(0.75)
        vein.clusterSize(76)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(10, 70)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Quartzite, 5, 10, 70)
            .withBlock(GTMaterials.Molybdenite, 4, 10, 40)
            .withBlock(GTMaterials.Powellite, 3, 20, 50)
            .withBlock(GTMaterials.get("lindgrenite"), 2, 40, 70)
            .withBlock(GTMaterials.get("briartite"), 2, 10, 50)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Powellite)
            .placement("below")
        )
    })

    event.add("nether/red_garnet", vein => {
        vein.weight(40)
        vein.density(0.8)
        vein.clusterSize(40)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(80, 120)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.GarnetRed, 3)
            .oreBlock(GTMaterials.Pyrope, 2)
            .oreBlock(GTMaterials.Andratite, 2)
            .rareBlock(GTMaterials.Spessartine, 3)
            .veininessThreshold(0.02)
            .maxRichnessThreshold(0.4)
            .minRichness(0.5)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.GarnetRed)
            .placement("below")
        )
    })

    event.add("nether/spinel", vein => {
        vein.weight(80)
        vein.density(0.4)
        vein.clusterSize(42)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(15, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("spinel")).size(2, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Ruby).size(2, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Olivine).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Cinnabar).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get("tarapacaite")).size(2, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("selenite"))
            .placement("above")
        )
    })

    // Moon veins
    event.add("moon/diamond", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-50, -10)
        vein.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Diamond))
            .secondary(b => b.mat(GTMaterials.Coal))
            .between(b => b.mat(GTMaterials.Graphite))
            .sporadic(b => b.mat(GTMaterials.Graphite))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .placement("above")
        )
    })

    event.add("moon/gold", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Chromite).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Gold).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .placement("above")
        )
    })

    event.add("moon/olivine", vein => {
        vein.weight(60)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 60)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Olivine, 2)
            .oreBlock(GTMaterials.Chromite, 2)
            .oreBlock(GTMaterials.Hematite, 1)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.75)
            .minRichness(0.6)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Olivine)
            .placement("above")
        )
    })

    event.add("moon/manganese", vein => {
        vein.weight(30)
        vein.density(0.40)
        vein.clusterSize(50)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(20, 90)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Grossular, 3, 50, 90)
            .withBlock(GTMaterials.Spessartine, 5, 30, 80)
            .withBlock(GTMaterials.Pyrolusite, 7, 20, 50)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pyrolusite)
            .placement("above")
        )
    })

    event.add("moon/quartz", vein => {
        vein.weight(40)
        vein.density(0.10)
        vein.clusterSize(45)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(40, 105)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.NetherQuartz).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.CertusQuartz).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("dilithium")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.NetherQuartz)
            .placement("above")
        )
    })

    event.add("moon/nickel", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Iron).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(1, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Garnierite)
            .placement("above")
        )
    })

    event.add("moon/fluorite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get("fluorite")).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.BlueTopaz).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Topaz).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("fluorite"))
            .placement("above")
        )
    })

    event.add("moon/ilmenite", vein => {
        vein.weight(80)
        vein.density(0.15)
        vein.clusterSize(40)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("anorthite")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("above")
        )
    })

    // Mars veins
    event.add("mars/powellite", vein => {
        vein.weight(20)
        vein.density(0.9)
        vein.clusterSize(45)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-40, 30)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Scheelite, 2, -40, -10)
            .withBlock(GTMaterials.Powellite, 2, -35, 10)
            .withBlock(GTMaterials.Molybdenite, 2, -32, 30)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Powellite)
            .placement("above")
        )
    })

    event.add("mars/copper", vein => {
        vein.weight(30)
        vein.density(1.0)
        vein.clusterSize(45)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(40, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Copper, 4)
            .oreBlock(GTMaterials.Tetrahedrite, 3)
            .oreBlock(GTMaterials.Chalcopyrite, 2)
            .oreBlock(GTMaterials.Pyrite, 1)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.4)
            .maxRichness(0.7)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcopyrite)
            .placement("above")
        )
    })

    event.add("mars/zinc", vein => {
        vein.weight(45)
        vein.density(1.0)
        vein.clusterSize(40)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Sphalerite, 3)
            .oreBlock(GTMaterials.Zincite, 4)
            .oreBlock(GTMaterials.Gypsum, 2)
            .oreBlock(GTMaterials.Tetrahedrite, 1)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.7)
            .minRichness(0.4)
            .maxRichness(0.7)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Zincite)
            .placement("above")
        )
    })

    event.add("mars/basaltic_mineral_sands", vein => {
        vein.weight(40)
        vein.density(0.20)
        vein.clusterSize(25)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(80, 100)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.BasalticMineralSand).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Chromite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Kyanite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.BasalticMineralSand)
            .placement("above")
        )
    })

    event.add("mars/coltan", vein => {
        vein.weight(30)
        vein.density(0.5)
        vein.clusterSize(60)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-40, 5)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("columbite"), 3, -40, -5)
            .withBlock(GTMaterials.Tantalite, 2, -20, 5)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("columbite"))
            .placement("above")
        )
    })

    event.add("mars/arsenopyrite", vein => {
        vein.weight(35)
        vein.density(1.0)
        vein.clusterSize(75)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Cobaltite, 2)
            .oreBlock(GTMaterials.get("arsenopyrite"), 3)
            .oreBlock(GTMaterials.Pyrite, 1)
            .oreBlock(GTMaterials.Chalcopyrite, 1)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.3)
            .maxRichness(0.7)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("arsenopyrite"))
            .placement("above")
        )
    })

    event.add("mars/carnotite", vein => {
        vein.weight(40)
        vein.density(0.40)
        vein.clusterSize(50)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_polar_caps")
        vein.heightRangeUniform(-30, 30)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Alunite))
            .middle(b => b.mat(GTMaterials.get("carnotite")))
            .bottom(b => b.mat(GTMaterials.Uraninite))
            .spread(b => b.mat(GTMaterials.get("carnotite")))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("carnotite"))
            .placement("above")
        )
    })

    event.add("mars/borax", vein => {
        vein.weight(30)
        vein.density(0.05)
        vein.clusterSize(60)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_canyon_creek")
        vein.heightRangeUniform(60, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Borax).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.RockSalt).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Borax)
            .placement("above")
        )
    })

    // Venus veins
    event.add("venus/tungstotitanite", vein => {
        vein.weight(40)
        vein.density(0.7)
        vein.clusterSize(80)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-20, 60)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Tungstate, 4, -10, 50)
            .withBlock(GTMaterials.Calcite, 2, -15, 60)
            .withBlock(GTMaterials.get("titanite"), 3, -20, 60)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("titanite"))
            .placement("above")
        )
    })

    event.add("venus/graphite", vein => {
        vein.weight(40)
        vein.density(1.0)
        vein.clusterSize(40)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Graphite, 4)
            .oreBlock(GTMaterials.Coal, 3)
            .oreBlock(GTMaterials.Diatomite, 1)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.4)
            .minRichness(0.4)
            .maxRichness(0.8)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Graphite)
            .placement("above")
        )
    })

    event.add("venus/rare_earth_phosphate", vein => {
        vein.weight(40)
        vein.density(0.45)
        vein.clusterSize(35)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-60, 10)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Apatite, 2, -18, 10)
            .withBlock(GTMaterials.Monazite, 2, -36, 0)
            .withBlock(GTMaterials.get("xenotime"), 1, -60, -20)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("xenotime"))
            .placement("above")
        )
    })

    event.add("venus/cuprorhodsite", vein => {
        vein.weight(45)
        vein.density(0.25)
        vein.clusterSize(20)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.biomes("ad_astra:infernal_venus_barrens")  // These biomes are actually quite rare, hence the high random weighting
        vein.heightRangeUniform(-50, 0)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("cuprorhodsite")).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Chalcocite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Bornite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("cuprorhodsite"))
            .placement("above")
        )
    })

    event.add("venus/phyllosilicate", vein => {
        vein.weight(30)
        vein.density(0.20)
        vein.clusterSize(30)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(0, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Mica).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Asbestos).size(1, 1))
                .layer(l => l.weight(2).block(() => Blocks.CLAY).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Olivine).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Soapstone)
            .placement("above")
        )
    })

    event.add("venus/dilithium", vein => {
        vein.weight(40)
        vein.density(0.6)
        vein.clusterSize(50)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(30, 80)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("dilithium"), 2, 50, 80)
            .withBlock(GTMaterials.Spodumene, 1, 40, 70)
            .withBlock(GTMaterials.Lepidolite, 1, 30, 65)
            .withBlock(GTMaterials.Pollucite, 2, 30, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("dilithium"))
            .placement("above")
        )
    })

    event.add("venus/gallite", vein => {
        vein.weight(25)
        vein.density(0.15)
        vein.clusterSize(25)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get("gallite")).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(2, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("briartite")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("gallite"))
            .placement("above")
        )
    })

    // Mercury veins
    event.add("mercury/copper-silver", vein => {
        vein.weight(40)
        vein.density(0.7)
        vein.clusterSize(25)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Chalcocite).size(1, 4))
                .layer(l => l.weight(3).mat(GTMaterials.get("argentite")).size(2, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("argentite"))
            .placement("above")
        )
    })

    event.add("mercury/mercury", vein => {
        vein.weight(100)
        vein.density(1.0)
        vein.clusterSize(60)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(30, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Stibnite, 2)
            .oreBlock(GTMaterials.Cinnabar, 4)
            .oreBlock(GTMaterials.Realgar, 2)
            .oreBlock(GTMaterials.Barite, 1)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.4)
            .minRichness(0.5)
            .maxRichness(0.7)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cinnabar)
            .placement("above")
        )
    })

    event.add("mercury/wolframite", vein => {
        vein.weight(45)
        vein.density(0.8)
        vein.clusterSize(40)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-40, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get("wolframite")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get("bismite")).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("wolframite"))
            .placement("above")
        )
    })

    event.add("mercury/emerald", vein => {
        vein.weight(35)
        vein.density(0.75)
        vein.clusterSize(50)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-40, 5)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Quartzite, 1, -10, 5)
            .withBlock(GTMaterials.Emerald, 3, -25, 5)
            .withBlock(GTMaterials.Beryllium, 2, -40, -10)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Emerald)
            .placement("above")
        )
    })

    event.add("mercury/mixed_sands", vein => {
        vein.weight(60)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(15, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.BasalticMineralSand).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.CassiteriteSand).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.GarnetSand).size(2, 3))
                .layer(l => l.weight(3).mat(GTMaterials.FullersEarth).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Gypsum).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.BasalticMineralSand)
            .placement("above")
        )
    })

    event.add("mercury/platinum_group", vein => {
        vein.weight(25)
        vein.density(0.2)
        vein.clusterSize(60)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Pyrite, 1, -30, 0)
            .withBlock(GTMaterials.get("laurite"), 2, -50, 0)
            .withBlock(GTMaterials.Cooperite, 1, -50, -15)
            .withBlock(GTMaterials.get("sperrylite"), 1, -50, -25)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("laurite"))
            .placement("above")
        )
    })

    event.add("mercury/thorium", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-60, -30)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Thorium).size(2))
            .middle(b => b.mat(GTMaterials.Thorium).size(3))
            .bottom(b => b.mat(GTMaterials.Plutonium239).size(2))
            .spread(b => b.mat(GTMaterials.Thorium))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Thorium)
            .placement("above")
        )
    })

    // Glacio Veins
    event.add("glacio/oilsands", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(30, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Oilsands).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.GraniticMineralSand).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Oilsands)
            .placement("above")
        )
    })

    event.add("glacio/energetic", vein => {
        vein.weight(35)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(5, 45)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Silver).size(2))
            .middle(b => b.mat(GTMaterials.Redstone).size(2))
            .bottom(b => b.mat(GTMaterials.Gold).size(2))
            .spread(b => b.mat(GTMaterials.Electrotine))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Electrotine)
            .placement("above")
        )
    })

    event.add("glacio/bentonite_clay", vein => {
        vein.weight(40)
        vein.density(0.9)
        vein.clusterSize(50)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_ice_peaks")
        vein.heightRangeUniform(40, 120)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Bentonite, 1, 90, 120)
            .withBlock(GTMaterials.FullersEarth, 1, -40, -10)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bentonite)
            .placement("above")
        )
    })

    event.add("glacio/gypsum", vein => {
        vein.weight(50)
        vein.density(1.0)
        vein.clusterSize(45)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(10, 40)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Gypsum, 2)
            .oreBlock(GTMaterials.Sulfur, 2)
            .oreBlock(GTMaterials.Zeolite, 1)
            .oreBlock(GTMaterials.Trona, 1)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.4)
            .minRichness(0.3)
            .maxRichness(0.7)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gypsum)
            .placement("above")
        )
    })

    event.add("glacio/arsenic-antimony", vein => {
        vein.weight(30)
        vein.density(1.0)
        vein.clusterSize(60)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(10, 60)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Zeolite, 2)
            .oreBlock(GTMaterials.Tetrahedrite, 3)
            .oreBlock(GTMaterials.Stibnite, 4)
            .oreBlock(GTMaterials.Realgar, 1)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.4)
            .minRichness(0.8)
            .maxRichness(1.0)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Stibnite)
            .placement("above")
        )
    })

    event.add("glacio/nickel-platinum", vein => {
        vein.weight(30)
        vein.density(0.1)
        vein.clusterSize(25)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(5, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Cooperite).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Oilsands)
            .placement("above")
        )
    })

    // Glacio Deepslate Veins
    event.add("glacio/coal", vein => {
        vein.weight(40)
        vein.density(0.65)
        vein.clusterSize(25)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-50, -10)
        vein.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Coal))
            .secondary(b => b.mat(GTMaterials.Coal))
            .between(b => b.mat(GTMaterials.Diamond))
            .sporadic(b => b.mat(GTMaterials.Coal))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Coal)
            .placement("above")
        )
    })

    event.add("glacio/silicate-corundum", vein => {
        vein.weight(15)
        vein.density(0.15)
        vein.clusterSize(45)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-40, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Kyanite).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sapphire).size(1, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Kyanite)
            .placement("above")
        )
    })

    event.add("glacio/sodalite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(100)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-60, 10)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Lapis, 3, -40, 10)
            .withBlock(GTMaterials.Sodalite, 2, -50, 0)
            .withBlock(GTMaterials.Lazurite, 1, -60, -10)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sodalite)
            .placement("above")
        )
    })

    event.add("glacio/osmiridium", vein => {
        vein.weight(30)
        vein.density(1.0)
        vein.clusterSize(50)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-60, 10)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.get("osmiridium"), 4)
            .oreBlock(GTMaterials.get("iridosmine"), 3)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.1)
            .maxRichness(0.3)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("iridosmine"))
            .placement("above")
        )
    })

    event.add("glacio/stolzite", vein => {
        vein.weight(20)
        vein.density(1.0)
        vein.clusterSize(100)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-60, -20)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Wulfenite, 2, -40, -30)
            .withBlock(GTMaterials.get("stolzite"), 3, -50, -25)
            .withBlock(GTMaterials.Pyrolusite, 1, -60, -20)
            .withBlock(GTMaterials.Lead, 1, -60, -40)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("stolzite"))
            .placement("above")
        )
    })

    let naqMaterial = GTMaterials.get("snowchestite")
    event.add("glacio/naquadah", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-45, 10)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Barite).size(2))
            .middle(b => b.mat(naqMaterial).size(3))
            .bottom(b => b.mat(naqMaterial).size(2))
            .spread(b => b.mat(GTMaterials.get("kaemanite")))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(naqMaterial)
            .placement("above")
        )
    })

    // End Veins
    event.add("end/magnesite", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer(WorldGenLayers.ENDSTONE)
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(20, 60)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Magnesite, 3, 20, 60)
            .withBlock(GTMaterials.Cobaltite, 2, 35, 55)
            .withBlock(GTMaterials.Cobalt, 1, 20, 40)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnesite)
            .placement("above")
        )
    })

    // Increase vein density
    event.modifyAll((id, vein) => {
        vein.density(Math.sqrt(vein.density()))
        vein.discardChanceOnAirExposure(0.3)
    })
})

// Remove Duplicate or otherwise unnecessary veins veins
GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein")
    event.remove("gtceu:garnet_vein")
    event.remove("gtceu:nether_redstone_vein")
    event.remove("gtceu:beryllium_vein")

    // Try extra hard
    event.remove("gtceu:garnet")
    event.remove("gtceu:nether_redstone")
    event.remove("gtceu:beryllium")
})


GTCEuServerEvents.oreVeins(event => {
    // Make End Magnetite veins more rich in Chromite
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 2))
                .build()
            )
        )
    })
})
