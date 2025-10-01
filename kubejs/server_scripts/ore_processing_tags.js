/**
    Ore processing related ore tags for easier tag bus filtering.
*/

// TODO: add any other relevant ores that should be tagged (after giving them appropriate processing recipes, of course!)
ServerEvents.tags("item", (event) => {
    event.add("gtceu:purified_platline_ores", ["gtceu:purified_chalcopyrite_ore", "gtceu:purified_cooperite_ore", "gtceu:purified_pentlandite_ore", "gtceu:purified_bornite_ore", "gtceu:purified_chalcocite_ore", "gtceu:purified_tetrahedrite_ore"]);
    event.add("gtceu:purified_indium_ores", ["gtceu:purified_sphalerite_ore", "gtceu:purified_galena_ore", "gtceu:purified_argentite_ore"]);
    event.add("gtceu:crushed_earthline_ores", ["gtceu:crushed_monazite_ore", "gtceu:crushed_fergusonite_ore", "gtceu:crushed_bazzite_ore", "gtceu:crushed_bastnasite_ore", "gtceu:crushed_kolbeckite_ore", "gtceu:crushed_wakefieldite_ore", "gtceu:crushed_xenotime_ore", "gtceu:crushed_thortveitite_ore", "gtceu:crushed_gadolinite_ore", "gtceu:crushed_samarskite-yb_ore"]);
});