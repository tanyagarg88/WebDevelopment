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
