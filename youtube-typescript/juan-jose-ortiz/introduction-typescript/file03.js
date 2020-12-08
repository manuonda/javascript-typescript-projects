function helloWorld(params, arr, anyValue, obj) {
    var hello = "Hello";
    var world = "World";
    var myNumber = 10;
    myNumber = Number(myNumber);
    return hello + world;
}
helloWorld(10, [1, 2, 3, 4], undefined, { id: 1, name: "Juan" });
