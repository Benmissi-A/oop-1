class Human {
  constructor(firstName,lastName,age,language){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }

  printInfo(){
    console.log(`First name : ${this.firstName}`)
    console.log(`Name : ${this.lastName}`)
    console.log(`Age : ${this.age}`)
  }
  canVote(){
    console.log(this.age < 18 ? false : true)
  }
  mostSkilledDev(person2){
  console.log(this.language.length === person2.language.length ? 'draw' : this.language.length > person2.language.length ? this.firstName : person2.firstName)  
  }
}
exports.Human = Human