"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalyser_1 = require("./analyzers/WinsAnalyser");
const HtmlReport_1 = require("./report/HtmlReport");
class Summary {
    constructor(analyser, outPutTarget) {
        this.analyser = analyser;
        this.outPutTarget = outPutTarget;
    }
    static winsAnalysisWithHtmlReport(teamName) {
        return new Summary(new WinsAnalyser_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const report = this.analyser.run(matches);
        this.outPutTarget.print(report);
    }
}
exports.Summary = Summary;
