// Shape constructor
class Shape {
    constructor() {
      this.shape_color = "";
    }
    setColor(colorInput) {
      this.shape_color = colorInput;
    }
  }
  
// Triangle, Square, & Circle Classes
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.shape_color}"/>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height ="160" fill="${this.shape_color}"/>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.shape_color}"/>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };