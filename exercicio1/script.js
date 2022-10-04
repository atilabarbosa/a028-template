function novoLiInicio(){
    let lista = document.getElementById("lista")

    let item0 = document.createElement("li")
    item0.innerHTML = "Item 0"
    lista.insertAdjacentElement(`afterbegin`, item0)

    let item5 = document.createElement("li")
    item5.innerHTML = "Item 5"
    lista.insertAdjacentElement(`beforeend`, item5)

    // let item5 = document.createElement("li")
    // lista.appendChild(item5)
    // item5.innerHTML = "Item 5"
}
novoLiInicio()