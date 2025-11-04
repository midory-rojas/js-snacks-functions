/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che 
iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filtraLettera (array, lettera) {
    /*console.log(array);*/

    let nuovoArray = [];

    for (let i=0; i < array.length; i++) {
        const curName = array[i];
        if (curName[0].toUpperCase() === lettera.toUpperCase()) {
            nuovoArray.push(curName);
        }
    }
    return nuovoArray;

}
// Invoca la funzione qui e stampa il risultato in console

console.log(filtraLettera(names, "A"));
console.log(filtraLettera(names, "L"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]