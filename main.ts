#! /usr/bin/env node
import inquirer from "inquirer"
let todos = []; //shoper []example
let condition:boolean = true;

while(condition)
{
let todoQuestion = await inquirer.prompt(
 [   {
        name:"firstQuestion",
        type:"input",
        message:"What Would You Like To add In Your Todo?",
        validate: function(input) {
            if (input.trim() === "") {
                return "Task cannot be empty.";
            }
            return true;
        }
        
    },
    {
        name:"secondQuestion",
        type:"confirm", //when type is confirm ans in Y/N or T/F i guess
        message:"Would You Like To Add More In Your Todo?",
        default:"true"
    }
]
);
todos.push(todoQuestion.firstQuestion)
console.log(todos)
condition = todoQuestion.secondQuestion;
}