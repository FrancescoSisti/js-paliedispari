console.log(`JS OK`);

function isPalindrome(word) {
    // Rimuoviamo gli spazi e convertiamo tutto in minuscolo per una comparazione più precisa
    const cleanedWord = word.replace(/\s/g, '').toLowerCase();
    // Invertiamo la parola pulita
    const reversedWord = cleanedWord.split('').reverse().join('');
    // Confrontiamo le due parole
    return cleanedWord === reversedWord;
}

// Chiediamo all'utente di inserire una parola
const parola = prompt("Inserisci una parola:");

// Chiamiamo la funzione e mostriamo il risultato
const isPalindromo = isPalindrome(parola);
if (isPalindromo) {
    console.log("La parola", parola, "è un palindromo!");
} else {
    console.log("La parola", parola, "non è un palindromo.");
}