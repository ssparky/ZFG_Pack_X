/**
 * Remove/hide useless or overlapping smelting, blasting recipes for ores
 */

ServerEvents.recipes(event => {
    // Remove overlapping ore blocks to ingot/dust recipes

    event.remove({ id: /^minecraft:\w+_from_smelting_[\w_]+_ore$/ })
    event.remove({ id: /^minecraft:\w+_from_blasting_[\w_]+_ore$/ })

})
