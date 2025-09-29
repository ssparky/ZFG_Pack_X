/**
 * Singleblock registry.
 * This is the place where the Atomic Reconstructor machine/recipe type is defined
 * and custom Parallel Control hatches.
 */
const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine")

// Singleblock recipe types
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("atomic_reconstruction")
        .category("reconstruction")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setProgressBar(MoniGuiTextures.PROGRESS_BAR_RECONSTRUCTION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
    
    event.create("soul_binding")
        .category("binding")
        .setEUIO("in")
        .setMaxIOSize(2, 2, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setProgressBar(MoniGuiTextures.PROGRESS_BAR_XP, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.CENTRIFUGE)

    event.create("polymerization")
        .category("polymerizing")
        .setEUIO("in")
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setProgressBar(MoniGuiTextures.PROGRESS_BAR_RECONSTRUCTION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// Singleblock machines
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("atomic_reconstructor", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Atomic Reconstructor`)
                .recipeType("atomic_reconstruction")
                .workableTieredHullModel("gtceu:block/machines/reconstructor")
        )

    event.create("soul_binder", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Soul Binder`)
                .recipeType("soul_binding")
                .workableTieredHullModel("gtceu:block/machines/soul_binder")
        )

    event.create("polymerization_chamber", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Polymerization Chamber`)
                .recipeType("polymerization")
                .workableTieredHullModel("gtceu:block/machines/polymerizer")
        )
})


// Giga, Omega Parallel Hatches
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("uhv_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UHV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk9"))
        )

    event.create("uev_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UEV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk10"))
        )
})
