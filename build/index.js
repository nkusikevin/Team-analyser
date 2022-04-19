"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create a new instance of MatchReader
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// Print the data
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Arsenal");
summary.buildAndPrintReport(matchReader.matches);
