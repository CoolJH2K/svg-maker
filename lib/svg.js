// Import CLI and Shape classes
const CLI = require("../index");
const {Circle, Triangle, Square} = require("./shapes");

// Set SVG class
class SVG {
    constructor(shapeElement, text, textColor) {
        this.shapeElement = shapeElement;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shapeElement}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">"${text}"</text>
      
      </svg>`;
    }
    setText() {
        this.text;
    }
    setShape() {
        this.shapeElement;
    }
}

// Export SVG class
module.exports = SVG;