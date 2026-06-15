// Task 1: Traffic Signal Management

let signalColor = prompt("Enter Signal Color:");

switch (signalColor) {

    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}

// Task 2: Employee Attendance Report

for (let i = 1; i <= 30; i++) {
    let attendance = "Employee " + i + " Present";
    console.log(attendance);
}

// Task 3: ATM Cash Withdrawal

let balance = 10000;

while (balance > 0) {
    balance = balance - 500;
    console.log("Remaining Balance : ₹" + balance);
}

// Task 4: College Admission Eligibility

let age = Number(prompt("Enter Age:"));
let percentage = Number(prompt("Enter Percentage:"));
let entranceExam = prompt("Entrance Exam Passed? (yes/no)");

if (age >= 18) {

    if (percentage >= 70) {

        if (entranceExam.toLowerCase() === "yes") {
            console.log("Admission Approved");
        } else {
            console.log("Admission Rejected");
            console.log("Reason: Entrance Exam Not Passed");
        }

    } else {
        console.log("Admission Rejected");
        console.log("Reason: Percentage Must Be At Least 70");
    }

} else {
    console.log("Admission Rejected");
    console.log("Reason: Age Must Be At Least 18");
}

// Task 5: Food Delivery Status

function deliveryStatus(customerName, foodItem, deliveryAddress) {

    console.log("Order Confirmed");
    console.log("Customer Name :", customerName);
    console.log("Food Item :", foodItem);
    console.log("Delivery Address :", deliveryAddress);
    console.log("Your order is on the way!");
}

let customerName = prompt("Enter Customer Name:");
let foodItem = prompt("Enter Food Item:");
let deliveryAddress = prompt("Enter Delivery Address:");

deliveryStatus(customerName, foodItem, deliveryAddress);

// Task 6: Salary Processing System

function calculateSalary(basicSalary) {

    return basicSalary;
}

function calculateBonus(salary) {

    let bonus = salary * 0.10;

    console.log("Salary : ₹" + salary);
    console.log("Bonus : ₹" + bonus);
    console.log("Final Salary : ₹" + (salary + bonus));
}

let basicSalary = Number(prompt("Enter Salary:"));

let salary = calculateSalary(basicSalary);

calculateBonus(salary);

// Task 7: E-commerce Discount Engine

function generateInvoice(finalAmount) {

    console.log("Invoice Generated");
    console.log("Final Amount : ₹" + finalAmount);
}

function applyDiscount(amount, callback) {

    let discount = amount * 0.10;
    let finalAmount = amount - discount;

    console.log("Original Amount : ₹" + amount);
    console.log("Discount : ₹" + discount);

    callback(finalAmount);
}

let amount = Number(prompt("Enter Purchase Amount:"));

applyDiscount(amount, generateInvoice);

// Task 8: Promotional Offers

function* promotionalOffers() {

    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = promotionalOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task 9: Student Database Merge

let scienceStudents = ["Rahul", "Ravindhra", "Deepthi"];
let commerceStudents = ["Ajay", "Teja", "Vijay"];

let allStudents = [...scienceStudents, ...commerceStudents];

for (let student of allStudents) {
    console.log(student);
}

// Task 10: Online Exam System

function calculateMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Student Name:", studentName);
    console.log("Total Marks:", total);
}

let studentName = prompt("Enter Student Name:");
let mark1 = Number(prompt("Enter Subject 1 Mark:"));
let mark2 = Number(prompt("Enter Subject 2 Mark:"));
let mark3 = Number(prompt("Enter Subject 3 Mark:"));

calculateMarks(studentName, mark1, mark2, mark3);

// Task 11: Employee Profile

let employee = {
    name: "Rahul",
    department: "Development",
    Salary: 35000,
    experience: 3
};

let { name, department, Salary, experience } = employee;

console.log("Name :", name);
console.log("Department :", department);
console.log("Salary : ₹" + Salary);
console.log("Experience :", experience + " Years");

