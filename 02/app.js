
/* rozwiązanie z pętlą for */
const x = parseInt(prompt('Podaj liczbę do mnożenia'));

for(let i=1; i<10; i++){
    console.log(`${x} x ${i} = `, x * i);
}

/* rozwiązanie z pętlą while  */

const y = parseInt(prompt('Podaj liczbę do potęgowania'))
const n = parseInt(prompt('Do jakiej potęgi?'));

let j = 0
let sum = 1
while(j < n){
    sum *= y
    j++
}
console.log(`${y} do potęgi ${n} =`, sum);