Object.prototype.extend  = function (base){
	child = this;

	//alert(child.constructor.name);
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

/*Object.prototype.InheritsFrom = function(searchedBase, ret){

	if((ret == undefined) || (ret == null))
		ret = false;

	if(!this.base) // Top End of the hirachy
		return ret;

	if(ret)
		return ret;
	if(searchedBase == this.base)
		return true;

	if(this.base.inheritsFrom)
		var ret = this.base.inheritsFrom(searchedBase,ret);

	return ret;

}*/
Object.prototype.property = function(value){
	var internValue = value;
	return function(param){
		if((param == null) || (param == undefined) ){
			return internValue;
		} else{
			internValue = param;
		}

	}
};

Object.prototype.privateProperty = function(value){
	var internValue = value;
	var self = this;
	return function(param){
		if(this != self){
			throw("Attribute is inaccessible due its protection level on Object: " + self);
		}
		if((param == null) || (param == undefined) ){
			return internValue;
		} else{
			internValue = param;
		}
	}
};

/*Object.prototype.protectedProperty = function(value){
	var internValue = value;
	var self = this;
	return function(param){
		if(this.InheritsFrom(self)){
			throw("Attribute is inaccessible due its protection level on Object: " + self);
		}
		if((param == null) || (param == undefined) ){
			return internValue;
		} else{
			internValue = param;
		}
	}
}*/





var A = function (extraString) {
	var a = {};
	//a.string = { value : "testA"};
	//a.string = "testA"; DONT DO THIS BUILT IN TYPES DONT CREATE A REFERENCE, so use Property is nicer anyway
	a.string = a.privateProperty("Hallo");
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


};

var B = function (val1) {;
	var b = {};
	b.extend(A(val1));

	//A.call(this,extraString);
	//b.string.value = "testB";
	//b.string("testB");
	b.testObj.value = "testObjectB";
	//b.base= A(extraString);
	b.ExtraString(" PeterC");
	b.show = b.override("show",function() {
		b.base.show();
		alert("BB" + b.ExtraString() + " " + b.testObj.value);
	});
	return b;

};

var a = new A(" PeterA");
var b = new B(" PeterB");
a.show();
b.show();
a.string("Hallo");
a.show();


