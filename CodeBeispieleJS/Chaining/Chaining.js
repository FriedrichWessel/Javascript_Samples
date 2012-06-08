function makeAdder(x){
	return function(y) {
		return x + y;
	};
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);

print(add5(2));  // 7
print(add10(2)); // 12


