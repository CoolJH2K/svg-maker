const SVG = require("./svg");
const Shape = require("../index");

test ("should throw an error if text exceeds 3 characters", () => {
    const expectedError = new Error("Text must not exceed 3 characters.");
    const SVG = new SVG();
    expect (() => SVG.text("404", "#FFF")).toThrow(expectedError);
});

test ("should render a 300 x 200 SVG element", () => {});

test ("should append text element", () => {});

test ("should include a shape", () => {
    const expectedShape = new Shape();
});