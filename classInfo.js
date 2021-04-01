class Human {
  constructor(firstName,lastName,age,language){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language 
  }

  printInfo(person){
  console.log(`First name : ${person.firstName}`)
  console.log(`Name : ${person.lastName}`)
  console.log(`Age : ${person.age}`)
  }
  canVote(person){
  return person.age < 18 ? false : true
  }
  mostSkilledDev(person1 , person2){
  return person1.languages.length === person2.languages.length ? 'draw' : person1.languages.length > person2.languages.length ? person1.firstName : person2.firstName 
  }
  
}