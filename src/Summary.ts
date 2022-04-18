import { MatchData } from "./MatchData";

export interface Analyser {
	run(matches: MatchData[]): string;
}

export interface OutPutTarget {
	print(report: string): void;
}

export class Summary {
	constructor(public analyser: Analyser, public outPutTarget: OutPutTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const report = this.analyser.run(matches);
		this.outPutTarget.print(report);
	}
}
