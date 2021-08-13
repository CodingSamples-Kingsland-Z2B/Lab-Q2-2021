function encodeAndDecodeMessages() {
    let [encode,decode] = document.getElementsByTagName("button");
    
    encode.addEventListener("click",function(){
        let inputArea = encode.previousElementSibling;
        let outputArea = decode.previousElementSibling;
        //get the text from the input
        //change to char code
        //add an array to hold the charcodes
        let charCodesArray = [];
        let inputString = inputArea.value;
        for(let char of inputString){
            //"a" length 1 [0]
            charCodesArray.push(char.charCodeAt(0)+1);
        }
        // add 1 to the char cod eof each character
        //change back to string code
        let outputString = "";
        for(let charCode of charCodesArray){
            outputString+= String.fromCharCode(charCode);
        }
        outputArea.value = outputString;
        inputArea.value = "";
    });
    decode.addEventListener("click",function(){
        let outputArea = decode.previousElementSibling;

        let charCodesArray = [];
        let outputString = outputArea.value;
        for(let char of outputString){
            //"a" length 1 [0]
            charCodesArray.push(char.charCodeAt(0)-1);
        }
        outputString = "";
        for(let charCode of charCodesArray){
            outputString+= String.fromCharCode(charCode);
        }
        outputArea.value = outputString;
       // inputArea.value = "";
    });
}