// imageWithTheToken.png
const Jimp = require('jimp');

const encodeMessage = (keyToNextLevel, userId, email) => (new Promise((resolve, reject) => {
	let binaryMessage = generateBinaryCode(keyToNextLevel, email);
	Jimp.read('./encoder.png', function (err, image) {
		const width = image.bitmap.width;
		const height = image.bitmap.height;
		let newImage = new Jimp(width, height, function (err, imageToEncode) {
			for (var i = 0; i < height; i++) {
				for (var j = 0; j < width; j++) {
					let color = Jimp.intToRGBA(image.getPixelColor(j, i));
					let newValue;
					if (binaryMessage[width * i + j] == 1) {
						newValue = color.r.toString(2) | 1;
					} else {
						newValue = color.r.toString(2) & -2;
					}
					color.r = parseInt(newValue, 2);
					imageToEncode.setPixelColor(Jimp.rgbaToInt(color.r, color.g, color.b, color.a), j, i);
				}
			}
			imageToEncode.write('imageWithTheToken.png', (err) => {
				resolve('Image sent to you!');
			})
		})
	});
}));

function generateBinaryCode(text, email) {
	let binaryMessage = '';
	for (let i = 0; i < text.length; i++) {
		let asciiBinaryCode = (text[i].charCodeAt(0) | 256).toString(2).substring(1);
		binaryMessage = binaryMessage.concat(asciiBinaryCode);
	}
	return binaryMessage;
}

module.exports = encodeMessage;
