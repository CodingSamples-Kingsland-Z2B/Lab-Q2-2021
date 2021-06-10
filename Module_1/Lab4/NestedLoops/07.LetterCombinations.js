function main(startLetter, endLetter, skipLetter) {
	let start = startLetter.charCodeAt();
	let end = endLetter.charCodeAt();
	let skip = skipLetter.charCodeAt();
	let count = 0;
	for (let i = start; i <= end; i++) {
		if (i != skip) {
			for (let j = start; j <= end; j++) {
				if (j != skip) {
					for (let k = start; k <= end; k++) {
						if (k != skip) {
							console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);
							count++;
						}
					}
				}
			}
		}
	}
	console.log(count);
}
main("a", "c", "b");
