/** THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE */

ServerEvents.recipes(event => {
    // Mob Heads
    event.shaped("minecraft:skeleton_skull", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "minecraft:bone",
        B: "kubejs:solidified_experience"
    })

    event.shaped("minecraft:wither_skeleton_skull", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "kubejs:wither_bone",
        B: "kubejs:solidified_experience"
    })

    event.shaped("minecraft:zombie_head", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "minecraft:rotten_flesh",
        B: "minecraft:skeleton_skull"
    })

    event.shaped("minecraft:creeper_head", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "minecraft:gunpowder",
        B: "minecraft:skeleton_skull"
    })

    event.shaped("minecraft:dragon_head", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "kubejs:ender_dragon_scale",
        B: "kubejs:solidified_experience"
    })

    // event.shaped("enderio:enderman_head", [
    //     " A ",
    //     "ABA",
    //     " A "
    // ], {
    //     A: "minecraft:ender_pearl",
    //     B: "minecraft:skeleton_skull"
    // })

})
