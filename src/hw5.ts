abstract class Shape {
  constructor(public readonly name: string, public readonly color: string) {}

  abstract calculateArea(): number;
}

interface RectangleShape {
  print(): string;
}

class Circle extends Shape {
  constructor(private radius: number, color: string) {
    super('Circle', color);
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle extends Shape implements RectangleShape {
  constructor(private height: number, private width: number, color: string) {
    super('Rectangle', color);
  }
  calculateArea(): number {
    return this.height * this.width;
  }
  print(): string {
    return 'S = width * height';
  }
}
class Square extends Shape implements RectangleShape {
  constructor(private side: number, color: string) {
    super('Square', color);
  }
  calculateArea(): number {
    return this.side ** 2;
  }
  print(): string {
    return 'S = side * side';
  }
}
class Triangle extends Shape {
  constructor(private baseSide: number, private height: number, color: string) {
    super('Triangle', color);
  }
  calculateArea(): number {
    return (this.baseSide * this.height) / 2;
  }
}
const square: Square = new Square(4, 'red');
console.log(square.print());
