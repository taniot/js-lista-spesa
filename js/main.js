'use strict';

//creo una lista della spesa
const shoppingList = [
    'Latte',
    'Uova',
    'Pane',
    'Insalata',
    'Vino',
    'Birra'
];

//seleziono l'elemento contenitore nel dom
const ulElement = document.getElementById('shopping-list');

//faccio una iterazione su tutti gli elementi della spesa
for (let i = 0; i < shoppingList.length; i++) {
    //creo un elemento li che contiene l'elemento della lista in posizione i
    const liElement = document.createElement('li');
    //inserisco il testo nell'elemento li
    liElement.innerText = shoppingList[i];
    //appendo l'elemento li alla lista ul
    ulElement.append(liElement);
    //i++;
}

// //While

let count = 0;
while (count < shoppingList.length) {
    //creo un elemento li che contiene l'elemento della lista in posizione i
    const liElement = document.createElement('li');
    // console.log(shoppingList[count]);
    //inserisco il testo nell'elemento li
    liElement.innerText = shoppingList[count];
    //appendo l'elemento li alla lista ul
    ulElement.append(liElement);
    count++; // valore = valore + 1;
}

//Do while


count = 0;

do {
    //creo un elemento li che contiene l'elemento della lista in posizione i
    const liElement = document.createElement('li');
    // console.log(shoppingList[count]);
    //inserisco il testo nell'elemento li
    //liElement.innerText = shoppingList[count]; //undefined
    //liElement.innerText = `<span>${shoppingList[count]}</span>`;
    //liElement.innerHTML = `<span>${shoppingList[count]}</span>`;
    liElement.innerHTML = `<span>${shoppingList[count]}</span>`;
    //appendo l'elemento li alla lista ul
    ulElement.append(liElement);
    count++; // valore = valore + 1;
} while (count < shoppingList.length);




