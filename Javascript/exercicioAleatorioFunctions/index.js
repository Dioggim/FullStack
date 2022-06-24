class armasNaval {
    constructor(identificador) {
        this.IdArma = identificador
        this.penteMunicao = 5
        this.qtdAtirado = 0
        this.qtdAtirar = 0
    }
    missao(num) {
        this.qtdAtirar = num
    }

    atira() {
        if (this.penteMunicao >= 1) {
            console.log("PEI PEI 🔫 ")
            this.penteMunicao -= 1
            this.qtdAtirado++
            this.qtdAtirar--
        } else {
            //aqui é onde voce descreve qual o erro:
            throw new Error(`A arma de ID: ${this.IdArma} está sem munição. RECARREGANDO...`)
        }
    }

    recarrega() {
        this.penteMunicao = 5
    }
}
//aqui com o try ele vai executar porem em casos de erro, ele executará o catch. o "e" é o erro descrito. e o finally executa idependente de erro ou nao
function auto() {
    try {
        function semiAuto() {
            try {
                function tiroteio() {
                    while (pistolaBolsonaro.qtdAtirar > 0) {
                        pistolaBolsonaro.atira()
                    }
                }
                tiroteio(clicks)
            } catch (e) {
                console.log(e.message)
                pistolaBolsonaro.recarrega()
                semiAuto()
            }
        }
        semiAuto()
    } finally {
        pistolaBolsonaro.recarrega()
        console.log(`A arma de ID: ${pistolaBolsonaro.IdArma}, deu ${pistolaBolsonaro.qtdAtirado} tiros.`)
    }
}

let pistolaBolsonaro = new armasNaval("rambo")
var clicks = 7
pistolaBolsonaro.missao(clicks)
auto()
console.log(pistolaBolsonaro)