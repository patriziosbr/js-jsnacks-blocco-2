// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var biciclette = [
    
    {
        nome: "Raleghi",
        peso: 9
    },
    {
        nome: "Rock Ride",
        peso: 6
    },
    {
        nome: "bianchi",
        peso: 12
    },
    {
        nome: "pursuit",
        peso: 8
    }

];
console.log(biciclette);

var arrPeso = [];
var pesoMin;

for (var i = 0; i < biciclette.length; i++ ) {
    pesoMin = biciclette[i].peso; 
    arrPeso.push(pesoMin);
    
}

var findMin = Math.min(...arrPeso)

console.log("Pesi biciclette ", arrPeso);
console.log("Peso minimo ", findMin);
