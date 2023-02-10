// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(title, data) {    

    fs.appendFile((title + '.md'), data, function (err){
        if (err) {
            console.log(err)
        }
        console.log('whoo!')
    })
    

}

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
    //console.log(response)

    module.exports = response

    const generateMarkdown = require('./generateMarkdown');

    //console.log(generateMarkdown)

    const readmeContent = generateMarkdown.markdown

    console.log(readmeContent)

    writeToFile(response.title, readmeContent)
    })
}


// const generateReadme = ({title, description, install, usage, contributing, tests, question1, question2}) => 
// `# ${title}
// ${description}
// ## Installation
// ${install}
// ## Usage
// ${usage}
// ## Contributing
// ${contributing}
// ## Tests
// ${tests}
// ## Questions
// For any further questions contact me via:

// GitHub: [${question1}](https://github.com/${question1})

// Email: <${question2}>

//`;   


// Function call to initialize app
init();
