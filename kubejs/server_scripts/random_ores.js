ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('kubejs:centrifuge_citrine')
        .itemInputs('1x gtceu:citrine_dust')
        .itemOutputs('1x gtceu:silicon_dioxide_dust')
        .EUt(32)
        .duration(200)
})