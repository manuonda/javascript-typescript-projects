export class Animal{
    public name:string;
    private age: number;
    protected zone: string;

    constructor(name: string, age?:number , zone?: string){
        this.name =  name;
        this.age = age;
        this.zone  = zone;
    }

    move(distance: string | number = 10){
     console.log(`Moviendo animal ${distance} metros`);
    }
}

