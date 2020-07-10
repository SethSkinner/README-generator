//variable requiring inquirer for this file
var inquirer = require("inquirer");
//variable for fs to make things asynchronys 
var fs = require("fs");

//arrays to hold prompt questions for user input 
var prompts = [
  {
    type: "input",
    name: "title",
    message: "What is your the name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "contents",
    message:
      "List the content of your README.md? (start each list item with a space)",
  },
  {
    type: "input",
    name: "installation",
    message: "Instalation Steps",
  },
  {
    type: "input",
    name: "userstory",
    message: "What is the use for your App?",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "Apache 2.0",
      "GPL",
      "LGPL",
      "MIT",
      "Mozilla Public License 2.0",
      "Common Development and Distribution License",
      "Eclipse Public License version 2.0",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who made the application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can you test your app?",
  },
  {
    type: "input",
    name: "githubName",
    message: "What is your Git Hub username?",
  },
  {
    type: "input",
    name: "githubRepoName",
    message: "What is the link to your Git Hub Repository?",
  },
];

//function to start appending data from questions on the the readme file
function Start() {
  //starts asking prompted questions to user
  inquirer.prompt(prompts).then((data) => {
    //takes content input and splits it into seperate strings and then adds them to a new line
    var contents = data.contents.split(" ").join("\n *  ");

    //appends title into file page
    fs.appendFileSync("README.md", `# ${data.title} \n`);

    //appends the users decription into the file page
    fs.appendFileSync("README.md", `## Description of App: \n >${data.description}\n  `);

    //appends the contents inputted by user into the file page
    fs.appendFileSync("README.md", `## Table of contents: \n ${contents} \n`);

    //appends installation instructions into the file page
    fs.appendFileSync("README.md", `## Installation Information: \n ${data.installation} \n`);

    //appends the user story into the file page
    fs.appendFileSync("README.md", `## User Story: \n ${data.userstory} \n`);

    //appends the license information into the file page
    fs.appendFileSync("README.md", `## License: ${data.license} \n`);

    //appends the contributions into the file page
    fs.appendFileSync("README.md", `## Contributions: \n ${data.contributors} \n`);

    //appends the tests into the file page
    fs.appendFileSync("README.md", `## Tests: \n ${data.tests} \n`);

    //appends the github infomation of the user into the file page
    fs.appendFileSync("README.md", `### Github Info: \n ${data.githubName} \n *  ${data.githubRepoName} \n` );
  });
}

//calling the start function to initialize the program
Start();