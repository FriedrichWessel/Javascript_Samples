function showName(monster) {
	alert(monster.name);
}

function setupMonsters() {
	var monsters = [
		{'id' : 0, 'name' : "Sullivan"},
		{'id' : 1, 'name' : "Randall"},
		{'id' : 2, 'name' : "Mike"}
	];

	for (var i = 0; i < monsters.length; i++) {
		var monster = monsters[i];
		document.getElementById(monster.id).innerHTML = monster.name;
		document.getElementById(monster.id).onclick  = function(){
			showName(monster);
		};
	}

}




//setupMonsters();

/*
Lösung
function(monster){
	return function(){
 		showName(monster);
 	}
 }(monster);

document.getElementById(monster.id).onclick  = function(){
	 showName(monster);
};
Dadurch wird jedes mal eine neue  Funktion und damit ein neuer Scope*/

