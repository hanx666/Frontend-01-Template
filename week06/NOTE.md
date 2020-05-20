# 每周总结可以写在这里

## 有限状态机处理字符串

### 有限状态机

- 每一个状态都是一个机器
  - 在每一个机器里，我们都可以做计算、存储、输出
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（内部无副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore 摩尔）
  - 每个机器都根据输入决定下一个状态（Mealy）

### 使用有限状态机处理字符串

在一个字符串中，找到字符 “a”

```js
function match(s) {
  for (let c of s) {
    if (c === 'a') return true
  }
  return false
}
```

在一个字符串中，找到字符串 “ab”

```js
function match(s) {
  let foundA = false
  for (let c of s) {
    if (c === 'a') foundA = true
    else if (foundA && c === 'b') return true
    else foundA = false
  }
  return false
}
```

在一个字符串中，找到字符串 “abcdef”

```js
function match(s) {
  let foundA = false
  let foundB = false
  let foundC = false
  let foundD = false
  let foundE = false
  for (let c of s) {
    if (c === 'a') foundA = true
    else if (foundA && c === 'b') foundB = true
    else if (foundB && c === 'c') foundC = true
    else if (foundC && c === 'd') foundD = true
    else if (foundD && c === 'e') foundE = true
    else if (foundE && c === 'f') return true
    else {
      foundA = false
      foundB = false
      foundC = false
      foundD = false
      foundE = false
    }
  }
  return false
}
```

JS 中的有限状态机（Mealy）

```js
function state(input) {
  return next
}
while (input) {
  
}
```

有限状态机处理字符串 “abcdef”

```js
function match(s) {
  let state = start
  for (let c of s) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if (c === 'a') return foundA
  else return start
}

function end(c) {
  return end
}

function foundA(c) {
  if (c === 'b') return foundB
  else return start(c)
}

function foundB(c) {
  if (c === 'c') return foundC
  else return start(c)
}

function foundC(c) {
  if (c === 'd') return foundD
  else return start(c)
}

function foundD(c) {
  if (c === 'e') return foundE
  else return start(c)
}

function foundE(c) {
  if (c === 'f') return end
  else return start(c)
}
```

如何用状态机处理字符串 “abcabx”

如何用状态机处理字符串 “abababx”

我们如何用状态机处理完全未知的 pattern，参考字符串 kmp 算法

```js
// O(m+n)
function match(pattern, string) {
  // ...
}
match('ababx', 'I am ababx! hhha!')
```
