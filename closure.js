var user = {};

var setAge = function (myAge) {
	return { getAge: function() { return myAge; } };
};

user.age = setAge(30);
console.log(user.age);
console.log(user.age.getAge());