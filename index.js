let car = {
    brand: 'BMW',
    model: 'Х7',
    released: 15,
}

car.color = 'black'
car.released = 13

console.log(car);


let humans = {
    name: 'Behruz',
    surname: 'Bahtiyorov',
    age:13
}
humans.name = 'Beha'

humans.age = 99

let humans2 = {...humans}

console.log(humans2);
