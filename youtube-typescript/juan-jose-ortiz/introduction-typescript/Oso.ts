
import {Animal} from './Animal'

class Oso extends Animal{
   food: string;
   
   constructor(name:string, age?: number , zone?:string, food?:string){
       super(name, age, zone);
       this.food = food;
   }

   move(distance = 20){
       console.log("Oso camindando " + this.zone) ;
       super.move(distance);
   }
}

let bearOne = new Oso("Josh", 10 , "Canada", "fish" );
console.log(bearOne.move());
// private console.log(bearOne.age);
// console.log(bearOne.zone); no pude ingresar a traves de su instancia pero si acceder