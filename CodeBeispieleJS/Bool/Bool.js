(function boolTest(){

	var myValue = 0 ;
	var yourValue = 5 ;
	var herValue = 8;
	var flag = myValue || yourValue || herValue;
	if(flag){ // flag = 5
		/* This code here will be executed. */
	}

	var myName = 'Caroline';
	var yourName = '';
	var newName = myName && yourName;
	alert('newname is: '+ newName);
}());






