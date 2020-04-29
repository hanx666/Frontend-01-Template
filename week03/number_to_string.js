function _convertIntToString(int, base) {
  let str = ''
  while (int > 0) {
    str = `${int % base}${str}`
    int = Math.floor(int / base)
  }
  return str
}

function convertNumberToString(number, base = 10) {
  if (!number) return '0'
  let int = Math.floor(number)
  let decimal = number - int // 精度问题这里就会发生了。
  let str = !int ? `0${_convertIntToString(int, base)}` : _convertIntToString(int, base)

  if (decimal !== 0) {
    str += '.'
    while (decimal - Math.floor(decimal) > 0) {
      decimal *= 10
    }
    str += _convertIntToString(decimal, base)
  }

  return str
}

console.log( convertNumberToString(0) )
console.log( convertNumberToString(0.121) )
console.log( convertNumberToString(1.121) )
console.log( convertNumberToString(121) )
console.log( convertNumberToString(10.121) ) // 10.121 - 10 = 0.12100000000000044
console.log( convertNumberToString(16, 16) )
console.log( convertNumberToString(16, 8) )

