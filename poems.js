const poems = [
	[
		"Legless_Bliss",
		"his legless bliss is legible\nshoeless he sighs\nless he hobbles\nhe seizes glee\nblesses ill legs\nheels his sole"
	],
	[
		"Plague",
		"goo oozes loose\nbile sloshes\nboils gloss\ngel soils booboos\nlobes loll\noh gosh"
	],
	[
		"She_Sobs",
		"she sobs\nshe sighs\nsobs ebb\nshe giggles"
	],
	[
		"Less_Oboe",
		"shhhhhh\nshe hisses\nbegs bliss\nobliges less oboe"
	]
];

let fileNames = [];

poems.forEach(info => {
	let poemFiles = [];
	let title = info[0];
	let numLines = info[1].split("\n").length + 1;
	for (let i = 1; i < numLines; i++) {
		poemFiles.push([
			"images/" + title + "_" + i + "_numbers.png",
			"images/" + title + "_" + i + "_letters.png"
		])
	};
	fileNames.push(poemFiles)
});