input.onButtonPressed(Button.A, function () {
    BASS = pins.analogReadPin(AnalogPin.P1)
})
function ValueCallBack () {
    volume = pins.analogReadPin(AnalogPin.P1) / 4
    music.setVolume(volume)
}
input.onButtonPressed(Button.B, function () {
    BASS = 0
})
let volume = 0
let BASS = 0
BASS = pins.analogReadPin(AnalogPin.P1)
volume = 150
basic.forever(function () {
    if (volume >= 200) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (volume >= 160) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (volume >= 120) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (volume >= 80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (volume >= 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (volume >= 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
basic.forever(function () {
    ValueCallBack()
})
basic.forever(function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Double))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Double))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, 0)
    music.playTone(294, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Breve))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(50)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(349, music.beat(BeatFraction.Half))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(294, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(294, music.beat(BeatFraction.Double))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(392, music.beat(BeatFraction.Double))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Double))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Double))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(294, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Breve))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(330, music.beat(BeatFraction.Half))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(50)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(262, music.beat(BeatFraction.Double))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(50)
    pins.analogWritePin(AnalogPin.P2, BASS)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(5000)
})
