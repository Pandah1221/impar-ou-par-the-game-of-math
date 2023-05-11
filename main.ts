input.onButtonPressed(Button.A, function () {
    if (Numero == 0) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 2) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 4) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 6) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 8) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 1) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 3) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 5) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 7) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 9) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    basic.pause(200)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (Numero == 1) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 3) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 5) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 7) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 9) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    if (Numero == 0) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 2) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 4) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 6) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (Numero == 8) {
        basic.showNumber(Numero)
        basic.pause(24)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    basic.pause(200)
    basic.clearScreen()
    control.reset()
})
let Numero = 0
Numero += randint(0, 9)
