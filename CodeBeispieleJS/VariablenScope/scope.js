(function Scope (){
	var privateVariable = 5 ;

	function testScope(){
   		alert("private Variable: " + privateVariable);
		privateVariable = 10;
		globlalVar = 3;
		var internalVar = 5;
	};
	testScope();

	(function testScope2(){
		alert("testScope2: " + privateVariable); // should be 10 by now
		alert("global Variable: " + globlalVar);
		alert("internal Var: " + internalVar); // this should be undefined
	}());




}());



