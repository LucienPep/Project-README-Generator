//importing data from index.js and declaring specific values
const response = require('./index')
const license = response.license
const licenseKey = response.license.substring(0,3)
var shield = ''
var link = ''
var licenseData = ''

//Function to check which license has been selected and choose the correct badge
function renderLicenseBadge(licenseKey) {
  if(!licenseKey == ''){
    if (licenseKey == 'MIT'){
      shield = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (licenseKey == 'Apa'){
      shield = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if (licenseKey == 'GPL'){
      shield = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (licenseKey == 'MPL'){
      shield = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    //console.log(shield)
  
    }else{
      shield = ''
    }
    renderLicenseLink(licenseKey)
}

//Function to check which license has been selected and create a self contained link for that license
function renderLicenseLink(licenseKey) { 
  if(!licenseKey == ''){
    if (licenseKey == 'MIT'){
      link = 'https://opensource.org/licenses/MIT'
    }
    if (licenseKey == 'Apa'){
      link = 'https://opensource.org/licenses/Apache-2.0'
    }
    if (licenseKey == 'GPL'){
      link = 'https://www.gnu.org/licenses/gpl-3.0'
    }
    if (licenseKey == 'MPL'){
      link = 'https://opensource.org/licenses/MPL-2.0'
    }
  }else{
    link = ''
  }
  renderLicenseSection()
}

//combines both license badge and link and adds markdown to add into main markdown file
function renderLicenseSection() {
  var linkDataOne = '## License'
  var linkDataTwo = 'The license I am using for my project is<br>[' + license + '](' + link + ')'
  var shieldData = shield 

  licenseData = [linkDataOne, linkDataTwo, shieldData]

  finalMarkdown()
}

// function to create data and add collected values into markdown text
const generateMarkdown = (data, license) =>
  `
  # ${data.title}
  
  ${data.description}

  ---

  ${license[2]}
  
  ##Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ${license[0]}

  ${license[1]}

  ## Questions
  
  GitHub: [${data.question1}](https://github.com/${data.question1})

  For any further questions contact me via:
  
  Email: <${data.question2}>
  
  `;

//console.log(generateMarkdown(response))

renderLicenseBadge(licenseKey)

//final function to export all collected markdown data 
function finalMarkdown(){

module.exports.markdown = generateMarkdown(response, licenseData);
}