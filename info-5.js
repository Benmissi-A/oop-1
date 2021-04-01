const alice = {
  firstName: 'Alice',
  lastName : 'Liddell',
  languages : ['php','symfony','laravel','ruby','python'],
  age: 28
}

const bob = {
  firstName: 'Bob',
  lastName : 'Lemon',
  languages : ['react','angular','javascript'],
  age: 30
}

const charlie = {
  firstName: 'Charlie',
  lastName : 'Charlot',
  languages : ['html','css','bootstrap',],
  age: 8
}
const mostSkilledDev = (person1 , person2) => {
  return person1.languages.length === person2.languages.length ? 'draw' : person1.languages.length > person2.languages.length ? person1.firstName : person2.firstName 
}

console.log(mostSkilledDev(alice,charlie))
console.log(mostSkilledDev(bob,charlie))
console.log(mostSkilledDev(bob,alice))