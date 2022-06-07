let shipName = prompt ("Qual o nome da nave?")
let choseDobra = prompt ("Deseja entrar na dobra?\n1 - SIM\n2 - Não")
let nDobras = 0

while (choseDobra == 1){
    nDobras += 1
    choseDobra = prompt ("Você deseja realizar nova dobra espacial?\n1 - SIM\n2 - Não")
}
alert ("Sua nave " + shipName + " realizou " + nDobras+ " Dobras !!!")




