let music_list = {
    max_verstappen: 171,
    placing_blocks: 38,
    mining_coal: 126
};

StartupEvents.registry('sound_event', e => {
    Object.keys(music_list).forEach(key => {
        e.create(`music.${key}`)
    })
})

StartupEvents.registry('item', e => {
    Object.keys(music_list).forEach((key) => {
        let value = music_list[key]
            e.create(`music_disc_${key}`, "music_disc")
                .song(`kubejs:music.${key}`, value)
                .displayName("Music Disc")
                .texture(`kubejs:item/music_discs/music_disc_${key}`)
                .tag("music_discs")
                .tag("creeper_drop_music_discs")
                .translationKey(`item.kubejs.music_disc_${key}`)
    })
})