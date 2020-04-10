// require inquire and fs
const inquirer = require("inquirer");
const fs = require("fs");
//inquirer questions
inquirer.prompt([
    {
        type: "input",
        name: "email",
        message: "what is your github email?"
    },
    {
        type: "input",
        name: "picture",
        message: "Link to github profile picture"
    }
]).then(answers => {
    fs.appendFile("README.md",JSON.stringify(answers),err =>{
    if(err){
        console.log(err);
        throw err 

    }
    console.log("success");
    });
});





// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
