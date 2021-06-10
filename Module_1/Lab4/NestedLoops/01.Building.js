function main(floorCount, numOfAppartments) {
	for (let floor = floorCount; floor > 0; floor--) {
        let output = "";
		for (let aptNum = 0; aptNum < numOfAppartments; aptNum++) {
            if(floor == floorCount){
                if(aptNum == 0){
                    output+=`L${floor}${aptNum}`;
                }else{
                    output+=` L${floor}${aptNum}`;
                }
                
            }else if(floor%2 ==0){
                if(aptNum == 0){
                    output+=`O${floor}${aptNum}`;
                }else{
                    output+=` O${floor}${aptNum}`;
                }
            }else{
                if(aptNum == 0){
                    output+=`A${floor}${aptNum}`;
                }else{
                    output+=` A${floor}${aptNum}`;
                }
            }
           
        }
        console.log(output);
	}
}

main(6,4);