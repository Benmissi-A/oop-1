// Définit d'une classe Point
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  calcDist(target) {
   return (Math.sqrt((this.x - target.x)*(this.x - target.x) + (this.y  - target.y)*(this.y  - target.y)))
  }
}
// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)

// OK
p1.isEqual(p2) // return false
p2.show() // print '(10, 11)'

console.log(p1.calcDist(p2))