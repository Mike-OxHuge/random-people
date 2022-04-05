import maleNames from "./lib/maleNames.js";
import femaleNames from "./lib/femaleNames.js";
import surnames from "./lib/surnames.js";

const allowedSex = ["f", "m", "rnd"];

const rnd = (max) => {
	const num = Math.floor(Math.random() * (max - 1));
	return num;
};
const getRandomName = (gender) => {
	gender = gender.toLowerCase();
	if (gender === "f") return femaleNames[rnd(femaleNames.length)];
	if (gender === "m") return maleNames[rnd(maleNames.length)];
	return rnd(3) === 1
		? maleNames[rnd(maleNames.length)]
		: femaleNames[rnd(femaleNames.length)];
};

const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);
const isValidSex = (s) => allowedSex.includes(s.toLowerCase());

export default function (params) {
	const { amount, gender, withPhoto } = params;
	const users = [];
	try {
		if (!isNumber(amount)) throw Error("amount must be a number!");
		if (!isValidSex(gender))
			throw Error("gender must be 'f' or 'm' or 'rnd'");

		for (let i = 0; i < amount; i++) {
			let user = {};
			user.firstName = getRandomName(gender);
			user.lastName = surnames[rnd(surnames.length)];
			user.username = user.firstName[0] + "." + user.lastName;
			if (withPhoto)
				user.photo = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`;
			users.push(user);
		}
	} catch (e) {
		users.push({
			firstName: "Error occured",
			lastName: "Please check console",
			username: e.message,
			photo: `https://ui-avatars.com/api/?name=Error+Occured}`,
		});
		console.error(e.message);
	}
	return users;
}

/*
users = [
	{
		firstName: 'generated',
		lastName: 'generated',
		username: GENERATE
		dateOfBirth: GENERATE,
		age: CALCULATE,
		photo: GENERATE??,
	}
]
*/
