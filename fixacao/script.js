function insereItem(event){
    let input = document.getElementById("meu-input")

    let meuItem = document.createElement("li")
    meuItem.innerHTML = input.value 

    let lista = document.getElementById("lista")
    lista.insertAdjacentElement("afterbegin", meuItem)
    input.value = ""
}