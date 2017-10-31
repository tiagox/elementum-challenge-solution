/* Step 2 - Response:

You thought that was it? We're just getting started. ssh into 'nodeconf.elementum.com' at port 6969,
using your email as user and this password:

'de149baf1c656d09c0f92000e9d160df330361fb57cb95a88f8bddb091a3e7399b0ce73a706884e19f20f918ee99a21bfa0709b9b3298bb6ae34fecbce323dbe'

Once logged in, perhaps you'd like to check what's in that server...
*/

// Check what's in the filesystem:

const fs = require('fs')
fs.readdir('.', (_, items) => {
	items.forEach(item => {
		const stat = fs.lstatSync(item);
		if (stat.isDirectory()) {
			console.log('Dir: ' + item)
		} else if (stat.isFile()) {
			console.log('File: ' + item)
		}
	})
})

/*
File: .dockerenv
File: .node_repl_history
File: 29912300c7af45de751d52ee384b49ed80e995bc9a21d2f8d22dc890aeafc799d3ad79f6998ed09b9f56e5d9f81502c213573b3ca2d4858c5fde80d55b6285f4
File: 30e00fa06d142169dd001b3da1d744ba236474eae764872bdaaed9c34c11c2953a1614b00bf3f14ac8462254d754ea8e77da5bf26d5f057fff1a1090d1ee4fd1
File: 326cdb5ffe8f29ac435b1dcf4c5d734c74cce15f21a6a06c4edd28fa96d6135afa7eb90bd7d7cd3e490d7243b9a9db49908c5127bdf56867379e7900ead1cd55
Dir: 47728b9684daa5d1504c639ba985fc136c94f2980ee765e138c46b4942921bc81bc4bdf751ffd0aa8c4f74b91b60c1fe80f744056d374d9443bd80fee3b32ce4
File: 4e4d0fdb05f68b56177d654e8eb369669a971e5c11a20378290a73c4655b6afdc563d72f3cf6888b88736bf4dd62a9cb1c219c280aa6ad66f91447b5306a39a4
File: 4fd4eba33fd2adb7c2e53fa2f5dbdcf6db2b79d6b95bbf52a74f2a94b51674d8e41c5afa66cfdcd21ebab46a759238295f396ea236d3bde36af7b9b234ffa5a5
Dir: 66760d563c3b67b28e55201c265ce4514f85a72f6a9e4d83e80f59847db43d26d35a8bc99deacbe42dc7ab6603b3b5261a117082712d7a16b5060eeb28318668
File: 88419f576d11cea8f128f31f3f3c7935ff8d1b436d91c2c02a5d88d5b632544d6651f2a02ba23237f8377bdc20554aed8900fb4b3e42b87b5a7e055f3d991132
File: 8bddcd1332b9bde132dd5c3e01e4601b32fd0bea2f2482daadf04549bee1d3b80480e036d8e8784ee58c3addf88e1ed4d0bf68e84aabcb81bd909c2f1099632e
Dir: 8d5622d89dfb59ff4d296ce9e2c3d45a2a14062426c764f92b990f19a80bdb169b7ede9a955040ad92d52c8ff91e8ee0fc404886b64995ea3b0ff9273b2d7040
Dir: 99e0d4ad08c79d85981811122bccfc5b817903c154a0a5aea804ed0c9bcc63a7d1b9bbeb7993379920e0802e4593a3d612551b5a4c715f85a7a15af9a715351f
File: 9fd8e43f42e50e129abcddcff58f2f0871df2ccb2352fd138027b7818f3033398d501c5a31b203db190aa89f75919a575cb0778933fac26187ed4b933d894ce1
File: README.txt
File: a9b5c5502c7deeed2731bc43e6fcae802127fdcf6ca8feecaaddf1cb430d04d4c33e84314049cd7fb3c9342b154a2f227fa79b4f899ffddea318feec30190801
Dir: b1f241e32367423ee27b7c6ca94b4ce0324ce47d68ff146b9fb463886542a90e4d7fbbea32bd9a605cc70f7689b5060bd3a1b1fdb24f6d1cc62e49aedb30816d
Dir: bin
Dir: dev
Dir: etc
File: node
Dir: proc
Dir: sbin
Dir: sys
Dir: usr
*/

// #################################################################################################
// Probably README.txt has something to tell us:

const fs = require('fs')
console.log(fs.readFileSync('README.txt', 'utf8'))

/*
Hi there! Congrats for making it this far! And welcome to a new challenge! Find a file that contains
the string "cj9agxrli013urx75n6q1nisc". It shouldn't be so hard... Should it?
*/

