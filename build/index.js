"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
// Create a new instance of CsvFileReader
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create a new instance of MatchReader
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
// Load the data
matchReader.load();
// Print the data
console.log(manUnitedWins);
