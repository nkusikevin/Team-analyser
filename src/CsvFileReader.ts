import fs from "fs";
export class CsvFileReader {
	data: string[][]= [];

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
			
	}
}
