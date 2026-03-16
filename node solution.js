/**
 * Lab 4: JavaScript Fundamentals
 * File: solution.js
 */

// --- Problem 1: The Strict Type Checker ---
function checkVariable(input) {
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            // Handles both null and actual objects as per instructions
            return "object";
        default:
            return "unknown";
    }
}

// --- Problem 2: Secure ID Generator ---
function generateIds(count) {
    let ids = [];
    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue; // Skip the number 5
        }
        ids.push(`ID-${i}`);
    }
    return ids;
}

// --- Problem 3: The Functional Sum ---
function calculateTotal(...numbers) {
    return numbers.reduce((accumulator, current) => {
        if (typeof current !== "number") {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
        return accumulator + current;
    }, 0);
}

// --- Problem 4: Leaderboard Filter ---
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8)       // 1. Filter scores > 8
        .map(player => player.name)               // 2. Get only names
        .join(", ");                              // 3. Join with ", "
}

// --- Problem 5: The Private Inventory ---
class Item {
    #discount = 0.1; // Private property (#) initialized to 10%

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Getter for finalPrice
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

// --- Problem 6: Robust Division ---
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        return error.message; // Returns the error message string
    } finally {
        console.log("Operation attempted");
    }
}

// --- Testing Section (You can run 'node solution.js' to see these results) ---

console.log("--- Problem 1 Test ---");
console.log(checkVariable("Hello")); // string
console.log(checkVariable(null));    // object

console.log("\n--- Problem 2 Test ---");
console.log(generateIds(7)); // ["ID-0", "ID-1", "ID-2", "ID-3", "ID-4", "ID-6"]

console.log("\n--- Problem 3 Test ---");
try {
    console.log(calculateTotal(10, 20, 30)); 
} catch (e) { console.log(e.message); }

console.log("\n--- Problem 4 Test ---");
const players = [
    {name: "Alice", score: 10}, 
    {name: "Bob", score: 5}, 
    {name: "Charlie", score: 12},
    {name: "Diana", score: 7},
    {name: "Ethan", score: 9}
];
console.log(getTopScorers(players)); // Alice, Charlie, Ethan

console.log("\n--- Problem 5 Test ---");
const laptop = new Item("Laptop", 1000);
console.log(`${laptop.name} Final Price: ${laptop.finalPrice}`); // 900

console.log("\n--- Problem 6 Test ---");
console.log("Result:", safeDivide(10, 2));
console.log("Result:", safeDivide(10, 0));