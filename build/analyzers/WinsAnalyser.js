"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === `${this.teamName}` && match[5] === MatchResults_1.MatchResults.HomeWin) {
                wins++;
            }
            if (match[2] === `${this.teamName}` && match[5] === MatchResults_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.teamName} won ${wins} Games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
