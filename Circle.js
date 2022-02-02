import Shape from "./Shape.js"; // import Shape class from shape.js
export default class Circle extends Shape {
  constructor(name, color, radius) {
    super(name, color);
    this.radius = radius;
  }
  calculateArea() {
    const ans = Math.PI * this.radius * this.radius;
    console.log(`Area of circle is ${ans}`);
  }
}
