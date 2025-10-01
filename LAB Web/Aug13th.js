var x = 0 
let y = 1
const z = 3

console.log( 'Values - '+ x, y, z);

function scopeDemo(){
    var a = 10;
    let b = 20;
    if (true) {
        let b = 99;  
        console.log(b);
        console.log(a);
    }

    console.log(b);
    console.log(a);
}
scopeDemo();

for (let i = 0; i < 5; i++) {
    if (i%2==0) {
        console.log(i*2);
    }
    else if(i%2 != 0){
        console.log(i);
    }
}

// square of a number using 3 types of functions

function square1(n) {
    return n * n;
}

var square2 = function(n) {
    return n * n;
}

const square3 = (n) => {
    return n * n;
}

console.log(square1(5));
console.log(square2(6));
console.log(square3(7));


// Even Odd

function evenOdd(n){
    if (n % 2 === 0) {
        console.log('Even') ;
    } else {
        console.log('ODD') ;
    }
}

evenOdd(2)


// Reverse a string

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('Hello World'));

// largest Number

function largest(arr){
    var max = arr[0];
    for (let i = 0; i < array.length; i++) {
        if( arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('Max value ' + max)
}
var array = [1,2,3,4,5,6,4,4,32,]
largest(array)

// count vowels

function countVowels(str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if( str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u')
        {
            count++;
        }
    }

    console.log('Count = '+ count);

}

countVowels('Hello World');

// multiplicaiton table

function multiTable(n){
    for (let i = 0; i < 10; i++) {
        console.log(n + ' * ' + (i+1) + ' = ' + (n * (i+1)));
    }
}

multiTable(8)

// remove duplicates

function removeDuplicates(arr){
    var dup;
    var unique = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < array.length; j++) {
    //         if (arr[i] == arr[j]) {
                
    //         }
    //     }
    // }

    for (let i = 0; i < array.length; i++) {
        if{

        }
        console.log(i)
        if(i == array.length-1 ){
            i=0;
            console.log('i has been reset')
        }
    }

    let map = new Map();


}


// remove duplicates with one loop


// removeDuplicates()
var array = [11,2,1,2,3,4,5,6,11,7]

// palindrom checker

function palindrom(){
    
}