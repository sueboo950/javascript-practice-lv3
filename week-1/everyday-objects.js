
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  startEngine() {
    console.log(`The engine of ${this.make} ${this.model} is now running.`);
  }
}

// Define similar classes for Phone, Book, Laptop, and Backpack...



// TODO: Create and test other instances for Phone, Book, Laptop, and Backpack...
// Class: Phone
// Properties: brand, model, batteryLife
// Methods:
// makeCall(number): Logs "Calling [number] from [brand] [model]."
// batteryStatus(): Logs "Battery life is at [batteryLife]%."

class Phone{
  constructor(brand, model, batterylife){
    this.brand = brand;
    this.model = model;
    this.batterylife = batterylife;
  }
  makecall(number){
    console.log(`calling ${number} from ${this.brand} ${this.model}.`);
  }
  batterystatus(){
    console.log(`Battery life is at ${this.batterylife}%`);
  }
}
// Class: Book
// Properties: title, author, pages
// Methods:
// getSummary(): Returns a string with the book’s title and author (e.g., "The Great Gatsby by F. Scott Fitzgerald").
// readPage(): Logs "You read a page from [title]."

class Book{
  constructor(title, author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  getsummary(){
    return `${this.title} by ${this.author}.`;
  }

  readpage() {
    console.log(`you read a page from ${this.title}.`);
  }
}
// Class: Laptop
// Properties: brand, model, ramSize
// Methods:
// bootUp(): Logs "The [brand] [model] is booting up with [ramSize]GB RAM."
// shutDown(): Logs "The [brand] [model] is shutting down."
class Laptop{
  constructor(brand, model,ramsize){
    this.brand = brand;
    this.model = model;
    this.ramsize = ramsize;
}
}
// Class: Backpack
// Properties: brand, color, capacity
// Methods:
// open(): Logs "Opening the [color] [brand] backpack."
// checkCapacity(): Logs "This backpack has a capacity of [capacity] liters."

export { Car };