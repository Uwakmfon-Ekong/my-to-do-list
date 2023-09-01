"use strict";

const inputBox = document.querySelector("#inputBox");
const list = document.querySelector("#list");

inputBox.addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<i></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle("done")
    })
    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    })
    list.appendChild(listItem);
}
