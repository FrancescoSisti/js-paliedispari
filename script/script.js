console.log(`JS OK`);

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