function main(wordList) {
	let wordCount = new Map();

	for (let word of wordList) {
		if (!wordCount.has(word)) {
			wordCount.set(word, 1);
		} else {
			let curCount = wordCount.get(word);
			let newCount = curCount + 1;

			wordCount.set(word, newCount);
		}
	}
	//["here",2]
	let sortedCount = Array.from(wordCount).sort((a, b) => b[1] - a[1]);

	for (let [word, count] of sortedCount) {
		console.log(`${word} -> ${count} times`);
	}
}

main([
	"Here",
	"is",
	"the",
	"first",
	"sentence",
	"Here",
	"is",
	"another",
	"sentence",
	"And",
	"finally",
	"the",
	"third",
	"sentence",
]);
