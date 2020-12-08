function helloWorld(params: number, arr: Array<number> , anyValue: undefined, obj: Object){
  const hello: string ="Hello"
  const world: string ="World"

  let myNumber: number = 10;
  myNumber = Number(myNumber)
  return hello + world;
}

helloWorld(10, [1,2,3,4], undefined , { id: 1, name: "Juan"})