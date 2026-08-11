// console.log('Sono arrivati i cicli!');
// 1.
// Stampa i numeri da 1 a 10 usando un ciclo for.

// for (let x = 1; x <= 10; x++) {

//     console.log(x);
// }

// 2.
// Stampa i numeri da 1 a 10 usando un ciclo while.
// let x = 1 ;
// while (x <=10) {
//     console.log(x);
//     x++;
// }

// 3.
// Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo for.

// richiesta di numero allo user
//  const num = Number(prompt('scegli un numero a piacere'));
//  console.log(`${num} è il numero che hai scelto`);

// //  creare ciclo for creando contatore e condizione per stampare da 0 a N
// for(let x = 0; x <= num; x++ ) {
    //     console.log(x);
    // }
    
    // 4.
    // Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo while.
    
    // richiesta di numero allo user e set contatore
    // const num = Number(prompt('scegli un numero a piacere'));
    // console.log(`${num} è il numero che hai scelto`);

    // let x = 0;
    
    // // //  creare ciclo while creando condizione per stampare da 0 a N
    // while(x <= num) {
    //     console.log(x);

    //     x++;
    // }

//     5.
// Stampa la tabellina del 5.

// for(let fives = 5; fives <= 50; fives += 5) {
//     console.log(fives);
// }

// 6.
// Chiedi all'utente una parola e un numero N. Stampa quella parola N volte.

// richiesta della parola e di un numero user
// const userWord = prompt('scegli una parola');
// const userNum = Number(prompt('Ora scegli un numero'));

// // let n = userNum;

// // creare ciclo for per stampare N volte
// for(let i = 0; i < userNum; i++) {
//     console.log(userWord);
// }


// 7.
// Chiedi un numero N all'utente. Calcola la somma di tutti i numeri da 1 a N e stampa il risultato.

// richiesta numero user
// const userNum = Number(prompt('Dimmi un numero'));
// let som = 0;
// // // creare numeri da 1 a N
// for(let i = 0; i <= userNum; i++) {
//         som += i;

//         console.log(som);
// }

// 8.
// Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finché l'utente non inserisce "0" per terminare. Stampa il totale della spesa.

// richiesta prezzo prodotto allo user
// const product1 ='ciambella';
// console.log(product1);

// let $p1 = Number(prompt('Inserire prezzo prodotto'));
// let sumPriceProducts = $p1;
// console.log(`La tua spesa al momento è di ${sumPriceProducts}€`);

// while($p1 !== 0){
//     $p1 = Number(prompt('inserire prezzo prodotto seguente'));
//     sumPriceProducts += $p1;
//     console.log(`Il totale della tua spesa è di ${sumPriceProducts}€`);
    
// }

// 9.
// L'utente ha 3 tentativi per indovinare la password. Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato"

// creazione password originale

// const realPassword = 'PaoloD.Boolean';

// // tentativi user
// let tentativi = 3;

// // variabile per accesso
// let accessoConfirmed = false;

// // creare ciclo che tiene conto dei tentativi
// while(tentativi > 0) {
    //     // richiesta inserimento password user
    //     let userPassword = prompt('Inserisci la password');
    
    //     if(userPassword === realPassword){
        //         accessoConfirmed = true;
        //         break;
        //     } else {
            //         tentativi--;
            //         alert('PASSWORD ERRATA');
            //     }
            // } 
            
// if(accessoConfirmed){
    //     console.log('Benvenuto');
    // } else {
        //     console.log('Bloccato');
        // }
       
        
        // VARIANTE ESERCIZIO N°9
// const realPassword = 'PaoloD.Boolean';
//         const maxTentativi = 3;
// let accessoConcesso = false;

// // Ciclo for: parte da 1 e si ferma dopo il numero massimo di tentativi
// for (let tentativo = 1; tentativo <= maxTentativi; tentativo++) {
    
//     // Richiede la password all'utente
//     let userPassword = prompt(`Inserisci la password (Tentativo ${tentativo} di ${maxTentativi}):`);
    
//     // Gestione del tasto "Annulla" nel prompt
//     if (userPassword === null) {
//         alert("Inserimento annullato.");
//         break; // Interrompe il ciclo immediatamente
//     }

//     // Verifica della password
//     if (userPassword === realPassword) {
//         accessoConcesso = true;
//         alert("Accesso consentito. Benvenuto!");
//         break; // Password corretta: esce dal ciclo for
//     } else {
//         // Calcolo dei tentativi rimasti
//         let tentativiRimasti = maxTentativi - tentativo;
        
//         if (tentativiRimasti > 0) {
//             alert(`Password errata. Ti rimangono ${tentativiRimasti} tentativi.`);
//         } else {
//             alert("Account bloccato. Hai esaurito i tentativi disponibili.");

//         }
//     }
// }

// 10.
// Il computer pensa a un numero tra 1 e 100. L'utente indovina. Dopo ogni tentativo sbagliato, il computer dice "Troppo alto" o "Troppo basso" per aiutare l'utente.`
// numero randomico del Pc
// const pcNumb = Math.floor((Math.random() *100) + 1 );
// console.log(pcNumb);
// // definire variabili da usare per successive verifiche  
// let numbCorrect = false;
// let tentativi = 0;


// // configurare ciclo per rchiesta
// while(!numbCorrect) {
//     // richiesta numero user
//     let userNumb = Number(prompt('indovina a che numero sto pensando'));

//     tentativi++;
// // creare condizioni per capire se si è indovinato o meno 
//     if (userNumb === pcNumb) {
//         numbCorrect = true;
//         console.log('Hai indovinato in ' + tentativi + ' tentativo/i');
//     } else if(userNumb > pcNumb) {
//         console.log('Troppo alto');
//     } else {
//         console.log('Troppo basso');
//     }
// }



