function Child(name){
	this.base = LivingThing.call(this,name);
	//this.base.call(this,name);

	var teddy = {
		name : "Teddy",
		scareMonster : function(creature){
			document.getElementById(this.name+"Image").src = "boo1.jpg";
			creature.withdraw();
		}
	};

	this.GetScared = function(creature){
		say(this,this.name + ": I'm not scared!");
		teddy.scareMonster.call(this,creature);
	}

}
