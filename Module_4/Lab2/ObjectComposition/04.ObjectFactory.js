function main(json){
    let inputArray = JSON.parse(json);
   // [{canMove: true},{canMove:true, doors: 4},{capacity: 5}]
    let newObj ={};
    const concatenate = (a, o) => ({...a, ...o});
    newObj =inputArray.reduce(concatenate, {});
    
    console.log(newObj);
}

 main(`[{"canMove": true},{"canMove":false, "doors": 4},{"capacity": 5}]`);
//`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`
// main(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);


//a{}<-
// for(let key in o){
//     a[key] = o[key];
// }