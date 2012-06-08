//Global Import :
//Benutzen um Globale Variablen explizit zu setzen und nicht implizit anzunehmen
(function ($, YAHOO) {
	// now have access to globals jQuery (as $) and YAHOO in this code
}(jQuery, YAHOO));


//Module Export
//Benutzen um Module wie in C Namespaces oder in Java Packages zu bauen
var MODULE = (function () {
	var my = {},
		privateVariable = 1;

	function privateMethod() {
		// ...
	}

	my.moduleProperty = 1;
	my.moduleMethod = function () {
		// ...
	};

	return my;
}());

// zugriff
MODULE.moduleProperty
MODULE.moduleMethod();

//Augmentation
//Möglichkeit Funktionen eines Modules auf verschiedene Dateien zu verteilen
//Nachteil : feste Ladereihenfolge nötig
var MODULE = (function (my) {
	my.anotherMethod = function () {
		// added method...
	};

	return my;
}(MODULE));


//Loose Augmentation
//Erlaubt unbestimmte Ladereihenfolge
//Aber kein Override - da letzter Load gewinnt
var MODULE = (function (my) {
	// add capabilities...
	return my;
}(MODULE || {})); // Ausnutzen des JS Boolhandling


//Tight Augmentation
///Setzt wie Augmentation feste Reihenfolge vorraus
//bietet sicheren Override in dem die Alte Mehtode gespeichert wird
var MODULE = (function (my) {
	var old_moduleMethod = my.moduleMethod;

	my.moduleMethod = function () {
		// method override, has access to old through old_moduleMethod...
	};

	return my;
}(MODULE));

//Sub-modules
  MODULE.sub = (function () {
	var my = {};
	// ...

	return my;
}());


//Cloning and Inheritance
var MODULE_TWO = (function (old) {
	var my = {},
		key;

	for (key in old) {
		if (old.hasOwnProperty(key)) {
			my[key] = old[key];
		}
	}

	var super_moduleMethod = old.moduleMethod;
	my.moduleMethod = function () {
		// override method on the clone, access to super through super_moduleMethod
	};

	return my;
}(MODULE));

