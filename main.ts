input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let Puntuacion = 0
loops.everyInterval(1000, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
    }
})
