// Task 1: Employee Bonus Calculator

let employeeName = prompt("Enter Employee Name:");
let salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

let finalSalary = salary + bonus;

console.log("Employee Name :", employeeName);
console.log("Salary : ₹" + salary);
console.log("Experience :", experience + " Years");
console.log("Bonus : ₹" + bonus);
console.log("Final Salary : ₹" + finalSalary);

// Task 2: College Admission System

let studentName = prompt("Enter Student Name:");
let age = Number(prompt("Enter Age:"));
let percentage = Number(prompt("Enter 12th Percentage:"));

if (age >= 17) {

    if (percentage >= 60) {
        console.log("Student Name :", studentName);
        console.log("Admission Approved");
    } else {
        console.log("Student Name :", studentName);
        console.log("Admission Rejected");
        console.log("Reason : Percentage should be at least 60%");
    }

} else {
    console.log("Student Name :", studentName);
    console.log("Admission Rejected");
    console.log("Reason : Age should be at least 17 years");
}

// Task 3: Food Delivery Menu

let choice = Number(prompt(
    "Select Food:\n1. Pizza\n2. Burger\n3. Shawarma\n4. Fried Rice"
));

switch (choice) {

    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Burger");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Selection");
}

// Task 4: Attendance Tracker

let students = [
    "Rahul",
    "Kiran",
    "Deepthi",
    "Ajay",
    "Deepak",
    "Suresh",
    "Ravindhra",
    "Arun",
    "Vijay",
    "Teja"
];

let totalStudents = 0;

console.log("Student List");

for (let student of students) {
    console.log(student);
    totalStudents++;
}

console.log("Total Students :", totalStudents);

// Task 5: E-Commerce Cart

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

console.log("Products in Cart");

for (let item of cart) {
    console.log(item.product);
}

let totalCartValue = 0;

for (let item of cart) {
    totalCartValue += item.price;
}

console.log("Total Cart Value : ₹" + totalCartValue);

let expensiveProduct = cart[0];

for (let item of cart) {
    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Most Expensive Product : " + expensiveProduct.product);
console.log("Price : ₹" + expensiveProduct.price);

// Task 6: Bank Account Management

let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited : ₹" + amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn : ₹" + amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Current Balance : ₹" + balance);
}

let depositAmount = Number(prompt("Enter Deposit Amount:"));
deposit(depositAmount);

let withdrawAmount = Number(prompt("Enter Withdraw Amount:"));
withdraw(withdrawAmount);

checkBalance();

// Task 7: Movie Ticket Booking

let Age = Number(prompt("Enter Your Age:"));

let ticketPrice = 0;

if (Age < 5) {
    ticketPrice = 0;
} else if (Age <= 18) {
    ticketPrice = 100;
} else if (Age <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

console.log("Age :", Age);

if (ticketPrice === 0) {
    console.log("Free Ticket");
} else {
    console.log("Ticket Price : ₹" + ticketPrice);
}

// Task 8: Online Shopping Discount

let purchaseAmount = Number(prompt("Enter Purchase Amount:"));

let discount = 0;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount : ₹" + purchaseAmount);
console.log("Discount : ₹" + discount);
console.log("Final Amount : ₹" + finalAmount);

// Task 9: Food Inventory System


let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

console.log("Initial Inventory:");
console.log(inventory);

inventory.push("Bread");
inventory.push("Tea Powder");

console.log("After Adding Items:");
console.log(inventory);

inventory.shift();

console.log("After Removing First Item:");
console.log(inventory);

inventory.pop();

console.log("After Removing Last Item:");
console.log(inventory);

if (inventory.includes("Milk")) {
    console.log("Milk is Available");
} else {
    console.log("Milk is Not Available");
}

console.log("Final Inventory:");
console.log(inventory);

// Task 10: Hospital Patient Management

let patient = {
    patientName: "Rahul",
    AGE: 35,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

console.log("Patient Details");

for (let key in patient) {
    console.log(key + " : " + patient[key]);
}

let { patientName, AGE, disease, doctor } = patient;

console.log("\nUsing Destructuring");

console.log("Patient Name :", patientName);
console.log("Age :", AGE);
console.log("Disease :", disease);
console.log("Doctor :", doctor);

// Task 11: Amazon Order Tracker

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");

    callback();
}

placeOrder(sendSMS);

// Task 12: Cashback Offer Generator

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next());
console.log(offers.next());
console.log(offers.next());
console.log(offers.next());
console.log(offers.next());

// Task 13: Employee Database

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

console.log("Employee Names");

for (let employee of employees) {
    console.log(employee.name);
}

let totalSalary = 0;

for (let employee of employees) {
    totalSalary += employee.salary;
}

console.log("\nTotal Salary Expense : ₹" + totalSalary);

let highestSalaryEmployee = employees[0];

for (let employee of employees) {
    if (employee.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = employee;
    }
}

console.log("\nEmployee With Highest Salary");
console.log("ID :", highestSalaryEmployee.id);
console.log("Name :", highestSalaryEmployee.name);
console.log("Salary : ₹" + highestSalaryEmployee.salary);

// Task 14: Railway Reservation System

let totalSeats = 50;

function bookSeats(seatsRequired) {

    if (seatsRequired <= totalSeats) {

        totalSeats -= seatsRequired;

        console.log("Booking Successful");
        console.log("Seats Booked :", seatsRequired);
        console.log("Available Seats :", totalSeats);

    } else {

        console.log("Booking Rejected");
        console.log("Seats Unavailable");
    }
}

let seats = Number(prompt("Enter Number of Seats Required:"));

bookSeats(seats);

// Task 15: Mobile Store Billing System

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let product1 = prompt("Enter Product 1:");
let product2 = prompt("Enter Product 2:");

let totalAmount = 0;

console.log("Selected Products");

if (products[product1]) {
    console.log(product1 + " - ₹" + products[product1]);
    totalAmount += products[product1];
}

if (products[product2]) {
    console.log(product2 + " - ₹" + products[product2]);
    totalAmount += products[product2];
}

let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

console.log("Total Amount : ₹" + totalAmount);
console.log("GST (18%) : ₹" + gst);
console.log("Final Bill : ₹" + finalBill);