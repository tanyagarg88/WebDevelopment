# DOM Performance & DocumentFragment

Frequent direct DOM manipulations trigger expensive browser reflows and repaints.

## Best Practice: Using DocumentFragment
```js
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    fragment.appendChild(li);
});
// Single reflow upon insertion
ul.appendChild(fragment);
```


<!-- Updated: 2026-06-13T10:35:10+05:30 [Commit #160] -->


<!-- Updated: 2026-06-13T20:07:30+05:30 [Commit #163] -->


<!-- Updated: 2026-06-17T10:10:07+05:30 [Commit #185] -->


<!-- Updated: 2026-06-17T13:00:15+05:30 [Commit #188] -->


<!-- Updated: 2026-06-19T13:27:08+05:30 [Commit #196] -->


<!-- Updated: 2026-06-19T20:25:19+05:30 [Commit #199] -->
