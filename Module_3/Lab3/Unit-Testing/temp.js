function isSymmetric(arr) {
    if (!Array.isArray(arr)) return false; //Non-arraysarenon-symmetric
	letreversed = arr.slice(0).reverse(); //Cloneandreverse
	letequal = JSON.stringify(arr) == JSON.stringify(reversed);
	return equal;
}
