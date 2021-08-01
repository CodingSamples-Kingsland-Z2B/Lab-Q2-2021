function main(arrOfNums){
    let firstNum = Number(arrOfNums.shift());
    let lastNum = Number(arrOfNums.pop());

    console.log(firstNum+lastNum);
}

main(['20', '30', '40']);