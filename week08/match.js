// only for combinator ' '
function match(selector, element) {
  if (!selector || !element) return false
  // console.log(element)

  const selectors = selector.split(' ')
  let cur = element
  // console.log(selectors)
  while (selectors.length !== 0) {
    let curSelector = selectors.pop()
    // console.log(curSelector)
    if (!matchElement(curSelector, cur)) return false
    cur = cur.parentNode
  }
  return true
}

function matchElement(selector, element) {
  // only support id class type selectors
  const reg = /[#\.]?[a-zA-Z0-9-_]+/g
  const simpleSelectors = selector.match(reg)
  // console.log(simpleSelectors, element)
  while (simpleSelectors.length !== 0) {
    let cur = simpleSelectors.shift()
    if (cur.startsWith('#')) {
      if (element.id !== cur.slice(1)) return false
    } else if (cur.startsWith('.')) {
      if (!element.className.includes(cur.slice(1))) return false
    } else {
      if (element.tagName !== cur.toUpperCase()) return false
    }
  }
  return true
}

console.log(match("#test", document.getElementById("test"))) // true
console.log(match("div #test.test1", document.getElementsByClassName("test1")[0])) // true
console.log(match("div div#test", document.getElementsByClassName("test1")[0])) // true
console.log(match("div #test.test1", document.getElementsByClassName("test1")[1])) // false
console.log(match("div #test .test2", document.getElementsByClassName("test2")[0])) // true
console.log(match("p", document.getElementsByTagName("p")[0])) // true
