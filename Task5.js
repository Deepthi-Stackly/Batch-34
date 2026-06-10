// Task 1: Student Management System

let students = [
    {
        id: 1,
        name: "Ravi",
        department: "CSE",
        mark: 95
    },
    {
        id: 2,
        name: "Deepthi",
        department: "ECE",
        mark: 82
    },
    {
        id: 3,
        name: "Arjun",
        department: "MECH",
        mark: 76
    },
    {
        id: 4,
        name: "Sneha",
        department: "EEE",
        mark: 48
    },
    {
        id: 5,
        name: "Kiran",
        department: "CIVIL",
        mark: 67
    }
];

students.forEach(student => {
    console.log(student.name);
});

let totalMarks = students.reduce((total, student) => total + student.mark, 0);
console.log("\nTotal Marks:", totalMarks);

let topStudents = students.filter(student => student.mark > 80);

console.log("\nStudents Scored Above 80:");
topStudents.forEach(student => {
    console.log(student.name);
});

function getGrade(mark) {
    if (mark >= 90) {
        return "A";
    } else if (mark >= 75) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

function printStudentDetails(student) {
    console.log(`
ID: ${student.id}
Name: ${student.name}
Department: ${student.department}
Mark: ${student.mark}
Grade: ${getGrade(student.mark)}
`);
}

console.log("\nStudent Details:");
students.forEach(printStudentDetails);

// Task 2: Employee Payroll System

let employees = [
    {
        id: 101,
        name: "Rahul",
        salary: 25000,
        department: "IT"
    },
    {
        id: 102,
        name: "Kiran",
        salary: 35000,
        department: "HR"
    },
    {
        id: 103,
        name: "Navi",
        salary: 45000,
        department: "Finance"
    },
    {
        id: 104,
        name: "Ajay",
        salary: 28000,
        department: "Admin"
    },
    {
        id: 105,
        name: "Deepak",
        salary: 50000,
        department: "IT"
    }
];

function getDepartmentDescription(department) {

    switch (department) {

        case "IT":
            return "Information Technology";

        case "HR":
            return "Human Resources";

        case "Finance":
            return "Finance Department";

        case "Admin":
            return "Administration Department";

        default:
            return "Unknown Department";
    }
}

function generatePayrollReport(employee) {
    console.log("ID :", employee.id);
    console.log("Name :", employee.name);
    console.log("Salary : ₹" + employee.salary);
    console.log("Department :", getDepartmentDescription(employee.department));
}

function payrollProcessor(callback) {
    for (let employee of employees) {
        callback(employee);
    }
}

for (let employee of employees) {
    console.log(employee.name);
}

let totalSalaryExpense = 0;

for (let employee of employees) {
    totalSalaryExpense += employee.salary;
}

console.log("\nTotal Company Salary Expense : ₹" + totalSalaryExpense);

console.log("\nEmployees Earning Above ₹30,000");

for (let employee of employees) {
    if (employee.salary > 30000) {
        console.log(employee.name + " - ₹" + employee.salary);
    }
}

console.log("\nPayroll Report");

payrollProcessor(generatePayrollReport);

// Task 3: Online Food Order System

let foods = [
    {
        id: 1,
        foodName: "Pizza",
        price: 250,
        category: "FastFood"
    },
    {
        id: 2,
        foodName: "Burger",
        price: 180,
        category: "FastFood"
    },
    {
        id: 3,
        foodName: "Biryani",
        price: 300,
        category: "MainCourse"
    },
    {
        id: 4,
        foodName: "Ice Cream",
        price: 120,
        category: "Dessert"
    },
    {
        id: 5,
        foodName: "Paneer Curry",
        price: 220,
        category: "MainCourse"
    }
];

function getCategoryDescription(category) {

    switch (category) {

        case "FastFood":
            return "Quick Snacks and Fast Food";

        case "MainCourse":
            return "Main Course Meals";

        case "Dessert":
            return "Sweet Desserts";

        default:
            return "Unknown Category";
    }
}

function orderConfirmation(food) {
    console.log("Order Confirmed");
    console.log("Food Name :", food.foodName);
    console.log("Price : ₹" + food.price);
    console.log("Category :", getCategoryDescription(food.category));
}

function processOrders(callback) {
    for (let food of foods) {
        callback(food);
    }
}

for (let food of foods) {
    console.log(food.foodName);
}

let totalMenuValue = 0;

for (let food of foods) {
    totalMenuValue += food.price;
}

console.log("\nTotal Menu Value : ₹" + totalMenuValue);

console.log("\nFoods Above ₹200");

for (let food of foods) {
    if (food.price > 200) {
        console.log(food.foodName + " - ₹" + food.price);
    }
}

console.log("\nOrder Confirmation Report");

processOrders(orderConfirmation);

// Task 4: Movie Ticket Booking System

let movies = [
    {
        movieName: "Pushpa 2",
        ticketPrice: 250,
        availableSeats: 50,
        language: "Telugu"
    },
    {
        movieName: "Leo",
        ticketPrice: 200,
        availableSeats: 30,
        language: "Tamil"
    },
    {
        movieName: "Jawan",
        ticketPrice: 220,
        availableSeats: 0,
        language: "Hindi"
    }
];

movies.forEach(movie => {
    console.log(movie.movieName);
});

let totalSeats = movies.reduce((total, movie) => {
    return total + movie.availableSeats;
}, 0);

console.log("\nTotal Available Seats:", totalSeats);

let selectedMovie = movies[0];
let requiredSeats = 5;

console.log("\nBooking Status:");

if (selectedMovie.availableSeats >= requiredSeats) {
    console.log("Booking Possible");
} else {
    console.log("Seats Not Available");
}

console.log("\nMovie Language:");

switch (selectedMovie.language) {
    case "Telugu":
        console.log("Telugu Movie");
        break;

    case "Tamil":
        console.log("Tamil Movie");
        break;

    case "Hindi":
        console.log("Hindi Movie");
        break;

    default:
        console.log("Other Language Movie");
}

function bookingConfirmation(movie, seats, callback) {
    if (movie.availableSeats >= seats) {
        movie.availableSeats -= seats;
        callback(
            `Booking Confirmed!
Movie: ${movie.movieName}
Seats Booked: ${seats}
Total Amount: ₹${movie.ticketPrice * seats}`
        );
    } else {
        callback("Booking Failed - Not Enough Seats Available");
    }
}

function displayMessage(message) {
    console.log("\n" + message);
}

bookingConfirmation(selectedMovie, 5, displayMessage);

// Task 5: Hospital Patient Records

let patients = [
    {
        patientId: 101,
        patientName: "Ramesh",
        age: 65,
        disease: "Heart"
    },
    {
        patientId: 102,
        patientName: "Sita",
        age: 45,
        disease: "Diabetes"
    },
    {
        patientId: 103,
        patientName: "Kiran",
        age: 72,
        disease: "Lung"
    },
    {
        patientId: 104,
        patientName: "Anjali",
        age: 30,
        disease: "Fever"
    },
    {
        patientId: 105,
        patientName: "Mahesh",
        age: 68,
        disease: "Bone"
    }
];

console.log("Patient Names:");
patients.forEach(patient => {
    console.log(patient.patientName);
});

console.log("\nTotal Patients:", patients.length);

console.log("\nPatients Above Age 60:");
patients.forEach(patient => {
    if (patient.age > 60) {
        console.log(patient.patientName + " - " + patient.age);
    }
});

let selectedPatient = patients[0];

console.log("\nDepartment Details:");

switch (selectedPatient.disease) {
    case "Heart":
        console.log("Cardiology Department");
        break;

    case "Diabetes":
        console.log("Endocrinology Department");
        break;

    case "Lung":
        console.log("Pulmonology Department");
        break;

    case "Bone":
        console.log("Orthopedics Department");
        break;

    case "Fever":
        console.log("General Medicine Department");
        break;

    default:
        console.log("Consult General Physician");
}

function bookAppointment(patient, callback) {
    let message = `
Appointment Confirmed!
Patient ID: ${patient.patientId}
Patient Name: ${patient.patientName}
Disease: ${patient.disease}
`;
    callback(message);
}

function showConfirmation(message) {
    console.log(message);
}

bookAppointment(selectedPatient, showConfirmation);

// Task 6: Library Management System

let books = [
    {
        bookId: 1,
        bookName: "JavaScript Basics",
        author: "John Smith",
        price: 450,
        category: "Programming"
    },
    {
        bookId: 2,
        bookName: "Data Structures",
        author: "Robert Martin",
        price: 650,
        category: "Education"
    },
    {
        bookId: 3,
        bookName: "Harry Potter",
        author: "J.K. Rowling",
        price: 550,
        category: "Fiction"
    },
    {
        bookId: 4,
        bookName: "Wings of Fire",
        author: "A.P.J Abdul Kalam",
        price: 400,
        category: "Biography"
    },
    {
        bookId: 5,
        bookName: "Clean Code",
        author: "Robert C. Martin",
        price: 700,
        category: "Programming"
    }
];

console.log("Book Names:");
books.forEach(book => {
    console.log(book.bookName);
});

let totalValue = books.reduce((total, book) => {
    return total + book.price;
}, 0);

console.log("\nTotal Book Value: ₹" + totalValue);

console.log("\nBooks Above ₹500:");

books.forEach(book => {
    if (book.price > 500) {
        console.log(book.bookName + " - ₹" + book.price);
    }
});

let selectedBook = books[0];

console.log("\nBook Category:");

switch (selectedBook.category) {
    case "Programming":
        console.log("Programming Book");
        break;

    case "Education":
        console.log("Educational Book");
        break;

    case "Fiction":
        console.log("Fiction Story Book");
        break;

    case "Biography":
        console.log("Biography Book");
        break;

    default:
        console.log("General Book");
}

function issueBook(book) {
    console.log(`
Book Issued Successfully!
Book ID: ${book.bookId}
Book Name: ${book.bookName}
Author: ${book.author}
Price: ₹${book.price}
    `);
}

issueBook(selectedBook);

// Task 7: E-Commerce Product Dashboard

let products = [
    {
        productId: 101,
        productName: "Laptop",
        price: 50000,
        stock: 15
    },
    {
        productId: 102,
        productName: "Mobile",
        price: 20000,
        stock: 8
    },
    {
        productId: 103,
        productName: "Headphones",
        price: 3000,
        stock: 25
    },
    {
        productId: 104,
        productName: "Keyboard",
        price: 1500,
        stock: 5
    },
    {
        productId: 105,
        productName: "Mouse",
        price: 800,
        stock: 12
    }
];

console.log("Product List:");
products.forEach(product => {
    console.log(product.productName);
});

let inventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.stock);
}, 0);

