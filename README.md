# Caesar Cipher

[![Build Status](https://travis-ci.org/thoven78/caesar-cipher.svg?branch=master)](https://travis-ci.org/thoven78/caesar-cipher)

A Caesar cipher is one of the simplest (and easiest cracked) encryption methods.
It is a Substitution Cipher that involves replacing each letter of the secret message with a different letter of the alphabet which is a fixed number of positions further in the alphabet.  

Because each letter in the message has a direct translation to another letter, frequency analysis can be used to decipher the message.

For example, the letter E is the most commonly used letter in the English language.
Thus, if the most common letter in a secret message is K, it is likely that K represents E. Additionally, common word endings such as ING, LY, and ES also give clues.  A brute-force approach of trying all 25 possible combinations would also work to decipher the message.


The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):

``Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ``

``Cipher:   DEFGHIJKLMNOPQRSTUVWXYZABC``

When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line. Deciphering is done in reverse, with a right shift of 3.

``Ciphertext: WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ``

``Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG``

The encryption can also be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,..., Z = 25.[1] Encryption of a letter x by a shift n can be described mathematically as,[2]

``E_n(x) = (x + n) \mod {26}.``

``Decryption is performed similarly,``

``D_n(x) = (x - n) \mod {26}.``

(There are different definitions for the modulo operation.
In the above, the result is in the range 0...25. I.e., if x+n or x-n are not in the range 0...25, we have to subtract or add 26.)`

The replacement remains the same throughout the message, so the cipher is classed as a type of monoalphabetic substitution, as opposed to polyalphabetic substitution.
