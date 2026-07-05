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


<!-- Updated: 2026-06-29T16:02:11+05:30 [Commit #255] -->


<!-- Updated: 2026-06-30T22:41:50+05:30 [Commit #262] -->


<!-- Updated: 2026-07-01T15:31:55+05:30 [Commit #267] -->


<!-- Updated: 2026-07-02T10:11:32+05:30 [Commit #271] -->


<!-- Updated: 2026-07-02T15:48:21+05:30 [Commit #276] -->


<!-- Updated: 2026-07-03T10:51:27+05:30 [Commit #280] -->


<!-- Updated: 2026-07-04T15:34:36+05:30 [Commit #285] -->


<!-- Updated: 2026-07-05T16:26:42+05:30 [Commit #290] -->
