const naves = [
    ["Fenix",8,true],
    ["Golias",10,true],
    ["Helmet", 5, false],
    ["Elemental",3,true],
    ["Darwin",15,false], 
  ]

let crewGreaterThan9 = naves.filter(nave => {
    return nave[1] > 9
}).map(nave => {
    return nave[0]
})

let onGoingHitchPlataform = naves.findIndex (nave => {
    return nave[2] == false
})

let upercaseShip = naves.map (nave => {
    return nave[0].toUpperCase()
})

let message = "Naves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ") 
message += "\nPlataforma com processo de engate: " + (onGoingHitchPlataform +1)
message += "\nNaves destacadas: " + upercaseShip.join(", ")
alert (message)


