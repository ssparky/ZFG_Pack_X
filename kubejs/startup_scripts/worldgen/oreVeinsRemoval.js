/**
 * Remove Ore generation from Nuclearcraft: Neoteric and Ad Astra
 * Ad Astra is weird and generates it on multiple steps, so it requires the additional events
 * Thanks Ghosti for figuring this one out
 */
WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "ad_astra:moon_iron_ore",
        "ad_astra:deepslate_desh_ore",
        "ad_astra:moon_desh_ore",
        "ad_astra:moon_cheese_ore",
        "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:glacio_ice_shard_ore",
        "ad_astra:glacio_coal_ore",
        "ad_astra:glacio_copper_ore",
        "ad_astra:glacio_iron_ore",
        "ad_astra:glacio_lapis_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_gold_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_calorite_ore",
        "natures_spirit:ore_coal",
        "natures_spirit:ore_coal_buried",
        "natures_spirit:ore_coal_lower",
        "natures_spirit:ore_coal_upper",
        "natures_spirit:ore_copper",
        "natures_spirit:ore_copper_small",
        "natures_spirit:ore_copper_large",
        "natures_spirit:ore_diamond",
        "natures_spirit:ore_diamond_small",
        "natures_spirit:ore_diamond_large",
        "natures_spirit:ore_diamond_buried",
        "natures_spirit:ore_emerald",
        "natures_spirit:ore_gold",
        "natures_spirit:ore_gold_buried",
        "natures_spirit:ore_gold_extra",
        "natures_spirit:ore_gold_lower",
        "natures_spirit:ore_iron",
        "natures_spirit:ore_iron_middle",
        "natures_spirit:ore_iron_small",
        "natures_spirit:ore_iron_large",
        "natures_spirit:ore_iron_upper",
        "natures_spirit:ore_lapis",
        "natures_spirit:ore_lapis_buried",
        "natures_spirit:ore_redstone",
        "natures_spirit:ore_redstone_extra",
        "natures_spirit:ore_redstone_lower"
    ])
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore",
        ]
    })
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:moon_iron_ore",
            "ad_astra:deepslate_desh_ore",
            "ad_astra:moon_desh_ore",
            "ad_astra:moon_cheese_ore",
            "ad_astra:moon_ice_shard_ore",
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore"
        ]
    })
})
