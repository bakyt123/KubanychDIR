'use strict';


const usdCurr = 64;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);

promotion(res);


