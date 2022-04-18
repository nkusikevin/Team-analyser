import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";


// Create a new instance of CsvFileReader
const csvFileReader = new CsvFileReader("football.csv");
// Create a new instance of MatchReader
const matchReader = new MatchReader(csvFileReader);
// Load the data
matchReader.load();
// Print the data




console.log(manUnitedWins);
