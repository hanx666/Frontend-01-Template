#! /usr/bin/env node

function encodeUtf8(text) {
  const s = encodeURIComponent(text)
  const codes = []
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    if (c === '%') {
      codes.push(`0x${s.charAt(i + 1)}${s.charAt(i + 2)}`)
      i += 2
    } else codes.push(c.charCodeAt(0))
  }
  return codes
}

console.log( encodeUtf8('是') )
console.log(new Buffer('是'))
console.log( encodeUtf8('it is 是的') )
console.log(new Buffer('it is 是的'))
