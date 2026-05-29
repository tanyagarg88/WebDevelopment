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
