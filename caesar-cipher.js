export default class CaesarCipher {

  encrypt(text, shift = 10) {
    let result = '';

    for (let i = 0; i < s.length; i++) {

      let char = s.charCodeAt(i);

      if (char === 32) { // spaces
        result += ' ';
      }

      if (char >= 65 && char <=  90) {
        result += String.fromCharCode((char - 65 + shift) % 26 + 65);  // Uppercase
      } else if (char >= 97 && char <= 122) {
        result += String.fromCharCode((char - 97 + shift) % 26 + 97);  // Lowercase
      }
    }

    return result;
  }

  decrypt(text, shift = 10) {
    return encrypt((26 - shift) % 26);
  }
}
