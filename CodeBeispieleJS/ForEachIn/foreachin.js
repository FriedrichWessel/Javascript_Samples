function jsonTest (){

	var MonstersInc = {
		"Sulli" : {
			"name" : "James P. Sullivan",
			"assistent" : "Mike Wazowski",
			"energyRecord" : 100
		},
		"Randall" : {
			"name" : "Randall Boggs",
			"assistent" : "Fungus",
			"energyRecord" : 20
		}
	}

	var Monsters = ["Sullivan", "Randall"];
	var EnergyToday = [100, 20];


	this.StartTest = function(){
		for(var name in Monsters){
			alert(name);
		};
		for(var monster in Monsters){
			alert(monster);
		};
	};

}

(function(){
	var json = new jsonTest();
	json.StartTest();
}());