console.log("\nTotal Inventory Value: ₹" + inventoryValue);

console.log("\nProducts with Stock Less Than 10:");

products.forEach(product => {
    if (product.stock < 10) {
        console.log(product.productName + " - Stock: " + product.stock);
    }
});

console.log("\nStock Status:");

products.forEach(product => {
    let status;

    if (product.stock === 0) {
        status = "Out of Stock";
    } else if (product.stock < 10) {
        status = "Low Stock";
    } else {
        status = "In Stock";
    }

    console.log(product.productName + " : " + status);
});

function generateProductReport(products, callback) {
    let report = "Product Report Generated Successfully!";
    callback(report);
}

function displayReport(message) {
    console.log("\n" + message);
}
generateProductReport(products, displayReport);

// Task 8: College Admission System

let applicants = [
    {
        name: "Rahul",
        age: 19,
        percentage: 85,
        department: "CSE"
    },
    {
        name: "Priya",
        age: 18,
        percentage: 72,
        department: "ECE"
    },
    {
        name: "Kiran",
        age: 17,
        percentage: 80,
        department: "MECH"
    },
    {
        name: "Sneha",
        age: 20,
        percentage: 55,
        department: "EEE"
    },
    {
        name: "Arjun",
        age: 21,
        percentage: 90,
        department: "CSE"
    }
];

