/**
 * Recipe compat for the funni railways mod
 */

if (Platform.isLoaded("railways")) {
    console.log("Create: Steam and Rails found, loading compat script...")
    ServerEvents.tags("item", event => {
        // normal rails
        event.add("kubejs:create_tracks", "create:track");
        event.add("kubejs:create_tracks", "railways:track_oak");
        event.add("kubejs:create_tracks", "railways:track_birch");
        event.add("kubejs:create_tracks", "railways:track_acacia");
        event.add("kubejs:create_tracks", "railways:track_dark_oak");
        event.add("kubejs:create_tracks", "railways:track_jungle");
        event.add("kubejs:create_tracks", "railways:track_spruce");
        event.add("kubejs:create_tracks", "railways:track_mangrove");
        event.add("kubejs:create_tracks", "railways:track_warped");
        event.add("kubejs:create_tracks", "railways:track_crimson");
        event.add("kubejs:create_tracks", "railways:track_blackstone");
        event.add("kubejs:create_tracks", "railways:track_ender");
        event.add("kubejs:create_tracks", "railways:track_tieless");
        event.add("kubejs:create_tracks", "railways:track_phantom");
        event.add("kubejs:create_tracks", "railways:track_cherry");
        event.add("kubejs:create_tracks", "railways:track_bamboo");
        event.add("kubejs:create_tracks", "railways:track_stripped_bamboo");
        event.add("kubejs:create_tracks", "railways:track_monorail");
        // wide rails
        event.add("kubejs:create_tracks", "railways:track_create_andesite_wide");
        event.add("kubejs:create_tracks", "railways:track_acacia_wide");
        event.add("kubejs:create_tracks", "railways:track_birch_wide");
        event.add("kubejs:create_tracks", "railways:track_dark_oak_wide");
        event.add("kubejs:create_tracks", "railways:track_jungle_wide");
        event.add("kubejs:create_tracks", "railways:track_oak_wide");
        event.add("kubejs:create_tracks", "railways:track_spruce_wide");
        event.add("kubejs:create_tracks", "railways:track_mangrove_wide");
        event.add("kubejs:create_tracks", "railways:track_warped_wide");
        event.add("kubejs:create_tracks", "railways:track_crimson_wide");
        event.add("kubejs:create_tracks", "railways:track_blackstone_wide");
        event.add("kubejs:create_tracks", "railways:track_ender_wide");
        event.add("kubejs:create_tracks", "railways:track_tieless_wide");
        event.add("kubejs:create_tracks", "railways:track_cherry_wide");
        event.add("kubejs:create_tracks", "railways:track_bamboo_wide");
        event.add("kubejs:create_tracks", "railways:track_stripped_bamboo_wide");
        // narrow rails
        event.add("kubejs:create_tracks", "railways:track_create_andesite_narrow");
        event.add("kubejs:create_tracks", "railways:track_acacia_narrow");
        event.add("kubejs:create_tracks", "railways:track_birch_narrow");
        event.add("kubejs:create_tracks", "railways:track_dark_oak_narrow");
        event.add("kubejs:create_tracks", "railways:track_jungle_narrow");
        event.add("kubejs:create_tracks", "railways:track_oak_narrow");
        event.add("kubejs:create_tracks", "railways:track_spruce_narrow");
        event.add("kubejs:create_tracks", "railways:track_mangrove_narrow");
        event.add("kubejs:create_tracks", "railways:track_warped_narrow");
        event.add("kubejs:create_tracks", "railways:track_crimson_narrow");
        event.add("kubejs:create_tracks", "railways:track_blackstone_narrow");
        event.add("kubejs:create_tracks", "railways:track_ender_narrow");
        event.add("kubejs:create_tracks", "railways:track_tieless_narrow");
        event.add("kubejs:create_tracks", "railways:track_cherry_narrow");
        event.add("kubejs:create_tracks", "railways:track_bamboo_narrow");
        event.add("kubejs:create_tracks", "railways:track_stripped_bamboo_narrow");

        if (Platform.isLoaded("natures_spirit")) { // fuck it, we BoP - hell nah, we NSP
            // normal rails
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_redwood");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_sugi");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_wisteria");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_fir");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_willow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_aspen");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_maple");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_cypress");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_olive");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_joshua");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_ghaf");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_palo_verde");
            // wide rails
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_redwood_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_sugi_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_wisteria_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_fir_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_willow_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_aspen_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_maple_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_cypress_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_olive_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_joshua_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_ghaf_wide");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_palo_verde_wide");
            // narrow rails
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_redwood_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_sugi_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_wisteria_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_fir_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_willow_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_aspen_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_maple_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_cypress_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_olive_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_joshua_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_ghaf_narrow");
            event.add("kubejs:create_tracks", "railways:track_natures_spirit_palo_verde_narrow");
        }
    })
    ServerEvents.recipes(event => {

        event.remove({ output: "#kubejs:create_tracks" }) // KILL 'EM ALL! - demoman tf2

        /**
         * Creates a shaped crafting recipe and a Gregtech Assembler recipe, both to make normal-gauge tracks.
         * @param {string} sleeperItem A ResourceLocation of the item representing the sleeper/tie of the track. Will typically be a slab.
         * @param {string} outputItem A ResourceLocation of the normal-gauge track item to be output by the recipes.
         * @param {string} railItem A ResourceLocation of the item used as the rails themselves. Typically an iron or gold nugget, to stay in line with base Create.
         * @param {int} outputCount How many normal-gauge track items that will be outputted by the recipes. Is multiplied by two for the assembler recipe, to incentivise automation.
         */
        let normalTrackRecipes = function (sleeperItem, outputItem, railItem, outputCount) {
            event.shaped(`${outputCount}x ${outputItem}`, [
                "   ",
                "IHI",
                "SSS"
            ], {
                H: "#forge:tools/hammers",
                I: `${railItem}`,
                S: `${sleeperItem}`
            });
            event.recipes.gtceu.assembler(`kubejs:${outputItem.replace(/^.*:/, "")}`)
                .itemInputs(
                    `3x ${sleeperItem}`,
                    `2x ${railItem}`
                )
                .itemOutputs(`${outputCount * 2}x ${outputItem}`)
                .duration(5)
                .EUt(16); // Low Voltage
        };

        /**
         * Creates a shaped crafting recipe and a Gregtech Assembler recipe, both to make wide-gauge tracks.
         * @param {string} inputTrackItem A ResourceLocation of the track item used in the recipe, to be 'widened'.
         * @param {string} sleeperItem A ResourceLocation of the item representing the sleeper/tie of the track. Will typically be a slab.
         * @param {string} outputItem A ResourceLocation of the wide-gauge track item to be output by the recipes.
         * @param {int} outputCount How many wide-gauge track items that will be outputted by the recipes. Is multiplied by two for the assembler recipe, to incentivise automation.
         */
        let wideTrackRecipes = function (inputTrackItem, sleeperItem, outputItem, outputCount) {
            event.shaped(`${outputCount}x ${outputItem}`, [
                "   ",
                " H ",
                "STS"
            ], {
                H: "#forge:tools/hammers",
                S: `${sleeperItem}`,
                T: `${inputTrackItem}`
            });
            event.recipes.gtceu.assembler(`kubejs:${outputItem.replace(/^.*:/, "")}`)
                .itemInputs(
                    `2x ${sleeperItem}`,
                    `1x ${inputTrackItem}`
                )
                .itemOutputs(`${outputCount * 2}x ${outputItem}`)
                .duration(5)
                .EUt(16); // Low Voltage
        };

        /**
         * Creates a shaped crafting recipe and a Gregtech Cutter recipe, both to make narrow-gauge tracks.
         * @param {string} inputTrackItem A ResourceLocation of the track item used in the recipe, to be narrowed.
         * @param {string} outputItem A ResourceLocation of the narrow-gauge track item to be output by the recipes.
         * @param {string} sleeperOutputItem A ResourceLocation of the item representing the sleeper/tie of the track, to be (sometimes) recovered from the Gregtech Cutter recipe. Will typically be a slab.
         * @param {int} outputCount How many narrow-gauge track items that will be outputted by the recipes. Is multiplied by two for the assembler recipe, to incentivise automation.
         */
        let narrowTrackRecipes = function (inputTrackItem, outputItem, sleeperOutputItem, outputCount) {
            event.shaped(`${outputCount}x ${outputItem}`, [
                "   ",
                " H ",
                " T "
            ], {
                H: "#forge:tools/saws",
                T: `${inputTrackItem}`,
            });
            event.recipes.gtceu.cutter(`kubejs:${outputItem.replace(/^.*:/, "")}`)
                .itemInputs(`${inputTrackItem}`)
                .itemOutputs(`${outputCount}x ${outputItem}`)
                .chancedOutput(`${sleeperOutputItem}`, 5000, 0)
                .duration(5)
                .EUt(16); // Low Voltage
        };

        // Normal-gauge tracks
        normalTrackRecipes("#create:sleepers", "create:track", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:acacia_slab", "railways:track_acacia", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:birch_slab", "railways:track_birch", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:dark_oak_slab", "railways:track_dark_oak", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:jungle_slab", "railways:track_jungle", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:oak_slab", "railways:track_oak", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:spruce_slab", "railways:track_spruce", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:mangrove_slab", "railways:track_mangrove", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:warped_slab", "railways:track_warped", "minecraft:gold_nugget", 1);
        normalTrackRecipes("minecraft:crimson_slab", "railways:track_crimson", "minecraft:gold_nugget", 1);
        normalTrackRecipes("minecraft:blackstone_slab", "railways:track_blackstone", "minecraft:gold_nugget", 1);
        normalTrackRecipes("minecraft:end_stone_brick_slab", "railways:track_ender", "gtceu:enderium_nugget" /* just for shits and giggles */, 1);
        normalTrackRecipes("minecraft:glass_pane", "railways:track_tieless", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:phantom_membrane", "railways:track_phantom", "minecraft:iron_ingot", 16);
        normalTrackRecipes("minecraft:cherry_slab", "railways:track_cherry", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:bamboo", "railways:track_bamboo", "minecraft:iron_nugget", 1);
        normalTrackRecipes("minecraft:bamboo_slab", "railways:track_stripped_bamboo", "minecraft:iron_nugget", 1);
        normalTrackRecipes("create:metal_bracket", "railways:track_monorail", "#forge:plates/iron", 6)
        // Wide-gauge tracks
        wideTrackRecipes("create:track", "#create:sleepers", "railways:track_create_andesite_wide", 1);
        wideTrackRecipes("railways:track_acacia", "minecraft:acacia_slab", "railways:track_acacia_wide", 1);
        wideTrackRecipes("railways:track_birch", "minecraft:birch_slab", "railways:track_birch_wide", 1);
        wideTrackRecipes("railways:track_dark_oak", "minecraft:dark_oak_slab", "railways:track_dark_oak_wide", 1);
        wideTrackRecipes("railways:track_jungle", "minecraft:jungle_slab", "railways:track_jungle_wide", 1);
        wideTrackRecipes("railways:track_oak", "minecraft:oak_slab", "railways:track_oak_wide", 1);
        wideTrackRecipes("railways:track_spruce", "minecraft:spruce_slab", "railways:track_spruce_wide", 1);
        wideTrackRecipes("railways:track_mangrove", "minecraft:mangrove_slab", "railways:track_mangrove_wide", 1);
        wideTrackRecipes("railways:track_warped", "minecraft:warped_slab", "railways:track_warped_wide", 1);
        wideTrackRecipes("railways:track_crimson", "minecraft:crimson_slab", "railways:track_crimson_wide", 1);
        wideTrackRecipes("railways:track_blackstone", "minecraft:blackstone_slab", "railways:track_blackstone_wide", 1);
        wideTrackRecipes("railways:track_ender", "minecraft:end_stone_brick_slab", "railways:track_ender_wide", 1);
        wideTrackRecipes("railways:track_tieless", "minecraft:glass_pane", "railways:track_tieless_wide", 1);
        wideTrackRecipes("railways:track_cherry", "minecraft:cherry_slab", "railways:track_cherry_wide", 1);
        wideTrackRecipes("railways:track_bamboo", "minecraft:bamboo", "railways:track_bamboo_wide", 1);
        wideTrackRecipes("railways:track_stripped_bamboo", "minecraft:bamboo_slab", "railways:track_stripped_bamboo_wide", 1);
        // Narrow-gauge tracks
        narrowTrackRecipes("create:track", "railways:track_create_andesite_narrow", "minecraft:stone_slab", 1);
        narrowTrackRecipes("railways:track_acacia", "railways:track_acacia_narrow", "minecraft:acacia_slab", 1);
        narrowTrackRecipes("railways:track_birch", "railways:track_birch_narrow", "minecraft:birch_slab", 1);
        narrowTrackRecipes("railways:track_dark_oak", "railways:track_dark_oak_narrow", "minecraft:dark_oak_slab", 1);
        narrowTrackRecipes("railways:track_jungle", "railways:track_jungle_narrow", "minecraft:jungle_slab", 1);
        narrowTrackRecipes("railways:track_oak", "railways:track_oak_narrow", "minecraft:oak_slab", 1);
        narrowTrackRecipes("railways:track_spruce", "railways:track_spruce_narrow", "minecraft:spruce_slab", 1);
        narrowTrackRecipes("railways:track_mangrove", "railways:track_mangrove_narrow", "minecraft:mangrove_slab", 1);
        narrowTrackRecipes("railways:track_warped", "railways:track_warped_narrow", "minecraft:warped_slab", 1);
        narrowTrackRecipes("railways:track_crimson", "railways:track_crimson_narrow", "minecraft:crimson_slab", 1);
        narrowTrackRecipes("railways:track_blackstone", "railways:track_blackstone_narrow", "minecraft:blackstone_slab", 1);
        narrowTrackRecipes("railways:track_ender", "railways:track_ender_narrow", "minecraft:end_stone_brick_slab", 1);
        narrowTrackRecipes("railways:track_tieless", "railways:track_tieless_narrow", "minecraft:glass_pane", 1);
        narrowTrackRecipes("railways:track_cherry", "railways:track_cherry_narrow", "minecraft:cherry_slab", 1);
        narrowTrackRecipes("railways:track_bamboo", "railways:track_bamboo_narrow", "minecraft:bamboo", 1);
        narrowTrackRecipes("railways:track_stripped_bamboo", "railways:track_stripped_bamboo_narrow", "minecraft:bamboo_slab", 1);
        if (Platform.isLoaded("natures_spirit")) { // fuck it, we BoP again - nope, still NSP
            // Normal-gauge tracks
            normalTrackRecipes("natures_spirit:redwood_slab", "railways:track_natures_spirit_redwood", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:sugi_slab", "railways:track_natures_spirit_sugi", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:wisteria_slab", "railways:track_natures_spirit_wisteria", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:fir_slab", "railways:track_natures_spirit_fir", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:willow_slab", "railways:track_natures_spirit_willow", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:aspen_slab", "railways:track_natures_spirit_aspen", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:maple_slab", "railways:track_natures_spirit_maple", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:cypress_slab", "railways:track_natures_spirit_cypress", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:olive_slab", "railways:track_natures_spirit_olive", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:joshua_slab", "railways:track_natures_spirit_joshua", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:ghaf_slab", "railways:track_natures_spirit_ghaf", "minecraft:iron_nugget", 1);
            normalTrackRecipes("natures_spirit:palo_verde_slab", "railways:track_natures_spirit_palo_verde", "minecraft:iron_nugget", 1);
            // Wide-gauge tracks
            wideTrackRecipes("railways:track_natures_spirit_redwood", "natures_spirit:redwood_slab", "railways:track_natures_spirit_redwood_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_sugi", "natures_spirit:sugi_slab", "railways:track_natures_spirit_sugi_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_wisteria", "natures_spirit:wisteria_slab", "railways:track_natures_spirit_wisteria_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_fir", "natures_spirit:fir_slab", "railways:track_natures_spirit_fir_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_willow", "natures_spirit:willow_slab", "railways:track_natures_spirit_willow_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_aspen", "natures_spirit:aspen_slab", "railways:track_natures_spirit_aspen_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_maple", "natures_spirit:maple_slab", "railways:track_natures_spirit_maple_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_cypress", "natures_spirit:cypress_slab", "railways:track_natures_spirit_cypress_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_olive", "natures_spirit:olive_slab", "railways:track_natures_spirit_olive_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_joshua", "natures_spirit:joshua_slab", "railways:track_natures_spirit_joshua_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_ghaf", "natures_spirit:ghaf_slab", "railways:track_natures_spirit_ghaf_wide", 1);
            wideTrackRecipes("railways:track_natures_spirit_palo_verde", "natures_spirit:palo_verde_slab", "railways:track_natures_spirit_palo_verde_wide", 1);
            // Narrow-gauge tracks
            narrowTrackRecipes("railways:track_natures_spirit_redwood", "railways:track_natures_spirit_redwood_narrow", "natures_spirit:redwood_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_sugi", "railways:track_natures_spirit_sugi_narrow", "natures_spirit:sugi_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_wisteria", "railways:track_natures_spirit_wisteria_narrow", "natures_spirit:wisteria_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_fir", "railways:track_natures_spirit_fir_narrow", "natures_spirit:fir_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_willow", "railways:track_natures_spirit_willow_narrow", "natures_spirit:willow_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_aspen", "railways:track_natures_spirit_aspen_narrow", "natures_spirit:aspen_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_maple", "railways:track_natures_spirit_maple_narrow", "natures_spirit:maple_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_cypress", "railways:track_natures_spirit_cypress_narrow", "natures_spirit:cypress_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_olive", "railways:track_natures_spirit_olive_narrow", "natures_spirit:olive_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_joshua", "railways:track_natures_spirit_joshua_narrow", "natures_spirit:joshua_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_ghaf", "railways:track_natures_spirit_ghaf_narrow", "natures_spirit:ghaf_slab", 1);
            narrowTrackRecipes("railways:track_natures_spirit_palo_verde", "railways:track_natures_spirit_palo_verde_narrow", "natures_spirit:palo_verde_slab", 1);
        }
    });
    console.log("Create: Steam and Rails compat script successfully loaded!")
} else { console.log("Create: Steam and Rails was not found, skipping its compat scripts.") }
