/**
 * Makes you mine glass faster using a pickaxe // TODO: add other blocks to this like glowstone
 */

ServerEvents.tags("block", event => {
    event.add("minecraft:mineable/pickaxe", ["#forge:glass", "#forge:glass_panes"]);
    event.add("minecraft:mineable/pickaxe", /xtonesreworked:glaxx_block_/);
})
