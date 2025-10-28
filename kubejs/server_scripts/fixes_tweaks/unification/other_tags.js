/** Random small tags that don't fit anywhere else */
ServerEvents.tags("item", event => {
    // GT batteries as curio charms
    event.get("gtceu:batteries").getObjectIds().forEach(resourceLoc => {
        event.add("curios:charm", resourceLoc.toString())
    })

    // Tantalum capacitor get capacitor tag (doesnt seem to break progression anywhere, tant cap is more expensive than regular cap or smd cap anyway.)
    event.add("gtceu:capacitors", "gtceu:tantalum_capacitor")

    // Witherbone forge:witherbones tag
    event.add("forge:wither_bones", "kubejs:wither_bone")

    // Dye tags
    event.add("forge:dyes/brown", "gtceu:hematite_dust")
    event.add("forge:dyes/brown", "gtceu:basic_copper_chromate_dust")
    event.add("forge:dyes/red", "gtceu:cadmium_selenide_dust")
    event.add("forge:dyes/red", "gtceu:cinnabar_dust")
    event.add("forge:dyes/orange", "gtceu:lead_chromate_dust")
    event.add("forge:dyes/orange", "gtceu:coccinite_dust")
    event.add("forge:dyes/orange", "gtceu:potassium_dichromate_dust")
    event.add("forge:dyes/yellow", "gtceu:hawleyite_dust")
    event.add("forge:dyes/yellow", "gtceu:bismuth_vanadate_dust")
    event.add("forge:dyes/yellow", "gtceu:strontium_chromate_dust")
    event.add("forge:dyes/lime", "gtceu:barium_chromate_dust")
    event.add("forge:dyes/lime", "gtceu:uranium_trioxide_dust")
    event.add("forge:dyes/green", "gtceu:garnierite_dust")
    event.add("forge:dyes/green", "gtceu:chromia_dust")
    event.add("forge:dyes/green", "gtceu:malachite_dust")
    event.add("forge:dyes/cyan", "gtceu:nickel_sulfate_hexahydride_dust")
    event.add("forge:dyes/cyan", "gtceu:azurite_dust")
    event.add("forge:dyes/light_blue", "gtceu:copper_sulfate_pentahydride_dust")
    event.add("forge:dyes/blue", "gtceu:cobalt_blue_dust")
    event.add("forge:dyes/blue", "gtceu:prussian_blue_dust")
    event.add("forge:dyes/purple", "gtceu:potassium_permanganate_dust")
    event.add("forge:dyes/purple", "gtceu:cobalt_phosphate_dust")
    event.add("forge:dyes/pink", "gtceu:erbium_oxide_dust")
    event.add("forge:dyes/pink", "gtceu:cobalt_carbonate_dust")
    event.add("forge:dyes/pink", "gtceu:rhodochrosite_dust")
    event.add("forge:dyes/magenta", "gtceu:cobalt_chloride_hexahydride_dust")
    event.add("forge:dyes/magenta", "gtceu:molybdenum_dioxide_dust")
    event.add("forge:dyes/black", "gtceu:carbon_dust")
    event.add("forge:dyes/black", "gtceu:cobaltic_oxide_dust")
    event.add("forge:dyes/black", "gtceu:manganese_dioxide_dust")
    event.add("forge:dyes/gray", "gtceu:antimony_tin_oxide_dust")
    event.add("forge:dyes/light_gray", "gtceu:titanium_suboxide_dust")
    event.add("forge:dyes/white", "gtceu:marble_dust")

    // Crop tags
    event.add("forge:crops/oat", "farm_and_charm:oat")
    event.add("forge:crops/barley", "farm_and_charm:barley")
    event.add("forge:crops/strawberry", "farm_and_charm:strawberry")
    event.add("forge:crops/white_grape", ["vinery:white_grape", "vinery:savanna_grapes_white", "vinery:taiga_grapes_white", "vinery:jungle_grapes_white"])
    event.add("forge:crops/red_grape", ["vinery:red_grape", "vinery:savanna_grapes_red", "vinery:taiga_grapes_red", "vinery:jungle_grapes_red"])
    event.add("forge:crops/grape", ["vinery:white_grape", "vinery:red_grape", "vinery:savanna_grapes_white", "vinery:taiga_grapes_white", "vinery:jungle_grapes_white", "vinery:savanna_grapes_red", "vinery:taiga_grapes_red", "vinery:jungle_grapes_red", "oceansdelight:sea_grape"])
    event.add("forge:crops/cherry", "vinery:cherry")

    // Food tags
    event.add("forge:raw_fishes/calamari", ["oceanic_delight:squid_tentacles", "oceanic_delight:glow_squid_tentacles"])
    event.add("forge:cooked_fishes/calamari", "oceans_delight:grilled_squid_tentacles")
    event.add("forge:mushrooms", ["natures_spirit:shiitake_mushroom", "ad_astra:aeronos_mushroom", "ad_astra:strophar_mushroom", "minecraft:crimson_fungus",
        "minecraft:warped_fungus", "kubejs:ender_spore"
    ])
    
    // Exquisite gem color tags
    event.add("bhc:exquisite_gems/red", ["gtceu:exquisite_pezzottaite_gem", "gtceu:exquisite_pyrope_gem", "gtceu:exquisite_manganvesuvianite_gem",
        "gtceu:exquisite_vayrynenite_gem", "gtceu:exquisite_nambulite_gem", "gtceu:exquisite_spinel_gem", "gtceu:exquisite_red_garnet_gem",
        "gtceu:exquisite_realgar_gem", "gtceu:exquisite_ruby_gem", "gtceu:exquisite_red_beryl_gem", "gtceu:exquisite_villiaumite_gem",
        "gtceu:exquisite_almandine_gem", "gtceu:exquisite_cinnabar_gem"
    ])
    event.add("bhc:exquisite_gems/yellow", ["gtceu:exquisite_yellow_garnet_gem", "gtceu:exquisite_andradite_gem", "gtceu:exquisite_topaz_gem",
        "gtceu:exquisite_legrandite_gem", "gtceu:exquisite_lithium_niobate_gem", "gtceu:exquisite_citrine_gem", "gtceu:exquisite_chrysoberyl_gem"
    ])
    event.add("bhc:exquisite_gems/green", ["gtceu:exquisite_vivianite_gem", "gtceu:exquisite_emerald_gem", "gtceu:exquisite_raw_tiberium_gem",
        "gtceu:exquisite_ekanite_gem", "gtceu:exquisite_green_sapphire_gem", "gtceu:exquisite_uvarovite_gem", "gtceu:exquisite_titanite_gem",
        "gtceu:exquisite_lindgrenite_gem", "gtceu:exquisite_torbernite_gem", "gtceu:exquisite_olivine_gem", "gtceu:exquisite_fluorite_gem"
    ])
    event.add("bhc:exquisite_gems/blue", ["gtceu:exquisite_sapphire_gem", "gtceu:exquisite_echo_shard_gem", "gtceu:exquisite_lazurite_gem",
        "gtceu:exquisite_black_opal_gem", "gtceu:exquisite_sodalite_gem", "gtceu:exquisite_cavansite_gem"
    ])
})
