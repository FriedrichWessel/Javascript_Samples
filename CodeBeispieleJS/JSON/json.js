var emptyObject = {

};
//JS alternative
var  obj = new function(){};
var  obj2 = new Object();

var array = [1,2,3];
// Alternative Javascript variante:
var jsArray = new Array(1,2,4);

var objectWithArray = {
	age : [20,30,40],
	name : ["Hans", "Dieter", "Klaus"]
};


var completeObject = {
	"string" : "value",
	"number" : 10,
	"bool" : true,
	"nullObject" : null,
	"Object" : {

	}
} ;

// Js Alternative
var jsCompleteObject = new function(){
	this.string = "value";
	this.number = 10;
	this.bool = true;
	this.nullObject = null;
	this.Object = new function(){}
};
alert("Age of " + objectWithArray.name[0] + " is " + objectWithArray.age[0]);
alert("Value of completeObject: " + completeObject["number"]);

var Monster = {
	name : 'Sullivan',
	age : 'Uralt',
	assistent : 'Mike'
}
for(var member in Monster){
	alert(member.toString() + ": "+ Monster[member]);
}



