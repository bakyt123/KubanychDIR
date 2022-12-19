'use strict';

if (4 == 4) {
    console.log('ok!');
} else {
    console.log('error');
}


const num = 50; 

if (num < 49) {
console.log('Error');
} else if (num >51) {
    console.log('Error');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('Error');



switch (num) {
    case 49:
        console.log('Error');
        break;
        case 100:
            console.log('Error');
            break;
            default:
                console.log('Yea');
                break;
}