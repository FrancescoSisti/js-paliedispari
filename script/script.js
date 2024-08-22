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
const result = isPalindrome(wordInput) ? "è palindroma" : "non è palindroma";
document.body.textContent = `La parola "${wordInput}" ${result}.`;

// --------------------------------------------------------------------------------------------------------------------

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.*/

// Funzione per generare il numero
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Scelta dell'utente
const userChoice = prompt("Choose even or odd (type 'even' or 'odd'):").toLowerCase();
const userNumber = parseInt(prompt("Enter a number between 1 and 5:"));

// Generazione numero CPU
const computerNumber = getRandomNumber();

// Somma dei numeri
const sum = userNumber + computerNumber;

// Determina se il numero è pari o no
const isSumEven = isEven(sum);
