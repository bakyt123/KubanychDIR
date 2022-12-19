'use strict';

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Мы сыты');
}


const hamburger1 = 3;
const fries1 = 1;
const cola = 10; 

console.log((hamburger1 === 3 && cola && fries1));

if (hamburger1 === 3 && cola === 1 && fries1) {
    console.log('Мы сыты');
} else {
    console.log('We gonna fastfood');
}





console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);
