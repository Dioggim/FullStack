// Desestruturação de Arrays


let spaceships = ["Colossus" , "Ártemis" , "Fênix"]

//ambos os modelos usam a unica array  - spacechips - como referência.
//modelo - 1

let nave1 = spaceships[0]
let nave2 = spaceships[1]

console.log( nave1 , nave2 )

//modelo - 2

let [ space1, space2, space3, space4 ] = spaceships

console.log( space1, space2, space3, space4 )