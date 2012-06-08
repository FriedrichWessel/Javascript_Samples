var A = function () {
	this.string = "testA";
	this.show = function() {
		alert(this.string + "AA");
	};
	return this;


};

var B = function () {

	A.call(this);
	this.string = "testB";
	this.base= A();
	this.show = function() {
		this.base.show.call(this);
		alert(this.string + "BB");
	}
};

var a = new A();
var b = new B();
a.show();
b.show();
