// priority: 2
/**
 * Material Registry for content original to Monifactory and it's predecessors.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Nuclear Isotopes
    event.create("thorium_232")
        .ingot().fluid()
        .element(GTElements.get("thorium-232"))
        .color(0x4A5346).secondaryColor(0x0D0F0D).iconSet("radioactive")

    event.create("uranium_233")
        .ingot().fluid()
        .element(GTElements.get("uranium-233"))
        .color(0x23BA23).secondaryColor(0x45463B).iconSet("radioactive")

    event.create("neptunium_236")
        .ingot().fluid()
        .element(GTElements.get("neptunium-236"))
        .color(0x3C6598).iconSet("radioactive")

    event.create("plutonium_238")
        .ingot().fluid()
        .element(GTElements.get("plutonium-238"))
        .color(0xA20404).secondaryColor(0x222730).iconSet("radioactive")

    event.create("plutonium_242")
        .ingot().fluid()
        .element(GTElements.get("plutonium-242"))
        .color(0xD75E5E).secondaryColor(0x222730).iconSet("radioactive")

    event.create("americium_241")
        .ingot().fluid()
        .element(GTElements.get("americium-241"))
        .color(0x145F51).iconSet("radioactive")

    event.create("americium_242")
        .ingot().fluid()
        .element(GTElements.get("americium-242"))
        .color(0x308D7C).iconSet("radioactive")

    event.create("curium_243")
        .ingot().fluid()
        .element(GTElements.get("curium-243"))
        .color(0x240840).iconSet("radioactive")

    event.create("curium_245")
        .ingot().fluid()
        .element(GTElements.get("curium-245"))
        .color(0x38145D).iconSet("radioactive")

    event.create("curium_247")
        .ingot().fluid()
        .element(GTElements.get("curium-247"))
        .color(0x60229E).iconSet("radioactive")

    event.create("berkelium_248")
        .ingot().fluid()
        .element(GTElements.get("berkelium-248"))
        .color(0x8E2A0C).iconSet("radioactive")

    event.create("californium_249")
        .ingot().fluid()
        .element(GTElements.get("californium-249"))
        .color(0xB50B38).iconSet("radioactive")

    event.create("californium_250")
        .ingot().fluid()
        .element(GTElements.get("californium-250"))
        .color(0x550218).iconSet("radioactive")

    event.create("californium_252")
        .ingot().fluid()
        .element(GTElements.get("californium-252"))
        .color(0x62031C).iconSet("radioactive")

    event.create("einsteinium_253")
        .ingot().fluid()
        .element(GTElements.get("einsteinium-253"))
        .color(0xA07C05).iconSet("radioactive")
    
    event.create("einsteinium_254")
        .ingot().fluid()
        .element(GTElements.get("einsteinium-254"))
        .color(0xF0BB0C).iconSet("radioactive")

    event.create("fermium_255")
        .ingot().fluid()
        .element(GTElements.get("fermium-255"))
        .color(0xB180D4).iconSet("radioactive")


    // Aetherium
    event.create("aetherium")
        .ingot().fluid()
        .element(GTElements.get("aetherium"))
        .color(0x3989cd).secondaryColor(0xcd8939).iconSet("magic")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)


    // Primal Mana is shoved here at the start to make absolute sure nothing that uses it is declared before it

    event.create("mana")
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("mana"))
        .iconSet("mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)


    // Hyperdegenerate Matter *should* be in the naqfuel file, but it's used in HDD

    event.create("hyperdegenerate_matter")
        .element(GTElements.get("hyperdegenerate_matter"))
        .color(0xffffff).iconSet("hyperdegenerate_matter")
        .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())


    // Sculk Materials

    event.create("cryolobus")
        .ingot().fluid()
        .element(GTElements.get("cryolobus"))
        .color(0x022C34).iconSet("dull")
        .blastTemp(6800, "higher")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(524288, 4, 0, true);

    event.create("cryococcus")
        .ingot().fluid()
        .element(GTElements.get("cryococcus"))
        .color(0x088286).secondaryColor(0x022C34).iconSet("dull")
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)

    event.create("sculk_superconductor")
        .element(GTElements.get("sculk_superconductor"))
        .color(0xffffff)
        .iconSet("crystal")
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING, GTMaterialFlags.NO_WORKING, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.UHV], 8, 0, true)


    // Prismatic Crucible Materials

    event.create("transcendental_matrix")
        .ingot().fluid()
        .color(0xffffff).secondaryColor(0x000000)
        .iconSet("shiny")
        .element(GTElements.get("transcendental_matrix"))
        .flags(GTMaterialFlags.GENERATE_FOIL)

    event.create("infinity")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet("infinity")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR)

    event.create("meta_null")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff)
        .iconSet("meta_null")
        .element(GTElements.get("meta_null"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR)
        .fluidPipeProperties(15000, 1500, true, true, true, true)

    event.create("monium")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("monium"))
        .color(0xffffff)
        .iconSet("monium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(GTValues.V[GTValues.MAX], 134217727, 0, true)


    // Netherite-Related Materials

    event.create("activated_netherite")
        .ingot()
        .color(0x4C484C)
        .iconSet("bright")
        .fluidPipeProperties(12500, 800, true, false, false, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.NO_UNIFICATION)
        .ignoredTagPrefixes([TagPrefix.dust, TagPrefix.dustSmall, TagPrefix.dustTiny, TagPrefix.nugget, TagPrefix.ring, TagPrefix.bolt, TagPrefix.screw])

    event.create("ardite")
        .ingot().fluid()
        .color(0xad2f05).secondaryColor(0x823c08)
        .iconSet("dull")
        .blastTemp(9200, "highest", GTValues.VHA[GTValues.UV], 1000)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("manyullyn")
        .ingot().fluid()
        .color(0xc05cff).secondaryColor(0xff00e0).iconSet("magic")
        .blastTemp(9200, "highest", GTValues.VA[GTValues.UV], 1200)
        .components("4x ardite", "4x cobalt", "mana")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)


    // Necrosiderite

    event.create("necrosiderite")
        .ingot()
        .color(0xffffff)
        .iconSet("necrosiderite")
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW)
        .cableProperties(33554432, 64, 8, false)
        .blastTemp(12200, "highest", 1000000, 1000)
        .element(GTElements.get("necrosiderite"))


    // Omnium

    event.create("omnium")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet("omnium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(GTValues.V[GTValues.UEV], 8, 8, false)


    // Darconite!

    event.create("darconite")
        .ingot().fluid()
        .color(0x6220fa).secondaryColor(0x1e0ddb)
        .iconSet("crystal")
        .blastTemp(10800, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UEV], 1, 32, false)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL)

    event.create("hyperdegenerate_darconite")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill()) // .liquid(new GTFluidBuilder().state(GTFluidState.MOLTEN).customStill()) (Not needed and doesn't work, but still kept around just in case. -Flare32)
        .color(0xffffff)
        .iconSet("hyperdegenerate_darconite")
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen", "1x hyperdegenerate_matter")
        .cableProperties(GTValues.V[GTValues.UEV], 64, 0, true)
        .flags(GTMaterialFlags.DISABLE_ALLOY_BLAST, GTMaterialFlags.NO_SMASHING, GTMaterialFlags.NO_WORKING, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_FINE_WIRE)
})
