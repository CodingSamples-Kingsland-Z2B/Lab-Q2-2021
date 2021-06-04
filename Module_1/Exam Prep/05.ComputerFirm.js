/*
  Write a program that calculates the average rating and possible sales for a certain number of computers.
   
  First, a number is entered from the console, which is the number of computers. 
  
  Then, one number is entered consecutively for each computer:
•	The last digit of this number represents the rating. It will be in the range [2…6].
•	The remaining figures represent possible sales.


The computer sale is scaled based on a rating:
•	Rating 2 takes 0% of possible sales.
•	Rating 3 takes 50% of possible sales.
•	Rating 4 takes 70% of possible sales.
•	Rating 5 takes 85% of possible sales.
•	Rating 6 takes 100% of possible sales.

  2 inputs
    1st number 
    2nd is array that is the 1st input numbers long
 

    Output
    You must print on the console 2 lines:
    •	The number of sales made
    •	The average arithmetic rating for all computers
    Sales and rating must be formatted to the second digit after the decimal point.

    
    calulate the number of sales total

    calulate the average rating
    2+4+5+2+3 = 16/5 => average rating
    add up each rating 
    divide by the number of ratings.

 */

function main(numOfComputers,listOfComputers){
    let totalSales = 0;
    let totalRatings = 0;
    for(let i=0; i < numOfComputers; i++){
        let computerInfo = listOfComputers.shift();
        // 103 -> 10 computers rating of 3
        let rating = computerInfo %10;
        let computersSold = Math.floor(computerInfo/10);
        // 3/4 => 0.75 =>0
        switch (rating) {
			case 6:
				totalSales += computersSold;
				break;
			case 5:
				totalSales += computersSold * 0.85;
				break;
			case 4:
				totalSales += computersSold * 0.7;
				break;
			case 3:
				totalSales += computersSold * 0.5;
				break;
		}
        //totalRatings += Current rating
        totalRatings += rating;
    }

    // total rating / numOfComputers == average
    console.log(totalSales.toFixed(2));
    let ratingAverage = totalRatings/numOfComputers;
    console.log(ratingAverage.toFixed(2));
}

main(3,[103,103,103]);
main(5,[122, 156, 202, 214, 185]);