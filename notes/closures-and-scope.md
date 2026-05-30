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
