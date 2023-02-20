'use strict'
/* inseriamo il nome */
const firstName = prompt('Perfavore inserisci il tuo nome')

/* inseriamo il cognome */
const lastName = prompt('Perfavore inserisci il tuo cognome')

/* inseriamo il colore preferito */
const favoriteColor = prompt('Perfavore inserisci il tuo colore preferito')

/* inseriamo il debug per la console */
const generatedPassword = `Complimenti, ${firstName}${lastName}${favoriteColor}89 sarà la tua password `
console.log(generatedPassword);

/* inseriamo il cambio di paragrafo per avere la password */
document.querySelector('p').innerHTML = generatedPassword