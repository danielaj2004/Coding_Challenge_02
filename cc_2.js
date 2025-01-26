// Task 1: Working with arrays //
Let products = ["Toothbrush", "toothpaste". "mouthwash". "floss", "gum"];  // Array of products

products.push("electric toothbrush");  // Add new product to the end of the array
console.log(products);  // Print the array of products

products.pop();  // Remove the last product from the array
console.log("Updated products", products)  // Print the array of products

// Task 2: Accessung and Modifying Arrays
Let scores = [58,29,62,72,96];  // Array of scores
scores[1] = 62;  // change the second number of the array
Let total = scores.reduce((a, b) => a + b, 0);  // calculate the total of the scores
Let average = total / scores.length;  // calculate the average of the scores

console.log("Updated scores", scores);  // print the updated array of scores
console.log(total);  // Print the sum of the scores
console.log("average score", average);  // print the average of the scores