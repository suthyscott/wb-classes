// const fruits = new Array('berry', 'apple', 'cherry')
// fruits.sort()
// fruits.push('peach')
// console.log(fruits)


// class Cat {
//     constructor(name, hunger = 100){
//         // this = {}
//         this.name = name
//         this.hunger = hunger 
//         this.mood = 'happy'
//     }

//     greet(){
//         console.log(`Meow, I'm ${this.name} the cat`)
//     }

//     graduate(){
//         this.name = `Dr. ${this.name}`
//         this.greet()
//     }
// }

// Cat.prototype.species = 'Felis catus'

// const felix = new Cat('Felix')

// const ezra = new Cat('Ezra')

// const auden = new Cat('Auden', 60)

// ezra.species = 'Party animal'
// console.log(ezra.species)
// console.log(auden.species)

// ezra.graduate()
// auden.greet()
// felix.greet()

// for(let key in felix){
//     console.log(key)
// }


class Animal {
    constructor(name, species, hunger = 100){
        this.name = name
        this.species = species
        this.hunger = hunger
    }

    greet(greeting = 'Hi'){
        console.log(`${greeting}, I'm ${this.name} the ${this.species}`)
    }
}

class Cat extends Animal {
    constructor(name, hunger = 100, breed){
        super(name, 'cat', hunger)
        this.breed = breed
    }
    greet(){
       super.greet("Meow")
    }
}

const rover = new Animal('Rover', 'dog')
const felix = new Cat('Felix', 58, 'short hair')
const rhino = new Animal('Rhino', 'hamster')

// console.log(rover)
// console.log(felix)

rover.greet('Woof')
// felix.purr()
// rhino.greet()
// console.log(felix.hunger)
// felix.greet()

// rhino.greet()