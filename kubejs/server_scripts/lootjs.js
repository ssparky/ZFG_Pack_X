// This file is for anything lootjs related

LootJS.modifiers((event) => {
    event.removeGlobalModifier("evenbetternether:diamond_pyrite_template_loot_injection")
    event.removeGlobalModifier("evenbetternether:diamond_pyrite_template_loot_injection_2")
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:pyrite_leggings");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:pyrite_chestplate");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:ruby_sword");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:pyrite_ingot");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:nether_ruby");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:pyrite_boots");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:diamond_pyrite_upgrade_smithing_template");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:ruby_armor_chestplate");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:ruby_axe");
    event.addBlockLootModifier("evenbetternether:chests/nether_dungeon_loot").removeLoot("evenbetternether:ruby_armor_leggings");
})