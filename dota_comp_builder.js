var users = [];
var heroes = [];
var positions = ["Carry", "Mid", "Offlane", "Support", "Hard Support"];
var pos_raw = ["pos1", "pos2", "pos3", "pos4", "pos5"];

window.onload = function generateList() {

	users = loadFile('./dota_data/users.txt').split("\n");
	heroes = loadFile('./dota_data/heroes.txt').split("\n");
	//heroes = loadFile('./dota_data/heroes.txt').split("\n");

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
