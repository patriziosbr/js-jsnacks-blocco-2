// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function tagliaArray(arr, minNum, maxNum) {

    var newArr = [];

    var sliced = arr.slice( minNum, maxNum);

    newArr.push( sliced);

    return newArr;

}

var arrProva = [7, 4, 5, 78, 32, 56, 90, 15, 23, 8, 2]

var test = tagliaArray(arrProva, 5, 8)

console.log(test);

var test2 = tagliaArray(arrProva, 1, 6)

console.log(test2);