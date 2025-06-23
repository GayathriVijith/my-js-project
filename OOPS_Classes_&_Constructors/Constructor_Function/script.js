// function Pizza(toppings, size, crustType){
//     this.toppings = toppings;
//     this.y = size;
//     this.z = crustType;

//     this.describe = function(){
//         console.log(`A ${this.y} pizza with ${this.toppings.join(",")} on a ${this.z} crust.`);
//     };
// }
// const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
// const customerOrder2 = new Pizza(["veggie", "pepperoni"], "large", "thick");
// customerOrder1.describe();
// customerOrder2.describe();
// --------------------------------------------------------------------

// Define the base Pizza class
// class Pizza {
//     static totalPizzasMade = 0;
//     constructor(toppings, size, crustType) {
//     this.toppings = toppings;
//     this.size = size;
//     this.crustType = crustType;
//     Pizza.totalPizzasMade++;
//     }
//     describe() {
//     console.log(
//     `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
//     this.crustType
//     } crust.`
//     );
//     }
//     static calculateTotalPizzasMade(){
//         console.log(`Total Pizzas Made : ${Pizza.totalPizzasMade}`);
//     }
//     }
//     // Define the StuffedCrustPizza class that extends Pizza
//     class StuffedCrustPizza extends Pizza {
//     constructor(toppings, size, crustType, stuffingType) {
//     super(toppings, size, crustType); // Call the parent class constructor with super
//     this.stuffingType = stuffingType; // New property specific to StuffedCrustPizza
//     }
//     describeStuffing() {
//     console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`);
//     }
//     // Overriding the describe method
//     describe() {
//     super.describe(); // Call the describe method from the parent class
//     this.describeStuffing(); // Additional description for the stuffing
//     }
//     }
//     // Creating instances and calling methods to demonstrate functionality
//     const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
//     customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.
//     const customerOrder2 = new Pizza(["veggies", "pepperoni"], "small", "thick");
//     customerOrder2.describe(); // Output: A small pizza with veggies, pepperoni on a thick crust.
//     const specialOrder = new StuffedCrustPizza(
//     ["cheese", "mushrooms"],
//     "large",
//     "thick",
//     "cheese and garlic"
//     );
//     specialOrder.describe();
//     Pizza.calculateTotalPizzasMade(); 

// ----------------------------------------------------------------------------
// class Pizza {
//     static totalPizzasMade = 0; // Static property to keep count

//     #toppings;
//     #size;
//     #crustType;

//     constructor(toppings, size, crustType) {
//     this.#toppings = toppings;
//     this.#size = size;
//     this.#crustType = crustType;
//     Pizza.totalPizzasMade++; // Increment the count each time a new pizza is made
//     }
//     describe() {
//     console.log(
//     `A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${
//     this.#crustType
//     } crust.`
//     );
//     }
//     // Static method
//     static calculateTotalPizzasMade() {
//     console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
//     }
//     }
//     // Define the StuffedCrustPizza class that extends Pizza
//     class StuffedCrustPizza extends Pizza {
//     #stuffingType
//     constructor(toppings, size, crustType, stuffingType) {
//     super(toppings, size, crustType); // Call the parent class constructor with super
//     this.#stuffingType = stuffingType; // New property specific to StuffedCrustPizza
//     }
//     describeStuffing() {
//     console.log(`This pizza has ${this.#stuffingType} stuffing in the crust.`);
//     }
//     // Overriding the describe method
//     describe() {
//     super.describe(); // Call the describe method from the parent class
//     this.describeStuffing(); // Additional description for the stuffing
//     }
//     }
//     // Creating instances and calling methods to demonstrate functionality
//     const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
//     customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.
//     const customerOrder2 = new Pizza(["veggies", "pepperoni"], "small", "thick");
//     customerOrder2.describe(); // Output: A small pizza with veggies, pepperoni on a thick crust.
//     const specialOrder = new StuffedCrustPizza(
//     ["cheese", "mushrooms"],
//     "large",
//     "thick",
//     "cheese and garlic"
//     );
//     specialOrder.describe();
//     // Expected output:
//     // A large pizza with cheese, mushrooms on a thick crust.
//     // This pizza has cheese and garlic stuffing in the crust.
//     Pizza.calculateTotalPizzasMade(); // Output: Total pizzas made: 3
//     console.log(specialOrder.toppings);
//    //  console.log(specialOrder.#toppings); //syntax error

// ----------------------------------------------------------------------
// class BankAccount {
//     // static nextAccountNumber = 1000;

//     #accountNumber;
//     #balance;
    
//     constructor() {
//     // this.#accountNumber = BankAccount.nextAccountNumber++;  //inside a class, methods are not global,
//     //they belong to the object (to this). That’s why inside class methods or constructors,
//     //you must always call this.methodName(). this.#accountNumber = this.generateAccountNumber() 
//     //Saved first random number at creation time
//     this.#accountNumber = this.generateAccountNumber();
//       this.#balance = 0;
//     }
  
//     generateAccountNumber() {
//       return Math.floor(Math.random() * 1000000000);
//     }
  
//     getAccountNumber(){
//         return this.#accountNumber;
//     }
    
//     getBalance(){
//         return this.#balance;
//     }

//     deposit(amount) {
//         this.#balance = this.#balance+amount;
//         return this.#balance;
//     }
  
//     withdraw(amount) {
//         if(this.#balance > amount){
//             this.#balance = this.#balance - amount;
//             return this.#balance;
//             // return amount;
//         }
//         else{
//             return "Insufficient funds";
//         }
//     }
//   }
// const myAccount1 = new BankAccount();
// console.log("account number:", myAccount1.getAccountNumber());//generateAccountNumber(), 
// // when called twice at the same time generates random numbers, 
// // but in case of getAccountNumber is not like that.
// // const myAccount2 = new BankAccount();
// // console.log("account number:", myAccount2.getAccountNumber());

// // console.log("Balance after deposit:", myAccount1.deposit(2000));
// // console.log("Balance after deposit:", myAccount1.deposit(1000));
// // console.log("Balance after withdrawal:", myAccount1.withdraw(500));
// // console.log("withdrawal:", myAccount1.withdraw(3000));
// // console.log("Balance fetch Using getBalance Function:", myAccount1.getBalance());
// // myAccount1.deposit(1000); //(without logging), the balance gets updated internally 
// // but you won't see anything printed.
// // myAccount1.withdraw(500); 
// // console.log("Balance fetch Using getBalance Function:", myAccount1.getBalance());
// ------------------------------------------------------------------------------------------

// class Car{
//  #batterylevel;
//  constructor(brand, batterylevel){
//     this.brand = brand;
//     this.#batterylevel = batterylevel;
//  }
//  carBrand(){
//     console.log(`The ${this.brand} car holds upto ${this.#batterylevel}`);
//  }
// }
// class ElectricCar extends Car{
// constructor(brand, batterylevel){
// super(brand, batterylevel);
// }
// }
// const cars = new ElectricCar("Toyota", "1500mpH");
// cars.carBrand();

// // Thing  | Can child access directly? | Why?
// // this.#batterylevel inside ElectricCar | ❌ No | Private fields are local to defining class
// // Pass value via super() to parent class | ✅ Yes | Parent class handles the private field