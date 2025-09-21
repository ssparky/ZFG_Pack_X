/** /kjs inventory will be your friend. */

JEIEvents.hideItems(event => {
    const gtMachines = ["extractor", "macerator", "compressor", "forge_hammer", "furnace", "alloy_smelter"]

    // Sophisticated compacting upgrades
    event.hide(/^sophisticated.*(compacting|compression)_upgrade$/)
    event.hide(/^functionalstorage:.*compacting.*_drawer$/)

})
