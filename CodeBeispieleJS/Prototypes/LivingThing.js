function LivingThing(name){
	this.name = name;
}
LivingThing.prototype.sayYourName = function(){
	say(this,"I'm " + this.name);
}


