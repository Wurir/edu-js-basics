const a = '4.2';
const b = 9;

console.log(typeof a, typeof b);

const add = parseFloat(a) + b
console.log(add);

const sub = b - a
console.log(sub);

const multi = (parseFloat(a) * b).toFixed(2)
console.log(multi);

const division = (parseFloat(a) / b).toFixed(2)
console.log(division);

const arr = [add, sub, multi, division]

for(const num of arr){
    if(num > 20){
        console.log(num + ' jest wiekszy od 20');
    } else {
        console.log(num + ' jest mniejszy od 20');
    }
}