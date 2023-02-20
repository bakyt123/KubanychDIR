

const btn = document.querySelector('.btn');
let timerID;
let i = 0;

/////////////////////////////////////////////////

btn.addEventListener('click', () => {
    // setTimeout(alerter, 2000);
    // setInterval(alerter, 2000);
    timerID = setInterval(logger, 500);
});

// clearInterval(timerID);

function logger() {     
    if(i == 3) {
        clearInterval(timerID);
        
    }
    console.log('Hello');
    i++;
    
}

/////////////////////////////////////////////////


// const timerID = setTimeout(function() {
// alert('hello');
// }, 2000);


/////////////////////////////////////////////////

// const timerID = setTimeout(function(text) {
//     alert(text);
//     }, 2000, 'Hello');



/////////////////////////////////////////////////



// const timerID = setTimeout(alerter, 2000);

// function alerter() {
//     alert('Hello');
// }


/////////////////////////////////////////////////



// setTimeout(alerter, 2000);

// function logger() {
//     console.log('Hello');
// }



/////////////////////////////////////////////////

// Удаляет тайм аут

// clearInterval(timerID);

/////////////////////////////////////////////////




