ServerEvents.tags("item", event => {
    // DONE UP TO PAGE 56 - up to end's delight
    // Extra note - when done, check if displaydelight bypasses all this. If yes, remove it.
    // Generic tags
    // Eggs
    event.add("origins:food/generic_eggs", ["minecraft:turtle_egg", "minecraft:sniffer_egg", "friendsandfoes:crab_egg", "minecraft:egg",
        "oceanic_delight:ancient_fish_eggs", "oceanic_delight:salmon_eggs", "mynethersdelight:strider_egg", "mynethersdelight:golden_egg",
        "mynethersdelight:enchanted_golden_egg", "mynethersdelight:boiled_egg", "farmersdelight:fried_egg", "ends_delight:non_hatchable_dragon_egg", 
        "ends_delight:liquid_dragon_egg", "ends_delight:fried_dragon_egg"
    ])

    // Meat
    event.add("origins:food/generic_meat_raw", ["minecraft:beef", "minecraft:porkchop", "minecraft:mutton", "minecraft:chicken", "minecraft:rabbit",
        "minecraft:cod", "minecraft:salmon", "minecraft:tropical_fish", "minecraft:pufferfish", "minecraft:rotten_flesh", "minecraft:spider_eye",
        "minecraft:fermented_spider_eye", "minecraft:rabbit_foot", "oceanic_delight:shrimp", "oceanic_delight:elder_guardian_eye", "oceanic_delight:shrimp_slices",
        "oceanic_delight:squid_tentacles", "oceanic_delight:glow_squid_tentacles", "mynethersdelight:hoglin_loin", "mynethersdelight:hoglin_sausage",
        "mynethersdelight:raw_stuffed_hoglin", "mynethersdelight:strider_slice", "mynethersdelight:minced_strider", "mynethersdelight:bleeding_tartar",
        "mynethersdelight:strider_loaf", "mynethersdelight:cold_strider_loaf", "mynethersdelight:plate_of_striderloaf", "mynethersdelight:plate_of_cold_striderloaf",
        "mynethersdelight:ghasta", "mynethersdelight:spicy_cotton", "mynethersdelight:ghasmati", "aquaculturedelight:small_turtle_meat", "aquaculture:fish_fillet_raw",
        "aquaculture:atlantic_cod", "aquaculture:blackfish", "aquaculture:pacific_halibut", "aquaculture:atlantic_halibut", "aquaculture:atlantic_herring",
        "aquaculture:pink_salmon", "aquaculture:pollock", "aquaculture:rainbow_trout", "aquaculture:bayad", "aquaculture:boulti", "aquaculture:capitaine",
        "aquaculture:synodontis", "aquaculture:smallmouth_bass", "aquaculture:bluegill", "aquaculture:brown_trout", "aquaculture:carp", "aquaculture:catfish",
        "aquaculture:gar", "aquaculture:minnow", "aquaculture:muskellunge", "aquaculture:perch", "aquaculture:arapaima", "aquaculture:piranha", "aquaculture:tambaqui",
        "aquaculture:brown_shrooma", "aquaculture:red_shrooma", "aquaculture:red_grouper", "aquaculture:tuna", "aquaculture:leech", "aquaculture:goldfish",
        "aquaculture:box_turtle", "aquaculture:arrau_turtle", "aquaculture:starshell_turtle", "farmersdelight:minced_beef", "farmersdelight:chicken_cuts",
        "farmersdelight:bacon", "farmersdelight:cod_slice", "farmersdelight:salmon_slice", "farmersdelight:mutton_chops", "farmersdelight:ham",
        "farmersdelight:dog_food", "ends_delight:shulker_meat", "ends_delight:shulker_meat_slice", "ends_delight:dragon_leg", "ends_delight:raw_dragon_meat", 
        "ends_delight:raw_dragon_meat_cuts", "ends_delight:raw_ender_mite_meat", "ends_delight:enderman_gristle", "ends_delight:raw_ender_sausage", 
        "farm_and_charm:minced_beef", "farm_and_charm:lamb_ham", "farm_and_charm:chicken_parts", "farm_and_charm:bacon", "farm_and_charm:cat_food", 
        "farm_and_charm:dog_food", "kubejs:warden_heart"
    ])
    event.add("origins:food/generic_meat_cooked", ["minecraft:cooked_beef", "minecraft:cooked_porkchop", "minecraft:cooked_mutton", "minecraft:cooked_chicken",
        "minecraft:cooked_rabbit", "minecraft:cooked_cod", "minecraft:cooked_salmon", "oceanic_delight:grilled_squid_tentacles", "mynethersdelight:roasted_sausage",
        "mynethersdelight:cooked_loin", "mynethersdelight:bacon-wrapped_sausage_on_a_stick", "mynethersdelight:roast_stuffed_hoglin", "mynethersdelight:roast_ear",
        "mynethersdelight:plate_of_stuffed_hoglin_snout", "mynethersdelight:plate_of_stuffed_hoglin_ham", "mynethersdelight:plate_of_stuffed_hoglin",
        "mynethersdelight:fries_ghasta", "mynethersdelight:burnt_roll", "aquaculturedelight:cooked_small_turtle_meat", "aquaculture:fish_fillet_cooked",
        "aquaculture:turtle_soup", "farmersdelight:beef_patty", "farmersdelight:cooked_chicken_cuts", "farmersdelight:cooked_bacon", "farmersdelight:cooked_cod_slice",
        "farmersdelight:cooked_salmon_slice", "farmersdelight:cooked_mutton_chops", "farmersdelight:smoked_ham", "farmersdelight:bacon_and_eggs", 
        "ends_delight:roasted_shulker_meat", "ends_delight:roasted_shulker_meat_slice", "ends_delight:smoked_dragon_leg", "ends_delight:roasted_dragon_meat", 
        "ends_delight:roasted_dragon_meat_cuts", "ends_delight:dried_endermite_meat", "ends_delight:ender_sausage", "farm_and_charm:bacon_with_eggs", 
        "brewery:pork_knuckle", "brewery:half_chicken"
    ])

    // Vegetable
    event.add("origins:food/generic_vegetable", ["minecraft:kelp", "minecraft:carrot", "minecraft:golden_carrot", "minecraft:potato", "minecraft:poisonous_potato", 
        "minecraft:beetroot", "natures_spirit:desert_turnip", "minecraft:dried_kelp", "minecraft:beetroot_soup", "minecraft:suspicious_stew", "minecraft:sea_pickle", 
        "oceanic_delight:sea_pickle_slices", "oceanic_delight:potato_salad", "oceanic_delight:sea_salad", "oceanic_delight:sea_pickle_roll_slice", "oceanic_delight:sea_pickle_roll", 
        "aquaculturedelight:crispy_nori_kelp", "aquaculturedelight:poor_fisher_chowder", "aquaculture:algae", "artifacts:onion_ring", "farmersdelight:cabbage", 
        "farmersdelight:onion", "farmersdelight:rice", "farmersdelight:cabbage_leaf", "farmersdelight:mixed_salad", "farmersdelight:kelp_roll", "farmersdelight:kelp_roll_slice", 
        "farmersdelight:cooked_rice", "farmersdelight:vegetable_soup", "farmersdelight:fried_rice",  "farmersdelight:vegetable_noodles", "farmersdelight:ratatouille", 
        "farmersdelight:stuffed_pumpkin_block", "farmersdelight:stuffed_pumpkin", "rusticdelight:potato_slices", "rusticdelight:baked_potato_slices", "rusticdelight:potato_salad",
        "rusticdelight:sweet_salad", "rusticdelight:cherry_blossom_roll", "ends_delight:dried_chorus_flower", "ends_delight:end_mixed_salad", "ends_delight:assorted_salad", 
        "farm_and_charm:corn", "farm_and_charm:lettuce", "farm_and_charm:wild_nettle", "farm_and_charm:wild_ribwort", "farm_and_charm:farmer_salad", "farm_and_charm:onion", 
        "farm_and_charm:onion_soup", "farm_and_charm:potato_soup", "farm_and_charm:roasted_corn", "brewery:dumplings", "brewery:mashed_potatoes", "brewery:potato_salad"
    ])

    // Mushroom
    event.add("origins:food/generic_mushroom", ["minecraft:mushroom_stew", "ad_astra:aeronos_mushroom", "ad_astra:strophar_mushroom", "minecraft:red_mushroom", 
        "minecraft:brown_mushroom", "natures_spirit:shiitake_mushroom", "minecraft:crimson_fungus", "minecraft:warped_fungus", "farmersdelight:nether_salad",
        "farmersdelight:mushroom_rice", "rusticdelight:fried_mushrooms", "kubejs:ender_spore"
    ])

    // Fruit
    event.add("origins:food/generic_fruits", ["minecraft:glow_berries", "minecraft:sweet_berries", "natures_spirit:coconut", "minecraft:apple", "minecraft:golden_apple",
        "minecraft:enchanted_golden_apple", "minecraft:melon_slice", "minecraft:chorus_fruit", "minecraft:carrot", "minecraft:golden_carrot",  "natures_spirit:coconut_half",
        "natures_spirit:olives", "minecraft:glistening_melon_slice", "oceanic_delight:sea_grape", "oceanic_delight:sea_grape_juice", "oceanic_delight:nautilus_juice",
        "mynethersdelight:bullet_pepper", "farmersdelight:tomato", "farmersdelight:hot_cocoa", "farmersdelight:melon_juice", "farmersdelight:tomato_sauce",
        "farmersdelight:pumpkin_slice", "farmersdelight:melon_popsicle", "farmersdelight:fruit_salad", "rusticdelight:bell_pepper_green", "rusticdelight:bell_pepper_yellow",
        "rusticdelight:bell_pepper_red", "rusticdelight:coffee_beans", "rusticdelight:roasted_coffee_beans", "rusticdelight:golden_coffee_beans", "rusticdelight:roasted_bell_pepper_green",
        "rusticdelight:roasted_bell_pepper_yellow", "rusticdelight:roasted_bell_pepper_red", "rusticdelight:syrup", "rusticdelight:bell_pepper_green_roll",
        "rusticdelight:bell_pepper_yellow_roll", "rusticdelight:bell_pepper_red_roll", "rusticdelight:bell_pepper_soup", "rusticdelight:bell_pepper_pasta", 
        "ends_delight:chorus_succulent", "ends_delight:chorus_sauce", "ends_delight:stuffed_rice_cake", "ends_delight:chorus_fruit_popsicle", 
        "ends_delight:dragon_breath_and_chorus_soup", "vinery:cherry", "vinery:rotten_cherry", "vinery:red_grape", "vinery:white_grape", "vinery:savanna_grapes_red", 
        "vinery:savanna_grapes_white", "vinery:taiga_grapes_red", "vinery:taiga_grapes_white", "vinery:jungle_grapes_red", "vinery:jungle_grapes_white", "vinery:red_grapejuice", 
        "vinery:white_grapejuice", "vinery:red_taiga_grapejuice", "vinery:white_taiga_grapejuice", "vinery:red_jungle_grapejuice", "vinery:white_jungle_grapejuice", 
        "vinery:red_savanna_grapejuice", "vinery:white_savanna_grapejuice", "vinery:apple_juice", "farm_and_charm:tomato", "farm_and_charm:rotten_tomato", "farm_and_charm:strawberry", 
        "farm_and_charm:simple_tomato_soup", "farm_and_charm:strawberry_tea", "farm_and_charm:strawberry_tea_cup", "create:chocolate_glazed_berries", "create:honeyed_apple",
        "bhc:relic_apple"
    ])

    // Bread and such
    event.add("origins:food/generic_breads_cakes", ["minecraft:bread", "natures_spirit:whole_pizza", "minecraft:cookie", "minecraft:cake", "minecraft:pumpkin_pie",
        "oceanic_delight:sponge_cake", "oceanic_delight:sponge_cake_slice", "mynethersdelight:bread_loaf", "mynethersdelight:slices_of_bread", "mynethersdelight:toasts",
        "mynethersdelight:magma_cake_block", "mynethersdelight:magma_cake_slice", "farmersdelight:wheat_dough", "farmersdelight:raw_pasta", "farmersdelight:pie_crust",
        "farmersdelight:apple_pie", "farmersdelight:sweet_berry_cheesecake", "farmersdelight:chocolate_pie", "farmersdelight:cake_slice", "farmersdelight:apple_pie_slice",
        "farmersdelight:sweet_berry_cheesecake_slice", "farmersdelight:chocolate_pie_slice", "farmersdelight:sweet_berry_cookie", "farmersdelight:honey_cookie",
        "rusticdelight:batter", "rusticdelight:syrup_cheesecake", "rusticdelight:syrup_cheesecake_slice", "rusticdelight:cherry_blossom_cheesecake",
        "rusticdelight:cherry_blossom_cheesecake_slice", "rusticdelight:syrup_cookie", "rusticdelight:cherry_blossom_cookie", "rusticdelight:coffee_cookie",
        "rusticdelight:syrup_sandwich", "rusticdelight:fruit_beignet", "rusticdelight:pancakes", "rusticdelight:pancake", "rusticdelight:honey_pancakes", "rusticdelight:honey_pancake",
        "rusticdelight:chocolate_pancakes", "rusticdelight:chocolate_pancakes", "rusticdelight:cherry_blossom_pancakes", "rusticdelight:cherry_blossom_pancake", 
        "rusticdelight:vegetable_pancakes", "rusticdelight:vegetable_pancake", "rusticdelight:pumpkin_pancakes", "rusticdelight:pumpkin_pancake", "rusticdelight:fried_dough", 
        "ends_delight:chorus_flower_pie", "ends_delight:chorus_cookie", "ends_delight:chorus_fruit_pie", "ends_delight:chorus_fruit_pie_slice", "farm_and_charm:flour", 
        "farm_and_charm:dough", "farm_and_charm:raw_pasta", "farm_and_charm:pasta_with_onion_sauce", "farm_and_charm:corn_grits", "farm_and_charm:oat_pancake", 
        "farm_and_charm:farmers_bread", "farm_and_charm:grandmothers_strawberry_cake", "brewery:pretzel", "brewery:gingerbread", "create:blaze_cake", "create:creative_blaze_cake",
        "create:sweet_roll", "gtceu:dough"
    ])

    // Dairy
    event.add("origins:food/generic_dairy", ["natures_spirit:cheese_bucket", "ad_astra:cheese", "minecraft:milk_bucket", "farmersdelight:milk_bottle"
        , "ends_delight:chorus_fruit_milk_tea", "ends_delight:bubble_tea", "farm_and_charm:butter", "farm_and_charm:oatmeal_with_straberries", "create:bar_of_chocolate",
        "create:builders_tea"
    ])

    // Mixed
    event.add("origins:food/generic_mixed_mostly_meat", ["oceanic_delight:seafood_skewer", "oceanic_delight:caviar_toast", "oceanic_delight:fried_shrimp", "oceanic_delight:shrimp_chips",
        "oceanic_delight:shrimp_roll", "oceanic_delight:egg_roll", "oceanic_delight:shrimp_stew", "oceanic_delight:shrimp_rice", "oceanic_delight:paella_plate",
        "oceanic_delight:bowl_of_paella", "mynethersdelight:hotdog", "mynethersdelight:hotdog_with_mixed_salad", "mynethersdelight:hotdog_with_nether_salad",
        "mynethersdelight:sausage_and_potatoes", "mynethersdelight:breakfast_sampler", "mynethersdelight:blue_tenderloin_steak", "mynethersdelight:fried_hoglin_chop",
        "mynethersdelight:red_loin_on_a_stick", "mynethersdelight:deviled_egg", "mynethersdelight:scotch_eggs", "mynethersdelight:egg_soup", "mynethersdelight:spicy_noodle_soup",
        "mynethersdelight:dried_ghast_with_milk", "mynethersdelight:sizzling_pudding", "mynethersdelight:ghasta_with_cream", "mynethersdelight:plate_of_ghasta_with_cream",
        "mynethersdelight:ghast_dough", "mynethersdelight:ghast_sourdough", "mynethersdelight:spicy_skewer", "mynethersdelight:chilidog", "mynethersdelight:hot_wings",
        "mynethersdelight:hot_wings_bucket", "aquaculturedelight:buckling", "aquaculturedelight:baked_pollock_with_carrots", "aquaculturedelight:halibut_with_tartar_sauce",
        "aquaculturedelight:large_fish_with_vegetables", "aquaculturedelight:rollmops", "aquaculturedelight:fish_roll_medley", "aquaculturedelight:catfish_barbecue",
        "aquaculturedelight:crispy_fried_perch", "aquaculturedelight:fried_perch_roll", "aquaculturedelight:raw_fish_fillet_roll", "aquaculture:sushi", "farmersdelight:barbecue_stick",
        "farmersdelight:egg_sandwich", "farmersdelight:salmon_roll", "farmersdelight:cod_roll", "farmersdelight:beef_stew", "farmersdelight:fish_stew", "farmersdelight:baked_cod_stew",
        "farmersdelight:roasted_mutton_chops", "farmersdelight:steak_and_potatoes", "farmersdelight:grilled_salmon", "farmersdelight:roast_chicken_block", "farmersdelight:roast_chicken",
        "farmersdelight:honey_glazed_ham_block", "farmersdelight:honey_glazed_ham", "rusticdelight:calamari_roll", "rusticdelight:fried_calamari", "rusticdelight:fried_chicken",
        "rusticdelight:coffee_braised_beef", "ends_delight:shulker_omelette_mixture", "ends_delight:shulker_omelette", "ends_delight:stir_fried_shulker_meat", 
        "ends_delight:roasted_dragon_steak", "ends_delight:end_barbecue_stick", "ends_delight:dragon_leg_with_sauce_block", "ends_delight:dragon_leg_with_sauce", 
        "ends_delight:dragon_meat_stew_block", "ends_delight:dragon_meat_stew", "ends_delight:grilled_shulker_block", "ends_delight:grilled_shulker", 
        "farm_and_charm:roasted_chicken", "farm_and_charm:cooked_salmon", "farm_and_charm:cooked_cod", "farm_and_charm:chicken_wrapped_in_bacon", "farm_and_charm:lamb_with_corn", 
        "farm_and_charm:baked_lamb_ham", "farm_and_charm:stuffed_chicken", "farm_and_charm:stuffed_rabbit", "brewery:fried_chicken", "brewery:sausage"
    ])
    event.add("origins:food/generic_mixed_varied", ["minecraft:rabbit_stew", "oceanic_delight:squid_salad", "oceanic_delight:caesar_salad", "oceanic_delight:takoyaki",
        "oceanic_delight:steamed_beef", "oceanic_delight:fish_egg_roll", "oceanic_delight:fish_egg_roll_slice", "oceanic_delight:glow_squid_stew", "oceanic_delight:globular_rice",
        "oceanic_delight:fish_egg_noodle_soup", "oceanic_delight:pasta_with_eyeball", "oceanic_delight:squid_and_pickles", "oceanic_delight:stuffed_pufferfish",
        "oceanic_delight:plate_of_stuffed_pufferfish", "mynethersdelight:nether_burger", "mynethersdelight:strider_with_grilled_fungus", "mynethersdelight:strider_stew",
        "mynethersdelight:crimson_stroganoff", "mynethersdelight:twisted_ghasta", "mynethersdelight:ghast_salad", "mynethersdelight:giant_takoyaki", "mynethersdelight:stuffed_pepper",
        "mynethersdelight:spicy_hoglin_stew", "mynethersdelight:spicy_curry", "mynethersdelight:rock_soup", "mynethersdelight:hot_cream", "mynethersdelight:hot_cream_cone",
        "aquaculturedelight:jellyfish_jelly", "aquaculturedelight:unusual_fish_soup", "aquaculturedelight:bass_stew", "aquaculturedelight:fish_chorba", "aquaculturedelight:halaszle",
        "aquaculturedelight:fish_and_chips", "aquaculturedelight:tuna_spaghetti", "aquaculturedelight:turtle_meat_dish", "farmersdelight:glow_berry_custard", "farmersdelight:chicken_sandwich",
        "farmersdelight:hamburger", "farmersdelight:bacon_sandwich", "farmersdelight_mutton_wrap", "farmersdelight:dumplings", "farmersdelight:stuffed_potato", "farmersdelight:cabbage_rolls",
        "farmersdelight:bone_broth", "farmersdelight:chicken_soup", "farmersdelight:pumpkin_soup", "farmersdelight:noodle_soup", "farmersdelight:pasta_with_meatballs",
        "farmersdelight:pasta_with_mutton_chop", "farmersdelight:squid_ink_pasta", "farmersdelight:shepherds_pie_block", "farmersdelight:shepherds_pie", "farmersdelight:rice_roll_medley_block",
        "rusticdelight:stuffed_bell_pepper_green", "rusticdelight:stuffed_bell_pepper_yellow", "rusticdelight:stuffed_bell_pepper_red", "rusticdelight:fried_dumplings",
        "rusticdelight:spring_rolls", "rusticdelight:rice_roll_royale", "ends_delight:ender_bamboo_rice", "ends_delight:ender_congee", "ends_delight:shulker_soup", 
        "ends_delight:ender_noodle", "ends_delight:enderman_gristle_stew", "ends_delight:steamed_dragon_egg_block", "ends_delight:steamed_dragon_egg", "farm_and_charm:barley_soup", 
        "farm_and_charm:goulash", "farm_and_charm:barley_patties_with_potatoes", "farm_and_charm:beef_patty_with_vegetables", "farm_and_charm:sausage_with_oat_patty", 
        "farm_and_charm:farmers_breakfast", "farm_and_charm:potato_with_roast_meat"
    ])

    // Drinks
    event.add("origins:food/accesible_drinks", ["rusticdelight:coffee", "rusticdelight:chocolate_coffee", "rusticdelight:honey_coffee", "rusticdelight:syrup_coffee", 
        "rusticdelight:dark_coffee", "rusticdelight:milk_coffee", "rusticdelight:cooking_oil", "ends_delight:chorus_fruit_wine", "ends_delight:dragon_breath_soda", 
        "ends_delight:chorus_flower_tea", "vinery:mead", "vinery:apple_cider", "vinery:apple_wine", "vinery:mellohi_wine", "vinery:glowing_wine", "vinery:solaris_wine", 
        "vinery:noir_wine", "vinery:red_wine", "vinery:strad_wine", "vinery:cherry_wine", "vinery:cristel_wine", "vinery:creepers_crush", "vinery:kelp_cider", 
        "vinery:lilitu_wine", "vinery:jo_special_mixture", "vinery:eiswein", "vinery:aegis_wine", "vinery:bolvar_wine", "vinery:chorus_wine", "vinery:villagers_fright", 
        "vinery:clark_wine", "vinery:magnetic_wine", "vinery:stal_wine", "vinery:chenet_wine", "vinery:bottle_mojang_noir", "vinery:jellie_wine", "farm_and_charm:nettle_tea", 
        "farm_and_charm:ribwort_tea", "farm_and_charm:nettle_tea_cup", "farm_and_charm:ribwort_tea_cup", "brewery:beer_wheat", "brewery:beer_barley", "brewery:beer_hops", 
        "brewery:beer_nettle", "brewery:beer_oat", "brewery:beer_haley", "brewery:whiskey_jojannik", "brewery:whiskey_lilitusinglemalt", "brewery:whiskey_cristelwalker", 
        "brewery:whiskey_maggoallan", "brewery:whiskey_carrasconlabel", "brewery:whiskey_ak", "brewery:whiskey_highland_hearth", "brewery:whiskey_smokey_reverie", 
        "brewery:whiskey_jamesons_malt", "gtceu:purple_drink"])

    // Special (?)
    event.add("origins:food/other", ["mynethersdelight:tear_popsicle", "aquaculture:jellyfish", "spartanweaponry:grease_ball", "farm_and_charm:yeast"])

    // Specific tags
    // Centaur
    event.add("origins:food/centaur_grains", ["natures_spririt:lavender", "minecraft:wheat", "farmersdelight:rice_panicle", "farm_and_charm:corn", "farm_and_charm:oat", 
        "farm_and_charm:barley", "farm_and_charm:flour", "brewery:hops", "brewery:dried_wheat", "brewery:dried_barley", "brewery:dried_corn", "brewery:dried_oat"])
    event.add("origins:food/centaur_misc", ["minecraft:sugar_cane", "minecraft:sugar", "farmersdelight:straw", "farm_and_charm:wild_nettle", "farm_and_charm:wild_ribwort"])
    event.add("origins:food/centaur_special", ["farmersdelight:horse_feed", "farm_and_charm:horse_fodder"])
    event.add("origins:food/centaur_bales", ["minecraft:hay_block", "farmersdelight:rice_bale", "farm_and_charm:oat_ball", "farm_and_charm:barley_ball"])
    event.add("origins:food/centaur_bad_bales", ["natures_spirit:xeric_thatch", "natures_spirit:coconut_thatch", "natures_spirit:evergreen_thatch",
        "farmersdelight:straw_bale"
    ])

    // Dodo
    event.add("origins:food/dodo_seeds", ["minecraft:wheat_seeds", "minecraft:cocoa_beans", "minecraft:pumpkin_seeds", "minecraft:melon_seeds", "minecraft:beetroot_seeds",
        "minecraft:torchflower_seeds", "minecraft:pitcher_pod", "natures_spirit:coconut_sprout", "farmersdelight:cabbage_seeds", "farmersdelight:rice", "farmersdelight:tomato_seeds",
        "rusticdelight:cotton_seeds", "rusticdelight:bell_pepper_seeds", "rusticdelight:coffee_beans", "ends_delight:ender_pearl_grain", "ends_delight:chorus_fruit_grain", 
        "vinery:red_grape_seeds", "vinery:white_grape_seeds", "vinery:savanna_grape_seeds_red", "vinery:savanna_grape_seeds_white", "vinery:taiga_grape_seeds_red", 
        "vinery:taiga_grape_seeds_white", "vinery:jungle_grape_seeds_red", "vinery:jungle_grape_seeds_white", "farm_and_charm:kernels", "farm_and_charm:oat_seeds", 
        "farm_and_charm:barley_seeds", "farm_and_charm:lettuce_seeds", "farm_and_charm:tomato_seeds", "farm_and_charm:strawberry_seeds", "farm_and_charm:chicken_feed",
        "brewery:hops_seeds"
    ])
    event.add("origins:food/dodo_misc", ["aquaculture:worm"])
})