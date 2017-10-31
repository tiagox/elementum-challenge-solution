/* Step 1 - Response:

Don't get cocky kid, that was pretty easy. Connect using Socket.io library to
"wss://nodeconf.elementum.com:1754", send a "req" event with the following JSON object:

```
{
	email: "tiagox@gmail.com",
	token: "1ffb38007dfeafd6611e16bfc981175f72dfeaa7a0f36016ad512980783f1b543195df5456a3cdaec29e85e34760c9e237ae4facbb5a1ccd755b9b060a33812f"
}
```

You will receive a "res" event with the data you need for the next step. Good luck...
*/

const io = require('socket.io-client');
const socket = io('wss://nodeconf.elementum.com:1754')
const email = 'tiagox@gmail.com'
const token = '1ffb38007dfeafd6611e16bfc981175f72dfeaa7a0f36016ad512980783f1b543195df5456a3cdaec29e85e34760c9e237ae4facbb5a1ccd755b9b060a33812f'

socket.on('res', console.log)

socket.emit('req', { email, token })
