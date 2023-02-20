'use strict';

for (let i = 0;i < 3;i++) {
    console.log(i);
    for (let j = 0;j < 3;j++){
        console.log(j);
    }
}

console.log('Hi');







let result = '';
const lengthh = 7;

for (let i = 1;i < lengthh;i++) {
    console.log(i);
    for (let j = 0;j < i;j++) {
    console.log(j);
        result += '*';
    }
    result += '\n';
}

console.log(result);






first: for (let i = 0;i < 3;i++) {
    console.log(`First level: ${i}`);
    for (let j = 0;j < 3;j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0;k < 5;k++) {
            if (k === 2) continue first; 
            console.log(`Third level: ${k}`);
        }
    }  
}




// let result = '';

// for (let i = 1;i < 7;i++) {
//     for (let j = 0;j < i;j++) {
//         result += '*';
//     }
//     result += '\n';
// console.log(result);
// }

// console.log(result);








// let result = '';

// for (let i = 1;i < 7;i++) {
  
//         result += '*';
   
//     result += '\n';
//     for (let k = 0;k <i;k++){
//     result += ' ';
//     }
// console.log(result);
// }

// console.log(result);
