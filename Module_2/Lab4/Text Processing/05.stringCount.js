function main(sentence,string2Count){
    let wordsArray = sentence.split(" ");
    let counter =0;

    for(let word of wordsArray){
        if(word == string2Count){
            counter++;
        }
    }

    console.log(counter);
}
main("This is a word and it also is a sentence",
"is")