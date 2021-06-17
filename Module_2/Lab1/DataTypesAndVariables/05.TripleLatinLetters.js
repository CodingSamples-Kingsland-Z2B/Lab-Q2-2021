function main(numOfLetters){
    for(let i=0;i<numOfLetters;i++){
        for(let j =0;j<numOfLetters;j++){
            for(let k=0;k<numOfLetters;k++){
                let firstLetter = String.fromCharCode(97+i);
                let secondLetter = String.fromCharCode(97+j);
                let thirdLetter = String.fromCharCode(97+k);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

main(3);