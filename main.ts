input.onButtonPressed(Button.A, function () {
    timer = 0
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Tealy")
    timer = 0
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
let timer = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 15) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            `)
    }
    if (timer == 30) {
        while (true) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                # . . . #
                # # # # #
                `)
        }
    }
})
