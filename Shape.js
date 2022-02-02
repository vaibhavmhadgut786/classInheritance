export default class Shape {
  constructor(name, radius, color) {
    this.name = name;
    this.color = color;
  }
  drawShape() {
    console.log(`Shape is ${this.name}`);
  }

  calculateArea() {
    const ans = Math.PI * this.radius * this.radius;
    console.log(`Area of circle is ${ans}`);
  }
}
