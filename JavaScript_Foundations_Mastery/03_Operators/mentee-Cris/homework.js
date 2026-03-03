// OPERATORS HOMEWORK – SIMPLE BUDGET
// -------------------------------------------------
// GOAL: Use operators to calculate how much money is left after expenses
//       and print a summary in the console.

// STEP 1: Create a variable called monthlyIncome (number)
//         with how much money you receive in a month.

// STEP 2: Create a variable called rentCost (number)
//         with how much you pay for rent.

// STEP 3: Create a variable called foodCost (number)
//         with how much you spend on food.

// STEP 4: Create a variable called transportCost (number)
//         with how much you spend on transportation.

// STEP 5: Create a variable called funBudget (number)
//         with how much money you like to save for fun activities.

// STEP 6: Create a variable called totalExpenses.
//         Use the + operator to add rentCost, foodCost, transportCost, and funBudget
//         together and store the result in totalExpenses.

// STEP 7: Create a variable called moneyLeft.
//         Use the - operator to subtract totalExpenses from monthlyIncome.

// STEP 8: Use console.log to print a clear summary, for example:
//         --- SIMPLE BUDGET ---
//         Monthly income: ...
//         Total expenses: ...
//         Money left: ...

// STEP 9: Now imagine you decide to increase your funBudget a little.
//         Use the += operator to add some extra amount to funBudget,
//         for example funBudget += 500;

// STEP 10: Recalculate totalExpenses and moneyLeft with the new funBudget value.

// STEP 11: Use console.log again to print an UPDATED summary
//          that shows how much money is left after increasing your funBudget.

let budgetTitle = "--- SIMPLE BUDGET ---";
let monthlyIncome = 6000;
let rentCost = 1200;
let foodCost = 300;
let transportCost = 90;
let funBudget = 500;
let totalExpenses = rentCost + foodCost + transportCost + funBudget;

console.log(budgetTitle);
console.log(`Monthly Income = ${monthlyIncome}`);
console.log(`Rent Cost = ${rentCost}`);
console.log(`Food Cost = ${foodCost}`);
console.log(`Transport Cost ${transportCost}`);
console.log(`Fun Budget = ${funBudget}`);
console.log(`Total Expenses = ${totalExpenses}`);

// Fun Budget increased
funBudget += 500;
console.log("\n");
console.log(`${budgetTitle} UPDATED`);
console.log(`Monthly Income = ${monthlyIncome}`);
console.log(`Rent Cost = ${rentCost}`);
console.log(`Food Cost = ${foodCost}`);
console.log(`Transport Cost ${transportCost}`);
console.log(`Fun Budget = ${funBudget}`);
console.log(`Total Expenses = ${totalExpenses}`);
