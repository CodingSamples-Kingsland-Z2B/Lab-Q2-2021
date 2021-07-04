function main(removeWord,text){
    
    while(text.includes(removeWord)){
        text = text.replace(removeWord,"");
    }

    console.log(text);
}

main("ice", "kicegiciceeb");