const response = require('./index')
const license = response.license
const licenseKey = response.license.substring(0,3)
var shield = ''
var link = ''
var licenseData = ''

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  var linkData = '##License<br>[' + license + '](' + link + ')'
  var shieldData = shield 

  licenseData = [linkData, shieldData]

  console.log(licenseData.linkData)

  finalMarkdown()
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data, license) =>
  `
  # ${data.title}
  
  ${data.description}

  ---

  ${license.shieldData}
  
  ##Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  
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
  
  ${license.linkData}
  
  `;

//console.log(generateMarkdown(response))

renderLicenseBadge(licenseKey)

function finalMarkdown(){

module.exports.markdown = generateMarkdown(response, licenseData);
}