import fs from "fs";


export abstract class CsvFileReader<T> {
	data: T[] = [];

	abstract mapRow(row: string[]): T;

	constructor(public filname: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filname, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((raw: string): string[] => {
				return raw.split(",");
			}).map(this.mapRow);
	}
}
