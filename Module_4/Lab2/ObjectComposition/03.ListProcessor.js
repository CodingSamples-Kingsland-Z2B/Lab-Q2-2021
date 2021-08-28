function main(commandArray) {
	let listObj = {
		list: [], // storing my words
		add: function (string) {
			this.list.push(string);
		},
		remove: function (string) {
			for (let i = 0; i < this.list.length; i++) {
				if (this.list[i] == string) {
					this.list.splice(i, 1);
				}
			}
		},
		print: function () {
			console.log(this.list.join(","));
		},
	};
	for (let string of commandArray) {
		let [command, word] = string.split(" ");

		if (word != undefined) {
			listObj[command](word);
		} else {
			listObj[command]();
		}

        //alternate
        // switch(command){
        //     case "add":
        //         listObj.add(word);
        //         break;
        //     case "remove":
        //         listObj.remove(word);
        //         break;
        //     case "print":
        //         listObj.print();
        //         break;
        // }

	}
}

main(["add hello", "add again", "remove hello", "add again", "print"]);
