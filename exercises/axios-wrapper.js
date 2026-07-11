// Clean Axios HTTP Wrapper with Interceptors
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `Request failed with status ${res.status}`);
    }
    return res.json();
  }

  get(endpoint) { return this.request(endpoint, { method: 'GET' }); }
  post(endpoint, body) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(body) }); }
}


<!-- Updated: 2026-06-28T15:56:09+05:30 [Commit #249] -->


<!-- Updated: 2026-06-29T12:01:01+05:30 [Commit #254] -->


<!-- Updated: 2026-06-30T22:21:10+05:30 [Commit #261] -->


<!-- Updated: 2026-07-01T12:47:50+05:30 [Commit #266] -->


<!-- Updated: 2026-07-02T14:59:34+05:30 [Commit #275] -->


<!-- Updated: 2026-07-03T09:39:38+05:30 [Commit #279] -->


<!-- Updated: 2026-07-04T10:58:57+05:30 [Commit #284] -->


<!-- Updated: 2026-07-05T09:01:47+05:30 [Commit #289] -->


<!-- Updated: 2026-07-05T21:16:04+05:30 [Commit #294] -->


<!-- Updated: 2026-07-06T14:21:19+05:30 [Commit #298] -->


<!-- Updated: 2026-07-07T14:02:26+05:30 [Commit #303] -->


<!-- Updated: 2026-07-08T19:30:19+05:30 [Commit #311] -->


<!-- Updated: 2026-07-09T16:20:20+05:30 [Commit #313] -->


<!-- Updated: 2026-07-10T12:38:18+05:30 [Commit #318] -->


<!-- Updated: 2026-07-10T22:32:21+05:30 [Commit #323] -->


<!-- Updated: 2026-07-11T20:28:01+05:30 [Commit #327] -->
