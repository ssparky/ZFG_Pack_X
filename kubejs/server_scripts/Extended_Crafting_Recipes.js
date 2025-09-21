/**
 * Anything that is an extended crafting recipe comes here
 ! DO NOT PUT CREATIVE STUFF, PUT IT ON END_GAME.js
 ? For end game intermediates (ingots plates..) that uses ectendedcrafting, put it here
 */

ServerEvents.recipes(event => {
    // Angel Ring
    event.recipes.remove({ id: "better_angel_ring:angel_ring" })
    event.recipes.extendedcrafting.shaped_table("better_angel_ring:angel_ring", [
        " AAA ",
        "A B A",
        "AC CA",
        "A B A",
        " AAA "
    ], {
        A: "gtceu:rose_gold_ingot",
        B: "minecraft:bedrock",
        C: "minecraft:bedrock", // TODO: change to appropriate ingredients, used to be jetpacks.
    }).id("kubejs:extended/angel_ring")
})
