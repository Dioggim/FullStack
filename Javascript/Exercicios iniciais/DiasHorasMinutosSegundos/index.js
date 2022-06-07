let dataPartida = prompt("Insira a data de partida da nave(formato DD/MM/YYYY)")

let armazena = moment(dataPartida, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - armazena

let option = prompt("Escolha com gostaria de exibir o tempo de partida \n1-Segundos\n2-Minutos\n3-Horas\n4-Dias\n5-Anos")

if(option == "1"){
    let secondsofDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo" + secondsofDeparture + " segundos")
}else if(option == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert ("Tempo de vôo" + minutesOfDeparture + " minutos")
}else if(option == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo" + hoursOfDeparture + " horas")
}else if(option == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo" + daysOfDeparture + " dias")
} else if(option == "5"){
        let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 365)
        alert("Tempo de vôo" + daysOfDeparture + " Anos")
}else{
    alert("Opção inválida !!!")
}