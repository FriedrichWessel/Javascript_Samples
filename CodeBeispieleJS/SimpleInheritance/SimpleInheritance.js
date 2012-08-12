var A = function (extraString) {
	this.string = "testA";
	this.show = function() {
		alert(this.string + "AA " + extraString);
	};

	this.ExtraString = function(value){
		if(!value && value != ""){ // getter
			return value;
		} else {
			extraString = value;
		}
	};
	return this;


};

var B = function (extraString) {
	A.call(this,extraString);
	this.string = "testB";
	this.base= A(extraString);
	this.ExtraString(" PeterC");
	this.show = function() {
		this.base.show.call(this);
		alert(this.string + "BB" + extraString);
	}
};

var a = new A(" PeterA");
var b = new B(" PeterB");
a.show();
b.show();
