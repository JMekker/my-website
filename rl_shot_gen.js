var adj = [];
var names = [];
var space = " ";
var list = [];

function generateList() {

	adj = loadFile('./rl_data/adjectives.txt').split("\n");
	names = loadFile('./rl_data/names.txt').split("\n");

	var x = 0;
	for (var i = 0; i < adj.length - 1; i++) {
		for (var j = 0; j < names.length - 1; j++) {
			list[x] = [adj[i], names[j]].join(' ');
			x++;
		}
	}
}

function loadFile(filePath) {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send();
	if (xmlhttp.status == 200) {
		result = xmlhttp.responseText;
	}
	return result;
}

function upperLimit() {
	document.getElementById("upper").innerHTML += list.length;
}

function getShot() {
	var i = document.getElementById("entry").value - 1;
	if (i < 0 || i > (list.length - 1)) {
		document.getElementById("ans").innerHTML = "";
		return;
	}
	var name = list[i];
	document.getElementById("ans").innerHTML = name;
}

function autoGenerate() {
	var i = Math.floor(Math.random() * list.length) + 1;
	document.getElementById("auto1").innerHTML = i;
	document.getElementById("auto2").innerHTML = list[i];
}
