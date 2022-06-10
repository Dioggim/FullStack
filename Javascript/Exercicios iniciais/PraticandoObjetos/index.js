
let chosenOption = true

let newVelocity = 0

let spaceShipVelocity = Number(0)
// Dados da espaçonave
const spaceShipData = {
    maxVelocity: Number(200)
}
spaceShipData.name = prompt("Digite o nome da espaço-nave: ")
spaceShipData.type = prompt("Digite o tipo da espaço-nave: ")

//Aceleração
function speedUp() {
    newVelocity = Number(prompt("Quanto gostaria de acelerar?"))
    spaceShipVelocity += newVelocity
    if (spaceShipVelocity > spaceShipData.maxVelocity) {
        alert("A velocidade não pode ultrapassar a velocidade máxima de: " + spaceShipData.maxVelocity)
        spaceShipVelocity -= newVelocity
        alert("A velocidade atual é de : " + spaceShipVelocity)

    } else {

        alert("A velocidade atual é de : " + spaceShipVelocity)
    }
}

//Parar a nave
function stopShip() {
    alert("Nave: " + spaceShipData.name + "\nTipo: " + spaceShipData.type + "\nEstava na velocidade: " + spaceShipVelocity + " e vai parar.")
    chosenOption = false
}
//Escolha sobre continuar ou nao no painel.
function chosen() {
    chosenOption = confirm("voce gostaria de continuar?")
}

//menu
function showMenu() {
    while (chosenOption == true) {
        let option = prompt("Voce quer: \n1 - Acelerar \n2 - Parar a nave?")
        switch (option) {
            //Acelerar a espaçonave
            case "1":
                speedUp()
                chosen()
                break
            //parar a espaçonave
            case "2":
                stopShip()
                break
            default:
                alert("Você nao digitou uma opção válida!")
                chosen()
                break
        }

    }

}

showMenu()
console.log(spaceShipData)
