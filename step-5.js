/* Step 4 - Response:

Man oh man, we didn't expect anyone to get this far. But you're not done yet. You will need to
connect to 'https://nodeconf.elementum.com:6826' using SocketIO: . After that, you must emit to the
socket the 'join' event, with

```
{
	email: 'tiagox@gmail.com',
	token: 'de7394ee1517d5f8d61448a8fe84ae6babd4e1d72d79899ee3ee4fe456a7f7baa090f44f74f0d755ba57946c8f69a3a1f6df64fd4eafee0d1a7e24eef2597a69'
}
```

Now, keep emitting the 'next' event to the socket, while listening to 'data', and decrypt the
message...
*/

const io = require('socket.io-client');
const socket = io('https://nodeconf.elementum.com:6826')
const email = 'tiagox@gmail.com'
const token = 'de7394ee1517d5f8d61448a8fe84ae6babd4e1d72d79899ee3ee4fe456a7f7baa090f44f74f0d755ba57946c8f69a3a1f6df64fd4eafee0d1a7e24eef2597a69'

let raw = ''
let charBuffer = ''
let decoded = ''
const morseCode = {
	'.-':      'a',
	'-...':    'b',
	'-.-.':    'c',
	'-..':     'd',
	'.':       'e',
	'..-.':    'f',
	'--.':     'g',
	'....':    'h',
	'..':      'i',
	'.---':    'j',
	'-.-':     'k',
	'.-..':    'l',
	'--':      'm',
	'-.':      'n',
	'---':     'o',
	'.--.':    'p',
	'--.-':    'q',
	'.--':     'w',
	'.-.':     'r',
	'...':     's',
	'-':       't',
	'..-':     'u',
	'...-':    'v',
	'-..-':    'x',
	'-.--':    'y',
	'--..':    'z',
	'-----':   '0',
	'.----':   '1',
	'..---':   '2',
	'...--':   '3',
	'....-':   '4',
	'.....':   '5',
	'-....':   '6',
	'--...':   '7',
	'---..':   '8',
	'----.':   '9',
	'---...':  ':',
	'--..--':  ',',
	'-.--.-':  '(',
	'-..-.':   '/',
	'-...-':   '=',
	'-....-':  '-',
	'.----.':  '"',
	'.--.-.':  '@',
	'.-.-.-':  '.',
	'.-..-.':  "'",
	'..--..':  '?',
	'.......': ' '
}

socket.on('data', data => {
	if (data !== '|') {
		raw += data
		if (data !== ' ') {
			charBuffer += data
		} else {
			decoded += morseCode[charBuffer] || ' ';
			charBuffer = ''
		}
		socket.emit('next')
	} else {
		console.log(raw)
		console.log(decoded)
		socket.disconnect()
	}
})

socket.emit('join', { email, token })
socket.emit('next')

/* Step 5 - Response:

-.-- --- ..- ....... .- .-. . ....... .-. . .-.. . -. - .-.. . ... ... .-.-.- ....... - .... .
....... -. . -..- - ....... ... - . .--. ....... .-. . --.- ..- .. .-. . ... ....... -.-- --- ..-
....... - --- ....... --- .--. . -. ....... -.-- --- ..- .-. ....... -... .-. --- .-- ... . .-.
....... .- -. -.. ....... --. --- ....... - --- ....... .... - - .--. ... ---... -..-. -..-. -. ---
-.. . -.-. --- -. ..-. .-.-.- . .-.. . -- . -. - ..- -- .-.-.- -.-. --- -- -..-. ... ..- -... -- ..
- ....... .-- .. - .... ....... -.-- --- ..- .-. ....... ..--.- . -- .- .. .-.. ..--.- ....... - ..
.- --. --- -..- .--.-. --. -- .- .. .-.. .-.-.- -.-. --- -- ....... .- -. -.. ....... ..--.- - ---
-.- . -. ..--.- ....... ---.. -.-. ...-- .---- .- ...-- --... .---- .---- ..... .- ..... ---.. .-
....- -.... ----- ..-. -... ----. ..--- ..... -.. .- .- ---.. ---.. ....- .- ..--- .- -.-. ..-.
---.. ..... ..... ---.. . ..--- ----. -.. ----. ..... -.... ---.. --... -.... -.-. .---- ...-- ----.
-.... ---.. -.... .- .- ----- ----. --... -.... -.. .- -.-. ..--- . ..-. ...-- .---- ..-. -.-. .-
--... ..-. ----. ---.. -... -.. -.... ---.. .- ...-- ..--- -.-. ..... . -... ...-- -.. ..... ..---
..--- -... . ..-. .---- -... ..--- ----- ----- ..... ----. ----. ..-. ...-- -.-. -... -.... ...--
..--- -.. ---.. -.-. ---.. ---.. -.. . .---- . ....- ..... -.... --... ..... -.. ---.. ----. ..---
.- ....... .- ... ....... --.- ..- . .-. -.-- ....... .--. .- .-. .- -- . - . .-. ... .-.-.- .......
-.-- --- ..- ....... .-- .. .-.. .-.. ....... -.- -. --- .-- ....... .-- .... .- - ....... - ---
....... -.. --- ....... .- ..-. - . .-. .-- .- .-. -.. ... .-.-.- .-.-.- .-.-.-

you are relentless. the next step requires you to open your browser and go to
https://nodeconf.elementum.com/submit with your  email  tiagox@gmail.com and  token
8c31a37115a58a460fb925daa884a2acf8558e29d956876c139686aa0976dac2ef31fca7f98bd68a32c5eb3d522bef1b200599f3cb632d8c88de1e45675d892a
as query parameters. you will know what to do afterwards..
*/

// #################################################################################################
// So, we're done... I just need to go there:

// https://nodeconf.elementum.com/submit?email=tiagox@gmail.com&token=8c31a37115a58a460fb925daa884a2acf8558e29d956876c139686aa0976dac2ef31fca7f98bd68a32c5eb3d522bef1b200599f3cb632d8c88de1e45675d892a
