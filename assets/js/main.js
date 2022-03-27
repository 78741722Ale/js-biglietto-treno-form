/// - PROBLEMA DA RISOLVERE

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere,
// e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo 
// totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


/// Primo problema - chiedi all'utente il nome e cognome
// Nome e cognome
const first_name = prompt("Inserisci il tuo nome");
const last_name = prompt("Inserisci il tuo cognome");
console.log(first_name, last_name);
// Nome Completo
const userName = first_name + ' ' + last_name;
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

// Stato ed età passeggeri , variabili 
userAge = document.getElementById('userAge').value;
console.log(userAge);
// costanti fisse - prezzo al km
let price_for_km = 0.21;
console.log(price_for_km);

// Variabile per dimostrare dettaglio offerta
let message;
// visualizzazione dell'offerta al genera 
document.getElementById('offerta').innerHTML = message;

/// prezzo totale del viaggio in base ai KM, per persone tra i 18 anni e i 64 (adulti)
let costo_totale = price_for_km * userKilometers;
console.log(costo_totale);
// Sconti destinati ad età minorenne e over 65
const sales_under_age = 0.8;
const sales_over_age = 0.6;

//
if (userAge == 'Minorenne') {
    costo_totale = costo_totale * sales_under_age;
    message = 'Minorenne';
} else if (userAge == 'Anziano') {
    costo_totale = costo_totale * sales_over_age;
    message = 'Anziano';
};

/// Dettagli Biglietto

// Carrozza 
const numero_carrozza = Math.floor(Math.random() * 9) + 1;
console.log(`Il numero della carrozza è ${numero_carrozza}`);

// CPCode
const numero_cpcode = Number("97928");
console.log(`Il numero del codice QR ${numero_cpcode}`);

/// Dettagli del biglietto, al click del "genera"
document.getElementById("genera").addEventListener("click", function () {
    document.getElementById("offerta").innerHTML = message;
    document.getElementById("name").value = userName;
    document.getElementById("kilometers").value = userKilometers;
    document.getElementById("carrozza").value = numero_carrozza;
    document.getElementById("CPCode").value = numero_cpcode;
    document.getElementById("first_name").value = first_name;
    document.getElementById("last_name").value = last_name;
    document.getElementById("costo_totale").value = costo_totale + '€';
});

/// Dettagli rimossi al click dell'annulla
document.getElementById("annulla").addEventListener("click", function () {
    document.getElementById("offerta").value = ' ';
    document.getElementById("name").value = ' ';
    document.getElementById("kilometers").value = ' ';
    document.getElementById("carrozza").value = ' ';
    document.getElementById("CPCode").value = ' ';
    document.getElementById("first_name").value = ' ';
    document.getElementById("last_name").value = ' ';
    document.getElementById("costo_totale").value = ' ';
});












