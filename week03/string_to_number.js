function convertStringToNumber(chars, base = 10) {
  const codePointOfZero = '0'.codePointAt(0)
  let int = 0
  let i = 0
  for (; i < chars.length && chars[i] !== '.'; i++) {
    int *= base
    int += chars[i].codePointAt(0) - codePointOfZero
  }

  let decimal = 0
  for (let j = chars.length - 1; i < j; j--) {
    decimal += chars[j].codePointAt(0) - codePointOfZero
    decimal /= base
  }
  return int + decimal
}

console.log( convertStringToNumber('100', 2) )
console.log( convertStringToNumber('100') )
console.log( convertStringToNumber('0') )
console.log( convertStringToNumber('121') )
console.log( convertStringToNumber('121.1') )
console.log( convertStringToNumber('0.121') )
console.log( convertStringToNumber('.1211') ) // still
console.log( convertStringToNumber('16', 8) )
console.log( convertStringToNumber('16', 16) )
