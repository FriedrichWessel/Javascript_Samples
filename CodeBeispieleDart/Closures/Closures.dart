#import('dart:html');

Function makeAdder(num n) {
  return (num i){
    return n + i;
  }; 
}

main() {
  var add2 = makeAdder(2);
  print(add2(3));
}
