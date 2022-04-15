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


let manUnitedWins = 0;

for (const match of matchReader.matches) {
	if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
		manUnitedWins++;
	}
	if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
		manUnitedWins++;
	}
}

console.log(manUnitedWins);
