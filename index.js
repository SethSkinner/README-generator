const inquirer = require('inquirer');

const fs = require('fs');

const generate = require('./utils/generateMarkdown');
const util = require('util');

// array of questions for user
const questions = [

    {

        type: 'input',
        message: 'Please enter your github username.',
        name: 'username'

    },

    {

        type: 'input',
        message: 'Please Enter in the title of youre project.',
        name: 'title',
        default: 'Enter project title.'

    },

    {

        type: 'input',
        message: 'Please enter in a description of the project.',
        name: 'description',
        default: 'Enter project description.'

    },

    {

        type: 'input',
        message: 'Please enter in the installation instructions',
        name: 'installation',
        default: 'Enter project installation instructions.'

    },

    {

        type: 'input',
        message: 'Please enter in the user case for the project.',
        name: 'usage',
        default: 'Enter project user case.'

    },

    {

        type: 'input',
        message: 'Please enter in the contributions to the project.',
        name: 'contributions',
        default: 'Enter project contributions.'

    },

    {

        type: 'input',
        message: 'Please enter in the testing instructions for the project.',
        name: 'test',
        default: 'Enter project testing instructions.'

    },

    {

        type: 'input',
        message: 'Please enter in your email address.',
        name: 'email',
        default: 'Enter your email address.'

    },

    {

        type: 'list',
        message: 'Please enter in the license for the project.',
        choices: ['MIT', 'Mozilla', 'WTFPL', 'GPL v3', "Unlicense"],
        name: 'license',
        default: 'Enter license for project.'

    }

];

const promptUser = () => {

    return inquirer.prompt(questions);

};

async function init() {

    try {

        const answers = await promptUser();
        const readme = await generate(answers);

        fs.writeFile('ReadMe.md', readme);
            console.log('ReadMe has been made.');
        
        } catch(err) {

            console.log(err);

        }

    }


// function call to initialize program
init();
