function showinfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] :checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let DeveloperOption = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    DeveloperOption.forEach(element => {optionsValue.push(element.value) })
    let optionsChecked = optionsValue.join(",")
    alert (`Nome: ${name}.\nCor Favorita: ${favoriteColor}.\nGosta de programar? ${likeProgramming}.\nOpções do Dev.: ${optionsChecked}.`)
}

//alert(`Nome da pessoa mais velha: ${older.name}.Idade desta pessoa: ${older.age}.
   // \nNome da pessoa mais nova: ${younger.name}.
    //Idade desta pessoa: ${younger.age}.
   // \nDiferença das idades: ${calcDifference(older.age, younger.age)} anos.`);




   //erro?

   //('Nome: ${Name}. \n Cor Favorita: ${favoriteColor}. \n Gosta de programar? ${likeProgramming}. \nOpçoes do Dev: ${optionsValue}.')