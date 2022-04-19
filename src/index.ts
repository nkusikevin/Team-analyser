import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create a new instance of MatchReader
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();
// Print the data

const summary = Summary.winsAnalysisWithHtmlReport("Arsenal");

summary.buildAndPrintReport(matchReader.matches);
