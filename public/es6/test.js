'use strict';

const sentences = [
  { subject: 'javascript', verb: 'is', object:'great'},
  { subject: 'leejaeseong', verb: 'is', object:'great'},
];

function say({subject, verb, object}) {
  console.log(`$(subject) $(verb) $(object)`);
}
for (let s of sentences) {
  say(s);
}
