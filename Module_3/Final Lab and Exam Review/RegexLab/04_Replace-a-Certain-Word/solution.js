function solve() {
    /* 
    ["I love programming", 
"Programming is fun", 
"ProgrAmmIng.",
"JSProgramming", "!@#$proGRAMming!@#$"]
 */
    let word = document.getElementById("word").value;
    let arrayOfSentences = JSON.parse(document.getElementById("text").value);
    let replaceWord = arrayOfSentences[0].split(" ")[2];
    
    let regex = new RegExp(replaceWord,"i");

    for(let i=0;i<arrayOfSentences.length;i++){
        
        let p = document.createElement("p");
        p.innerHTML = arrayOfSentences[i].replace(regex,word); 
        document.getElementById("result").appendChild(p);
    }
    // longer option
    // for(let i=0;i<arrayOfSentences.length;i++){
    //     arrayOfSentences[i] =arrayOfSentences[i].replace(regex,word); 
    // }
    // for(let sentence of arrayOfSentences){
    //     let p = document.createElement("p");
    //     p.innerHTML = sentence;
    //     document.getElementById("result").appendChild(p);
    // }
   
}