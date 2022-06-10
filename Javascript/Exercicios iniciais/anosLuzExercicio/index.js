let spaceDistance = prompt ("Digite a distancia em anos-luz que você gostaria de converter: ")

let unitDistance = prompt(" Digite a opção para a unidade você gostaria de converter? \n1 - Parsec (PC)\n2 - Unidade aAstronômica (UA)\n3 - Quilômetros (KM) ")

let persec = spaceDistance * 0.306601
let uAstronomica = spaceDistance * 0.306601
let km = spaceDistance * 9.5 * Math.pow (10,12)

switch(unitDistance){
    case "1":
        alert ("A distância em Anos luz escolhida é: " + spaceDistance +"\nA distância" + spaceDistance + "convertida para a opção" + unitDistance + " é: "  + persec + "Pc")
        break
    case "2":
        alert ("A distância em Anos luz escolhida é: " + spaceDistance +"\nA distância" + spaceDistance + "convertida para a opção" + unitDistance + " é: "  + uAstronomica + "Ua")
        break
    case "3":
        alert ("A distância em Anos luz escolhida é: " + spaceDistance +"\nA distância" + spaceDistance + "convertida para a opção" + unitDistance + " é: "  + km + "Km")
        break
    default:
        alert ("Não digitou uma opção v")

}

