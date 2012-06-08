// Variante I
function GreetingsTo(greetingsTo) {
	// Default Parameter
	if(greetingsTo == undefined)
		greetingsTo = "World";

	alert("Hello " + greetingsTo);
}
// anonyme funktion
var anonymeGreeting = function () {
	alert("Hello");
};
// named function expression - good for internal recursion
// Can call  <ExternGreetingsTo> from extern, call just from inside the function InternGreetingsTo.
var GreetingCounter = 0;
var ExternGreetingsTo = function InternGreetingsTo(greetingsTo) {
	alert("Hello "+ greetingsTo);
	// Do some recursion without backCall to Closure
	if(GreetingCounter < 2){
		GreetingCounter++;
		InternGreetingsTo("Recursion");
	}
};

var jsonGreetings = {
	saySomething : function(){
		alert("Hello json");
	}
} ;

// Instant called function
(function(){
	GreetingsTo();
	GreetingsTo("FU Berlin");
	anonymeGreeting();
	ExternGreetingsTo("FU Berlin");
	jsonGreetings["saySomething"]();
	//InternGreetingsTo("Security"); // this wont work

}());









