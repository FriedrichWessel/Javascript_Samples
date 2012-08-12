function Class(name,f){
	var class = {};

	for(var key in f){

	}
	class.prototype = {
		extend : function (base){
			child = this;
			alert(child.constructor.name);
			child.base = {};
			for (key in base) {
				if (base.hasOwnProperty(key)) {
					child[key] = base[key];

				}
			}

			if(!child.override){
				child.override = function(methodName,f){
					child.base[methodName] = base[methodName];
					child[methodName] = f;
					return f;
				};
			}
		}
	};

	return f;

}

var A = Class("A", function (extraString) {
		var a = {};
		//a.string = "testA"; DONT DO THIS BUILT IN TYPES DONT CREATE A REFERENCE, so use Property is nicer anyway
		a.string = a.protectedProperty("Hallo");
		a.testObj = { value : "testObjectA"};
		a.show = function() {
			alert(a.string() + "AA " + extraString + " " + a.testObj.value);
		};

		a.ExtraString = function(value){
			if(!value && value != ""){ // getter
				return extraString;
			} else {
				extraString = value;
			}
		};
		return a;
	}
);
