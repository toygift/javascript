'use strict';

var sentences = [{ subject: 'javascript', verb: 'is', object: 'great' }, { subject: 'leejaeseong', verb: 'is', object: 'great' }];

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  console.log(subject + ' ' + verb + ' ' + object);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var dialog1 = "이재성 천재\"아하하하하하하\"";
console.log(dialog1);

var currentTempC = 19.5;
var message = 'the current temperature:\n' + ('\t' + currentTempC + '\xB0C\n') + "don't worry";
console.log(message);

var result1 = 3 + '30';
var result2 = 3 * '30';

console.log(result1);
console.log(result2);

var result3 = true;
var result4 = false;

console.log(result3);
console.log(result4);

var RED = Symbol("The color of a sunset");
var ORANGE = Symbol("The color of a sunset");
console.log(RED);
console.log(ORANGE);
console.log(RED === ORANGE);