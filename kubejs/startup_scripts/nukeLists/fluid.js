// priority: 900
/*
The fluidNukeList is used to list all IDs of fluids that should be removed from the game, or "nuked".
While this makes it far more difficult to access the fluids and effectively obliterates them in most cases,
it doesn't remove them entirely and does not guarantee that they are unobtainable, unusable, or hidden in JEI/EMI.

If you seek to hide a fluid but not remove it, use KubeJS/client_scripts/JEI.js.
If you seek to remove a recipe but not hide any fluids, use the relevant file in KubeJS/server_scripts.
*/
global.fluidNukeList = [
    // Ad Astra
    "ad_astra:oxygen",
    "ad_astra:hydrogen",
    "ad_astra:oil",
    "ad_astra:fuel",
    "ad_astra:cryo_fuel",

    // GregTech Modern
    "gtceu:molten_kanthal",
    "gtceu:iron_ii_chloride",   // Removing the FluidProperty causes errors in GT's hard-coded recipes

    // Sophisticated Core
    "sophisticatedcore:xp_still",
    "create_enchantment_industry:experience",
    "create_enchantment_industry:flowing_experience",

]

