// Task 1: Student Result Checker

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

let grade =
  marks >= 90 ? "Grade A" :
  marks >= 75 ? "Grade B" :
  marks >= 60 ? "Grade C" :
  "No Grade";

console.log("Marks:", marks);
console.log("Result:", result);
console.log("Grade:", grade);


// Task 2: Employee Bonus Calculator

let salary = 25000;
let bonus = salary * 0.1;
let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);

// Task 3: User Login Validation

let email = "admin@gmail.com";
let password = "12345";

let isValidLogin  = email === "admin@gmail.com" && password === "12345"
    ? "Login Success"
    : "Login Failed";

console.log(isValidLogin);

// Task 4: Product Discount Calculator

let price = 2000;
let finalAmount = price > 1000 ? price * 0.8 : price;
console.log('Final Amount :', finalAmount);

// Task 5: Array Product Management

let products = ["Laptop","Mobile","Mouse","Keyboard"];
console.log('First Product :', products[0]);
console.log('Last Product :', products[products.length - 1]);
console.log('Total Products :', products.length);

// Task 6:  Employee Object

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log('Employee Details :', employee);
console.log('Employee Name :', employee.name);
console.log('Employee Salary :', employee.salary);

// Task 7: E-Commerce Cart Total

let shirt = 500;
let pant = 1000;
let shoe = 1500;
let totalBill = shirt + pant + shoe;
let discountedTotal = totalBill * 0.9;

console.log("Total Bill:", totalBill);
console.log("Discount:", totalBill - discountedTotal);
console.log('Final Amount :', discountedTotal);

// Task 8: Age Eligibility Checker

let age = 19;

let results = age >= 18 ? "Eligible for Voting" : "Not Eligible";

console.log(results);

// Task 9: Increment Decrement Practice
let a = 10;
console.log('Initial a :', a);
a++;
console.log('After a++ :', a);
++a;
console.log('After ++a :', a);
a--;
console.log('After a-- :', a);
--a;
console.log('After --a :', a);

// Task 10: Mini Employee Attendance System

let isPresent = true;
let completedTask = true;

console.log(
    isPresent && completedTask
        ? "Eligible for Salary"
        : "Not Eligible"
);

// Bonus Company-Level Task

// Employee Management Console App

{
  let employee = {
      id: 101,
      name: "John",
      department: "Development",
      salary: 35000,
      experience: 2
  };

  console.log('Employee ID :', employee.id);
  console.log('Employee Name :', employee.name);
  console.log('Department :', employee.department);
  console.log('Salary :', employee.salary);
  console.log('Experience :', employee.experience + ' Years');

  let bonus = employee.salary * 0.1;
  let finalSalary = employee.salary + bonus;

  console.log('');
  console.log('Bonus :', bonus);
  console.log('Final Salary :', finalSalary);

  console.log('');
  let performance = employee.experience >= 2 ? 'Good' : 'Average';
  console.log('Performance Status :', performance);
}
