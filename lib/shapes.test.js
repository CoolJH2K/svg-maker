const {Circle, Triangle, Square} = require("./shapes");

describe("circle", () => {
    test("should generate a circle if user chooses to generate a circle", () => {
        const shape = new Circle();
        shape.setColor("${shapeColor}");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="100" r="80" fill="${shapeColor}">`
        );
    })
})

describe("triangle", () => {
    test("should generate a triangle if user chooses to generate a triangle", () => {
        const shape = new Triangle();
        shape.setColor("${shapeColor}");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18, 244, 182, 56, 182" fill"${shapeColor}">`
        );
    })
})

describe("square", () => {
    test("should generate a square if user chooses to generate a square", () => {
        const shape = new Square();
        shape.setColor("${shapeColor}");
        expect(shape.render()).toEqual(
            `<rect x="90" y="40" width="120" height="120" fill="${shapeColor}">`
        );
    })
})