// #################################################################################################
const fs = require('fs')
const term = 'cj9agxrli013urx75n6q1nisc'
function searchStringInFiles(dir, term) {
	fs.readdir(dir, (_, items) => {
		items.forEach(item => {
			global.gc()
			const path = dir + '/' + item
			const stat = fs.lstatSync(path)
			if (stat.isDirectory()) {
				searchStringInFiles(path, term)
			} else if (stat.isFile()) {
				lookInFile(path, term)
			}
		})
	})
}
function lookInFile(filepath, term) {
	const text = fs.readFileSync(filepath, 'utf8')
	if (text && text.includes(term)) {
		console.log('Found: ' + filepath)
	}
}
// Let's check just those interesting file/dir names in the filesystem...
const files = [
	'29912300c7af45de751d52ee384b49ed80e995bc9a21d2f8d22dc890aeafc799d3ad79f6998ed09b9f56e5d9f81502c213573b3ca2d4858c5fde80d55b6285f4',
	'30e00fa06d142169dd001b3da1d744ba236474eae764872bdaaed9c34c11c2953a1614b00bf3f14ac8462254d754ea8e77da5bf26d5f057fff1a1090d1ee4fd1',
	'326cdb5ffe8f29ac435b1dcf4c5d734c74cce15f21a6a06c4edd28fa96d6135afa7eb90bd7d7cd3e490d7243b9a9db49908c5127bdf56867379e7900ead1cd55',
	'47728b9684daa5d1504c639ba985fc136c94f2980ee765e138c46b4942921bc81bc4bdf751ffd0aa8c4f74b91b60c1fe80f744056d374d9443bd80fee3b32ce4',
	'4e4d0fdb05f68b56177d654e8eb369669a971e5c11a20378290a73c4655b6afdc563d72f3cf6888b88736bf4dd62a9cb1c219c280aa6ad66f91447b5306a39a4',
	'4fd4eba33fd2adb7c2e53fa2f5dbdcf6db2b79d6b95bbf52a74f2a94b51674d8e41c5afa66cfdcd21ebab46a759238295f396ea236d3bde36af7b9b234ffa5a5',
	'66760d563c3b67b28e55201c265ce4514f85a72f6a9e4d83e80f59847db43d26d35a8bc99deacbe42dc7ab6603b3b5261a117082712d7a16b5060eeb28318668',
	'88419f576d11cea8f128f31f3f3c7935ff8d1b436d91c2c02a5d88d5b632544d6651f2a02ba23237f8377bdc20554aed8900fb4b3e42b87b5a7e055f3d991132',
	'8bddcd1332b9bde132dd5c3e01e4601b32fd0bea2f2482daadf04549bee1d3b80480e036d8e8784ee58c3addf88e1ed4d0bf68e84aabcb81bd909c2f1099632e',
	'8d5622d89dfb59ff4d296ce9e2c3d45a2a14062426c764f92b990f19a80bdb169b7ede9a955040ad92d52c8ff91e8ee0fc404886b64995ea3b0ff9273b2d7040',
	'99e0d4ad08c79d85981811122bccfc5b817903c154a0a5aea804ed0c9bcc63a7d1b9bbeb7993379920e0802e4593a3d612551b5a4c715f85a7a15af9a715351f',
	'9fd8e43f42e50e129abcddcff58f2f0871df2ccb2352fd138027b7818f3033398d501c5a31b203db190aa89f75919a575cb0778933fac26187ed4b933d894ce1',
	'a9b5c5502c7deeed2731bc43e6fcae802127fdcf6ca8feecaaddf1cb430d04d4c33e84314049cd7fb3c9342b154a2f227fa79b4f899ffddea318feec30190801',
	'b1f241e32367423ee27b7c6ca94b4ce0324ce47d68ff146b9fb463886542a90e4d7fbbea32bd9a605cc70f7689b5060bd3a1b1fdb24f6d1cc62e49aedb30816d'
]
files.forEach(path => {
	global.gc()
	const stat = fs.lstatSync(path)
	if (stat.isDirectory()) {
		searchStringInFiles(path, term)
	} else if (stat.isFile()) {
		lookInFile(path, term)
	}
});

/*
Found: 47728b9684daa5d1504c639ba985fc136c94f2980ee765e138c46b4942921bc81bc4bdf751ffd0aa8c4f74b91b60c1fe80f744056d374d9443bd80fee3b32ce4/e42b3768e195bebc0cce19282b40b1637ba68d89e902c6fe50aaf2249ec22b8dd2740ec9197165e01f4199b6b4fa9a5fa8c2ca284559f2114094a050cc8523db/e123ca83ecc98b023669cf9e3a49c08f4e3d47d0a4881fbb67b9356472aeefe3690c2ee61eff33f331a768e146be0bf51675e0a778b9fec2f1e22ecc2db9c12a/1f45fe2de4a069a5e94efc0cfb2720cf32d21c46673ebec8772af2104d2445ceddaf65969b9988977ef7336a2f1cc5ae3bb273780fc4da81b735dbee1cde6995
*/

// #################################################################################################
// Let's see what's in that file

const fs = require('fs')
const file = '47728b9684daa5d1504c639ba985fc136c94f2980ee765e138c46b4942921bc81bc4bdf751ffd0aa8c4f74b91b60c1fe80f744056d374d9443bd80fee3b32ce4/e42b3768e195bebc0cce19282b40b1637ba68d89e902c6fe50aaf2249ec22b8dd2740ec9197165e01f4199b6b4fa9a5fa8c2ca284559f2114094a050cc8523db/e123ca83ecc98b023669cf9e3a49c08f4e3d47d0a4881fbb67b9356472aeefe3690c2ee61eff33f331a768e146be0bf51675e0a778b9fec2f1e22ecc2db9c12a/1f45fe2de4a069a5e94efc0cfb2720cf32d21c46673ebec8772af2104d2445ceddaf65969b9988977ef7336a2f1cc5ae3bb273780fc4da81b735dbee1cde6995'
console.log(fs.readFileSync(file, 'utf8'))

