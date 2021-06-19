function main(arrayOfNums) {
	while (arrayOfNums.length > 1) {
		let condensed = [];
		for (let i = 0; i < arrayOfNums.length - 1; i++) {
			//use this
			condensed[i] = arrayOfNums[i] + arrayOfNums[i + 1];
			// or this below
			//condensed.push(Number(arrayOfNums[i]) + Number(arrayOfNums[i+1]));
		}
		arrayOfNums = condensed;
	}

	console.log(arrayOfNums.join(""));
}

main([2, 10, 3]);
//main([5, 0, 4, 1, 2]);