console.log("Applicant Names:");
applicants.forEach(applicant => {
    console.log(applicant.name);
});

let eligibleCount = 0;

console.log("\nEligible Applicants:");

applicants.forEach(applicant => {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(applicant.name);
        eligibleCount++;
    }
});

console.log("\nTotal Eligible Students:", eligibleCount);

let selectedApplicant = applicants[0];

console.log("\nDepartment Details:");

switch (selectedApplicant.department) {
    case "CSE":
        console.log("Computer Science Engineering");
        break;

    case "ECE":
        console.log("Electronics and Communication Engineering");
        break;

    case "MECH":
        console.log("Mechanical Engineering");
        break;

    case "EEE":
        console.log("Electrical and Electronics Engineering");
        break;

    default:
        console.log("Other Department");
}

function admissionResult(applicant, callback) {
    let result;

    if (applicant.age >= 18 && applicant.percentage >= 60) {
        result = `Admission Approved for ${applicant.name}`;
    } else {
        result = `Admission Rejected for ${applicant.name}`;
    }

    callback(result);
}

function displayResult(message) {
    console.log("\n" + message);
}

admissionResult(selectedApplicant, displayResult);

// Task 9: Bus Reservation System

let passengers = [
    {
        passengerId: 101,
        name: "Rahul",
        seatNumber: 1,
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 102,
        name: "Priya",
        seatNumber: 2,
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 103,
        name: "Kiran",
        seatNumber: 5,
        ticketPrice: 350,
        busType: "Non-AC"
    },
    {
        passengerId: 104,
        name: "Sneha",
        seatNumber: 8,
        ticketPrice: 700,
        busType: "Sleeper"
    },
    {
        passengerId: 105,
        name: "Arjun",
        seatNumber: 10,
        ticketPrice: 700,
        busType: "Sleeper"
    }
];

