const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);


const isEven = function(number){
    if(typeof number !== 'number'){
        return null
    }
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

const sum = getSum(a, b, c)
const even = isEven(sum)
showInfo(sum, even)

function showInfo(num, boolean){
    console.log(num);
    switch (boolean) {
        case null:
            console.log(`Podany argument ${boolean} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${boolean} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${boolean} jest nieparzysty`);
            break;
        default:
            break;
    }
}

function getSum(number1, number2, number3){
    const num1 = parseInt(number1)
    const num2 = parseInt(number2)
    const num3 = parseInt(number3)
    const array = [num1, num2, num3].sort(function(a, b){
        return b - a
    })
    return array[0] + array[1]
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}