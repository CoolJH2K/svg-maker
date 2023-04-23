const inquirer = require("inquirer");

class CLI {
    run () {
        return inquirer
            .prompt ([])
            .then (({text, textColor, shapeType, shapeColor}) => {})
            .then (() => {})
            .catch((error => {
                console.log(error);
            }))
    }
}