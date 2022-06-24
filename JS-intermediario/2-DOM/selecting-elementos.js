function show(){
    let element = document.getElementById("name")
    console.log(element.value)
}
function show1(){
    let elements = document.getElementsByName("phone")
    console.log(elements[1].value)
}
function show2(){
    let elements = document.querySelectorAll("div#phones input[name = 'phone'")
    console.log(elements[1].value)
}
function show3(){
    let elements = document.getElementsByTagName("input")
    console.log(elements)
}
