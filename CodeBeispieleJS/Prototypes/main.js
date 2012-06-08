function say(obj, message){
	document.getElementById(obj.name).innerHTML = message;
}

currentAction = 0;
function start(){
	var Sullivan = new Creature("Sullivan",4,"Boo");
	var Boo = new Child("Boo");
	actions = [
		function(){Sullivan.HowAreYou.call(Sullivan)},
		function(){Sullivan.ScarePeople.call(Sullivan,Boo)},
		function(){Sullivan.HowAreYou.call(Sullivan)}];
	document.getElementById("BooImage").onclick = next;
	document.getElementById("SullivanImage").onclick = next;

}
function next(){
	var f =actions[currentAction];
	currentAction++;
	f();

}


