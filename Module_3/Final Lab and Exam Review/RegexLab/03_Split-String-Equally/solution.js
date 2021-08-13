function solve() {
    /* 
    "RandomInput1234", 2	Ra nd om In pu t1 23 4R
    "Test", 8	TestTest
    "JavaScript", 14	JavaScriptJava
 */
    let string = document.getElementById("text").value;
    let number = parseInt(document.getElementById("number").value);

   
    if(string.length>number){
         //sting length is > number 15/2 = 8 *2 => 16 -length =1
         // Math.ceil(string.length / number) => # of groups 
         let groups =[];
         const numOfGroups = Math.ceil(string.length/number);
         for(let i=0;i<numOfGroups;i++){
             //"RandomInput1234", 3
             let group = "";
             for(j=i*number;j<(i+1)*number;j++){
                let length = string.length;//15
                //console.log(string[j%length]);
                group+=string[j%length];
                 
             }
             groups.push(group);
         }
         document.getElementById("result").innerHTML = groups.join(" ");
    }else{
        //sting length is <= number
        //print string as is and add letters
        let output ="";
        for(let i=0;i<number;i++){
            let length = string.length;//10
            output+= string[i%length];
        }
        document.getElementById("result").innerHTML = output;
    }
    
}