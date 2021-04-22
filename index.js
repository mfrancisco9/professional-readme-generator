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
        message: 'Please describe CONTRIBUTING HOW DO I WORD THIS?',
        name: 'contributing',
    },
    
    {
        type: 'input',
        message: 'Please describe testing of the project',
        name: 'tests',
    }
    ];


function getLicenseTags(){
let licenseTag = ""
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
}
return licenseTag;
};

function generateReadMe(response){
    let template = ``
    return template;
};

inquirer
    .prompt(questions)
    .then(response => {
        let md = generateReadMe(response);
        fs.writeFile("README.md", md, (err) =>
    err ? console.error(err) : console.log('Success!'))
    });