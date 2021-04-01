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

exports.Point