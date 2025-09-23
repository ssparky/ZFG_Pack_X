/**
 * Recipes for Wither Bone Recycling.
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator("macerate_wither_bone")
        .itemInputs("kubejs:wither_bone")
        .itemOutputs("2x minecraft:bedrock", "3x minecraft:bone_meal") // TODO: was withering powder
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        .category("gtceu:macerator_recycling")
    event.recipes.gtceu.macerator("macerate_wither_rose")
        .itemInputs("minecraft:wither_rose")
        .chancedOutput("minecraft:bedrock", 200, 0) // TODO: was withering powder
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])
        .category("gtceu:macerator_recycling")

    event.recipes.gtceu.centrifuge("centrifuge_withering_powder")
        .itemInputs("8x minecraft:bedrock") // TODO: was withering powder
        .inputFluids("gtceu:formic_acid 2500")
        .itemOutputs("4x gtceu:coal_dust", "3x gtceu:stolzite_dust", "gtceu:arsenic_trioxide_dust")
        .chancedOutput("1x gtceu:biphenyl_dust", 5000, 0)
        .duration(22 * 20)
        .EUt(GTValues.VA[GTValues.HV])
})
