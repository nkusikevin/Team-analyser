import { MatchData } from "../MatchData"
import {Analyser} from "../Summary"
import { MatchResults } from "../MatchResults";

export class WinsAnalysis implements Analyser {
constructor(public teamName:string){}

run(matches: MatchData[]): string {
    let wins = 0;

		for (const match of matches) {
			if (match[1] === `${this.teamName}` && match[5] === MatchResults.HomeWin) {
				wins++;
			}
			if (match[2] === `${this.teamName}` && match[5] === MatchResults.AwayWin) {
				wins++;
			}
		}

        return `Team ${this.teamName} won ${wins} Games`
}

}