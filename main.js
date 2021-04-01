const {Point} = require('./pointClass')
const {Human} = require('./humanClass')

// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)

// OK
p1.isEqual(p2) // return false
p2.show() // print '(10, 11)'

console.log(p1.calcDist(p2))

// classInfo
const alice = new Human('Alice','Liddell',28,['php','symfony','laravel','ruby','python'])
 const bob = new Human('Bob','Lemon',28,['react','angular','javascript']);
const charlie = new Human('Charlie','Charlot',28,['html','css','bootstrap']);

alice.printInfo()
alice.canVote()
alice.mostSkilledDev(charlie)
