// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// let listScreen = document.querySelector(".container");

/*
let myList = ["uova", "pane", "biscotti"];

let i = 0;
let text = "";
console.log(myList);

while(i < myList.length) {

    text += myList[i] + "<br>";
    i++

}

document.querySelector(".container").innerHTML=text;
*/
let spesa = document.querySelector(".grocery")
let listScreen = document.querySelector(".container");

let myList = ["uova", "pane", "biscotti", "farina"];

let i = 0;


while(i < myList.length) {


    let item = document.createElement("li");
    spesa.append(item);

    item.append(myList[i]);
    console.log(item);

    i++;

}