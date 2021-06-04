/**
    condition block 1
	        March to May	June to August
    Day	    10.50 per hour	12.60 per hour
    Night	8.4 per hour	10.20 per hour

    condition block 2
•	For a group of four or more people, the cost per person is reduced by 10%
    condition block 3
•	For 5 hours or more, the price is reduced by 50% per person

 */

function main(month, hoursSpent, groupSize, timeOfDay) {
	//if else / switch
	// month
	//time of day
	// if ((month == "march" || month == "april" || month == "May") && timeOfDay == "day")
    let price = 0;

	switch (month) {
		case "March":
		case "April":
		case "May":
			if (timeOfDay == "day") {
				price = 10.5;
			} else {
				price = 8.4;
			}

			break;  
		case "June":
		case "July":
		case "August":
			if (timeOfDay == "day") {
				price = 12.6;
			} else {
				price = 10.2;
			}
			break;
	}

    // condition block 2
    // •	For a group of four or more people, the cost per person is reduced by 10%
    if(groupSize >= 4){
        price = price - (price * 0.1);
    }
    //     condition block 3
    // •	For 5 hours or more, the price is reduced by 50% per person
    if(hoursSpent >= 5){
        price = price - (price * 0.5);
    }
    
    let totalPrice = price * groupSize * hoursSpent;

	//    On the first line: "Price per person for one hour: {price per person per hour}"
    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
	//    On the second line: "Total cost of the visit: {total price}"
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}

//main('March', 3, 3, 'day' );
main('July', 5, 5, 'night' );