basic.forever(function () {
    for (let Index = 0; Index <= 255; Index++) {
        basic.setLedColor(basic.rgbw(
        Index,
        255 - Index,
        0,
        0
        ))
        basic.pause(10)
    }
    for (let Index = 0; Index <= 255; Index++) {
        basic.setLedColor(basic.rgbw(
        255 - Index,
        0,
        Index,
        0
        ))
        basic.pause(10)
    }
    for (let Index = 0; Index <= 255; Index++) {
        basic.setLedColor(basic.rgbw(
        0,
        Index,
        255 - Index,
        0
        ))
        basic.pause(10)
    }
})
