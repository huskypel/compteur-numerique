input.onButtonPressed(Button.A, function () {
    nombre_de_personne += 1
})
input.onButtonPressed(Button.AB, function () {
    nombre_de_personne = 0
})
input.onButtonPressed(Button.B, function () {
    nombre_de_personne += -1
})
let nombre_de_personne = 0
nombre_de_personne = 0
basic.forever(function () {
    if (0 > nombre_de_personne) {
        nombre_de_personne = 0
    }
})
basic.forever(function () {
    basic.showString("" + (nombre_de_personne))
    if (nombre_de_personne == 10) {
        basic.showString("attention!!!")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
