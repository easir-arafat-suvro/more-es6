/* FILTER
return collection of elements of an array depends on condition
syntax: arrayName.filter(parameter => condition)
*/

const numbers = [5, 12, 7, 41, 30, 5, 2, 19];

const smallNums = numbers.filter(number => number < 20);
// console.log(smallNums)
const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums)



const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 300, color: 'black' },
    { name: 'sticky note', price: 3000, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price >= 3000);
// console.log(expensive)
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);
const blue = products.filter(product => product.color == 'blue');
// console.log(blue); //return [] array



/* FIND
return only the first matched element depends on condition
syntax: arrayName.find(parameter => condition)
*/

const whiteColor = products.find(product => product.color == 'pink');
// console.log(whiteColor);
const blueColor = products.find(product => product.color == 'blue');
console.log(blueColor); // return undefine