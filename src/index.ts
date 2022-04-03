import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResults";


const reader = new CsvFileReader("football.csv");
reader.read();



let manUnitedWins = 0;

for (const match of reader.data ) {
	if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
		manUnitedWins++;
	}
	if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
		manUnitedWins++;
	}
}

console.log(reader.data[0][0]);
