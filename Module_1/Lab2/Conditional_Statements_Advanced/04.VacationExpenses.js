/**
 * Write a function, which calculates vacation expenses:
•	Receives season, accommodation type and count of the days
•	Prints the total expenses, based on the price table below, 
formatted to the 2nd digit after the decimal point

Season	Hotel	Camping	Discount
Spring	30	    10	    20%
Summer	50	    30	    0%
Autumn	20	    15	    30%
Winter	40	    10	    10%

 */

// function main(season, accType,countOfDays){
//     let totalExpenses=0;

//     if(accType == "Hotel"){
//         if(season == "Spring"){
//             totalExpenses = 30 * countOfDays;
//             totalExpenses = totalExpenses - 0.2* totalExpenses;
//         }else if(season == "Summer"){
//             totalExpenses = 50 * countOfDays;

//         }else if(season == "Autumn"){
//             totalExpenses = 20 * countOfDays;
//             totalExpenses = totalExpenses - 0.3* totalExpenses;
//         }else{
//             totalExpenses = 40 * countOfDays;
//             totalExpenses = totalExpenses - 0.1* totalExpenses;
//         }
//     }else if(accType == "Camping"){
//          if(season == "Spring"){
//             totalExpenses = 10 * countOfDays;
//             totalExpenses = totalExpenses - 0.2* totalExpenses;
//         }else if(season == "Summer"){
//             totalExpenses = 30 * countOfDays;
//         }else if(season == "Autumn"){
//             totalExpenses = 15 * countOfDays;
//             totalExpenses = totalExpenses - 0.3* totalExpenses;
//         }else{
//             totalExpenses = 10 * countOfDays;
//             totalExpenses = totalExpenses - 0.1* totalExpenses;
//         }
//     }
//     console.log(totalExpenses.toFixed(2));
// }

function main(season, accType, countOfDays) {
	let totalExpenses = 0;

	switch (season) {
		case "Spring":
			switch (accType) {
				case "Hotel":
					totalExpenses = 30 * countOfDays;
					totalExpenses = totalExpenses - 0.2 * totalExpenses;
					break;
				case "Camping":
					totalExpenses = 10 * countOfDays;
					totalExpenses = totalExpenses - 0.2 * totalExpenses;
					break;
			}
			break;
		case "Summer":
			switch (accType) {
				case "Hotel":
					totalExpenses = 50 * countOfDays;
					break;
				case "Camping":
					totalExpenses = 30 * countOfDays;
					break;
			}
			break;
		case "Autumn":
			switch (accType) {
				case "Hotel":
					totalExpenses = 20 * countOfDays;
					totalExpenses = totalExpenses - 0.3 * totalExpenses;
					break;
				case "Camping":
					totalExpenses = 15 * countOfDays;
					totalExpenses = totalExpenses - 0.3 * totalExpenses;
					break;
			}
			break;
		case "Winter":
			switch (accType) {
				case "Hotel":
					totalExpenses = 40 * countOfDays;
					totalExpenses = totalExpenses - 0.1 * totalExpenses;
					break;
				case "Camping":
					totalExpenses = 10 * countOfDays;
					totalExpenses = totalExpenses - 0.1 * totalExpenses;
					break;
			}
			break;
	}
	console.log(totalExpenses.toFixed(2));
}

main("Winter", "Hotel", 5); // 5 *40 = 200 - 10% 200 * .10 = 20 200 - 20 = $180
main("Spring", "Camping", 5); // 5 * 10 = 50 *.2 => 10  50 - 10 = 40
