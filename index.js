const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        type: 'input',
        message: 'Please enter your project name',
        name: 'projectName',
    },
    {
        type: 'list',
        message: 'Please select a license for your project',
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Unlicense", "BSD 2-clause", "LGPLv3", "AGPLv3"],
        name: 'license',
    },
    
    {
        type: 'input',
        message: 'Plese enter your GitHub username',
        name: 'username',
    },
    
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
    
    {
        type: 'input',
        message: 'Please give a description of the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe the installation process',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe the usage of the project',
        name: 'usage',
    },
    
    {
        type: 'input',
        message: 'Please describe instructions for contributing to the project',
        name: 'contributing',
    },
    
    {
        type: 'input',
        message: 'Please describe testing of the project',
        name: 'tests',
    }
    ];


function generateReadMe(response){
    let license = (response.license);
            switch (license) {
                case 'MIT':
                    licenseTag = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                    break;
                case 'GPLv2':
                    licenseTag ="[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
                    break;
                case 'Apache':
                    licenseTag ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                    break;
                case 'GPLv3':
                    licenseTag ="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                    break;
                case 'BSD 3-clause':
                    licenseTag ="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                    break;
                case 'Unlicense':
                    licenseTag ="[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
                    break;
                case 'BSD 2-clause':
                    licenseTag ="[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
                    break;
                case 'LGPLv3':
                    licenseTag ="[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
                    break;
                case 'AGPLv3':
                    licenseTag ="[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
                    break;
                };
    let template =
`# ${response.projectName} ${licenseTag}

# Table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description: <a name="description"></a>
${response.description}

## Installation <a name="installation"></a>
${response.installation}

## Usage <a name="usage"></a>
${response.usage}

## Contributing <a name="contributing"></a>
${response.contributing}

## Tests <a name="tests"></a>
${response.tests}

# License <a name="license"></a>
This project is licensed with ${response.license}.

# Questions <a name="questions">
For any questions relating to this project, please contact me via [Github](http://github.com/${response.username}) or email me directly at [${response.email}](${response.email}).`
    return template;
};

function init() {
inquirer
    .prompt(questions)
    .then(response => {
        console.log(response.license)
        let md = generateReadMe(response);
        fs.writeFile(`${response.projectName.toLowerCase().split(' ').join('')}.md`, md, (err) =>
    err ? console.error(err) : console.log('Success!'))
    });
}

init();
