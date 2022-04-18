"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./report/ConsoleReport");
const WinsAnalyser_1 = require("./analyzers/WinsAnalyser");
const Summary_1 = require("./Summary");
// Create a new instance of CsvFileReader
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create a new instance of MatchReader
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
// Load the data
matchReader.load();
// Print the data
const summary = new Summary_1.Summary(new WinsAnalyser_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
