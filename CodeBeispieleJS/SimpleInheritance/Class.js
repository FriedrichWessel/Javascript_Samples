var Class = function(){};
Class.prototype.extend  = function (base){
	var child = this;
	child.base = base;
	for (key in base) {
		if (base.hasOwnProperty(key)) {
			child[key] = base[key];

		}
	}

}

Class.prototype.property = function(value){
	var internValue = value;
	return function(param){
		if((param == null) || (param == undefined) ){
			return internValue;
		} else{
			internValue = param;
		}

	}
};


var SampleClass = function(parameter){
	var sampleClass = new Class();
	var private = parameter;

	sampleClass.PublicValue = sampleClass.property("This is A calling: ");

	sampleClass.Method = function() {
		// Do some Stuff here
		alert(sampleClass.PublicValue() + "A private Value is: " + private);
	};



	return sampleClass;
};

var OtherSampleClass = function(parameter){
	var otherClass = new Class();
	otherClass.extend(SampleClass(parameter));
	// this value is used in base method calls instead of base private Member!
	// so try to avoid this private stuff in Javascript
	var private = parameter;

	otherClass.PublicValue("This is B calling");
	// this will hide the baseClass value - and is no longer accesible in Baseclass
	//otherClass.PublicValue= otherClass.property("This is B calling: ");

	otherClass.Method = function() {
		// Do some new Stuff here
		otherClass.base.Method();
		alert(otherClass.PublicValue() + "B private Value is: " + private);
	};

	return otherClass;
};

function test(){
	var a = new SampleClass("A");
	var b = new OtherSampleClass("B");
	a.Method();
	b.Method();

}
//test();

