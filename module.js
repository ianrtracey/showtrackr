var user = {firstname: "Simon"};

var userAge = (function () {
	var myAge;
	return {
		setAge: function (initAge) {
			myAge = initAge;
		},
		getAge: function () {
			return myAge;
		},
		happyBirthday: function() {
			myAge = myAge + 1;
			return myAge;
		}
	};
})();

userAge.setAge(30);
user.age = userAge.getAge();
console.log(user.age);