// Task 12: Product Inventory Filter

let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Mobile",
        price: 25000,
        category: "Electronics"
    },
    {
        name: "Headphone",
        price: 3000,
        category: "Accessories"
    },
    {
        name: "Smartwatch",
        price: 8000,
        category: "Electronics"
    }
];

let expensiveProducts = products.filter(function(product) {
    return product.price > 5000;
});

console.log("Products Above ₹5000");

for (let product of expensiveProducts) {
    console.log(product.name);
    console.log("Price : ₹" + product.price);
    console.log("Category :", product.category);
}

// Task 13: Find First Premium Customer

let customers = [
    {
        name: "Rahul",
        purchaseAmount: 25000
    },
    {
        name: "Kiran",
        purchaseAmount: 45000
    },
    {
        name: "Deepthi",
        purchaseAmount: 60000
    },
    {
        name: "Ajay",
        purchaseAmount: 80000
    }
];

let premiumCustomer = customers.find(function(customer) {
    return customer.purchaseAmount > 50000;
});

console.log("First Premium Customer");
console.log("Name :", premiumCustomer.name);
console.log("Purchase Amount : ₹" + premiumCustomer.purchaseAmount);

// Task 14: Company Expense Tracker

let expenses = [15000, 25000, 10000, 30000, 20000];

let totalExpenses = expenses.reduce(function(total, expense) {
    return total + expense;
}, 0);

console.log("Company Expenses :", expenses);
console.log("Total Company Expenses : ₹" + totalExpenses);

// Task 15: Gaming Tournament Verification

let players = [
    { name: "Rahul", age: 22 },
    { name: "Kiran", age: 25 },
    { name: "Deepthi", age: 20 },
    { name: "Ajay", age: 19 }
];

let eligiblePlayers = players.every(function(player) {
    return player.age > 18;
});

if (eligiblePlayers) {
    console.log("All Players Are Eligible For The Tournament");
} else {
    console.log("Some Players Are Not Eligible For The Tournament");
}

// Task 16: Job Portal Search

let candidates = [
    { name: "Rahul", skill: "Java" },
    { name: "Ravi", skill: "React" },
    { name: "Deepthi", skill: "React" },
    { name: "Ajay", skill: "Node.js" }
];

let reactCandidate = candidates.some(function(candidate) {
    return candidate.skill === "React";
});

if (reactCandidate) {
    console.log("At Least One Candidate Knows React");
} else {
    console.log("No Candidate Knows React");
}

// Task 17: Mobile Number Validator

let mobileNumber = prompt("Enter Mobile Number:");

if (
    mobileNumber.length === 10 &&
    (
        mobileNumber.startsWith("6") ||
        mobileNumber.startsWith("7") ||
        mobileNumber.startsWith("8") ||
        mobileNumber.startsWith("9")
    )
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

// Task 18: URL Slug Generator

let title = prompt("Enter Course Title:");

let slug = title.split(" ").join("-").toLowerCase();

console.log(slug);

// Task 19: Employee Sorting Dashboard

let employees = [
    { name: "Ravindra", salary: 25000 },
    { name: "Kiran", salary: 40000 },
    { name: "Deepthi", salary: 30000 },
    { name: "JungKook", salary: 50000 }
];

employees.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Highest To Lowest Salary");

for (let employee of employees) {
    console.log(employee.name + " - ₹" + employee.salary);
}

employees.sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("\nLowest To Highest Salary");

for (let employee of employees) {
    console.log(employee.name + " - ₹" + employee.salary);
}

// Task 20: Movie Booking System

let movies = [
    "Pushpa 2",
    "Salaar",
    "Kalki 2898 AD",
    "Devara"
];

let bookingIds = movies.map(function(movie, index) {
    return "BK" + (index + 1);
});

console.log("Movies :", movies);
console.log("Booking IDs :", bookingIds);