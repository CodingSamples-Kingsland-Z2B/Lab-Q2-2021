let string = "RandomInput1234";
let number= 2;

let groups =[];
const numOfGroups = Math.ceil(string.length/number);
for(let i=0;i<numOfGroups;i++){
    //"RandomInput1234", 3
    let group = "";
    for(j=i*number;j<(i+1)*number;j++){
        console.log(string[j%string.length]);
        group+=string[j%string.length];
        
    }
    groups.push(group);
}