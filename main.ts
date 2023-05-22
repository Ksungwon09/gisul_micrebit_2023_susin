function 쫘회전 () {
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 300)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(500)
}
function 고속쫘회전2 () {
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 800)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    control.waitMicros(500)
}
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        젅니()
        basic.showNumber(1)
    } else if (receivedNumber == 1) {
        훚니()
        basic.showNumber(2)
    } else if (receivedNumber == 2) {
        젓지()
        basic.showNumber(3)
    } else if (receivedNumber == 3) {
        웃회전()
        basic.showNumber(4)
    } else if (receivedNumber == 4) {
        쫘회전()
        basic.showNumber(5)
    } else if (receivedNumber == 5) {
        고속웃회전()
        basic.showNumber(6)
    } else if (receivedNumber == 6) {
        고속쫘회전2()
        basic.showNumber(7)
    }
})
function 훚니 () {
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P2, 800)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    control.waitMicros(500)
}
function 웃회전 () {
    pins.analogWritePin(AnalogPin.P1, 300)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 800)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(500)
}
function 젅니 () {
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 800)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(500)
}
function 고속웃회전 () {
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P2, 800)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(500)
}
function 젓지 () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(500)
}
radio.setGroup(122)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
	
})
