# Express.js Custom Middleware Architecture

Middleware functions have access to `req`, `res`, and the `next` function in the application's request-response cycle.

```js
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

const authGuard = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token required' });
  next();
};
```


<!-- Updated: 2026-07-13T12:19:09+05:30 [Commit #333] -->


<!-- Updated: 2026-07-13T20:53:48+05:30 [Commit #338] -->


<!-- Updated: 2026-07-15T09:51:51+05:30 [Commit #343] -->


<!-- Updated: 2026-07-15T16:55:38+05:30 [Commit #348] -->


<!-- Updated: 2026-07-16T21:16:55+05:30 [Commit #354] -->


<!-- Updated: 2026-07-17T13:25:33+05:30 [Commit #357] -->


<!-- Updated: 2026-07-18T13:52:05+05:30 [Commit #365] -->


<!-- Updated: 2026-07-19T11:36:13+05:30 [Commit #368] -->


<!-- Updated: 2026-07-20T16:57:57+05:30 [Commit #375] -->


<!-- Updated: 2026-07-21T17:08:24+05:30 [Commit #380] -->
