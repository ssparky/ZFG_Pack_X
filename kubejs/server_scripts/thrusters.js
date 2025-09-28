// Replacement recipes for the various thrusters
ServerEvents.recipes(event => {
    const thrusters = [
        ["conductive_iron", "lv_electric_motor", "gtceu:copper_ring", "gtceu:soul_infused_rod", "gtceu:copper_rotor", "gtceu:conductive_alloy_single_wire", GTValues.LV, 200],
        ["electrical_steel", "mv_electric_motor", "gtceu:aluminium_ring", "gtceu:electrical_steel_rod", "gtceu:iron_rotor", "gtceu:blue_alloy_single_wire", GTValues.MV, 200],
        ["energetic", "hv_electric_motor", "gtceu:gold_ring", "gtceu:energetic_alloy_rod", "gtceu:bronze_rotor", "gtceu:energetic_alloy_single_wire", GTValues.HV, 200],
        ["vibrant", "ev_electric_motor", "gtceu:beryllium_oxide_ring", "gtceu:vibrant_alloy_rod", "gtceu:chromium_rotor", "gtceu:vibrant_alloy_single_wire", GTValues.EV, 200],
        ["leadstone", "lv_electric_motor", "gtceu:tin_ring", "gtceu:lead_rod", "gtceu:lead_rotor", "gtceu:lead_single_wire", GTValues.LV, 200],
        ["hardened", "mv_electric_motor", "gtceu:steel_ring", "gtceu:invar_rod", "gtceu:steel_rotor", "gtceu:kanthal_single_wire", GTValues.MV, 200],
        ["reinforced", "hv_electric_motor", "gtceu:electrum_ring", "gtceu:electrum_rod", "gtceu:stainless_steel_rotor", "gtceu:electrum_single_wire", GTValues.HV, 200],
        ["resonant", "ev_electric_motor", "gtceu:osmiridium_ring", "gtceu:enderium_rod", "gtceu:osmiridium_rotor", "gtceu:enderium_single_wire", GTValues.EV, 200],
    ]

    for (const [id, motor, ring, rod, rotor, wire, tier, duration] of thrusters) {
        event.recipes.gtceu.assembler(`kubejs:${id}_thruster`)
            .itemInputs(`1x gtceu:${motor}`, `2x ${ring}`, `1x ${rod}`, `1x ${rotor}`, `2x ${wire}`)
            .itemOutputs(`1x kubejs:${id}_thruster`)
            .duration(duration)
            .EUt(GTValues.VA[tier])
    }
})