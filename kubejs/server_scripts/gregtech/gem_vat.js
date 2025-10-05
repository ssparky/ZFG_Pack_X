ServerEvents.recipes(event => {
    // Controller recipe
    // TODO:

    // Feedstock recipes
    event.recipes.gtceu.chemical_reactor("silica_gem_feedstock")
        .itemInputs("4x gtceu:silicon_dioxide_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:silica_gem_stock 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor("corundum_gem_feedstock")
        .itemInputs("4x gtceu:bauxite_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:corundum_gem_stock 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.large_chemical_reactor("beryl_gem_feedstock")
        .itemInputs("2x gtceu:silicon_dust", "2x gtceu:aluminium_dust", "2x gtceu:beryllium_oxide_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:beryl_gem_stock 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.large_chemical_reactor("garnet_gem_feedstock")
        .itemInputs("2x gtceu:silicon_dust", "2x gtceu:calcium_dust", "2x gtceu:iron_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:garnet_gem_stock 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.large_chemical_reactor("sodalite_gem_feedstock")
        .itemInputs("2x gtceu:aluminium_dust", "2x gtceu:silicon_dust", "3x gtceu:sodium_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:sodalite_gem_stock 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV])

    // Tiberium line
    event.recipes.gtceu.neutron_chamber("tiberium_seed_creation")
        .chancedInput("6x kubejs:neutron_emitter", 3000, 0)
        .chancedInput("1x kubejs:quasi_stable_neutron_star", 500, 0)
        .itemInputs("4x gtceu:praseodymium_oxide_dust")
        .itemOutputs("1x gtceu:tiberium_seed_dust")
        .outputFluids("gtceu:oxygen_plasma 2000")
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UEV])

    event.recipes.gtceu.gem_growing_vat("tiberium_seed_growth")
        .itemInputs("1x gtceu:tiberium_seed_dust", "12x gtceu:tricalcium_phosphate_dust", "8x gtceu:amethyst_dust")
        .inputFluids("gtceu:silica_gem_stock 3000", "gtceu:krypton 2000")
        .itemOutputs("1x gtceu:raw_tiberium_gem")
        .chancedOutput("1x gtceu:raw_tiberium_gem", 6000, 0)
        .chancedOutput("1x gtceu:raw_tiberium_gem", 3000, 0)
        // .chancedOutput("1x gtceu:raw_tiberium_gem", 1000, 0)
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.discharger('tiberium_purification_basic')
            .itemInputs("1x gtceu:raw_tiberium_gem", "1x monilabs:small_eltz_dust", Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT(), Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT())
            .itemOutputs(Item.of("kubejs:hadal_energy_core", "{Damage:0}").weakNBT(), Item.of("kubejs:hadal_energy_core", "{Damage:0}").weakNBT())
            .chancedOutput("gtceu:tiberium_dust", 4500, 0)
            .chancedOutput("gtceu:phosphophyllite_gem", 5500, 0)
            .chancedItemOutputLogic(ChanceLogic.XOR)
            .duration(10)
    event.recipes.gtceu.discharger('tiberium_purification_flawless')
            .itemInputs("1x gtceu:flawless_raw_tiberium_gem", "1x monilabs:small_eltz_dust", Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT(), Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT())
            .itemOutputs(Item.of("kubejs:hadal_energy_core", "{Damage:0}").weakNBT(), Item.of("kubejs:hadal_energy_core", "{Damage:0}").weakNBT())
            .chancedOutput("gtceu:tiberium_dust", 8000, 0)
            .chancedOutput("gtceu:flawless_phosphophyllite_gem", 2000, 0)
            .chancedItemOutputLogic(ChanceLogic.XOR)
            .duration(10)
    event.recipes.gtceu.discharger('tiberium_purification_exquisite')
            .itemInputs("1x gtceu:exquisite_raw_tiberium_gem", "1x monilabs:small_eltz_dust", Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT(), Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT())
            .itemOutputs(Item.of("kubejs:hadal_energy_core", "{Damage:0}").weakNBT(), Item.of("kubejs:hadal_energy_core", "{Damage:0}").weakNBT())
            .chancedOutput("gtceu:tiberium_dust", 9900, 0)
            .chancedOutput("gtceu:exquisite_phosphophyllite_gem", 100, 0)
            .chancedItemOutputLogic(ChanceLogic.XOR)
            .duration(10)
    
    /////// Generic gems
    //// Beryls
    // Emerald
    event.recipes.gtceu.gem_growing_vat("emerald_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_vanadium_dust", "1x gtceu:small_chromium_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("minecraft:emerald", 9500, 0)
        .chancedOutput("minecraft:emerald", 5000, 0)
        .chancedOutput("minecraft:emerald", 2000, 0)
        .chancedOutput("gtceu:flawless_emerald_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_emerald_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Pezzottaite
    event.recipes.gtceu.gem_growing_vat("pezzottaite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_caesium_dust", "1x gtceu:small_lithium_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("gtceu:pezzottaite_gem", 9500, 0)
        .chancedOutput("gtceu:pezzottaite_gem", 5000, 0)
        .chancedOutput("gtceu:pezzottaite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_pezzottaite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_pezzottaite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Milarite
    event.recipes.gtceu.gem_growing_vat("milarite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_iron_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000", "gtceu:iron_iii_chloride 500")
        .chancedOutput("gtceu:milarite_gem", 9500, 0)
        .chancedOutput("gtceu:milarite_gem", 5000, 0)
        .chancedOutput("gtceu:milarite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_milarite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_milarite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Aquamarine
    event.recipes.gtceu.gem_growing_vat("aquamarine_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_iron_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000", "gtceu:iron_ii_chloride 500")
        .chancedOutput("gtceu:aquamarine_gem", 9500, 0)
        .chancedOutput("gtceu:aquamarine_gem", 5000, 0)
        .chancedOutput("gtceu:aquamarine_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_aquamarine_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_aquamarine_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Morganite
    event.recipes.gtceu.gem_growing_vat("morganite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_manganese_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("gtceu:morganite_gem", 9500, 0)
        .chancedOutput("gtceu:morganite_gem", 5000, 0)
        .chancedOutput("gtceu:morganite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_morganite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_morganite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Euclase
    event.recipes.gtceu.gem_growing_vat("euclase_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000", "minecraft:water 500")
        .chancedOutput("gtceu:euclase_gem", 9500, 0)
        .chancedOutput("gtceu:euclase_gem", 5000, 0)
        .chancedOutput("gtceu:euclase_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_euclase_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_euclase_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Chrysoberyl
    event.recipes.gtceu.gem_growing_vat("chrysoberyl_growing")
        .itemInputs("1x gtceu:beryllium_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000", "gtceu:iron_iii_chloride 500")
        .chancedOutput("gtceu:chrysoberyl_gem", 9500, 0)
        .chancedOutput("gtceu:chrysoberyl_gem", 5000, 0)
        .chancedOutput("gtceu:chrysoberyl_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_chrysoberyl_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_chrysoberyl_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Bazzite
    event.recipes.gtceu.gem_growing_vat("bazzite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "3x gtceu:small_scandium_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("gtceu:bazzite_gem", 9500, 0)
        .chancedOutput("gtceu:bazzite_gem", 5000, 0)
        .chancedOutput("gtceu:bazzite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_bazzite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_bazzite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Musgravite
    event.recipes.gtceu.gem_growing_vat("musgravite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_magnesium_dust", "1x gtceu:small_zinc_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("gtceu:musgravite_gem", 9500, 0)
        .chancedOutput("gtceu:musgravite_gem", 5000, 0)
        .chancedOutput("gtceu:musgravite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_musgravite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_musgravite_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Taaffeite
    event.recipes.gtceu.gem_growing_vat("taaffeite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "2x gtceu:small_magnesium_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("gtceu:taaffeite_gem", 9500, 0)
        .chancedOutput("gtceu:taaffeite_gem", 5000, 0)
        .chancedOutput("gtceu:taaffeite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_taaffeite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_taaffeite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Red Beryl
    event.recipes.gtceu.gem_growing_vat("red_beryl_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:small_manganese_dust")
        .inputFluids("gtceu:beryl_gem_stock 1000")
        .chancedOutput("gtceu:red_beryl_gem", 9500, 0)
        .chancedOutput("gtceu:red_beryl_gem", 5000, 0)
        .chancedOutput("gtceu:red_beryl_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_red_beryl_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_red_beryl_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    //// Silicates
    // Nether quartz
    event.recipes.gtceu.gem_growing_vat("nether_quartz_growing")
        .itemInputs("1x gtceu:glass_dust", "1x gtceu:small_sulfur_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("minecraft:quartz", 9500, 0)
        .chancedOutput("minecraft:quartz", 5000, 0)
        .chancedOutput("minecraft:quartz", 2000, 0)
        .chancedOutput("gtceu:flawless_nether_quartz_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_nether_quartz_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Flint
    event.recipes.gtceu.gem_growing_vat("flint_growing")
        .itemInputs("1x gtceu:glass_dust", "1x gtceu:stone_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("minecraft:flint", 9500, 0)
        .chancedOutput("minecraft:flint", 5000, 0)
        .chancedOutput("minecraft:flint", 2000, 0)
        .chancedOutput("minecraft:flint", 750, 0)
        .chancedOutput("minecraft:flint", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Amethyst
    event.recipes.gtceu.gem_growing_vat("amethyst_growing")
        .itemInputs("1x gtceu:glass_dust", "1x gtceu:small_iron_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("minecraft:amethyst_shard", 9500, 0)
        .chancedOutput("minecraft:amethyst_shard", 5000, 0)
        .chancedOutput("minecraft:amethyst_shard", 2000, 0)
        .chancedOutput("gtceu:flawless_amethyst_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_amethyst_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Citrine
    event.recipes.gtceu.gem_growing_vat("citrine_growing")
        .itemInputs("1x gtceu:glass_dust", "1x gtceu:small_aluminium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:citrine_gem", 9500, 0)
        .chancedOutput("gtceu:citrine_gem", 5000, 0)
        .chancedOutput("gtceu:citrine_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_citrine_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_citrine_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Quartzite
    event.recipes.gtceu.gem_growing_vat("quartzite_growing")
        .itemInputs("1x gtceu:glass_dust", "1x gtceu:small_nickel_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:quartzite_gem", 9500, 0)
        .chancedOutput("gtceu:quartzite_gem", 5000, 0)
        .chancedOutput("gtceu:quartzite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_quartzite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_quartzite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Certus Quartz
    event.recipes.gtceu.gem_growing_vat("certus_quartz_growing")
        .itemInputs("1x gtceu:glass_dust", "1x gtceu:small_boron_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("ae2:certus_quartz_crystal", 9500, 0)
        .chancedOutput("ae2:certus_quartz_crystal", 5000, 0)
        .chancedOutput("ae2:certus_quartz_crystal", 2000, 0)
        .chancedOutput("gtceu:flawless_certus_quartz_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_certus_quartz_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Opal
    event.recipes.gtceu.gem_growing_vat("opal_growing")
        .itemInputs("1x gtceu:glass_dust")
        .inputFluids("gtceu:silica_gem_stock 1000", "minecraft:water 500")
        .chancedOutput("gtceu:opal_gem", 9500, 0)
        .chancedOutput("gtceu:opal_gem", 5000, 0)
        .chancedOutput("gtceu:opal_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_opal_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_opal_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1500)
    // Black Opal
    event.recipes.gtceu.gem_growing_vat("black_opal_growing")
        .itemInputs("1x gtceu:glass_dust")
        .inputFluids("gtceu:silica_gem_stock 1000", "minecraft:water 500")
        .chancedOutput("gtceu:black_opal_gem", 9500, 0)
        .chancedOutput("gtceu:black_opal_gem", 5000, 0)
        .chancedOutput("gtceu:black_opal_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_black_opal_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_black_opal_gem", 250, 0)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.UV])
        .duration(1700)
    //// Quasi-silicates
    // Zoisite
    event.recipes.gtceu.gem_growing_vat("zoisite_growing")
        .itemInputs("1x gtceu:silicon_dioxide_dust", "1x gtceu:small_calcium_dust", "1x gtceu:small_aluminium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000", "minecraft:water 1000")
        .chancedOutput("gtceu:zoisite_gem", 9500, 0)
        .chancedOutput("gtceu:zoisite_gem", 5000, 0)
        .chancedOutput("gtceu:zoisite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_zoisite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_zoisite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1500)
    // Olivine
    event.recipes.gtceu.gem_growing_vat("olivine_growing")
        .itemInputs("1x gtceu:silicon_dioxide_dust", "1x gtceu:magnesium_dust", "1x gtceu:small_iron_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:olivine_gem", 9500, 0)
        .chancedOutput("gtceu:olivine_gem", 5000, 0)
        .chancedOutput("gtceu:olivine_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_olivine_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_olivine_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1500)
    // Ekanite
    event.recipes.gtceu.gem_growing_vat("ekanite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:calcium_dust", "1x gtceu:small_thorium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:ekanite_gem", 9500, 0)
        .chancedOutput("gtceu:ekanite_gem", 5000, 0)
        .chancedOutput("gtceu:ekanite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_ekanite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_ekanite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1500)
    // Manganvesuvianite
    event.recipes.gtceu.gem_growing_vat("manganvesuvianite_growing")
        .itemInputs("4x gtceu:silicon_dioxide_dust", "1x gtceu:manganese_dust", "1x gtceu:iron_dust", "1x gtceu:magnesium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000", "gtceu:garnet_gem_stock 1000", "minecraft:water 1000")
        .chancedOutput("gtceu:manganvesuvianite_gem", 9500, 0)
        .chancedOutput("gtceu:manganvesuvianite_gem", 5000, 0)
        .chancedOutput("gtceu:manganvesuvianite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_manganvesuvianite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_manganvesuvianite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1800)
    // Nambulite
    event.recipes.gtceu.gem_growing_vat("nambulite_growing")
        .itemInputs("1x gtceu:silicon_dioxide_dust", "1x gtceu:manganese_dust", "1x gtceu:small_lithium_dust", "1x gtceu:small_sodium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000", "minecraft:water 500")
        .chancedOutput("gtceu:nambulite_gem", 9500, 0)
        .chancedOutput("gtceu:nambulite_gem", 5000, 0)
        .chancedOutput("gtceu:nambulite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_nambulite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_nambulite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1500)
    // Titanite
    event.recipes.gtceu.gem_growing_vat("titanite_growing")
        .itemInputs("1x gtceu:silicon_dioxide_dust", "1x gtceu:small_calcium_dust", "1x gtceu:small_titanium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:titanite_gem", 9500, 0)
        .chancedOutput("gtceu:titanite_gem", 5000, 0)
        .chancedOutput("gtceu:titanite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_titanite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_titanite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1700)
    // Schizolite
    event.recipes.gtceu.gem_growing_vat("schizolite_growing")
        .itemInputs("1x gtceu:silicon_dioxide_dust", "1x gtceu:small_sodium_dust", "1x gtceu:small_calcium_dust", "1x gtceu:small_manganese_dust")
        .inputFluids("gtceu:silica_gem_stock 1000", "minecraft:water 500")
        .chancedOutput("gtceu:schizolite_gem", 9500, 0)
        .chancedOutput("gtceu:schizolite_gem", 5000, 0)
        .chancedOutput("gtceu:schizolite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_schizolite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_schizolite_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1500)
    // Zircon
    event.recipes.gtceu.gem_growing_vat("zircon_growing")
        .itemInputs("1x gtceu:silicon_dioxide_dust", "1x gtceu:small_zirconium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:zircon_gem", 9500, 0)
        .chancedOutput("gtceu:zircon_gem", 5000, 0)
        .chancedOutput("gtceu:zircon_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_zircon_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_zircon_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1600)
    // Hexagonite
    event.recipes.gtceu.gem_growing_vat("hexagonite_growing")
        .itemInputs("2x gtceu:silicon_dioxide_dust", "1x gtceu:magnesium_dust", "1x gtceu:small_calcium_dust")
        .inputFluids("gtceu:silica_gem_stock 1000")
        .chancedOutput("gtceu:hexagonite_gem", 9500, 0)
        .chancedOutput("gtceu:hexagonite_gem", 5000, 0)
        .chancedOutput("gtceu:hexagonite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_hexagonite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_hexagonite_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1800)
    //// Corundums
    // Sapphire
    event.recipes.gtceu.gem_growing_vat("sapphire_growing")
        .itemInputs("1x gtceu:bauxite_dust", "1x gtceu:small_iron_dust", "1x gtceu:small_titanium_dust")
        .inputFluids("gtceu:corundum_gem_stock 1000")
        .chancedOutput("gtceu:sapphire_gem", 9500, 0)
        .chancedOutput("gtceu:sapphire_gem", 5000, 0)
        .chancedOutput("gtceu:sapphire_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_sapphire_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_sapphire_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Green Sapphire
    event.recipes.gtceu.gem_growing_vat("green_sapphire_growing")
        .itemInputs("1x gtceu:bauxite_dust", "2x gtceu:small_iron_dust")
        .inputFluids("gtceu:corundum_gem_stock 1000")
        .chancedOutput("gtceu:green_sapphire_gem", 9500, 0)
        .chancedOutput("gtceu:green_sapphire_gem", 5000, 0)
        .chancedOutput("gtceu:green_sapphire_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_sapphire_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_sapphire_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Spinel
    event.recipes.gtceu.gem_growing_vat("spinel_growing")
        .itemInputs("1x gtceu:bauxite_dust", "1x gtceu:small_chromium_dust", "1x gtceu:small_magnesium_dust", "1x gtceu:small_iron_dust")
        .inputFluids("gtceu:corundum_gem_stock 500", "gtceu:garnet_gem_stock 500")
        .chancedOutput("gtceu:spinel_gem", 9500, 0)
        .chancedOutput("gtceu:spinel_gem", 5000, 0)
        .chancedOutput("gtceu:spinel_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_spinel_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_spinel_gem", 250, 0)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1200)
    // Ruby
    event.recipes.gtceu.gem_growing_vat("sapphire_growing")
        .itemInputs("1x gtceu:bauxite_dust", "1x gtceu:small_chromium_dust")
        .inputFluids("gtceu:corundum_gem_stock 1000")
        .chancedOutput("gtceu:sapphire_gem", 9500, 0)
        .chancedOutput("gtceu:sapphire_gem", 5000, 0)
        .chancedOutput("gtceu:sapphire_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_sapphire_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_sapphire_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1400)
    // Eltic Crystal
    event.recipes.gtceu.gem_growing_vat("eltic_growing")
        .itemInputs("1x gtceu:bauxite_dust", "1x monilabs:small_eltz_dust", "1x gtceu:small_certus_quartz_dust")
        .inputFluids("gtceu:corundum_gem_stock 1000")
        .chancedOutput("gtceu:impure_eltic_gem", 9500, 0)
        .chancedOutput("gtceu:impure_eltic_gem", 5000, 0)
        .chancedOutput("gtceu:impure_eltic_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_impure_eltic_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_impure_eltic_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1800)
    //// Garnets
    // Spessartine
    event.recipes.gtceu.gem_growing_vat("spessartine_growing")
        .itemInputs("1x gtceu:red_garnet_dust", "1x gtceu:small_manganese_dust", "1x gtceu:small_aluminium_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:spessartine_gem", 9500, 0)
        .chancedOutput("gtceu:spessartine_gem", 5000, 0)
        .chancedOutput("gtceu:spessartine_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_spessartine_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_spessartine_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Almandine
    event.recipes.gtceu.gem_growing_vat("almandine_growing")
        .itemInputs("1x gtceu:red_garnet_dust", "1x gtceu:small_iron_dust", "1x gtceu:small_aluminium_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:almandine_gem", 9500, 0)
        .chancedOutput("gtceu:almandine_gem", 5000, 0)
        .chancedOutput("gtceu:almandine_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_almandine_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_almandine_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Yellow Garnet
    event.recipes.gtceu.gem_growing_vat("yellow_garnet_growing")
        .itemInputs("1x gtceu:yellow_garnet_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:yellow_garnet_gem", 9500, 0)
        .chancedOutput("gtceu:yellow_garnet_gem", 5000, 0)
        .chancedOutput("gtceu:yellow_garnet_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_yellow_garnet_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_yellow_garnet_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Red Garnet
    event.recipes.gtceu.gem_growing_vat("red_garnet_growing")
        .itemInputs("1x gtceu:red_garnet_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:red_garnet_gem", 9500, 0)
        .chancedOutput("gtceu:red_garnet_gem", 5000, 0)
        .chancedOutput("gtceu:red_garnet_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_red_garnet_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_red_garnet_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Andratite
    event.recipes.gtceu.gem_growing_vat("andratite_growing")
        .itemInputs("1x gtceu:yellow_garnet_dust", "1x gtceu:small_calcium_dust", "1x gtceu:small_iron_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:andratite_gem", 9500, 0)
        .chancedOutput("gtceu:andratite_gem", 5000, 0)
        .chancedOutput("gtceu:andratite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_andratite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_andratite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Uvarovite
    event.recipes.gtceu.gem_growing_vat("uvarovite_growing")
        .itemInputs("1x gtceu:yellow_garnet_dust", "1x gtceu:small_calcium_dust", "1x gtceu:small_chromium_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:uvarovite_gem", 9500, 0)
        .chancedOutput("gtceu:uvarovite_gem", 5000, 0)
        .chancedOutput("gtceu:uvarovite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_uvarovite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_uvarovite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Grossular
    event.recipes.gtceu.gem_growing_vat("grossular_growing")
        .itemInputs("1x gtceu:yellow_garnet_dust", "1x gtceu:small_calcium_dust", "1x gtceu:small_aluminium_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:grossular_gem", 9500, 0)
        .chancedOutput("gtceu:grossular_gem", 5000, 0)
        .chancedOutput("gtceu:grossular_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_grossular_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_grossular_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Pyrope
    event.recipes.gtceu.gem_growing_vat("pyrope_growing")
        .itemInputs("1x gtceu:red_garnet_dust", "1x gtceu:small_aluminium_dust", "1x gtceu:small_magnesium_dust")
        .inputFluids("gtceu:garnet_gem_stock 1000")
        .chancedOutput("gtceu:pyrope_gem", 9500, 0)
        .chancedOutput("gtceu:pyrope_gem", 5000, 0)
        .chancedOutput("gtceu:pyrope_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_pyrope_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_pyrope_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1100)
    // Rubellite
    event.recipes.gtceu.gem_growing_vat("rubellite_growing")
        .itemInputs("1x gtceu:red_garnet_dust", "1x gtceu:small_sodium_dust", "1x gtceu:small_aluminium_dust")
        .inputFluids("gtceu:garnet_gem_stock 500", "gtceu:silica_gem_stock 500", "minecraft:water 500")
        .chancedOutput("gtceu:rubellite_gem", 9500, 0)
        .chancedOutput("gtceu:rubellite_gem", 5000, 0)
        .chancedOutput("gtceu:rubellite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_rubellite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_rubellite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1300)
    // Anorthite
    event.recipes.gtceu.gem_growing_vat("anorthite_growing")
        .itemInputs("1x gtceu:yellow_garnet_dust")
        .inputFluids("gtceu:garnet_gem_stock 500", "gtceu:silica_gem_stock 500")
        .chancedOutput("gtceu:anorthite_gem", 9500, 0)
        .chancedOutput("gtceu:anorthite_gem", 5000, 0)
        .chancedOutput("gtceu:anorthite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_anorthite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_anorthite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1300)
    //// Sodalite-like
    // Sodalite
    event.recipes.gtceu.gem_growing_vat("sodalite_growing")
        .itemInputs("1x gtceu:sodium_dust")
        .inputFluids("gtceu:sodalite_gem_stock 1000", "gtceu:chlorine 500")
        .chancedOutput("gtceu:sodalite_gem", 9500, 0)
        .chancedOutput("gtceu:sodalite_gem", 5000, 0)
        .chancedOutput("gtceu:sodalite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_sodalite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_sodalite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1000)
    // Lazurite
    event.recipes.gtceu.gem_growing_vat("lazurite_growing")
        .itemInputs("1x gtceu:sodium_dust", "1x gtceu:calcium_dust")
        .inputFluids("gtceu:sodalite_gem_stock 1000")
        .chancedOutput("gtceu:lazurite_gem", 9500, 0)
        .chancedOutput("gtceu:lazurite_gem", 5000, 0)
        .chancedOutput("gtceu:lazurite_gem", 2000, 0)
        .chancedOutput("gtceu:flawless_lazurite_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_lazurite_gem", 250, 0)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1000)
    // Lapis
    event.recipes.gtceu.gem_growing_vat("lapis_growing")
        .itemInputs("1x gtceu:sodium_dust", "1x gtceu:calcium_dust")
        .inputFluids("gtceu:sodalite_gem_stock 1000", "gtceu:chlorine 500")
        .chancedOutput("minecraft:lapis_lazuli", 9500, 0)
        .chancedOutput("minecraft:lapis_lazuli", 5000, 0)
        .chancedOutput("minecraft:lapis_lazuli", 2000, 0)
        .chancedOutput("gtceu:flawless_lapis_gem", 750, 0)
        .chancedOutput("gtceu:exquisite_lapis_gem", 250, 0)
        .circuit(2)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .duration(1000)
    //// Arsenohydride
    // Legrandite

    // Mixite

    //// Vanadoxide
    // Cavansite

    // Vanadinite

    //// Borate
    // Ulexite

    // Tusionite

    // Chambersite

    // Datolite

    //// Phosphate
    // Herderite

    // Vivianite

    // Xenotime

    // Phosphosiderite

    // Apatite

    // Triplite

    // Fluoroapatite

    // Triphyllite

    // Torbernite

    // Turquoise

    // Monazite

    // Vayrynenite

    // Phosphophyllite

    //// Other
    // Diamond

    // Prismarine

    // Fluorite

    // Villaumite

    // Strontianite

    // Lithium Niobate

    // Realgar

    // Anatase

    // Topaz

    // Salt

    // Witherite

    // Moissanite

    // Rock Salt

    // Manganite

    // Ferberite

    // Brookite

    // Dulysite

    // Calomel

    // Selenite

    // Stolzite

    // Sperrylite

    // Otavite

    // Xanthoconite

    // Stibiotantalite

    // Rutile

    // Malachite

    // Cinnabar

    // Blue Topaz

    // Celestine

    // Lindgrenite
})