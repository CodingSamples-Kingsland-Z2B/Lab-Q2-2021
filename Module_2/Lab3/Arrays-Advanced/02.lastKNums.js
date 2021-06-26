function main(totalSeqLength, lookBack){
    let sequence = [1]; // 1 
    // for loop for building the sequence
    for (let i = 1; i < totalSeqLength; i++) {
		//build out the next item in the sequence
		//step 1 look back lookBack number of items
		let start = Math.max(0, i - lookBack);
		// let start = (i-lookBack)>0? i-lookBack: 0;
		//step 2 is determine where the loop ends
        let end = i;
        //step 3 calulate the sum

        //Method 1
        let sum = calcSum(sequence,start,end);
       
        //Method 2 same as method 1 but doesnt have the funciton
        // let sum = 0;
        // for(let j = start;j<end;j++){
        //    sum += sequence[j];
        // }

    
         //Method 3
        // let sum = 0;
        // // 1 1  2 4 7
        // for (let j = i-1; j >= i - lookBack; j--) {
        //      sum += (sequence[j] != undefined) ? sequence[j] : 0;
        //     // the line above is the same as the code below
        //     // if (sequence[j] != undefined) {
        //     //     sum += sequence[j];
        //     // } else {
        //     //     sum += 0;
        //     // }
        //     //console.log('index:', j, 'output item:', sequence[j], 'sum:', sum);
        // }
        

        sequence.push(sum);
        // sequence[i] = sum;
	}

    console.log(sequence.join(" "));

}

function calcSum(arr,start,end){
    let sum = 0;
	for (let i = start; i < end; i++) {
		sum += arr[i];
	}
	return sum;
}

main(6,3);

//main(8,2);