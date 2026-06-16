// Task 1: Employee Salary Management

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

let highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees With Salary Above ₹40,000");
console.log(highSalaryEmployees);

let firstHighSalaryEmployee = employees.find(function(employee) {
    return employee.salary > 60000;
});

console.log("\nFirst Employee With Salary Above ₹60,000");
console.log(firstHighSalaryEmployee);

let totalSalaryExpense = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("\nTotal Company Salary Expense : ₹" + totalSalaryExpense);

let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("\nEmployee Names");
console.log(employeeNames);

// Task 2: College Admission Form

function checkAdmission(student) {

    if (student.age >= 18) {

        if (student.percentage >= 60) {
            return "Admission Approved";
        } else {
            return "Admission Rejected - Percentage must be 60 or above";
        }

    } else {
        return "Admission Rejected - Age must be 18 or above";
    }
}

let student = {
    name: prompt("Enter Name:"),
    age: Number(prompt("Enter Age:")),
    percentage: Number(prompt("Enter Percentage:"))
};

let admissionStatus = checkAdmission(student);

console.log("Name :", student.name);
console.log("Age :", student.age);
console.log("Percentage :", student.percentage);
console.log("Admission Status :", admissionStatus);

// Task 3: E-Commerce Cart

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

let totalBill = cart.reduce(function(total, item) {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Bill : ₹" + totalBill);

let expensiveProduct = cart.reduce(function(highest, item) {
    if (item.price > highest.price) {
        return item;
    }
    return highest;
});

console.log("\nMost Expensive Product");
console.log("Product :", expensiveProduct.product);
console.log("Price : ₹" + expensiveProduct.price);

let productNames = cart.map(function(item) {
    return item.product;
});

console.log("\nProduct Names");
console.log(productNames);

// Task 4: Traffic Fine System

let signal = prompt("Enter Signal Color (red/yellow/green):");
let violatedRule = prompt("Did you violate the signal? (yes/no)");

let fine = 0;

switch (signal.toLowerCase()) {

    case "red":
        console.log("Action : Stop");
        if (violatedRule === "yes") {
            fine = 1000;
        }
        break;

    case "yellow":
        console.log("Action : Slow Down / Get Ready");
        if (violatedRule === "yes") {
            fine = 500;
        }
        break;

    case "green":
        console.log("Action : Go");
        if (violatedRule === "yes") {
            fine = 200;
        }
        break;

    default:
        console.log("Invalid Signal Color");
}

if (fine > 0) {
    console.log("Traffic Rule Violated");
    console.log("Fine Amount : ₹" + fine);
} else {
    console.log("No Fine");
}

// Task 5: Student Result Processing

let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

let passedStudents = students.filter(function(student) {
    return student.mark >= 50;
});

console.log("Passed Students");
console.log(passedStudents);

let failedStudents = students.filter(function(student) {
    return student.mark < 50;
});

console.log("\nFailed Students");
console.log(failedStudents);

let gradeList = students.map(function(student) {

    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return {
        name: student.name,
        mark: student.mark,
        grade: grade
    };
});

console.log("\nGrade List");
console.log(gradeList);

// Task 6: Online Food Delivery

function placeOrder(customerName, ...items) {

    console.log("Customer Name :", customerName);

    console.log("Ordered Items :");

    for (let item of items) {
        console.log(item);
    }

    console.log("Total Item Count :", items.length);
}

let customerName = prompt("Enter Customer Name:");

let item1 = prompt("Enter Item 1:");
let item2 = prompt("Enter Item 2:");
let item3 = prompt("Enter Item 3:");

placeOrder(customerName, item1, item2, item3);

// Task 7: Bank Account System

let balance = 10000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {

    if (amount <= balance) {
        balance -= amount;
        return balance;
    } else {
        console.log("Insufficient Balance");
        return balance;
    }
}

function checkBalance() {
    return balance;
}

let depositBalance = deposit(5000);
console.log("Balance After Deposit : ₹" + depositBalance);

let withdrawBalance = withdraw(3000);
console.log("Balance After Withdrawal : ₹" + withdrawBalance);

console.log("Current Balance : ₹" + checkBalance());

// Task 8: Movie Ticket Booking

let bookedSeats = [1, 5, 10, 15];

let seatNumber = Number(prompt("Enter Seat Number:"));

let available = true;

for (let seat of bookedSeats) {

    if (seat === seatNumber) {
        available = false;
        break;
    }
}

if (available) {
    bookedSeats.push(seatNumber);
    console.log("Seat Booked Successfully");
} else {
    console.log("Seat Already Booked");
}

console.log("Booked Seats :");

for (let seat of bookedSeats) {
    console.log(seat);
}

// Task 9: User Login Validation

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");
let email = prompt("Enter Email:");

if (username.includes(" ")) {

    console.log("Invalid Username");
    console.log("Username should not contain spaces");

} else if (password.length < 8) {

    console.log("Invalid Password");
    console.log("Password must contain at least 8 characters");

} else if (!email.includes("@")) {

    console.log("Invalid Email");
    console.log("Email must contain @");

} else {

    console.log("Login Validation Successful");
}

// Task 10: Product API Dashboard

fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        console.log("Product Titles");

        products.forEach(function(product) {
            console.log(product.title);
        });

        console.log("\nProducts Above ₹1000");

        products.forEach(function(product) {
            if (product.price > 1000) {
                console.log(product.title + " - ₹" + product.price);
            }
        });

        console.log("\nTotal Products :", products.length);
    })
    .catch(function(error) {
        console.log("Error :", error);
    });

    // Task 11: Birthday Day Finder

