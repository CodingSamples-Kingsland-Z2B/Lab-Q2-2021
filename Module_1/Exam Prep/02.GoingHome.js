//condition around the outputs
// if money earned > cost to go home (go home)
//otherwise split the earnings 5 ways

function main(distance, gasPerHundKM, gasCostPerL, moneyWon) {
	gasPerHundKM = gasPerHundKM / 100;
	//gas consumption
	let gasComsumed = distance * gasPerHundKM;
	// gas cost Total
	let totalCost = gasComsumed * gasCostPerL;
	if (moneyWon >= totalCost) {
		//go home
		let leftOver = moneyWon - totalCost;
        let output = `You can go home. ` +leftOver.toFixed(2)+` money left.`;
		console.log(output);
	} else {
		//no going home
		console.log(
			`Sorry, you cannot go home. Each will receive ${( moneyWon / 5).toFixed(2)} money.`
		);
	}
}

//main(100, 5, 1.2, 6 );
//main(120, 5,1.2,4);
main(100,8,1.2,20);