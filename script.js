var pos = 0;
const poemtable = document.getElementById("poem");
// poems and fileNames are defined in a separate poems.js file
const len = fileNames.length;
var flipped = [];
for (p of fileNames) {
	flipped.push(Array.from("0".repeat(p.length)))
}

const title = document.getElementById("title");
const text = document.getElementById("text");

function slide(n) {
	pos = ((pos + n % len) + len) % len;
	textQ = false;
	title.innerText = "";
	text.innerText = "";
	show(pos)
}

var textQ = false;
function showtext() {
	textQ = !textQ;
	if (textQ) {
		let titleText = (poems[pos][0]).replace("_", " ");
		title.innerText = titleText;
		text.innerText = poems[pos][1]
	} else {
		title.innerText = "";
		text.innerText = ""
	}
}

function show(n) {
	while (poemtable.firstChild) {
		poemtable.removeChild(poemtable.firstChild);
	};
	const poemlines = fileNames[n];
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

// n is the index of the poem, i is the index of the line in the poem
function flipButton(n, i) {
	const button = document.createElement("button");
	button.class = "flipButton";
	button.innerText = "flip";
	button.onclick = function() {
		let f = (flipped[n][i] + 1) % 2;
		button.style.transform = 'rotate(' + 180 * f + 'deg)';
		const line = document.getElementById("line" + n + i);
		line.src = fileNames[n][i][f];
		flipped[n][i] = f;
	}
	return button
}

show(pos);
