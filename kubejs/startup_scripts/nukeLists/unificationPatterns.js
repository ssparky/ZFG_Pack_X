// priority: 900
/**
 * This file defines RegEx patterns that match with large quantities of certain items.
 *
 * These items are "removed" in KubeJS/client_scripts/nukelists.js and KubeJS/server_scripts/nukelists.js
 * in a fashion similar to itemNukeList.
 */

/**
 * All gears, blocks, ingots, nuggets, etc. we don't want to remove
 */
global.unificationExcludedItems = [
    "extendedcrafting:crystaltine_block",
    "extendedcrafting:crystaltine_ingot",
    "extendedcrafting:crystaltine_nugget",
    "extendedcrafting:luminessence_block",
];

/**
 * A RegEx pattern that matches with all gears, blocks, ingots, nuggets, and other often-unified items
 * from NuclearCraft, Thermal Series, EnderIO, Ad Astra, and ExtendedCrafting.
 */
global.unificationPattern = new RegExp(`^(?!(${global.unificationExcludedItems.join("|")})).*(ad_astra|extendedcrafting):((powdered_|raw_).*|.*(_block|_plate|_ingot|_nugget|_gear|_dust|_rod|_gem|_ore))`, "i")


