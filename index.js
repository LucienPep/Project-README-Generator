// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = {
    title: 'What is the title of your project?', 
    description: 'Give a brief description of your project',
    install: 'What packages do you need to install and how?',
    usage: 'How is this package used?',
    contributing: 'Would you like users to contribute if so what requirements should be met?',
    tests: 'Add tests here - ',
    questions: ['What is your GitHub username?','What is your email address?']
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
          type: 'input',
          message: questions.title,
          name: 'title',
        },
        {
          type: 'input',
          message: questions.description,
          name: 'description',
        },
        {
          type: 'input',
          message: questions.install,
          name: 'install',
        },
        {
          type: 'input',
          message: questions.usage,
          name: 'usage',
        },
        {
          type: 'input',
          message: questions.contributing,
          name: 'contributing',
        },
        {
          type: 'input',
          message: questions.tests,
          name: 'tests',
        },
        {
          type: 'input',
          message: questions.questions[0],
          name: 'question1',
        },
        {
          type: 'input',
          message: questions.questions[1],
          name: 'question2',
        },
    ])
    .then((response) =>{
    console.log(response)
    console.log(response.contributing)
    })
}

// Function call to initialize app
init();
