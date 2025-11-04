/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(stringa) {
    let contatore = 0;
    let vocaliTrovate = [];

    for (let i = 0; i < stringa.length; i++) {
        let curLetter = stringa[i];

        let aVocali = curLetter === "a";
        let eVocali = curLetter === "e";
        let iVocali = curLetter === "i";
        let oVocali = curLetter === "o";
        let uVocali = curLetter === "u";
        if (aVocali || eVocali || iVocali || oVocali || uVocali)  { 
            vocaliTrovate.push(curLetter);
        }

    }
    return vocaliTrovate.length 
}



// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)