// Task 1: Employee Salary Calculator Scenario

let basicSalary = 25000;

let hra = basicSalary * 0.20;
let bonus = basicSalary * 0.10;

let totalSalary = basicSalary + hra + bonus;

let tax = totalSalary * 0.05;

let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);

// Student Grade System Scenario

let marks = 75;

console.log("Marks :", marks);

if (marks >= 90 && marks <= 100) {
    console.log("Grade : A+");
} else if (marks >= 80) {
    console.log("Grade : A");
} else if (marks >= 70) {
    console.log("Grade : B");
} else if (marks >= 60) {
    console.log("Grade : C");
} else {
    console.log("Grade : Fail");
}

// Task 3: Login Authentication System Scenario

let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login Success");
        console.log("Welcome Admin!");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

// Task 4: ATM Withdrawal Machine Scenario

let balance = 5000;
let withdrawalAmount = 2000;

console.log("Current Balance :", balance);
console.log("Withdrawal Amount :", withdrawalAmount);

if (withdrawalAmount > balance) {
    console.log("Transaction Failed : Insufficient Balance");
} else {
    balance -= withdrawalAmount;

    console.log("Transaction Status : Withdrawal Success");
    console.log("Remaining Balance :", balance);
}

// Task 5: E-Commerce Discount System Scenario

let purchaseAmount = 7500;
let discount = 0;

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 0.05;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

// Task 6: Traffic Fine Checker Scenario

let helmet = "No";
let license = "Yes";
let fine = 0;

if (helmet === "No" && license === "No") {
    fine = 3000;
} else if (helmet === "No") {
    fine = 1000;
} else if (license === "No") {
    fine = 2000;
} else {
    fine = 0;
}

console.log("Helmet :", helmet);
console.log("License :", license);
console.log("Fine Amount : ₹" + fine);

// Employee Attendance Tracker Scenario

let attendance = ["P", "P", "A", "P", "A", "P", "P"];

let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days :", presentDays);
console.log("Absent Days :", absentDays);

// Task 8: Product Inventory Management Scenario

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};


for (let key in product) {
    console.log(key + " : " + product[key]);
}

if (product.stock > 0) {
    console.log("Status : In Stock");
} else {
    console.log("Status : Out of Stock");
}

// Task 9: Cab Fare Calculator Scenario

let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
} else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Distance Travelled :", distance + " KM");
console.log("Total Fare : ₹" + fare);

// Task 10: Mini Employee Management System (Real Company Task) Requirements

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

let highestSalary = employees[0];
let lowestSalary = employees[0];

console.log("Employee Details");

for (let i = 0; i < employees.length; i++) {

    console.log(
        "ID :", employees[i].id,
        "| Name :", employees[i].name,
        "| Salary :", employees[i].salary
    );

    totalSalary += employees[i].salary;

    if (employees[i].salary > highestSalary.salary) {
        highestSalary = employees[i];
    }

    if (employees[i].salary < lowestSalary.salary) {
        lowestSalary = employees[i];
    }
}

console.log("\nTotal Employees :", employees.length);

console.log(
    "Highest Salary Employee :",
    highestSalary.name,
    "-",
    highestSalary.salary
);

console.log(
    "Lowest Salary Employee :",
    lowestSalary.name,
    "-",
    lowestSalary.salary
);

console.log("Total Salary Expenditure :", totalSalary);