let dob = prompt("Enter Date of Birth (YYYY-MM-DD):");

let birthDate = new Date(dob);

let day = birthDate.getDate();
let month = birthDate.getMonth() + 1;
let year = birthDate.getFullYear();

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let weekdayName = weekdays[birthDate.getDay()];

console.log("Day :", day);
console.log("Month :", month);
console.log("Year :", year);
console.log("Weekday Name :", weekdayName);

// Task 12: Netflix Subscription System

let plan = prompt("Enter Plan (Mobile / Basic / Standard / Premium):");

let benefit =
    plan === "Mobile"
        ? "Watch on 1 Mobile Device"
        : plan === "Basic"
        ? "Watch on 1 Screen in HD"
        : plan === "Standard"
        ? "Watch on 2 Screens in Full HD"
        : plan === "Premium"
        ? "Watch on 4 Screens in Ultra HD"
        : "Invalid Plan";

console.log("Selected Plan :", plan);
console.log("Benefit :", benefit);

// Task 13: Hospital Patient Management

let patients = [
    { id: 1, name: "Rahul", condition: "Normal" },
    { id: 2, name: "Kiran", condition: "Critical" },
    { id: 3, name: "Deepthi", condition: "Normal" },
    { id: 4, name: "Ajay", condition: "Critical" }
];

let criticalPatients = patients.filter(function(patient) {
    return patient.condition === "Critical";
});

console.log("Critical Patients");
console.log(criticalPatients);

let patientId = Number(prompt("Enter Patient ID:"));

let patient = patients.find(function(patient) {
    return patient.id === patientId;
});

console.log("\nPatient Details");
console.log(patient);

console.log("\nTotal Patients :", patients.length);

// Task 14: Inventory Management System

let inventory1 = [
    { id: 1, productName: "Laptop", price: 50000 },
    { id: 2, productName: "Mobile", price: 25000 }
];

let inventory2 = [
    { id: 3, productName: "Headphone", price: 2000 },
    { id: 4, productName: "Smartwatch", price: 5000 }
];

let inventory = [...inventory1, ...inventory2];

console.log("Merged Inventory");
console.log(inventory);

let { id, productName, price } = inventory[0];

console.log("\nProduct Details");
console.log("ID :", id);
console.log("Product Name :", productName);
console.log("Price : ₹" + price);

let updatedInventory = [
    ...inventory,
    { id: 5, productName: "Tablet", price: 30000 },
    { id: 6, productName: "Keyboard", price: 1500 }
];

console.log("\nUpdated Inventory");
console.log(updatedInventory);

// Task 15: WhatsApp Group Management

let groupMembers = [
    "Ravindhra",
    "Kiran",
    "Deepthi",
    "Ajay"
];

console.log("Initial Group Members");
console.log(groupMembers);

groupMembers.push("Suresh");
groupMembers.unshift("Teja");

console.log("\nAfter Adding Members");
console.log(groupMembers);

groupMembers.pop();      // Removes last member
groupMembers.shift();    // Removes first member

console.log("\nAfter Removing Members");
console.log(groupMembers);

groupMembers.splice(2, 0, "Vijay");

console.log("\nAfter Inserting Member");
console.log(groupMembers);

console.log("\nFinal Group Members");

for (let member of groupMembers) {
    console.log(member);
}