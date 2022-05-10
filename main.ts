namespace modules {
    /**
     * The Kitronik Zip Halo LEDs
     */
    //% fixedInstance whenUsed block="kitronik zip halo leds"
    export const kitronikZipHaloLeds = new LedClient("zip halo leds?dev=self&num_pixels=24&variant=Ring")
}

namespace servers {
    function start() {
        pins.analogSetPitchPin(AnalogPin.P1)
        return [
            new jacdac.LedServer(24,
                jacdac.LedPixelLayout.RgbGrb,
                (pixels, brightness) => light.sendWS2812BufferWithBrightness(pixels, DigitalPin.P0, brightness), {
                variant: jacdac.LedVariant.Ring
            }
            )
        ]
    }
    start()
}