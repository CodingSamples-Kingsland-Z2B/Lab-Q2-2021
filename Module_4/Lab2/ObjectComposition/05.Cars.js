function main(commandsArray){
    let carsObjFactory={
        cars:{},
        create:function(name) {
            this.cars[name]={};
        },
        inherits:function(name,parentName){
            this.cars[name]=Object.create(this.cars[parentName]);
        },
        set:function(name,key,value){
            let curCar = this.cars[name];
            curCar[key] = value;
        },
        print:function(name){
            let parent = Object.getPrototypeOf(this.cars[name]);
            let entries = Object.entries(this.cars[name])
            if(parent!==null){
                let parentEntries = Object.entries(parent);
                entries = entries.concat(parentEntries);
            }

            let output =[];
            for(let [prop,val] of entries){
                output.push(`${prop}:${val}`);
            }
            console.log(output.join(", "));
        }
    };

    for (let string of commandsArray) {
		let command = string.split(" ");

		if(command[2] == "inherit"){
            carsObjFactory.inherits(command[1],command[3]);
        }else if( command[0] == "create"){
            carsObjFactory.create(command[1]);
        }else if(command[0] =="set"){
            carsObjFactory.set(command[1],command[2],command[3])
        }else if(command[0] == "print"){
            carsObjFactory.print(command[1]);
        }
	}
}
main(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);