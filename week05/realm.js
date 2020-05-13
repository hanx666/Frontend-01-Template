const set = new Set()
const globalProperties = [
  'eval',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'Array',
  'Date',
  'RegExp',
  'Promise',
  'Proxy',
  'Map',
  'WeakMap',
  'Set',
  'WeakSet',
  'Function',
  'Boolean',
  'String',
  'Number',
  'Symbol',
  'Object',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Uint8Array',
  'Uint16Array',
  'Uint32Array',
  'Uint8ClampedArray',
  'Atomics',
  'JSON',
  'Math',
  'Reflect'
]

const queue = []
const tree = {
  id: 'Realm',
  children: []
}
const pathes = []

for (let p of globalProperties) {
  queue.push({
    id: p,
    path: [p],
    object: this[p]
  })
  tree.children.push({
    id: p,
    children: []
  })
}

const getTreeNode = (currentPath, children) => {
  const result = children.find(node => node.id === currentPath)
  if (!result) throw new Error(`cannot find tree node ${currentPath}`)
  return result
}
const getCurrentTreeNode = path => {
  let result = getTreeNode(path[0], tree.children)
  for (let i = 1; i < path.length; i++) {
    result = getTreeNode(path[i], result.children)
  }
  return result
}

let current = null
while (queue.length) {
  current = queue.shift()
  const currentTreeNode = getCurrentTreeNode(current.path)
  pathes.push(current.path.join('.'))

  if (set.has(current.object)) continue
  set.add(current.object)

  const proto = Object.getPrototypeOf(current.object)
  if (proto) {
    queue.unshift({
      path: current.path.concat(['__proto__']),
      object: proto
    })
    currentTreeNode.children.push({
      tag: 'proto',
      id: '__proto__',
      children: []
    })
  }

  for (let p of Object.getOwnPropertyNames(current.object)) {
    const property = Object.getOwnPropertyDescriptor(current.object, p)

    if (
      property.hasOwnProperty('value') &&
      property.value instanceof Object &&
      ((typeof property.value == 'object') || (typeof property.value == 'function'))
    ) {
      queue.unshift({
        path: current.path.concat([p]),
        object: property.value,
      })
      currentTreeNode.children.push({
        tag: 'value',
        id: p,
        children: []
      })
    }
    if (property.hasOwnProperty('get') && typeof property.get == 'function') {
      queue.unshift({
        path: current.path.concat([`${p}(getter)`]),
        object: property.get,
      })
      currentTreeNode.children.push({
        tag: 'get',
        id: `${p}(getter)`,
        children: []
      })
    }
    if (property.hasOwnProperty('set') && typeof property.set == 'function') {
      queue.unshift({
        path: current.path.concat([`${p}(setter)`]),
        object: property.set,
      })
      currentTreeNode.children.push({
        tag: 'set',
        id: `${p}(setter)`,
        children: []
      })
    }
  }
}

console.log(pathes.length)

console.log(tree)
const countTreeNode = (tree, n) => {
  let total = tree.children.length + n
  for (let i = 0; i < tree.children.length; i++) {
    total = countTreeNode(tree.children[i], total)
  }
  return total
}
console.log( countTreeNode(tree, 0) )

