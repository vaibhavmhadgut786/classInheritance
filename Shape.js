export default class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getShapeName() {
    console.log(`Shape is ${this.name}`);
  }
}
