
class Person {
    constructor(fullName){
        this.fullName = fullName;
    }

    get firstNameGetter(){
        return this.firstNameMethod();
    }

    get lastNameGetter(){
        return this.lastNameMethod();
    }

    lastNameMethod(){
        let nameSplit = this.fullName.split(" ");
        return nameSplit[1];
    }
    firstNameMethod(){
        let nameSplit = this.fullName.split(" ");
        return nameSplit[0];
    }
} 

function createPerson(){
    let nameInput = document.getElementById('fullName').value;
    const person1 = new Person(`${nameInput}`);
    let firstName = person1.firstNameGetter;
    let lastName = person1.lastNameGetter;

    document.getElementById("displayFirstName").innerHTML = firstName;
    document.getElementById("displayLastName").innerHTML = lastName;
}