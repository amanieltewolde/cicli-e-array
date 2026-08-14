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

// 4.
// Dato l'array di voti [6, 8, 4, 9, 5, 7, 10], calcolare la media dei voti.

// creare array con valori descritti
// const votes = [6, 8, 4, 9, 5, 7, 10];
// console.table(votes);
// let sum = 0;
// // creare ciclo per sommare in valori presenti nell'array
// for(i = 0; i < votes.length; i++) {
    
//     sum += votes[i];
// }
// // creare variabile finale
// const media = sum / votes.length;
// console.log('La media dei valori contenuti nella collezione è di ' + media);

// 5.
// Dato l'array ['Marco', 'Anna', 'Luca', 'Giulia', 'Tommaso'], crea un nuovo array con solo i nomi che hanno più di 4 lettere
// creare array dei dati
// const names = ['Marco', 'Anna', 'Luca', 'Giulia', 'Tommaso'];
// // capire lunghezza item degli array con filter
// const result = names.filter(name => name.length > 4);

// console.log(result);

// 6.
// Chiedi all'utente 5 numeri e salvali in un array. Alla fine calcola e stampa la somma di tutti i numeri inseriti.

// creare array vuoto
// const userNumbs = [];

// // creare ciclo per inserire tramite .push nuovi item nell'array creato precedentemente
// for(let i = 1; i <= 5; i++) {
//     let numb = Number(prompt('Un numero please'));
    
//     userNumbs.push(numb);
//     console.log(userNumbs);
    
// }

// // // creare variabile per determinare parametro per successiva operazione
// let sum= 0;
// // // creare ciclo per sommare in valori presenti nell'array
// for(let i = 0; i < userNumbs.length; i++) {
//     sum += userNumbs[i];
// }
// // stampa somma numeri
// console.log(sum);

// 7. 
// Genera 10 numeri random e salvali in un array. I numeri nell'array devono essere univoci (non ci devono essere ripetizioni dello stesso numero all'interno dell'array)

// creare array vuoto
// const userNumbs = [];
// // stabilire lunghezza array desiderata
// const maxLength = 10;
// // creare ciclo while per generare numeri random richiesti 
// while( userNumbs.length < maxLength) {
//     const randomNumb = Math.floor(Math.random() * 100);
// // creare condizione per la quale non si ripetano numeri già evocati 
//     if(!userNumbs.includes(randomNumb)) {
//         userNumbs.push(randomNumb);
//     } 

    
// }
// // stampa array finale
// console.log(userNumbs);


// 8.
// // Da un estratto conto bancario (array), estrai solo le ultime 3 transazioni effettuate.
// // creare array 
// const estrattoConto = [23, 26, 5, 54, 32, 52, 75, 874, 47, 42, 21];
// console.table(estrattoConto);
// // sllice per ottenere gli item richiesti e portarli in un nuovo array
// const last3 = estrattoConto.slice(-3,);
// console.log(last3);

// // stampa item estratti
// console.log(last3.join(', '));

