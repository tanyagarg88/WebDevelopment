// String manipulation algorithms
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

console.log('racecar:', isPalindrome('A man, a plan, a canal: Panama'));
console.log(capitalizeWords('mastering web development step by step'));


<!-- Updated: 2026-05-29T12:44:05+05:30 [Commit #69] -->


<!-- Updated: 2026-05-29T17:41:07+05:30 [Commit #73] -->


<!-- Updated: 2026-06-04T10:27:08+05:30 [Commit #108] -->


<!-- Updated: 2026-06-04T22:55:35+05:30 [Commit #112] -->


<!-- Updated: 2026-06-08T10:12:17+05:30 [Commit #132] -->


<!-- Updated: 2026-06-09T11:15:30+05:30 [Commit #134] -->
