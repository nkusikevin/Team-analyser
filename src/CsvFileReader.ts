import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];

export abstract class CsvFileReader<T> {
	data: T[] = [];

	constructor(public filname: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filname, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((raw: string): string[] => {
				return raw.split(",");
			})
			.map(this.mapRow);
	}

	mapRow(row: string[]): T {
		return [
			dateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResults,
			row[6],
		];
	}
}
