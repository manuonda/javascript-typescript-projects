var personOne = { id: 1, firtsName: "David", lastName: "Garcia" };
function addPerson(person) {
    return { id: 23, lastName: "David" };
}
function getAge(person) {
    var age = person.age || 0;
    return age;
}
console.log(addPerson(personOne));
console.log(getAge(personOne));
