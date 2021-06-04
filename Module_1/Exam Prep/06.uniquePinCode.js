/*
 generates three-digit PIN codes, the digits of each PIN being within a certain interval. For a PIN to be valid, it must satisfy the following conditions:
•	The first and third digits must be even.
•	The second digit must be a prime number in the range [2...7].

    2-4-6-8-...
    prime numbers are numbers that are only divible by 1 and themselves
    2,3,5,7

    {evenNumber}{2,3,5,7}{evenNumber}

*/

function main(limit1, limit2, limit3) {
	for (let i = 2; i <= limit1; i += 2) {
		for (let j = 2; j <= limit2; j++) {
			for (let k = 2; k <= limit3; k += 2) {
				if (j == 2 || j == 3 || j == 5 || j == 7) {
					console.log(`${i} ${j} ${k}`);
				}
			}
		}
	}
}

main(8,5,5);