console.log("Passenger Names:");
passengers.forEach(passenger => {
    console.log(passenger.name);
});

let totalCollection = passengers.reduce((total, passenger) => {
    return total + passenger.ticketPrice;
}, 0);

console.log("\nTotal Collection: ₹" + totalCollection);

console.log("\nOccupied Seats:");
passengers.forEach(passenger => {
    console.log("Seat No: " + passenger.seatNumber);
});

let selectedPassenger = passengers[0];

console.log("\nBus Type Details:");

switch (selectedPassenger.busType) {
    case "AC":
        console.log("Air Conditioned Bus");
        break;

    case "Non-AC":
        console.log("Non Air Conditioned Bus");
        break;

    case "Sleeper":
        console.log("Sleeper Coach Bus");
        break;

    default:
        console.log("General Bus");
}

function generateTicket(passenger, callback) {
    let ticket = `
Ticket Confirmed!
Passenger ID : ${passenger.passengerId}
Passenger Name : ${passenger.name}
Seat Number : ${passenger.seatNumber}
Ticket Price : ₹${passenger.ticketPrice}
`;

    callback(ticket);
}

function showTicket(message) {
    console.log(message);
}

generateTicket(selectedPassenger, showTicket);

// Task 10: Mobile Store Management

let mobiles = [
    {
        brand: "Samsung",
        model: "Galaxy S24",
        price: 75000,
        stock: 10
    },
    {
        brand: "Apple",
        model: "iPhone 15",
        price: 80000,
        stock: 5
    },
    {
        brand: "Realme",
        model: "Realme Narzo 70",
        price: 18000,
        stock: 15
    },
    {
        brand: "Xiaomi",
        model: "Redmi Note 13",
        price: 22000,
        stock: 8
    },
    {
        brand: "OnePlus",
        model: "OnePlus 12R",
        price: 40000,
        stock: 12
    }
];

console.log("Available Mobiles:");

for (let mobile of mobiles) {
    console.log(mobile.brand + " " + mobile.model);
}

function calculateStockValue(mobileList) {
    let totalValue = 0;

    for (let mobile of mobileList) {
        totalValue += mobile.price * mobile.stock;
    }

    return totalValue;
}

console.log("\nTotal Stock Value: ₹" + calculateStockValue(mobiles));

console.log("\nMobiles Above ₹20,000:");

for (let mobile of mobiles) {
    if (mobile.price > 20000) {
        console.log(
            mobile.brand + " " +
            mobile.model + " - ₹" +
            mobile.price
        );
    }
}

let selectedMobile = mobiles[0];

console.log("\nBrand Category:");

switch (selectedMobile.brand) {
    case "Samsung":
        console.log("Android Premium Brand");
        break;

    case "Apple":
        console.log("iOS Premium Brand");
        break;

    case "OnePlus":
        console.log("Flagship Android Brand");
        break;

    case "Xiaomi":
        console.log("Budget Android Brand");
        break;

    case "Realme":
        console.log("Mid-Range Android Brand");
        break;

    default:
        console.log("Other Mobile Brand");
}

function generateSalesReport(mobileList, callback) {
    let totalMobiles = mobileList.length;
    let stockValue = calculateStockValue(mobileList);

    let report =
        "\nSales Report" +
        "\n----------------" +
        "\nTotal Models: " + totalMobiles +
        "\nTotal Stock Value: ₹" + stockValue;

    callback(report);
}

function displayReport(report) {
    console.log(report);
}

generateSalesReport(mobiles, displayReport);