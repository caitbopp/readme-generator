// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// Do I need to add inquirer.prompt {} here?

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please write a short description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'command',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'userInfo',
        message: 'What does the user need to know about using this repo?',
    },
    {
        type: 'input',
        name: 'userRepoInfo',
        message: 'What does the user need to know about contributing to the repo?',
    },
]

// TODO: Create a function to write README file
// having a function that emncompasses fs.writeFile allows you to call function into action as many times as needed without writing fs peocess over and over
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((data) => {
        writeToFile('README2.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
