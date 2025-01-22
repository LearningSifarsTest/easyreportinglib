const moment = require('moment');

 const getRandomNumber = async(min=500, max=2000) =>{
	return Math.floor( Math.random() * (max - min + 1) + min);
}

const generateDOB = async (low, high)=>{
	let age = await getRandomNumber(low, high);
	let dayofyear = await getRandomNumber(100, 365);
	//helpers.log(age);


	//				years		days			hours		minutes		seconds		milliseconds
	let subtract = 	age *		dayofyear *		24	*		60	*		60	*		1000;
	//helpers.log(new Date(Date.now() - (subtract)));
	let dob = moment(new Date(Date.now() - (subtract)).valueOf()).format('YYYY-MM-DD');
	//helpers.log(dob);
	return dob;
}

module.exports = {
	getRandomNumber,
	generateDOB
}