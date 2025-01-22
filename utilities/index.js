const log = async (variable, showOrigin=true, level=1) => {
	/*
	for(let i = 0; i < __stack.length; i++) {
		helpers.log("");
		helpers.log(i+' --');
		helpers.log(__stack[i]);
		helpers.log(__stack[i].getLineNumber());
		helpers.log(__stack[i].getFunctionName());
		helpers.log(__stack[i].getFileName());
	}
	*/

	//presumably the file/line you want is the second in the stack, so default array index is 1
	let target = __stack[level];
	let fileArr = target.getFileName().split('/');
	let file = fileArr[fileArr.length - 1];
	let fxn = target.getFunctionName();
	let line = target.getLineNumber();

	if(showOrigin){
		console.log(`++ `+file+` [`+line+`] `+fxn);
	}
	console.log(variable);
};

module.exports = {
	log
}