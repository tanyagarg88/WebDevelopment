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
