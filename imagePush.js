const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, './images/art');
const links = [];

fs.readdir(directoryPath, function (err, files) {
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}
	files.forEach(function (file) {
		links.push(file)
		console.log(file);
	});
	console.log(links);
});

for (link of links) {
	document.getElementById('images').innerHTML += `<a href=${link}><img src=${link} width=120 /></a>';
}