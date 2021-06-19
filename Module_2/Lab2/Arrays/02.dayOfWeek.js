function main(day) {
	let daysOfTheWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	
	if(day >=1&& day <=7){
        console.log(daysOfTheWeek[day-1]);
    }else{
        console.log("Invalid day!");
    }
	
	
}

main(0);