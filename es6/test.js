'use strict';

const sentences = [
  { subject: 'javascript', verb: 'is', object:'great'},
  { subject: 'leejaeseong', verb: 'is', object:'great'},
];

function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}
for (let s of sentences) {
  say(s);
}
const dialog1 = "이재성 천재\"아하하하하하하\""
console.log(dialog1)

let currentTempC = 19.5;
const message = `the current temperature:\n` +`\t${currentTempC}\u00b0C\n` + "don't worry";
console.log(message);

const result1 = 3 + '30';
const result2 = 3 * '30';

console.log(result1);
console.log(result2);

const result3 = true;
const result4 = false;

console.log(result3);
console.log(result4);

const RED = Symbol("The color of a sunset");
const ORANGE = Symbol("The color of a sunset");
console.log(RED);
console.log(ORANGE);
console.log(RED===ORANGE);
