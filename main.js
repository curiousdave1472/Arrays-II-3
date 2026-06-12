// Find the shortest element from array.

var words = ["Bee", "Chicken", "Bird"]

var shortestWord = [];

function findShortestElement(words,short){

    for (var i=0; i < words.length; i = i +1) {

        if (words[i].length <= short) {

            shortestWord.push(words[i]);
        }
    }
    return shortestWord

}
var output = findShortestElement(words, 3)

console.log(output);

