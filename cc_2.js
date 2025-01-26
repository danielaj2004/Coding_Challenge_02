// Task 1: Working with arrays //
Let products = ["Toothbrush", "toothpaste". "mouthwash". "floss", "gum"];  // Array of products

products.push("electric toothbrush");  // Add new product to the end of the array
console.log(products);  // Print the array of products

products.pop();  // Remove the last product from the array
console.log("Updated products", products)  // Print the array of products

// Task 2: Accessung and Modifying Arrays //
Let scores = [58,29,62,72,96];  // Array of scores
scores[1] = 62;  // change the second number of the array
Let total = scores.reduce((a, b) => a + b, 0);  // calculate the total of the scores
Let average = total / scores.length;  // calculate the average of the scores

console.log("Updated scores", scores);  // print the updated array of scores
console.log(total);  // Print the sum of the scores
console.log("average score", average);  // print the average of the scores

// Task 3: Working with Objects //
Let employee = {
    name: "Sam Grace",
    age: 29,
    department: "Management"
    isActive: true
};  //object of employee

console.log(employee);  // Print the object of employee

employee.department = "Human Resources";  // Modify the department of the employee
employee.position = "Human resources manager";  // Add a new property to the employee
console.log(employee);  //print the object of employee

// Task 4: Array of objects
let customers = [
    {name: "Jayden villa", email: "jaydenvilla@hotmail.com", purchaseAmount: 150},
    {name: "Louis romone", email: "Louisro@gmail.com", purchaseAmount: 400},
    {name: "Abigal lynn", email: "Abigallynn@gmail.com", purchaseAmount:100}
];  // Array of objects of customers
console.log(customers); // print the array of objects of the customers

customers.push({name: "Thomas king", email: "thomasking@gmail.com", purchaseAmount: 360});  // Add a new customer to the array
console.log(customer);  // print the array of the customers
