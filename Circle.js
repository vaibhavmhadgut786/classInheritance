import Shape from "./Shape.js"; // import Shape class from shape.js
export default class Circle extends Shape {
  constructor(name, color, radius) {
    super(name, color);
    this.radius = radius;
  }

  getRadius() {
    console.log(`Radius of circle is ${this.radius}`);
  }
}
