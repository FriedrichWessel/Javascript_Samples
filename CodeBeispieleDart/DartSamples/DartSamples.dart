#import('dart:html');
#source('IShowable.dart'); 
#source('MyPoint.dart');
#source('Rectangle.dart');

void main() {
  var p = new MyPoint(1, 1);  
  var origin = new MyPoint.zero();
  var points = new List(); 
  for(var i = 0; i <10; i++){
    points.add(new MyPoint(0, i)); 
  }
  for(var point in points){
    point.showElement();
  } 
}







