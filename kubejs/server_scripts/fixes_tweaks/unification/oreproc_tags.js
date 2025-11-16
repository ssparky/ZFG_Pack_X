/**
 * Tags to make oreProc easier
 */
ServerEvents.tags("item", event => {
    // Water
    const washWater = [
        
    ]

    // SPF
    const washSPF = []

    // Mercury
    const washMercury = []

    // Nitric acid
    const washNitric = []

    // HBr
    const washBromic = []

    // ...

    // Assign tags
    washWater.forEach(mineral => {
        event.add("gtceu:washed_in_water", `gtceu:crushed_${mineral}_ore`)
    })
    washSPF.forEach(mineral => {
        event.add("gtceu:washed_in_sodium_persulfate", `gtceu:crushed_${mineral}_ore`)
    })
    washMercury.forEach(mineral => {
        event.add("gtceu:washed_in_mercury", `gtceu:crushed_${mineral}_ore`)
    })
    washNitric.forEach(mineral => {
        event.add("gtceu:washed_in_nitric_acid", `gtceu:crushed_${mineral}_ore`)
    })
    washBromic.forEach(mineral => {
        event.add("gtceu:washed_in_hydrobromic_acid", `gtceu:crushed_${mineral}_ore`)
    })
})