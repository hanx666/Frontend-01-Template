let pattern = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
let current = 1

function render(pattern, win) {
  const board = document.getElementById('board')
  const fragment = document.createDocumentFragment()
  board.innerHTML = ''
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      cell.innerHTML =
        pattern[i][j] === 1 ? 'O' :
        pattern[i][j] === 2 ? 'X' :
        ''
      !win && cell.addEventListener('click', () => userMove(j, i))
      fragment.appendChild(cell)
    }
  }
  board.appendChild(fragment)
}

function userMove(x, y) {
  if (pattern[y][x] !== 0) return
  pattern[y][x] = current
  let win = check(pattern, current)
  win
    ? alert(current === 2 ? 'X is winner!' : 'O is winner!')
    : (current = 3 - current) && computerMove()
  render(pattern, win)
}

function computerMove() {
  let choice = bestChoice(pattern, current)
  if (choice.point) {
    pattern[choice.point[1]][choice.point[0]] = current
  }
  let win = check(pattern, current)
  win
    ? alert(current === 2 ? 'X is winner!' : 'O is winner!')
    : current = 3 - current
  render(pattern, win)
}

function check(pattern, current) {
  // 三横向
  for (let i = 0; i < pattern.length; i++) {
    let win = true
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[i][j] !== current) {
        win = false
        break
      }
    }
    if (win) return win
  }

  // 三纵向
  for (let i = 0; i < pattern.length; i++) {
    let win = true
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j][i] !== current) {
        win = false
        break
      }
    }
    if (win) return win
  }

  {
    // 左上到右下斜边，x === y
    let win = true
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i][i] !== current) {
        win = false
        break
      }
    }
    if (win) return win
  }

  {
    // 左下到右上斜边，y === 2 - x
    let win = true
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i][2 - i] !== current) {
        win = false
        break
      }
    }
    if (win) return win
  }

  return false
}

function willWin(pattern, current) {
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[i][j] !== 0) continue
      pattern[i][j] = current
      let win = check(pattern, current)
      pattern[i][j] = 0
      if (win) return [j, i]
    }
  }
  return null
}

let openings = new Map()

openings.set([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
].toString() + '1', {
  point: [1, 1],
  result: 0
})

openings.set([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
].toString() + '2', {
  point: [0, 0],
  result: 0
})

function bestChoice(pattern, current) {
  if (openings.has(pattern.toString() + current)) {
    return openings.get(pattern.toString() + current)
  }

  let point = willWin(pattern, current)
  if (point) {
    return {
      point,
      result: 1
    }
  }

  let result = -1
  outer: for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[i][j] !== 0) continue
      pattern[i][j] = current
      let opp = bestChoice(pattern, 3 - current)
      if (-opp.result >= result) {
        point = [j, i],
        result = -opp.result
      }
      pattern[i][j] = 0
      if (result === 1) break outer
    }
  }

  return {
    point,
    result: point ? result : 0,
  }
}

render(pattern)
