# Asynchronous JavaScript: Promises & Async/Await

```js
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error;
  }
}
```


<!-- Updated: 2026-06-28T18:33:59+05:30 [Commit #250] -->
