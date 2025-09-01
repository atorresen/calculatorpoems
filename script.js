var pos = 0;
const poemtable = document.getElementById("poem");
// poems and poemfiles are defined in a separate .js file to keep this script.js file tidy
const len = poemfiles.length;
var flipped = [];
for (p of poemfiles) {
	flipped.push(Array.from("1".repeat(p.length)))
}

function slide(n) {
	pos = ((pos + n % len) + len) % len;
	show(pos)
}

var textQ = false;
function showtext() {
	textQ = !textQ;
	const text = document.getElementById("text");
	if (textQ) {
		text.innerText = poems[pos]
	} else {
		text.innerText = ""
	}
}

function show(n) {
	while (poemtable.firstChild) {
		poemtable.removeChild(poemtable.firstChild);
	};
	const poemlines = poemfiles[n];
	for (i = 0; i < poemlines.length; i++) {
		const row = poemtable.insertRow();
		const button = row.insertCell();
		button.appendChild(flipButton(n, i))
		const line = row.insertCell();
		const img = document.createElement("img");
		line.appendChild(img);
		img.id = "line" + n + i;
		img.src = poemlines[i][0];
	}
}

function flipButton(n, i) {
	const button = document.createElement("button");
	button.class = "flipButton";
	button.innerText = "flip";
	button.onclick = function() {
		let f = flipped[n][i];
		const line = document.getElementById("line" + n + i);
		line.src = poemfiles[n][i][f];
		flipped[n][i] = (f + 1) % 2;
	}
	return button
}

show(pos);
