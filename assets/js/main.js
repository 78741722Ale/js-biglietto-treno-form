/// - PROBLEMA DA RISOLVERE

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere,
// e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo 
// totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

/// Primo problema - chiedi all'utente il nome e cognome
const userName = prompt("Inserisci nome e cognome");
// Fallo uscire in console Log
console.log(userName);
// Dichiarazione nel form
document.getElementById("name").value = userName;

/// - Secondo problema - chiedere all'utente il numero di chilometri
const userKilometers = parseInt(prompt("Inserisci il numero di Chilometri che vuoi percorrere"));
// Fallo uscire in console Log
console.log(userKilometers);
// Verifica che sia un numero
if (isNaN(`${userKilometers}`)) {
    alert('Inserisci valori numerici');
    document.getElementById("kilometers").value = "Valore errato";
} else {
    // Dichiarazione nel form
    document.getElementById("kilometers").value = userKilometers;
}


///
