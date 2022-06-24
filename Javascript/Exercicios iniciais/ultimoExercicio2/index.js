class Nave {
    static get Desacelerar() {
        return 0.17
    }

    constructor(nome, quantidadeTripulantes) {
        this.nome = nome
        this.quantidadeTripulantes = quantidadeTripulantes
        this.velocidadeAtual = 0
    }

    acelerar(velocidade) {
        Number(this.velocidadeAtual += velocidade * (1 - Nave.Desacelerar))//83% da velocidade, poderia ter colocado apenas * 0.83
    }
}

class NaveDeBatalha extends Nave {
    constructor(nome, quantidadeTripulantes, quantidadeArmas) {
        super(nome, quantidadeTripulantes)
        this.quantidadeArmas = quantidadeArmas
    }
}

class NaveDeTransporte extends Nave {
    constructor(name, quantidadeTripulantes, quantidadelugares) {
        super(name, quantidadeTripulantes)
        this.quantidadeLugares = quantidadelugares
    }
}

function registro() {
    var nome = prompt('nome da nave: ')
    var tripulantes = prompt('quantidade de tripulantes: ')
    var opção
    var nave
    do {
        opção = prompt('Escolha: \n1- Nave de batalha\n2- Nave de transporte')
    } while (opção != '1' && opção != '2')
    if (opção == 1) {
        var quantidadeArmas = prompt('Numero de armas: ')
        nave = new NaveDeBatalha(nome, tripulantes, quantidadeArmas)
    } else {
        var quantidadeLugares = prompt('Numero de lugares: ')
        nave = new NaveDeTransporte(nome, tripulantes, quantidadeLugares)
    }
    return nave
}

var nave = registro()

function menu() {
    var opção
    while (opção != '1' && opção != '2' && opção != '3') {
        opção = prompt('1- Acelerar nave\n2- Trocar Nave\n3- Sair e imprimir nave')
    }
    return opção
}

while (opção != '3') {

    var opção = menu()

    switch (opção) {
        case '1':
            var velocidade = Number(prompt('Quanto quer acelerar: '))
            nave.acelerar(velocidade)
            alert('Sua nova velocidade é: ' + nave.velocidadeAtual + 'Km/s')
            break;
        case '2':
            var nave = registro()
            break
        case '3':
            alert('Nave: ' + nave.nome + '\nQuantidade de tripulantes: ' + nave.quantidadeTripulantes +
                '\nVelociade atual: ' + nave.velocidadeAtual + 'Km/s')
            break
        default:
            alert('Opção invalida')
    }
}