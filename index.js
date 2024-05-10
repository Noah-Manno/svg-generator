const inquirer = require('inquirer');
const questions = require('./lib/inquirer/prompt.js')
const fs = require('fs');
const generateSvg = require('./lib/generate/generateSvg.js')

function writeToSvg(fileName, data) {
    let svg = generateSvg(data)
    fs.writeFile(fileName, svg, (err) => {
        if (err) {
            console.error(err)
            return;
        } else 
        console.log(`Generated ${fileName}`)
    })
}



function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToSvg('./output/logo.svg', answers);
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });
}

init()