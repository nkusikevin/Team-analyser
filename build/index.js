"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
//enum
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
