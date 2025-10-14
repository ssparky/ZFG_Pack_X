ServerEvents.recipes(event => {
    const lapi_gems = [
        ["minecraft", "diamond", (0.75*2048), 240],
        ["minecraft", "emerald", (0.70*2048), 220],
        ["gtceu", "ruby", (0.65*2048), 220],
        ["gtceu", "sapphire", (0.5*2048), 220],
        ["gtceu", "green_sapphire", (0.55*2048), 220],
        ["gtceu", "moissanite", (0.85*2048), 220],
        ["gtceu", "taaffeite", (0.95*2048), 220],
        ["gtceu", "musgravite", (1.05*2048), 220],
    ]

    for (const [id, gem, power, dur] of lapi_gems) {
        var gem2 = (id === "gtceu") ? `${gem}_gem` : gem
        event.recipes.gtceu.lapidary_dynamo(`${gem}`)
            .itemInputs(`${id}:${gem2}`)
            .EUt(-power)
            .duration(dur)
        event.recipes.gtceu.lapidary_dynamo(`${gem}_flawless`)
            .itemInputs(`gtceu:flawless_${gem}_gem`)
            .EUt(-power)
            .duration(dur*2)
        event.recipes.gtceu.lapidary_dynamo(`${gem}_exquisite`)
            .itemInputs(`gtceu:exquisite_${gem}_gem`)
            .EUt(-power)
            .duration(dur*4)
    }
    
    // Controller
    event.shaped("gtceu:lapidary_dynamo", [
        "ECE",
        "BCB",
        "ADA"
    ], {
        A: "#gtceu:circuits/hv",
        B: "gtceu:vibrant_alloy_rod",
        C: "gtceu:cobalt_brass_gear",
        D: "gtceu:hv_machine_hull",
        E: "gtceu:black_steel_octal_wire"
    })
})