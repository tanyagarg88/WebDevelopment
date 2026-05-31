// Object manipulation & deep cloning utilities
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const copy = {};
  for (const key of Object.keys(obj)) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

const userProfile = {
  username: 'tanyagarg88',
  settings: { theme: 'dark', notifications: true },
  tags: ['javascript', 'webdev', 'frontend']
};

const cloned = deepClone(userProfile);
cloned.settings.theme = 'light';
console.log(userProfile.settings.theme !== cloned.settings.theme);


<!-- Updated: 2026-05-30T11:43:29+05:30 [Commit #76] -->


<!-- Updated: 2026-05-30T19:10:55+05:30 [Commit #80] -->


<!-- Updated: 2026-05-31T13:33:18+05:30 [Commit #84] -->
