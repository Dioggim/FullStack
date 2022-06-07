function slowDown (velocity,printer){
    let deceleration = 20

    while (velocity > 0){
        printer (velocity)
        velocity -= deceleration
    }
    alert ("Nave parada. As comportas podem ser abertas.")
}

let shipVelocity = 150

slowDown (shipVelocity, function (velocity){
    console.log ("velocidade atual: " + velocity)
})

