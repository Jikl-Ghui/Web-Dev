/*let a = +prompt("first number", "");
let b = +prompt("second number", "");

alert( a + b );*/

/*alert( Math.round(6.35 * 10) / 10 );*/

/*function readNumber() {
    let num;

    do {
    num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);*/

/*let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}*/

/*function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );*/

/*function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

alert( randomInteger(1, 3) );*/

/*function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );*/

/*truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}*/

/*alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
    return +str.slice(1);
}*/

/*let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");*/

/*let arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2]();*/

/*function sumInput() {

    let numbers = [];

    while (true) {

    let value = prompt("A number please?", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
    sum += number;
    }
    return sum;
}

alert( sumInput() );*/

/*function getMaxSubSum(arr) {
    let maxSum = 0; 

    for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
    }
    }

    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); 
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
alert( getMaxSubSum([-2, -1, 1, 2]) ); 
alert( getMaxSubSum([1, 2, 3]) ); 
alert( getMaxSubSum([100, -9, 2, -3, 5]) );*/