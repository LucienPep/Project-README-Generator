const response = require('./index')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
  `
  # ${data.title}
  
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [Tests](#Tests)
  5. [Questions](#Questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  For any further questions contact me via:
  
  GitHub: [${data.question1}](https://github.com/${data.question1})
  
  Email: <${data.question2}>
  
  `;

//console.log(generateMarkdown(response))

module.exports.markdown = generateMarkdown(response);
