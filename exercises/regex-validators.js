// Common Regex Validation Patterns
const validators = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  url: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
};

function validateInput(type, value) {
  return validators[type] ? validators[type].test(value) : false;
}

console.log('Email test:', validateInput('email', 'tgarg1012@gmail.com'));


<!-- Updated: 2026-05-29T15:10:48+05:30 [Commit #70] -->


<!-- Updated: 2026-05-29T18:57:09+05:30 [Commit #74] -->


<!-- Updated: 2026-06-04T17:17:08+05:30 [Commit #109] -->


<!-- Updated: 2026-06-08T14:38:42+05:30 [Commit #133] -->


<!-- Updated: 2026-06-09T12:39:15+05:30 [Commit #135] -->


<!-- Updated: 2026-06-09T21:20:26+05:30 [Commit #139] -->


<!-- Updated: 2026-06-10T16:21:26+05:30 [Commit #142] -->


<!-- Updated: 2026-06-11T09:55:21+05:30 [Commit #144] -->


<!-- Updated: 2026-06-11T20:01:15+05:30 [Commit #148] -->


<!-- Updated: 2026-06-12T11:23:55+05:30 [Commit #152] -->


<!-- Updated: 2026-06-12T16:12:51+05:30 [Commit #156] -->
