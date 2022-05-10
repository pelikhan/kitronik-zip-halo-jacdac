let k = 0
forever(() => {
    const pixels = modules.kitronikZipHaloLeds.pixels()
    if (!pixels) {
        pause(100)
    } else {
        k = (k + 1) % modules.kitronikZipHaloLeds.numPixels()
        for(let i = 0; i < pixels.length; ++i)
            pixels[i] = pixels[i] >> 1
        pixels[k * 3] = 0xff
        pixels[k * 3 + 1] = 0
        pixels[k * 3 + 2] = 0
        modules.kitronikZipHaloLeds.setPixels(pixels)
        pause(100)
    }
})