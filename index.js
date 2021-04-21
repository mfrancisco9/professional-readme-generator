const inquirer = require('inquirer');
const fs = require('fs')

inquirer
    .prompt([
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
            type = 'input',
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


    ])
    .then(response => {
        fs.writeFile(`${response.projectTitle}_README.txt`, "hello", (err) =>
            err ? console.error(err) : console.log('Success!'));
    })

// let template = `${response.projectName}`