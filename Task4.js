// Task 1: Age Category Finder

let age = prompt("Enter your age:");

age = Number(age);

if (age >= 0 && age <= 12) {
    alert("You are a Child");
    console.log("Age: " + age + " → Child");
} else if (age >= 13 && age <= 19) {
    alert("You are a Teenager");
    console.log("Age: " + age + " → Teenager");
} else if (age >= 20 && age <= 59) {
    alert("You are an Adult");
    console.log("Age: " + age + " → Adult");
} else if (age >= 60) {
    alert("You are a Senior Citizen");
    console.log("Age: " + age + " → Senior Citizen");
} else {
    alert("Please enter a valid age (number >= 0)");
    console.log("Invalid input");
}

// Task 2: Salary Hike Calculator

let salary = Number(prompt("Enter Salary:"));
let hike = 0;

if (salary < 20000) {
    hike = salary * 0.20;
} else if (salary <= 50000) {
    hike = salary * 0.10;
} else {
    hike = salary * 0.05;
}

let newSalary = salary + hike;

console.log("Old Salary :", salary);
console.log("Hike Amount :", hike);
console.log("New Salary :", newSalary);

// Task 3: Electricity Department

let units = Number(prompt("Enter units consumed:"));
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Units Consumed :", units);
console.log("Total Bill : ₹" + bill);

// Task 4: Simple ATM

let balance = 10000;
let withdrawAmount = Number(prompt("Enter withdrawal amount:"));

console.log("Current Balance : ₹" + balance);

if (withdrawAmount <= balance) {
    balance -= withdrawAmount;

    console.log("Transaction Status : Successful");
    console.log("Withdrawal Amount : ₹" + withdrawAmount);
    console.log("Remaining Balance : ₹" + balance);
} else {
    console.log("Transaction Failed");
    console.log("Insufficient Funds");
}

// Task 5: Login Validation

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// Task 6: Mobile Recharge Offer

let rechargeAmount = Number(prompt("Enter recharge amount:"));

if (rechargeAmount >= 499) {
    console.log("Netflix Offer");
} else if (rechargeAmount >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}

// Task 7: Traffic Signal System

let color = prompt("Enter Signal Color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}

// Task 8: Employee Attendance

let workingDays = Number(prompt("Enter Total Working Days:"));
let presentDays = Number(prompt("Enter Present Days:"));

let attendancePercentage = (presentDays / workingDays) * 100;

console.log("Working Days :", workingDays);
console.log("Present Days :", presentDays);
console.log("Attendance Percentage :", attendancePercentage.toFixed(2) + "%");

if (attendancePercentage >= 75) {
    console.log("Status : Eligible");
} else {
    console.log("Status : Not Eligible");
}

// Task 9: Bus Ticket Booking

let ticketPrice = 500;
let numberOfTickets = Number(prompt("Enter Number of Tickets:"));

let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

console.log("Ticket Price : ₹" + ticketPrice);
console.log("Tickets Booked :", numberOfTickets);
console.log("Total Amount : ₹" + totalAmount);
console.log("GST (5%) : ₹" + gst);
console.log("Final Amount : ₹" + finalAmount);

// Task 10: Restaurant Bill

let foodCost = Number(prompt("Enter Food Cost:"));

let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 0.10;
}

let finalBill = foodCost - discount;

console.log("Food Cost : ₹" + foodCost);
console.log("Discount : ₹" + discount);
console.log("Final Bill : ₹" + finalBill);

// Task 11: Police Recruitment

let applicantAge = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height in cm:"));
let weight = Number(prompt("Enter Weight in kg:"));

if (applicantAge >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Police Recruitment Status : Eligible");
        } else {
            console.log("Police Recruitment Status : Rejected");
            console.log("Reason : Weight must be at least 55 kg");
        }
    } else {
        console.log("Police Recruitment Status : Rejected");
        console.log("Reason : Height must be at least 160 cm");
    }
} else {
    console.log("Police Recruitment Status : Rejected");
    console.log("Reason : Age must be at least 18 years");
}

// Task 12: Student Result


let m1 = Number(prompt("Enter Subject 1 Marks:"));
let m2 = Number(prompt("Enter Subject 2 Marks:"));
let m3 = Number(prompt("Enter Subject 3 Marks:"));
let m4 = Number(prompt("Enter Subject 4 Marks:"));
let m5 = Number(prompt("Enter Subject 5 Marks:"));

let total = m1 + m2 + m3 + m4 + m5;
let percentage = total / 5;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total Marks :", total);
console.log("Percentage :", percentage.toFixed(2) + "%");
console.log("Grade :", grade);

// Task 13: Employee Shift Finder

let time = Number(prompt("Enter Working Hour (0-23):"));

if (time >= 6 && time < 14) {
    console.log("Shift : Morning");
} else if (time >= 14 && time < 22) {
    console.log("Shift : Afternoon");
} else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
    console.log("Shift : Night");
} else {
    console.log("Invalid Time");
}

// Task 14: Loan Eligibility

let Age = Number(prompt("Enter Age:"));
let Salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

if (Age >= 21 && Salary >= 25000 && experience >= 2) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}

// Task 15: Cab Fare Calculator

let distance = Number(prompt("Enter Distance (KM):"));

let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Distance Travelled :", distance + " KM");
console.log("Total Fare : ₹" + fare);

// Task 16: Multiplication Table Generator

let number = Number(prompt("Enter a Number:"));

console.log("Multiplication Table for :", number);

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Task 17: Password Checker

let Password = prompt("Enter Password:");

let length = Password.length;

if (length < 6) {
    console.log("Password Strength : Weak");
} else if (length <= 10) {
    console.log("Password Strength : Medium");
} else {
    console.log("Password Strength : Strong");
}

// Task 18: Company Bonus System

let Employeesalary = Number(prompt("Enter Salary:"));
let Experience = Number(prompt("Enter Experience (Years):"));

let bonus = 0;

if (Experience >= 0 && Experience <= 2) {
    bonus = Employeesalary * 0.05;
} else if (Experience >= 3 && Experience <= 5) {
    bonus = Employeesalary * 0.10;
} else if (Experience >= 6) {
    bonus = Employeesalary * 0.20;
}

let finalSalary = Employeesalary + bonus;

console.log("Salary : ₹" + Employeesalary);
console.log("Experience : " + Experience + " Years");
console.log("Bonus : ₹" + bonus);
console.log("Final Salary : ₹" + finalSalary);

// Task 19: Countdown Timer

let timer = 10;

console.log("Countdown Started...");

while (timer >= 1) {
    console.log(timer);
    timer--;
}

console.log("Happy New Year 🎉");

// Task 20: Interview Selection System

let degreeCompleted = prompt("Degree Completed? (Yes/No)");
let communication = prompt("Communication Skill (Good/Poor)");
let technicalScore = Number(prompt("Enter Technical Score:"));

if (degreeCompleted.toLowerCase() === "yes") {

    if (communication.toLowerCase() === "good") {

        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected");
            console.log("Reason: Technical Score is below 70");
        }

    } else {
        console.log("Rejected");
        console.log("Reason: Communication Skill is not Good");
    }

} else {
    console.log("Rejected");
    console.log("Reason: Degree is not Completed");
}