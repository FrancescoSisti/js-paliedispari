console.log(`JS OK`);

/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

// Funzione per la verifica
function isPalindrome(word) {
    // Rimuoviamo gli spazi e convertiamo tutto in minuscolo
    const cleanedWord = word.replace(/\s/g, '').toLowerCase();
    // Invertiamo la parola e confrontiamo
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

// Chiediamo all'utente di inserire una parola
const wordInput = prompt("Inserisci una parola:");

// Verifichiamo se la parola è palindroma e visualizziamo il risultato
const resultPal = isPalindrome(wordInput) ? "è palindroma" : "non è palindroma";
document.body.textContent = `La parola "${wordInput}" ${resultPal}.`;

// --------------------------------------------------------------------------------------------------------------------

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.*/

// Funzione per generare un numero casuale tra 1 e 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per verificare se un numero è pari
function isEven(number) {
    return number % 2 === 0;
}

// Scelta utente
const userChoice = prompt("Scegli pari o dispari (scrivi 'pari' o 'dispari')").toLowerCase();
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Generiamo un numero casuale per il computer
const computerNumber = getRandomNumber();

// Calcolo la somma
const sum = userNumber + computerNumber;

// Somma pari o dispari
const isSumEven = isEven(sum);

// Fase finale
let result;
if ((isSumEven && userChoice === 'pari') || (!isSumEven && userChoice === 'dispari')) {
    result = "Hai vinto!";
} else {
    result = "Ha vinto il computer!";
}

console.log(result);
