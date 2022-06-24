function addNewPhone() {
    //query selector  retorna o primeiro elemento da busca , diferente do query select all que retornaria toda a lista.
    const phoneForm = document.querySelector("form#phones")
    //este comando (cloneNode) clona o primeiro paragrafo e tem como parametro o (profundidade) ou (Deep) que pode ser true para pegar tudo e false para pegar apenas o primeiro.
    const newPhone = phoneForm.children[0].cloneNode(true)
    //recebe a quantidade de campos no phoneForm e soma 1
    const phonePosition = phoneForm.children.length + 1
    //substitui o campo label apos a clonagem para mudar a legenda do campo no site na criação do novo campo.
    newPhone.querySelector("label").innerText = "Telefone" + phonePosition + ": "
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}
function Teste() {
    const phoneForm = document.querySelector("form#phones")
    console.log(phoneForm.children)
}
function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += "Telefone" + (index + 1) + " : " + phone.value + "\n"
    })
    alert(message)

}