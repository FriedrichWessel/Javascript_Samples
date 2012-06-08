function Monster(name){
	this.Name = name;
	/* nach außen abstrahierte Variante
	 self = this;
	 */
	this.PrintName = function(){
		alert("The Monsters name is: " +  this.Name);
	};


}
var Sullivan = new Monster("Sullivan");
// Call the getCondiments function in 3 seconds
//setTimeout(Sullivan.PrintName, 3000);

// Vorgehensweise ausnutzen :
/*
var o={}; // declaring new object
o.name="moon";
o.method=function () {
	alert(this.name);
};
var x={};
x.name="sun";
x.method=o.method;
x.method();
//*/

// Vorgehensweise Explizit unterdrücken
/*setTimeout(function(){
	Sullivan.PrintName.call(Sullivan);
}, 3000);
//*/






