# JavaScript Closures and Lexical Scope

A closure gives you access to an outer function's scope from an inner function.

```js
function createCounter(initial = 0) {
    let count = initial;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getVal: () => count
    };
}
const counter = createCounter(10);
```


<!-- Updated: 2026-05-30T10:05:38+05:30 [Commit #75] -->


<!-- Updated: 2026-05-30T16:12:35+05:30 [Commit #79] -->


<!-- Updated: 2026-05-31T10:57:07+05:30 [Commit #83] -->


<!-- Updated: 2026-05-31T19:56:29+05:30 [Commit #87] -->


<!-- Updated: 2026-06-01T10:48:53+05:30 [Commit #91] -->
