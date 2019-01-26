class User{
    constructor(firstName, lastName, credit, middleName = undefined){
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.credit = credit
    }
    editName(newName){
        const myName = newName.split(' ')
        this.firstName = myName[0] 
        this.middleName = myName[1] 
        this.lastName = myName[2] 
    }
}

const john = new User('John', 'Doe', 67)
console.log(john)
john.editName('Jonny Kumar Doe')
console.log(john)