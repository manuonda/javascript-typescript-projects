interface Person{
    id: number;
    firtsName: string;
    lastName: string;
    age?:number;
}


interface FormatReturnType{
    id: number;
    lastName: string;
}

const personOne: Person = {id: 1, firtsName: "David", lastName :"Garcia"}


function addPerson(person: Person): FormatReturnType{
    return { id : 23, lastName : "David"}
}

function getAge(person: Person): number | string {
    let age = person.age || 0;
    return age;
}

console.log(addPerson(personOne))
console.log(getAge(personOne))

