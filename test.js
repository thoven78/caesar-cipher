'use strict';

//import CaesarCipher from './caesar-cipher';
let CaesarCipher = require('./caesar-cipher');

let assert = function(condition, test, message) {
  if (condition !== test) {
    throw('Expected ' + test + ' , but got ' + condition);
  }
  return true;
};


let casear = new CaesarCipher();

assert(casear.encrypt('The quick brown cow'), 'Dro aesmu lbygx myg', 'Expect it to passed');

assert(casear.decrypt('Dro aesmu lbygx myg'), 'The quick brown cow', 'Expect it to passed');
