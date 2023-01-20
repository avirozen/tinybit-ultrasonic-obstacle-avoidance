let dsitance = 0
basic.forever(function () {
    dsitance = Tinybit.Ultrasonic_Car()
    if (dsitance < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 100)
        basic.pause(200)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
    }
})
