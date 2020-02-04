const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));
console.log(digitize(123456));
console.log(digitize(12365470));
