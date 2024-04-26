#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 2001;
// print welcome message 
console.log("welcome to code with syedaishmal  - ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login successfully!");
    // console.log('current account balance is {mybalance}')
    console.log(`current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw amount", "check balance",]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount to withdraw:",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, try again");
}
