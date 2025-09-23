// priority: 3
/**
 * Material Registry for custom elements and material sets.
 */


// Elements

GTCEuStartupEvents.registry("gtceu:element", event => {

    // Nuclear isotopes
    event.create('thorium-232')
        .protons(90)
        .neutrons(142)
        .symbol("Th-232")
        .isIsotope(true)
    event.create('uranium-233')
        .protons(92)
        .neutrons(141)
        .symbol("U-233")
        .isIsotope(true)
    event.create("neptunium-236")
        .protons(93)
        .neutrons(143)
        .symbol("Np-236")
        .isIsotope(true)
    event.create("plutonium-238")
        .protons(94)
        .neutrons(144)
        .symbol("Pu-238")
        .isIsotope(true)
    event.create("plutonium-242")
        .protons(94)
        .neutrons(148)
        .symbol("Pu-242")
        .isIsotope(true)
    event.create("americium-241")
        .protons(95)
        .neutrons(146)
        .symbol("Am-241")
        .isIsotope(true)
    event.create("americium-242")
        .protons(95)
        .neutrons(147)
        .symbol("Am-242")
        .isIsotope(true)
    event.create("curium-243")
        .protons(96)
        .neutrons(147)
        .symbol("Cm-243")
        .isIsotope(true)
    event.create("curium-245")
        .protons(96)
        .neutrons(149)
        .symbol("Cm-245")
        .isIsotope(true)
    event.create("curium-247")
        .protons(96)
        .neutrons(151)
        .symbol("Cm-247")
        .isIsotope(true)
    event.create("berkelium-248")
        .protons(97)
        .neutrons(151)
        .symbol("Bk-248")
        .isIsotope(true)
    event.create("californium-249")
        .protons(98)
        .neutrons(151)
        .symbol("Cf-249")
        .isIsotope(true)
    event.create("californium-250")
        .protons(98)
        .neutrons(152)
        .symbol("Cf-250")
        .isIsotope(true)
    event.create("californium-252")
        .protons(98)
        .neutrons(154)
        .symbol("Cf-252")
        .isIsotope(true)
    event.create("einsteinium-253")
        .protons(99)
        .neutrons(154)
        .symbol("Es-253")
        .isIsotope(true)
    event.create("einsteinium-254")
        .protons(99)
        .neutrons(155)
        .symbol("Es-254")
        .isIsotope(true)
    event.create("fermium-255")
        .protons(100)
        .neutrons(155)
        .symbol("Fm-255")
        .isIsotope(true)

    // Aetherium
    event.create("aetherium")
        .symbol("❂")

    // Primal Mana

    event.create("mana")
        .symbol("ᛗ")

    // Sculk

    event.create("cryolobus")
        .protons(-1)
        .neutrons(401)
        .symbol("ᛋ")
    event.create("cryococcus")
        .protons(-1)
        .neutrons(441)
        .symbol("ᛋ*")
    event.create("sculk_superconductor")
        .protons(-2)
        .neutrons(442)
        .symbol("ᛊ")

    // Prismatic Crucible

    event.create("transcendental_matrix")
        .protons(6)
        .neutrons(32)
        .symbol("ᛝ")
    event.create("infinity")
        .protons(168)
        .neutrons(316)
        .symbol("∞")
    event.create("meta_null")
        .protons(0)
        .neutrons(0)
        .symbol("∅")
    event.create("monium")
        .protons(169)
        .neutrons(317)
        .symbol("Mu")

    // Necrosiderite

    event.create("necrosiderite")
        .protons(67)
        .neutrons(-26)
        .symbol("Ns")

    // Omnium

    event.create("omnium")
        .protons(130)
        .neutrons(234)
        .symbol("Nm")

    // Naqfuel

    event.create("hyperdegenerate_matter")
        .protons(250)
        .neutrons(1000)
        .symbol("Ω")
    event.create("quadium")
        .protons(1)
        .neutrons(3)
        .symbol("Qd")
        .isIsotope(true)

    // Dilithium
    // Why does this need to be an element?

    event.create("dilithium")
        .protons(119)
        .neutrons(229)
        .symbol("Dl")
})


// Material Sets

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {

    // Generic
    event.create("magic").parent(GTMaterialIconSet.METALLIC)
    event.create("dilithium").parent(GTMaterialIconSet.DULL)

    // Prismatic Crucible
    event.create("infinity").parent(GTMaterialIconSet.SHINY)
    event.create("meta_null").parent(GTMaterialIconSet.SHINY)
    event.create("monium").parent(GTMaterialIconSet.SHINY)

    // Miscellaneous
    event.create("mana").parent(GTMaterialIconSet.SHINY)
    event.create("necrosiderite").parent(GTMaterialIconSet.METALLIC)
    event.create("omnium").parent(GTMaterialIconSet.SHINY)
    event.create("hyperdegenerate_darconite").parent(GTMaterialIconSet.SHINY)

    // Only exists for a custom fluid texture?
    event.create("hyperdegenerate_matter").parent(GTMaterialIconSet.RADIOACTIVE)

    // Ores
    event.create("triangle").parent(GTMaterialIconSet.RUBY)
})
