//* Snack 3
//* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//* La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//* Usiamo i nuovi metodi degli array foreach o filter.
//* Es: 
//* a[2,11,6,77,3,4,9];
//* a = 1;
//* b = 3;
//* mi restituisce a [11,6,77]



//FUNZIONE PER GENERARE I NUMERI RANDOM DA INSERIRE NELL'ARRAY VUOTO

const randomNum = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

const numeri = [];

for(let i = 0; i < 10; i++){
    let genNum = randomNum(1, 100);

    if(!numeri.includes(genNum)){
        numeri.push(genNum);
    }
}

console.log(numeri);