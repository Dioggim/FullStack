class captain {
    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new captain(captainName, captainAge, captainFlightHours)
    }
}

let Spaceship = new spaceship("ITA", 13, "Willzinho", 27, 5000)
console.log(Spaceship)


let array = []
array.push(Spaceship)

alert (Array)