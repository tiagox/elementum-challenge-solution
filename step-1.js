/* Email instructions:

For the first step, you will have to execute the following command:

```
npm install --save elementum-challenge
```

Oh! One more thing, you will need this eventually:

9937c1f59497432ad3d8191e8c8c82335b93df0b8712b17d7957529f1458f900d98dee13264d37893554a4d5659f3436512b2c1724af7871b9d11efd4c4681c4
*/

const { getFirstCode } = require('elementum-challenge')
const { decode } = require('base-64')
const email = 'tiagox@gmail.com'
const token = '9937c1f59497432ad3d8191e8c8c82335b93df0b8712b17d7957529f1458f900d98dee13264d37893554a4d5659f3436512b2c1724af7871b9d11efd4c4681c4'

getFirstCode(email, token)
	.then(decode)
	.then(console.log)
