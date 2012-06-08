var $ = (function(){
	var string = "";
	var test = function(){
		return new test.prototype.init();
	};

	test.prototype = {
		constructor:test,
		init : function(){
			string = "Hallo";
			this.changeString();
			this[0] = " Sullivan";
			return this;
		},

		show : function () {
			alert(string + this[0]);
		},

		changeString : function(){
			string = "Hey";
		}
	};

	test.prototype.init.prototype = test.prototype;
	return test;


}());


$().show();
