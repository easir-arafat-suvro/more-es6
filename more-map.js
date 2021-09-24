/* MAP does 3 works:
1. loop through each element
2. for each element call the provided function
3. result for each element will be stored in an array
4. return the array
*/

/*  MAP function an array, from an array */

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Soliman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

/* Alt-1
let productsName = [];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productName = product.name;
    productsName.push(productName);
}
console.log(productsName);
*/

/* Alt-2
let productsName = [];
for (const product of products) {
    productsName.push(product.name);
}
console.log(productsName)
*/

/* Alt-Best */
const productsName = products.map(product => product.name);
const productsPrice = products.map(product => product.price);
// console.log(productsName);
// console.log(productsPrice);

products.map(product => console.log(product)); //return array
products.forEach(product => console.log(product)); // not return array