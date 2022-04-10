import fs from "fs";
import { dateStringToDate } from "./utils";

export class CsvFileReader {
	data: string[][] = [];

	constructor(public filname: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filname, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((raw: string): string[] => {
				return raw.split(",");
			}).map((row:string[]):any=>{
                return[
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4])
                ]
            })
	}
}
