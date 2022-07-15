// Desestruturação de Objetos

let spaceship = {
    name: "Colossus" , crewQuantity: 10, isHitched: false
}

//modelo - 1 
let NspaceshipName = spaceship.name
let NcrewQuantity = spaceship.crewQuantity

console.log (NspaceshipName, NcrewQuantity)

//modelo - 2
let {name: NomeDaEspacoNave , crewQuantity: QuatidadeTripulacao } = spaceship

console.log (NomeDaEspacoNave, QuatidadeTripulacao)

//modelo - 3
//se a variavel tiver o mesmo nome da propriedade posso fazer conforme abaixo:
let { name: spaceName , crewQuantity } = spaceship

console.log (spaceName, crewQuantity)




