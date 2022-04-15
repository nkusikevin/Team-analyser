"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
// Create a new instance of CsvFileReader
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create a new instance of MatchReader
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
// Load the data
matchReader.load();
// Print the data
let manUnitedWins = 0;
for (const match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === "Man United" && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
