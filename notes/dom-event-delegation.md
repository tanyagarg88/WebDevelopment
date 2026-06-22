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


<!-- Updated: 2026-06-16T09:58:54+05:30 [Commit #180] -->


<!-- Updated: 2026-06-16T18:58:03+05:30 [Commit #183] -->


<!-- Updated: 2026-06-18T16:09:37+05:30 [Commit #192] -->


<!-- Updated: 2026-06-20T16:49:04+05:30 [Commit #203] -->


<!-- Updated: 2026-06-22T14:06:16+05:30 [Commit #215] -->


<!-- Updated: 2026-06-22T20:19:06+05:30 [Commit #218] -->
