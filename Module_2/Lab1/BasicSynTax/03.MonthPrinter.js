// function numOfTheWeek2Day(dayNumber) {

// 	let weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 	if (dayNumber >= 1 && dayNumber <= 7) {

// 		console.log(weekdays[dayNumber -1 ]);
// 	} else {
// 		console.log("Error");
// 	}
// }

function main(monthNumber) {
	let months = ["January","February","March",	"April","May","June",
                    "July","August","September","October","November","December"];

	if (monthNumber >= 1 && monthNumber <= 12) {
		console.log(months[monthNumber - 1]);
	} else {
		console.log("Error!");
	}
}

// function main(monthNumber){
//     switch(monthNumber){
//         case 1:
//             console.log("January");
//             break;
//         ...
//         default:
//             console.log("Error");
//     }
// }


main(2);
main(13);
main(0);
main(12);