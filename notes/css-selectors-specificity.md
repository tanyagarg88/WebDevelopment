# CSS Selectors and Specificity Hierarchy

## Specificity Weight
1. Inline styles: `(1, 0, 0, 0)`
2. IDs: `(0, 1, 0, 0)`
3. Classes, pseudo-classes, attribute selectors: `(0, 0, 1, 0)`
4. Elements and pseudo-elements: `(0, 0, 0, 1)`

```css
/* Specificity: 0,0,2,1 */
nav.main-nav a.active { color: #3b82f6; font-weight: bold; }
```


<!-- Updated: 2026-04-16T09:45:42+05:30 [Foundation Commit #81] -->


<!-- Updated: 2026-04-16T18:43:20+05:30 [Foundation Commit #86] -->


<!-- Updated: 2026-04-17T14:53:25+05:30 [Foundation Commit #90] -->


<!-- Updated: 2026-04-19T09:24:12+05:30 [Foundation Commit #96] -->


<!-- Updated: 2026-04-19T15:18:23+05:30 [Foundation Commit #101] -->


<!-- Updated: 2026-04-20T12:33:19+05:30 [Foundation Commit #105] -->


<!-- Updated: 2026-04-20T18:23:27+05:30 [Foundation Commit #110] -->


<!-- Updated: 2026-04-21T13:11:56+05:30 [Foundation Commit #114] -->


<!-- Updated: 2026-04-23T09:13:17+05:30 [Foundation Commit #121] -->


<!-- Updated: 2026-04-23T20:23:47+05:30 [Foundation Commit #126] -->


<!-- Updated: 2026-04-24T11:04:51+05:30 [Foundation Commit #129] -->


<!-- Updated: 2026-04-24T20:48:04+05:30 [Foundation Commit #134] -->


<!-- Updated: 2026-04-25T21:10:22+05:30 [Foundation Commit #138] -->
