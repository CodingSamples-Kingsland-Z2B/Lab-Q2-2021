function main(sentence,word2Censor){

    while(sentence.includes(word2Censor)){
        sentence = sentence.replace(word2Censor,"*".repeat(word.length));
    }

    console.log(sentence);
}


main("A small sentence with some words", "small");