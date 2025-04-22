
const arr = createArray(1, 100)
console.log(arr);

function createArray(min, max){
    const array = []
    for(let i=0 ; i<20; i++){
        const randomNumber =  Math.round(Math.random() * (max - min) + min);
        array.push(randomNumber)
    }
    return array
}