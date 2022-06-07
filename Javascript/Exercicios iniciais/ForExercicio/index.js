let spaceShipName = prompt("Qual o nome da sua espaço-nave?")
let chosenChart = prompt("Qual letra voce gostaria de substituir?")
let chosenLetter = prompt("Por qual letra gostaria de substituir?")
let newSpaceShip = ""

for(i = 0; i < spaceShipName.length; i++){
    if(spaceShipName[i] == chosenChart){
        newSpaceShip += chosenLetter
    }else{
    newSpaceShip += spaceShipName[i]
    }
}
alert ("O novo nome da espaçonave é: " + newSpaceShip +".")
