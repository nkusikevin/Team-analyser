import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";
import { ConsoleReport } from "./report/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalyser";
import { Summary } from "./Summary";


// Create a new instance of CsvFileReader
const csvFileReader = new CsvFileReader("football.csv");
// Create a new instance of MatchReader
const matchReader = new MatchReader(csvFileReader);
// Load the data
matchReader.load();
// Print the data

const summary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches)

