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


const canVote = (person) => {
  return person.age < 18 ? false : true
}
console.log(canVote(charlie))
