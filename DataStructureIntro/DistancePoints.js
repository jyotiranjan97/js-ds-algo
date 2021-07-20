class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    let dx = a.x - b.x;
    console.log(a.x, b.x);
    let dy = a.y - b.y;
    console.log(a.y, b.y);

    return Math.hypot(dx, dy).toFixed(2);
  }
}

const p1 = new Point(2, 3);
const p2 = new Point(5, 5);

console.log(Point.distance(p1, p2));
