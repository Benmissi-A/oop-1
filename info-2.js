const alice = {
  firstName: 'Alice',
  lastName : 'Liddell',
  age: 28
}

const bob = {
  firstName: 'Bob',
  lastName : 'Lemon',
  age: 30
}

const charlie = {
  firstName: 'Charlie',
  lastName : 'Charlot',
  age: 8
}

const printInfo = (person) => {
  console.log(`First name : ${person.firstName}`)
  console.log(`Name : ${person.lastName}`)
  console.log(`Age : ${person.age}`)
}

printInfo(alice)