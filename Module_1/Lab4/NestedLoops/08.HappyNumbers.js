function main(number){
    let output = "";
    //the outter most for loop needs to start at 1 
    //becasue the number needs to be 4 digits long (so the numebr cannot be less than 1000)
    for(let i=1;i<=number;i++){
        
        for(let j=0;j<=number;j++){
            for(let k=0;k<=number;k++){
                for(let h=0;h<=number;h++){
                    if (i + j == number && k + h == number) {
                        output+=`${i}${j}${k}${h} `;
					}
                }
            }
        }  
        
    }
    console.log(output) ;
}
main(3)