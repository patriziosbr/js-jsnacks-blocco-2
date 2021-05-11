// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var footBallTeams = [

    {
        'nome': "roma",
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': "lazio",
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': "barcellona",
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': "milan",
        'punti_fatti': 0,
        'falli_subiti': 0
    }
];
var scores = [];

for (var i=0; i < footBallTeams.length; i++) {
    // Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
    footBallTeams[i]["falli_subiti"] = getRndInteger(1, 50);
    footBallTeams[i]["punti_fatti"] = getRndInteger(1, 50);

    // Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    var daPushare = {
        nome: footBallTeams[i].nome,
        falli_subiti: footBallTeams[i].falli_subiti
    };
    scores.push(daPushare);

    // for(var key in footBallTeams[i]) {
    //     console.log(key, footBallTeams[i][key]);
    // }
    // console.log("Punti fatti: ", footBallTeams[i].punti_fatti);
}

console.log(footBallTeams);
console.log(scores);


//----------FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }