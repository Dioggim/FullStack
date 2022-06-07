let spaceShipName = prompt("Digite o nome da Nave: ")

let velocity = 0

let chosenOption = 0

acceleration = 5

function speedUp(velocity, acceleration) {
    velocity += acceleration
}
function speedDown(velocity, acceleration) {
    velocity -= acceleration
}



while (true) {

    chosenOption = prompt("Escolha uma das opções: \n1 - Acelerar a nave em 5 km/s.\n2 - Desacelarar em 5 km/s.\n3 - Imprimir dados de bordo\n4 - Sair do programa")

    if (chosenOption == 1) {
        velocity += acceleration
        console.log(velocity)
    } else if (chosenOption == 2) {
        if (velocity - 5 >= 0) {
            velocity -= acceleration
        } else {
            alert("Você nao pode colocar a velocidade abaixo de 0 zero, escolha outra opção")
        }
    } else if (chosenOption == 3) {
        alert("Nome da Nave: " + spaceShipName + "\nVelocidade: " + velocity + "km/s")
    } else if (chosenOption == 4) {
        break
    } else {
        alert("Opção incorreta, escolha uma opção válida.")
    }

}