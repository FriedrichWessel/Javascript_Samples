// einfache Version
function euklid (a, b) {
	return b ? euklid(b, a%b) : a
}

// Version, die beliebig viele Argumente annimmt,
// rekursiv, funktional
// Ablauf:
// (1) Erzeuge ein Array aus den Argumenten von ggT
// (2) Wenn ggT nur (noch) ein Argument hat, gib dieses zurück, wenn es keines hat, 0
// (3) sonst rufe euklid mit dem ersten Argument
// (4) und dem Ergebnis des Ergebnisses von ggT mit den Argumenten 2 bis n auf
function ggT () {
	return (function (args) {
		return !args[1]
			? function () { return args[0] || 0 } // (2)
			: function () { return euklid( // (3)
			args[0],
			ggT.apply(null, args.slice(1))() // (4)
		)}
	})(Array.prototype.slice.apply(arguments)) // (1)
}

ggT(4,6);        // ergibt eine Funktion, die 2 zurückgibt
// die zurückgegebene Funktion kann auch direkt ausgeführt werden:
ggT()();        // 0
ggT(4)();        // 4
ggT(4,6,8,102,244)();    // 2
