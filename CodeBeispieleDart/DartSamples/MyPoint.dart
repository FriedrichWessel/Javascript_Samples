
class MyPoint implements IShowable{
  num x; 
  num y;
  MyPoint(_x,_y){
    this.x = _x; 
    this.y = _y; 
    num x= "hallo";
  }
  MyPoint.zero() : x = 0, y = 1; 
    
  void showElement([extraText = ""]){
    print('$extraText Point: x:$x y:$y'); 
  }  
  
  static num distanceBetween(MyPoint a, MyPoint b) {
    return Math.sqrt(((a.x-b.x)*(a.x-b.x)) + ((a.y-b.y)*(a.y-b.y)));
  }
  
  bool operator <=(MyPoint p) => this.x <= p.x && this.y <= p.y;
  bool operator >=(MyPoint p) => this.x >= p.x && this.y >= p.y; 
    
}