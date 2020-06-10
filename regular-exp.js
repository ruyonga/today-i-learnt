// Regular expression constructor
const reg = new RegExp('parrtern[flags]')

// Regular expression literal
const literal = /pattern/

/**
 * Dynamic regex can ony be created by the constructor option
 * All the options above return regex object with the same methods
 * 
 * you have to escaped the forward slash with a back slash if the forward slash is part of the expression 
 * 
 * Regualar expression have two main methods.
 * 
 * - RegExp.prototype.test()::Bolean    Checks if a match has been found or not
 * - RegExp.prototype.exec()::Array     Returns an array containing all matched groups.
 */


let regex = /hello/
const testOne = 'hello world'

const result = regex.test(testOne)
console.log(result) // returns true

const result2 = regex.exec(testOne)
console.log(result2)
// [ 'hello', index: 0, input: 'hello world', groups: undefined ]

/**
 * Flags
 * g -> Global, (dont stop on the fast find.)
 * i -> case insensitive 
 * 
 * can be combined and order doesnt matter
 */

let regexGlobal = /abc/g // new RegExp('abc', 'g')
console.log(regexGlobal.test('abc abc')) // true

let regexCaseInsensitive = /abc/i // new RegExp('abc', 'i')
console.log(regexCaseInsensitive.test('ABC'))
// true

/**
  * Character groups:
  *  
  * character set [xyz] - match at a given position.
  * [^xyz] - only the caret has a special meaning in the character set
  * the caret negets the character set
  */

let regexCharSet = /[bt]ear/ // match anything that starts with b/t
console.log(regexCharSet.test('tear')) // true
console.log(regexCharSet.test('bear')) // true
console.log(regexCharSet.test('xear')) // false
console.log(regexCharSet.test('earbr')) // false


let regexCharSetNeget = /[^bt]ear/ // match anything that does not start with b/t
console.log(regexCharSetNeget.test('tear')) // false
console.log(regexCharSetNeget.test('bear')) // false
console.log(regexCharSetNeget.test('xear')) // true
console.log(regexCharSetNeget.test('sear'))
// true

/**
  * Ranges
  * [a-z] match all letters from a to z lowercase
  * [0-9] match all number 0 to 9
  * [A-Z] match all capital letters
  */

let regexLetters = /[a-z]ear/
console.log(regexLetters.test('fear')) // true
console.log(regexLetters.test('zear')) // true
console.log(regexLetters.test('0ear'))
// false

/**
   * Meta characters - characters with special meaning 
   * \d <=> [0-9]
   * \w <=> [a-zA-Z0-9_] match any word character, => any letter, digit and underscore => alphanumeric
   * \s => match white space characters including tabs
   * \t => match a tab character
   * \b => word boundary => Find a match at the beginning or ending of a word
   * . Matches any character except new lines
   * \D => match non digital character [^0-9]
   * \W => Match any non work character [^a-zA-Z0-9_]
   * \S => Match a non white space character
*/
let a = /\d/
console.log(a.test('s')) // false
console.log(a.test(9)) // true

let w = /\w/ // [a-zA-Z0-9_]
console.log(w.test('hello')) // true
console.log(w.test('*')) // false
console.log(w.test('_hellow')) // true

let s = /\s/
console.log(s.test("heloo")) // false
console.log(s.test(' ')) // true

let t = /\t/
console.log(t.test(' ')) // false  space
console.log(t.test('\t')) // true
console.log('\t')
console.log(t.test('test'))
// false

/**
 * Quantifiers -> symbos with 
 * 
 * + matches the preceding express 1 or more times
 */

let regexQ1 = /\d+/
console.log(regexQ1.test('8'))

/**
  * * - matches the preceeding experssion 0 or more times
  */
let regexQ2 = /go*d/ // Expression start with g and ends with d will zero or more ozs
console.log(regexQ2.test('good'))

/**
  * ? matches the preceding experison 0 or 1 time, the preceding pattern is optional
  */

let regexQ3 = /goo?d/
console.log(regexQ3.test('goood'))
// false
/**
   * ^ matches the begining of the string, the regular experssion that follows it should be the start of the test string
   *  -> matches the start of the string
   */
let regexBeg = /^g/

console.log(regexBeg.test('goal')) // true
console.log(regexBeg.test('bad'))
// false

/**
   * $ -> matches the end of the string 
   */

let email = /.com$/
console.log(email.test('tet@test')) // fale
console.log(email.test('tet@test.com'))
// fale

/**
    * {N} - matches exactly n occurence of 
    */
let regexNumber = /go{2}d/ // should have a maximum of 2 o
console.log(regexNumber.test('good')) // true
console.log(regexNumber.test('gold'))
// false

/**
    * {N,}  -> matches at least N occurences of preceding regular expression
    * {N, M} -> Matchest at least N and atmost M occurrencess of the preceding regular  and M > N
    */
let regexCount = /go{2,}d/ // the word should have atleast 2 o s
console.log(regexCount.test('goood')) // true
console.log(regexCount.test('gold')) // false

let regexMax = /go{1,2}d/
console.log(regexMax.test('gold')) // true
console.log(regexMax.test('good')) // true
console.log(regexMax.test('gooood'))
// false

/**
 * Alternation X|Y - Matches either X or Y
 */
let regexColor = /(green|red) apple/
console.log(regexColor.test('red apple')) // true
console.log(regexColor.test('black apple'))
// false

/**
 * Advanced.
 * (x) -matches and remembers the match.
 */

let regAdv1 = /(foo)bar\1/ // start and end with the experession
console.log(regAdv1.test('foobarfoo'))

let regex1 = /(?:foo)bar/ // /(?:foo)bar\1/  \1 wont work.
console.log(regex1.test('foobarfoo')) // true
console.log(regex1.test('foorbar'))

/**
  * x(?=y) = Matches  x only if x is followed by Y. Postive look a head.
  */

let lookaHead = /Red(?=Apple)/

console.log(lookaHead.test('RedApple')) // true
console.log(lookaHead.test('BlueApple'))
// false

// Examples
// 1. Match any 10 digit number.

let exp = /^\d{10}$/ // ^ => start of string $=> end of string \d = digits {10} => length of previous expression
console.log(exp.test('1234567890'))
// true

// 2 Match date format DD-MM-YYYY or DD-MM-YY
let exp1 = /^(\d{1,2}-){2}\d{2}(\d{2})?$/ // start with atleast 1 or max 2 followed by - {2} max first sub expression
console.log(exp1.test('01-01-1990')) // true
console.log(exp1.test('01-01-10')) // true
console.log(exp1.test('01-01-19900'))
// false

// 3 match ip address

let exp3 = /^\d{3}\.\d{3}\.\d{3}$/
console.log(exp3.test('123.123.123'))


//Resource https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4