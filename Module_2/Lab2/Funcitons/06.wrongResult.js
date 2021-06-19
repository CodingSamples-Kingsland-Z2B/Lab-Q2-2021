function main(n1,n2,n3){
    console.log(posOrNeg(n1,n2,n3));
}

function posOrNeg(num1,num2,num3){
    
    if ((num1 > 0 && num2 > 0 && num3 >0) ||
		(num1 == 0 || num2 == 0 || num3 == 0)) {
		return "Positive";
	}

    let numOfNegs = isNeg(num1)+isNeg(num2)+isNeg(num3);

    if(numOfNegs%2 ==0){
        return "Positive";
    }else{
        return "Negative";
    }
}

function isNeg(number){
    if(number >0){
        return 0;
    }
    return 1;
}


// console.log(posOrNeg(1,-3,5));

main(5, 10, 15 );