
// const obj ={
//     a:5,
//     b:1
// };

// const copy = obj;

// console.log(obj);

// copy.a = 10;


// console.log(copy);
// console.log(obj);

// obj.a = 20;

// console.log(obj);




// ////////////////////////

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy; 
// }



// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };


// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);







// ////////////////////////////////

// const add = {
//     d:17,
//     e:20,
//     c: {
//     a:11,
//     b:10
//     }
// };


// const clone = Object.assign({}, add);

// clone.d = 20;
// clone.c.b = 12;


// console.log(add);
// console.log(clone);






// /////////////////////////////////////



// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'bbb';

// console.log(oldArray);
// console.log(newArray);






// //////////////////////////////////



// const video = ['youtube', 'netflix', 'rutube'],
//       blogs = ['Newyourtime', 'BBC', 'Lenta.ru'],
//       internet = [...video, ...blogs, 'VK', 'TikTok'];

// internet[1] = 'kuka';

// console.log(video);
// console.log(blogs);
//       console.log(internet);






///////////////////

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


////////////////////////////////


const array = ['a', 'b'];

const newArray = [...array];
     

const q = {
    one:1,
    two:2
};

const newQ = {...q};


console.log(newArray);
console.log(newQ);










