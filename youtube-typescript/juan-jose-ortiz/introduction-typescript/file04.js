function sumArrays(arrOne, arrTwo) {
    var sumOne = arrOne.reduce(function (accum, value) { return accum + value; });
    var sumTwo = arrTwo.reduce(function (accum, value) { return accum + value; });
    return sumOne + sumTwo;
}
function formatObject(id) {
    return { id: id };
}
// Parameter optional
var formatObjectTwo = function (id) {
    console.log(id);
};
// Optional return 
var formatOutput = function (id) {
    var number = 10;
    console.log(id);
    return id;
};
sumArrays([23, 4, 5, 6], [1, 2, 3, 4]);
formatObjectTwo();
