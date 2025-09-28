/**
 * Makes you mine glass faster using a pickaxe
 */

ServerEvents.tags("block", event => {
    event.add("minecraft:mineable/pickaxe", ["#forge:glass", "#forge:glass_panes"]);
    event.add("minecraft:mineable/pickaxe", /xtonesreworked:glaxx_block_/);
    event.add("minecraft:mineable/pickaxe", ["minecraft:glowstone", "minecraft:redstone_lamp", "minecraft:sea_lantern"]);
})
