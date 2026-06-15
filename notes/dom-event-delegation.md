# DOM Event Delegation & Propagation

Event propagation consists of three phases:
1. **Capturing phase**: Event descends through ancestors
2. **Target phase**: Event reaches the clicked node
3. **Bubbling phase**: Event bubbles up to window

## Delegation Pattern
```js
document.getElementById('todo-list').addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
        e.target.closest('li').remove();
    }
});
```


<!-- Updated: 2026-06-14T11:48:50+05:30 [Commit #167] -->


<!-- Updated: 2026-06-14T15:39:27+05:30 [Commit #170] -->


<!-- Updated: 2026-06-15T17:18:03+05:30 [Commit #173] -->


<!-- Updated: 2026-06-15T21:15:34+05:30 [Commit #176] -->
