/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function inizialiNomi(array) {
    
    let nuovoArray = [];

    for (let i = 0; i < array.length; i++) {
        const curName = array[i];
        const inizialiNomi = curName [0]; //prendo la primera letra di ogni nome
        nuovoArray.push(inizialiNomi);
    }
    return nuovoArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiNomi(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]