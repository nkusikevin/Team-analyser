import fs from "fs";

const matches = fs
	.readFileSync("football.csv", {
		encoding: "utf-8",
	})
	.split("\n")
	.map((raw: string): string[] => {
		return raw.split(",");
	});

//enum
enum MatchResults {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}

let manUnitedWins = 0;

for (const match of matches) {
   if (match[1]==='Man United' && match[5]=== MatchResults.HomeWin) {
       manUnitedWins++
       
   } 
    if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
			manUnitedWins++;
		} 
}

console.log(manUnitedWins);
