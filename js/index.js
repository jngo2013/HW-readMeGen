// require inquire and fs
const inquirer = require("inquirer");
const fs = require("fs");
const promise = require("promise");
const generate = require("./utils/generateMarkdown");
// const axios = require("axios");
//inquirer questions
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "How to install your packages?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this designed for?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Anyone contributing to this project"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    
]).then(answers => {
    
    fs.writeFile("README.md",generate(answers),err =>{
    if(err){
        console.log(err);
        throw err 

    }
    console.log("success");
    console.log(generate(answers));
    });
});


