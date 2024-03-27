#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
const correctPin = 808080;

const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);

if (pinAnswer.pin === correctPin) {
    console.log("Correct Pin Code!");
    const operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Enter operation you want to do ",
            type: "list",
            choices: ["withdraw", "balanceCheck", "fastCash"]
        }
    ]);

    if (operationAns.operation === "withdraw") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        } else {
            console.log("Insufficient Balance!");
        }
    } else if (operationAns.operation === "balanceCheck") {
        console.log(`Your balance is ${myBalance}`);
    }
        else if(operationAns.operation === "fastCash"){
            const fastCashAmount = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Select amount to withdraw",
                    type: "list",
                    choices: ["500", "1000", "1500", "2000"]
                }
            ]);
            if (myBalance >= fastCashAmount.amount) {
                myBalance -= fastCashAmount.amount;
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
            
        }
     else {
        console.log("Invalid operation selected!");
    }
} else {
    console.log("Incorrect Pin Code!!");
}
