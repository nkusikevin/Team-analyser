import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalyser";
import { HtmlReport } from "./report/HtmlReport";

export interface Analyser {
	run(matches: MatchData[]): string;
}

export interface OutPutTarget {
	print(report: string): void;
}

export class Summary {
	
static winsAnalysisWithHtmlReport(teamName: string): Summary {
	return new Summary(new WinsAnalysis(teamName), new HtmlReport());	
}	

	constructor(public analyser: Analyser, public outPutTarget: OutPutTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const report = this.analyser.run(matches);
		this.outPutTarget.print(report);
	}
}
