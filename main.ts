function 쫘회전 () {
	
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        젅니()
    } else if (receivedNumber == 1) {
        훚니()
    } else if (receivedNumber == 2) {
        쫘회전()
    } else if (receivedNumber == 3) {
        웃회전()
    }
})
function 훚니 () {
	
}
function 웃회전 () {
	
}
function 젅니 () {
	
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
