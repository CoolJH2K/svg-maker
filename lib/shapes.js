// Set Shape class
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

// Set Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}">`
    }
}

// Set Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill"${this.shapeColor}">`
    }
}

// Set Square class
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}">`
    }
}

// Export Circle, Triangle, and Square classes
module.exports = {Circle, Triangle, Square};