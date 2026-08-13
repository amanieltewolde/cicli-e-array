console.log('ciao array');

// 1.
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// array vuoto
// const userOddNumber = [];
// console.log(userOddNumber);



// // creare ciclo richieste
// for(i = 1; i <= 6; i++) {
//     let userNumb = Number(prompt('Inserisci un numero'));

//     if(userNumb % 2 !== 0) {
//         userOddNumber.push(userNumb);
//         console.log(userOddNumber);
//     } 
// }

// 2.
// Dato l'array di numeri [10, 21, 6, 73, 9, 14, 44], crea un array con soli numeri pari
// const numb = [10, 21, 6, 73, 9, 14, 44];
// console.log(numb);

// const evenNumb = numb.filter(n=> n % 2 === 0);

// console.log(evenNumb);

// 3.
// Dato un array di temperature settimanali [19, 21, 18, 23, 25, 22, 20], trova il valore massimo e trova il valore minino

// creare array con valori descritti
// const weekTemp = [19, 21, 18, 23, 25, 22, 20];
// console.table(weekTemp);

// // creare copia array dove si segue un ordine crescente dei valori
// const ascendingOrderWT = weekTemp.toSorted(function(a, b){return a-b});
// console.table(ascendingOrderWT);

// // variabile per valore minimo
// let minTemp = ascendingOrderWT.at(0);
// console.log(`La minima durante la settimana sarà di martedi, con esattamente ${minTemp}°C`);

// // variabile per valore massimo
// let maxTemp = ascendingOrderWT.at(-1);
// console.log(`La massima durante la settimana sarà di giovedi, con esattamente ${maxTemp}°C`);

