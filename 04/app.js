
const arr = createArray(10, 200)
console.log(arr);

const largest = getLargest(arr)
console.log(largest);

const avg = getAvg(largest)
console.log(avg);


function createArray(min, max){
    const array = []
    for(let i=0 ; i<20; i++){
        const randomNumber =  Math.round(Math.random() * (max - min) + min);
        array.push(randomNumber)
    }
    return array
}

function getLargest(array){
    const sortedArray = array.sort(function(a, b){
        return b - a
    })
    return sortedArray.slice(0, 10)
}

function getAvg(array){
    const avg = array.reduce(function(acc, num){
        return acc + num
    }, 0)
    return avg / array.length
}