
let links = []; links = loadFile('./images/art/').split('\n');
console.log(links);

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

function addArt() {
	links.forEach(link => {
		let imageAdd = document.createElement("img");
		let image = document.createTextNode(`${link}`);
		imageAdd.appendChild(image);
		document.querySelector("#images").appendChild(imageAdd);
	});
}