/**
 * Anything that is an extended crafting recipe comes here
 ! DO NOT PUT CREATIVE STUFF, PUT IT ON END_GAME.js
 ? For end game intermediates (ingots plates..) that uses ectendedcrafting, put it here
 */

ServerEvents.recipes(event => {
    // Angel Ring
    event.recipes.remove({ id: "better_angel_ring:angel_ring" })
    event.recipes.extendedcrafting.shaped_table("better_angel_ring:angel_ring", [
        " ACA ",
        "AEBHA",
        "CF IC",
        "AGDJA",
        " ACA "
    ], {
        A: "gtceu:rose_gold_ingot",
        B: "gtceu:advanced_nanomuscle_chestplate",
        C: "gtceu:gravitation_engine_unit",
        D: "gtceu:advanced_quarktech_chestplate",
        E: "kubejs:leadstone_thruster",
        F: "kubejs:reinforced_thruster",
        G: "kubejs:fluxed_thruster",
        H: "kubejs:conductive_iron_thruster",
        I: "kubejs:energetic_thruster",
        J: "kubejs:dark_soularium_thruster"

    }).id("kubejs:extended/angel_ring")
})
