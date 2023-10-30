basic.showString("phonk muzic")
basic.showLeds(`
    . # . # .
    . # . # .
    # . # . #
    . # . # .
    . # . # .
    `)
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("C5 B A B C5 B A B ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("F A C5 B F A G C5 ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
