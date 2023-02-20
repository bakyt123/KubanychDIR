'use strict';

//////////////////////////


// console.dir([1, 2 , 3]);



//////////////////////////




let bmw1 = {
color:'blue',
speed:200,
date: function() {
    console.log('2023');
}
};

let bmw2 = {
    speed:202,
    sale:'soldout'
};



//////////////////////////



//неиспользуетсяя т.к старый метод
// bmw2.__proto__ = bmw1;


//////////////////////////



//2 метода наследования прототипа


// const bmw2 = Object.create(bmw1);


Object.setPrototypeOf(bmw2, bmw1);




//////////////////////////





console.log(bmw1);
console.log(bmw2);
console.log(bmw2.color);
bmw2.date();


/////////////////////////////////


// прямое наследование приоритетнее чем прототипное


/////////////////////////////////

for(let key in bmw2) alert(key);