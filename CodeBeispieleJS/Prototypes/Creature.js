var Creature = function(name,weight,enemy){
	LivingThing.call(this, name);
	this.weight = weight;
	this.enemy = enemy;
	this.initialWeight = this.weight;
} ;
Creature.prototype = new LivingThing();
Creature.prototype.base = LivingThing.prototype;

Creature.prototype.Feed = function(amountOfFood){
	this.weight += amountOfFood;
};

Creature.prototype.ScarePeople = function(child){
	say(this,this.name + " scares: " + child.name);
	// try to take Teddy:
	child.teddy = null;
	child.GetScared(this);


	this.weight -= 3;
};

Creature.prototype.IsHungry = function(){
	 return this.weight  < this.initialWeight / 2;
};

Creature.prototype.withdraw = function(){
	document.getElementById(this.name+"Image").src = "sulley2.jpg";
	say(this,this.name + ": Ahhh");
};

Creature.prototype.HowAreYou = function(){
	document.getElementById(this.name+"Image").src = "Sulley.jpg";
	if(this.IsHungry())
		var value = "I'm Hungry";
	else
		var value = "I want to scare people!";
	say(this,value);
};





