let spaceShipName = prompt("Digite o nome da Espaço Nave: ")
let i = spaceShipName.length - 1
let newSpaceShip = ""

for(i = spaceShipName.length - 1; i > -1; i--){
    if(spaceShipName[i] == "e"){
        
        break
    }else{
        newSpaceShip += spaceShipName[i]
        console.log(newSpaceShip)
    }
}
alert ("O nome da nave é:" + spaceShipName + "\nO novo nome é: " + newSpaceShip)