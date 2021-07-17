let fruit = {
    name: 'grape',
    description: 'popular and famous fruit',
    colors: ['purple', 'green'],
    isSmall: true,
    order: 1,
    owner: 'Titan'
}

console.log(fruit['isSmall'])
console.log(fruit.isSmall);
console.log(fruit.owner || 'Rudi');

//! convert object to array by keys
let keys = Object.keys(fruit)
console.log(keys)

//! convert object to array by values
let values = Object.values(fruit)
console.log(values)

let entries = Object.entries(fruit)
console.log(entries)