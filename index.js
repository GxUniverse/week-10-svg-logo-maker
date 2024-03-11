// Import file system, fs, shapes, and modules.
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("../week-10-svg-logo-maker/lib/shapes");
const { writeFile } = require("fs").promises;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "What is your logo",
    },
    {
      type: "input",
      name: "text_color",
      message: "Choose your color",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like?",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "shape_color",
      message:
        "Enter a shape color preference.",
    },
  ]);
};


const init = () => {
    promptUser()
      .then((res) =>
        writeFile(`logo_${res.text.toUpperCase()}.svg`, generateLogo(res))
      )
      .then(() => console.log(`\n"Logo has been created!"`))
      .catch((err) => console.error(err));
  };
  
  function generateLogo(res) {
      let shape;
      if (res.shape === "Circle") {
        shape = new Circle();
        console.log(shape);
      } else if (res.shape === "Square") {
        shape = new Square();
        console.log(shape);
      } else {
        shape = new Triangle();
        console.log(shape);
      }
      shape.setColor(res.shape_color);
    
      return ` <svg
        width="300"
        height="200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    ><g>${shape.render()}
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${
        res.text_color
      }">${res.text.toUpperCase()}</text>
    </g></svg>
    `;
    }
    
  init();