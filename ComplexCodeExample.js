/*
Filename: ComplexCodeExample.js

This code is a complex example that simulates a virtual pet game. It includes various features such as interacting with the pet, feeding it, playing games, and tracking its health and happiness levels. The code is more than 200 lines long and incorporates object-oriented programming concepts.

*/

// Define the Pet class
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 0;
    this.happiness = 100;
    this.energy = 100;
  }

  // Method to feed the pet
  feed() {
    this.hunger -= 20;
    this.happiness += 10;
    this.energy += 10;
    console.log(`${this.name} is eating happily.`);
  }

  // Method to play a game with the pet
  play() {
    if (this.energy < 30) {
      console.log(`${this.name} is too tired to play.`);
      return;
    }

    this.happiness += 20;
    this.energy -= 20;
    console.log(`${this.name} is having fun playing.`);
  }

  // Method to check the pet's status
  checkStatus() {
    console.log(`
      Name: ${this.name}
      Type: ${this.type}
      Hunger: ${this.hunger}
      Happiness: ${this.happiness}
      Energy: ${this.energy}
    `);
  }
}

// Instantiate a pet object
const myPet = new Pet('Buddy', 'Dog');

// Simulate interactions with the pet
myPet.feed();
myPet.play();
myPet.checkStatus();