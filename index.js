const inquirer = require("inquirer");
const SVG = require("./lib/svg");

class CLI {
    run () {
        return inquirer
            .prompt ([
                {
                    name: "text",
                    message: "Which letters do you want on your logo?",
                    type: "input",
                },
                {
                    name: "textColor",
                    message: "What color would you like the text to be?",
                    type: "list",
                    choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "White"],
                },
                {
                    name: "shapeType",
                    message: "What shape would you like your logo to be?",
                    type: "list",
                    choices: ["Circle", "Triangle", "Square"],
                },
                {
                    name: "shapeColor",
                    message: "What color would you like the shape to be?",
                    type: "list",
                    choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "White"],
                }
            ])
            .then (({text, textColor, shapeType, shapeColor}) => {})
            .then (() => {})
            .catch((error => {
                console.log(error);
            }))
    }
}

const cli = new CLI;
cli.run();