/*
c5QbAv6ACaQIGsyNDBBbAFsMUkm7WzsKfzsUjt9aZim1DPYOdl7ICeBFYvGZx831my0AFwr8gjh57OwhOeITVDIcdcePVrUTKBOv
ECMHmR9QkfGxebS2NgOkMOi5T9AIm5WWzBTsS6v6eStmN1mQflBHBt7RYD1OmPbDqjAkNEB7y8uegtn5BBvopObFtrZaCVhqcf7G
QkpxGBSCnwLvqT24kDNMOCstuk7CLohXpEolDrX9uonLhAtoYbkEZWDHsigk8LSZsrNEt9UsTVwzoUThrZ9ZOHNDHXrfOWwcPYAp
ah8B1jL5qE952VuMjqe10oLUMKHn8RrjV5vIBZzNqI9vO1Uz1M9MNAX6KzI2IdpEtc8NNpSFpK35hWyInGd247v4DTgOq7JvRPeM
0RxkNSKDUppbMajhracA0pgL7yIvm8CijNSjWurHaS9fKILOJ3ztsflRnUuLuNvnGHj6nOVG0nBejNoXAlRSQoBUeYYXTp8qDU7C
MFVj3QYISf7Z2NoRRKYGX75uBs0Z02fUIss2dn9jjnx2AaZbeC0TFsRHGwT3jyPmQEq4KqwFFkaZuiiEA9UAxQEfUdUebJlQcwGU
Ku6MdRA8ocL5ve0aZt0uXVYc0AR1se42C62ElBgYN9ARKjUUJ3isGmX6XdeBLGmoQL3PSF8SEkx7d21tDzEjc5rKrSwAGMuWGjbj
zw5MDlOOXXWLTSHAw0BkK2NKDrXFYi2Fw5hqj5sQF8wtZWGbDTqSN4I0aq5IaaP1PcbdPKfAgD7BrrR0Yw5qiF4zjdzQTPxuvvFs
mtAbZl5vtWotoloXzvecj9agxrli013urx75n6q1niscc5QbAv6ACaQIGsyNDBBbAFsMUkm7WzsKfzsUjt9aZim1DPYOdl7ICeBF
YvGZx831my0AFwr8gjh57OwhOeITVDIcdcePVrUTKBOvECMHmR9QkfGxebS2NgOkMOi5T9AIm5WWzBTsS6v6eStmN1mQflBHBt7R
YD1OmPbDqjAkNEB7y8uegtn5BBvopObFtrZaCVhqcf7GQkpxGBSCnwLvqT24kDNMOCstuk7CLohXpEolDrX9uonLhAtoYbkEZWDH
sigk8LSZsrNEt9UsTVwzoUThrZ9ZOHNDHXrfOWwcPYApah8B1jL5qE952VuMjqe10oLUMKHn8RrjV5vIBZzNqI9vO1Uz1M9MNAX6
KzI2IdpEtc8NNpSFpK35hWyInGd247v4DTgOq7JvRPeM0RxkNSKDUppbMajhracA0pgL7yIvm8CijNSjWurHaS9fKILOJ3ztsflR
nUuLuNvnGHj6nOVG0nBejNoXAlRSQoBUeYYXTp8qDU7CMFVj3QYISf7Z2NoRRKYGX75uBs0Z02fUIss2dn9jjnx2AaZbeC0TFsRH
GwT3jyPmQEq4KqwFFkaZuiiEA9UAxQEfUdUebJlQcwGUKu6MdRA8ocL5ve0aZt0uXVYc0AR1se42C62ElBgYN9ARKjUUJ3isGmX6
XdeBLGmoQL3PSF8SEkx7d21tDzEjc5rKrSwAGMuWGjbjzw5MDlOOXXWLTSHAw0BkK2NKDrXFYi2Fw5hqj5sQF8wtZWGbDTqSN4I0
aq5IaaP1PcbdPKfAgD7BrrR0Yw5qiF4zjdzQTPxuvvFsmtAbZl5vtWotoloXzve

You're tougher than we thought! Send an HTTP GET request to
https://nodeconf.elementum.com:5643/<YOUR@EMAIL>/<FILE_NAME>, where FILE_NAME is the name of this
file. The server will send you an image that contains an encrypted secret message in it.You better
get to work if you want to win that Phantom drone!

*/

// #################################################################################################
// So, I should open this in the browser... I guess

// https://nodeconf.elementum.com:5643/tiagox@gmail.com/1f45fe2de4a069a5e94efc0cfb2720cf32d21c46673ebec8772af2104d2445ceddaf65969b9988977ef7336a2f1cc5ae3bb273780fc4da81b735dbee1cde6995
