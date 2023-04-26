// Import Inquirer, fs and the needed objects from other JavaScript files
const inquirer = require("inquirer");
const fs = require("fs/promises");
const SVG = require("./lib/svg");
const {Circle, Triangle, Square} = require("./lib/shapes");

// Set up the promts needed to generate an SVG image
class CLI {
    run () {
        return inquirer
        // Set up the questions
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
            //.then (({text, textColor, shapeType, shapeColor}) => {})
            .then ((prompts) => {
                if (prompts.text.length > 3) {
                    console.log("Text must not exceed 3 letters.");
                    promptUser();
                } else {
                    /*let svg = new SVG(prompt.text, prompt.textColor);
                    svg.setText(prompts.text, prompts.textColor);*/

                    var newShape;
                    if (prompts.shape === "Circle") {
                        newShape = new Circle(prompts.shapeColor);
                        svg.setShape(Circle);
                        svg.shapeElement += `<circle cx="150" cy="100" r="80" fill="${shapeColor}">`;
                    } else if (prompts.shape === "Triangle") {
                        newShape = new Triangle(prompts.shapeColor);
                        svg.setShape(Triangle);
                        svg.shapeElement += `<polygon points="150, 18, 244, 182, 56, 182" fill"${shapeColor}">`;
                    } else if (prompts.shape === "Square") {
                        newShape = new Square(prompts.shapeColor);
                        svg.setShape(Square);
                        svg.shapeElement += `<rect x="90" y="40" width="120" height="120" fill="${shapeColor}">`;
                    }
                    console.log(newShape);
                    let svg = new SVG(newShape.render(), prompts.text, prompts.textColor);
                    fs.writeFile(`logo.svg`, svg.render());
                }
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

// Runs the prompts
const cli = new CLI;
cli.run();