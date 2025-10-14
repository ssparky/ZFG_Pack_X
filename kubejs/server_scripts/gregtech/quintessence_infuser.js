/**
 * Soul Binder single/multiblock
 */

ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table("gtceu:quintessence_infuser", [
        "SCFCS",
        "CALAC",
        "GLBLG",
        "CALAC",
        "SCFCS",
    ], {
        S: "gtceu:zpm_sensor",
        C: "gtceu:double_dark_soularium_plate",
        F: "gtceu:luv_field_generator",
        A: "kubejs:dark_soularium_casing",
        L: "#gtceu:circuits/zpm",
        G: "gtceu:zpm_field_generator",
        B: "gtceu:luv_soul_binder"
    }).id("kubejs:shaped/quintessence_infuser")

    // Warding Dark Soularium Casing Recipe

    event.recipes.gtceu.assembler("kubejs:dark_soularium_casing")
        .itemInputs("6x gtceu:dark_soularium_plate", "1x gtceu:tungsten_frame")
        .itemOutputs("2x kubejs:dark_soularium_casing")
        .duration(50)
        .EUt(16)

    // TODO: soul binder singleblock recipes
    const binderrecipe = [
        ["lv", "soularium"],
        ["mv", "soularium"],
        ["hv", "soularium"],
        ["ev", "soul_infused"],
        ["iv", "soul_infused"],
        ["luv", "soul_infused"],
        ["zpm", "dark_soularium"],
        ["uv", "dark_soularium"],
        ["uhv", "dark_soularium"],
        ["uev", "dark_soularium"],
        ["uiv", "dark_soularium"],
        ["uxv", "dark_soularium"],
        ["opv", "dark_soularium"],
    ]
    binderrecipe.forEach(([tier, plate]) => {
        event.shaped(`gtceu:${tier}_soul_binder`, [
            "PMP",
            "EHE",
            "CPC"
        ], {
            P: `gtceu:double_${plate}_plate`,
            E: `gtceu:${tier}_electric_pump`,
            H: `gtceu:${tier}_machine_hull`,
            C: `#gtceu:circuits/${tier}`,
            M: `gtceu:${tier}_emitter`
        }).id(`kubejs:shaped/${tier}_soul_binder`)
    })

})
