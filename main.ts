input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB_RGB)
strip.setBrightness(50)
basic.forever(function () {
    for (let index = 0; index < 12; index++) {
        strip.setPixelColor(randint(0, 29), neopixel.colors(NeoPixelColors.White))
        strip.show()
    }
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
