const inquirer = require('inquirer');

const fs = require('fs');

const generate = require('./utils/generateMarkdown');
const util = require('util');

// array of questions for user
const questions = [

    {

        type: 'input',
        message: '',
        name: ''

    },

    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },

    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },

    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },

    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },

    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },

    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },
    
    {

        type: 'input',
        message: '',
        name: '',
        default: ''

    },

    {

        type: 'list',
        message: '',
        name: '',
        default: ''

    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
