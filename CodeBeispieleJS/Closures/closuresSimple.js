function createIterator() {
	var list = ["Sullivan", "Randall", "Mike"];
	var i = 0;
	return function() {
		var ret = null;
		if(i < list.length) {
			ret = list[i];
		}
		i++;
		return ret;
	}
}

(function main(){
	var it = createIterator();
	var value = it();
	while(value!= null){
		alert("The next Monster is: " + value);
		value = it();

	}
}());

