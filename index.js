// inquirer and FS packages
const inquirer = require('inquirer');
var fs = require('fs');

// Questions for inquirer function to call
const questions = {
    title: 'What is the title of your project?', 
    description: 'Give a brief description of your project',
    install: 'What packages do you need to install and how?',
    usage: 'How is this package used?',
    license: 'Which license was used?',
    contributing: 'Would you like users to contribute if so what requirements should be met?',
    tests: 'Add tests here - ',
    questions: ['What is your GitHub username?','What is your email address?']
}

// Writes inputed data and markdown data into README.md file
function writeToFile(title, data) {    

    fs.appendFile((title + '.md'), data, function (err){
        if (err) {
            console.log(err)
        }
    })
}

// Function is called to start asking questions and assigning answers to vars
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
          type: 'list',
          message: questions.license,
          choices: ['MIT', 'Apache-2.0', 'GPLv3', 'MPL-2.0'],
          name: 'license',
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

    //Makes response from inquiries available to other files that import data.
    module.exports = response

    //imports data from generateMarkdown.js
    const generateMarkdown = require('./generateMarkdown');

    const readmeContent = generateMarkdown.markdown

    //console.log(readmeContent)

    //final data to be sent to writeFile function
    writeToFile(response.title, readmeContent)
    })
}

// Function call to initialize app
init();
