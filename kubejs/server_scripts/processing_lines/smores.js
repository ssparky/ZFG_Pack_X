/**
 * Smoreline :tr:
 */

ServerEvents.recipes(event => {

    event.recipes.gtceu.extractor("kubejs:extract_milk")
        .notConsumable("minecraft:cow_spawn_egg")
        .outputFluids(Fluid.of("minecraft:milk", 5000))
        .EUt(32)
        .duration(1000)

    // Smores - TODO: replace NCN ingredients with appropriate versions. Don't forget that chocolate needs to not be a liquid!
    // event.shapeless("kubejs:smore_1", ["2x nuclearcraft:graham_cracker", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_1");
    // event.shapeless("kubejs:smore_2", ["2x kubejs:smore_1", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_2");
    // event.shapeless("kubejs:smore_4", ["2x kubejs:smore_2", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_4");
    // event.shapeless("kubejs:smore_8", ["2x kubejs:smore_4", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_8");
    // event.shapeless("kubejs:smore_16", ["2x kubejs:smore_8", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_16");
    // event.shapeless("kubejs:smore_32", ["2x kubejs:smore_16", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_32");
    // event.shapeless("kubejs:smore_64", ["2x kubejs:smore_32", "create:bar_of_chocolate", "nuclearcraft:marshmallow"]).id("kubejs:smore_64");
})
