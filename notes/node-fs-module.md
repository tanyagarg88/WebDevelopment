# Node.js File System (fs/promises) Module

```js
const fs = require('fs/promises');
const path = require('path');

async function manageUserData() {
  const filePath = path.join(__dirname, 'data.json');
  const rawData = await fs.readFile(filePath, 'utf8');
  const users = JSON.parse(rawData);
  users.push({ id: Date.now(), name: 'New User' });
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}
```


<!-- Updated: 2026-07-13T17:26:57+05:30 [Commit #337] -->


<!-- Updated: 2026-07-15T16:47:35+05:30 [Commit #347] -->


<!-- Updated: 2026-07-16T19:27:47+05:30 [Commit #353] -->
