function sumArrays(arrOne: Array<number>, arrTwo: Array<number>): number{
   const sumOne: number = arrOne.reduce((accum: number, value) =>  accum + value);
   const sumTwo: number = arrTwo.reduce((accum: number, value) => accum +  value);


   return sumOne + sumTwo;
}

function formatObject(id: number): { id: number}{
    return { id};
}

// Parameter optional
const formatObjectTwo = (id?: number): void  => {
    console.log(id)
}

// Optional return 
const formatOutput = (id?: number  | string  | undefined): void | number | string  => {
    const number: string | number = 10;
    console.log(id)
    return id;
}


sumArrays([23,4,5,6],[1,2,3,4])
formatObjectTwo()