
class Rectangle implements IShowable{
  final String showString = "Rectangle Corners"; 
  MyPoint upperLeft; 
  MyPoint lowerRight; 
  Rectangle(this.upperLeft, this.lowerRight); 
  bool contains(MyPoint p){
    return upperLeft <= p && lowerRight >= p; 
  }
  num GetWidth() => lowerRight.x - upperLeft.x; 
  num GetHeight() => lowerRight.y - upperLeft.y; 
  
  void showElement(){
    print('$showString: ${this.toString()}');
  }
  String toString() => '${upperLeft.showElement()} and ${lowerRight.showElement()}'; 
}
