// LUCAS ALMEIDA ₢

let tiles = document.querySelectorAll("div.board-null-tile")
let tilesCurrentChildren = []
let currentPosition = []
let previousPosition = []
let a = false
let onAnimation = false
let score = 0
let realscore = document.getElementById("realscore")
let realrecord = document.getElementById("realrecord")
let gameOverScreen = document.getElementById("game-over")
let btnPlayAgainGameOver = document.getElementById("btn-play-again-game-over")
let initialX = null
let initialY = null

const tileMovementDuration = 300
const easy = 1
const medium = 2
const hard = 3
const timeChoose = 178

let board = document.getElementById("board-background")

board.addEventListener("touchstart", startTouch, false)
board.addEventListener("touchmove", moveTouch, false)

// let pos1to2 =
//   document.getElementById("tile2").offsetLeft -
//   document.getElementById("tile1").offsetLeft;
// let pos1to3 =
//   document.getElementById("tile3").offsetLeft -
//   document.getElementById("tile1").offsetLeft;
// let pos1to4 =
//   document.getElementById("tile4").offsetLeft -
//   document.getElementById("tile1").offsetLeft;

function relPosition(t1, t2) {
  return (
    document.getElementById(t2).offsetLeft -
    document.getElementById(t1).offsetLeft
  )
}

document.addEventListener("keydown", function deal(e) {
  if (e.keyCode === 37) {
    // Left Key
    !onAnimation
      ? pressLeftKey()
      : setTimeout(() => {
          !onAnimation ? pressLeftKey() : null
        }, timeChoose)
  } else if (e.keyCode === 38) {
    // Up Key
    !onAnimation
      ? pressUpKey()
      : setTimeout(() => {
          !onAnimation ? pressUpKey() : null
        }, timeChoose)
  } else if (e.keyCode === 39) {
    // Right Key
    !onAnimation
      ? pressRightKey()
      : setTimeout(() => {
          !onAnimation ? pressRightKey() : null
        }, timeChoose)
  } else if (e.keyCode === 40) {
    // Down Key
    !onAnimation
      ? pressDownKey()
      : setTimeout(() => {
          !onAnimation ? pressDownKey() : null
        }, timeChoose)
  }
})

function startTouch(e) {
  initialX = e.touches[0].clientX
  initialY = e.touches[0].clientY
}

function moveTouch(e) {
  if (initialX === null) {
    return
  }

  if (initialY === null) {
    return
  }

  let currentX = e.touches[0].clientX
  let currentY = e.touches[0].clientY

  let diffX = initialX - currentX
  let diffY = initialY - currentY

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      // Left Swipe
      !onAnimation
        ? pressLeftKey()
        : setTimeout(() => {
            !onAnimation ? pressLeftKey() : null
          }, timeChoose)
    } else {
      // Right Swipe
      !onAnimation
        ? pressRightKey()
        : setTimeout(() => {
            !onAnimation ? pressRightKey() : null
          }, timeChoose)
    }
  } else {
    if (diffY > 0) {
      // Up Swipe
      !onAnimation
        ? pressUpKey()
        : setTimeout(() => {
            !onAnimation ? pressUpKey() : null
          }, timeChoose)
    } else {
      // Down Swipe
      !onAnimation
        ? pressDownKey()
        : setTimeout(() => {
            !onAnimation ? pressDownKey() : null
          }, timeChoose)
    }
  }

  initialX = null
  initialY = null

  e.preventDefault()
}

btnPlayAgainGameOver.onclick = () => {
  clear()
  let player = gameOverScreen.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500
  })
  player.addEventListener("finish", function() {
    gameOverScreen.style.display = "none"
    gameOverScreen.style.opacity = 0
    startGame()
  })
}

function newTileAnimation(tile) {
  tile.animate(
    [
      {
        transform: "scale(0.5)"
      },
      {
        transform: "scale(1)"
      }
    ],
    {
      duration: timeChoose,
      fill: "forwards"
    }
  )
}

function generateTile(flatPosition, v) {
  let newTile = document.createElement("div")
  newTile.id = "inner-" + tiles[flatPosition - 1].id
  newTile.value = { value: v, positionX: 0, positionY: 0 }
  if (v === 0) {
    newTile.classList.add("board-null-tile")
    tiles[flatPosition - 1].append(newTile)
  } else if (v === 2) {
    newTile.classList.add("board-2-tile")
    newTile.textContent = "2"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 4) {
    newTile.classList.add("board-4-tile")
    newTile.textContent = "4"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 8) {
    newTile.classList.add("board-8-tile")
    newTile.textContent = "8"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 16) {
    newTile.classList.add("board-16-tile")
    newTile.textContent = "16"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 32) {
    newTile.classList.add("board-32-tile")
    newTile.textContent = "32"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 64) {
    newTile.classList.add("board-64-tile")
    newTile.textContent = "64"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 128) {
    newTile.classList.add("board-128-tile")
    newTile.textContent = "128"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 256) {
    newTile.classList.add("board-256-tile")
    newTile.textContent = "256"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 512) {
    newTile.classList.add("board-512-tile")
    newTile.textContent = "512"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 1024) {
    newTile.classList.add("board-1024-tile")
    newTile.textContent = "1024"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 2048) {
    newTile.classList.add("board-2048-tile")
    newTile.textContent = "2048"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 4096) {
    newTile.classList.add("board-4096-tile")
    newTile.textContent = "4096"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  } else if (v === 8192) {
    newTile.classList.add("board-8192-tile")
    newTile.textContent = "8192"
    tiles[flatPosition - 1].append(newTile)
    newTileAnimation(tiles[flatPosition - 1].firstChild)
  }
}

// KEY FUNCTIONS

function pressRightKey() {
  !gameover() ? moveRowsRight() : showgameover()
}

function pressLeftKey() {
  !gameover() ? moveRowsLeft() : showgameover()
}

function pressDownKey() {
  !gameover() ? moveColumnsDown() : showgameover()
}

function pressUpKey() {
  !gameover() ? moveColumnsUp() : showgameover()
}

// TILE POSITIONING

function updateCurrentPosition() {
  currentPosition = []
  for (let i = 0; i < tiles.length; i++) {
    currentPosition.push(tiles[i].firstChild)
  }
}

function cleanTile(tile) {
  if (tile !== null) tile.removeChild(tile.firstChild)
}

function moveToTile(fromTile, toTile, distance, axis) {
  let u = 2 * tiles[toTile].textContent.valueOf()
  if (isFull(tiles[fromTile])) {
    let player = tiles[fromTile].firstChild.animate(
      [
        { transform: "translate" + axis + "(0)" },
        { transform: "translate" + axis + "(" + distance + "px)" }
      ],
      {
        duration: 100
      }
    )
    player.addEventListener("finish", function() {
      cleanTile(tiles[fromTile])
      changeValue(tiles[toTile], u)
      updateScore(u)
    })
  }
}

function updateScore(u) {
  score += u
  realscore.textContent = score
  realscore.animate(
    [{ transform: "scale(1.5)" }, { transform: "scale(1.0)" }],
    {
      duration: 100
    }
  )
}

function changeValue(tile, v) {
  let newTile = document.createElement("div")
  newTile.id = "inner-" + tile.id
  if (v === 0) {
    tile.firstChild.classList.toggle("board-null-tile")
    tile.removeChild(tile.firstChild)
  } else if (v === 2) {
    tile.firstChild.classList.toggle("board-2-tile")
    tile.removeChild(tile.firstChild)
    newTile.textContent = "2"
  } else if (v === 4) {
    tile.firstChild.classList.toggle("board-4-tile")
    tile.firstChild.textContent = "4"
  } else if (v === 8) {
    tile.firstChild.classList.toggle("board-8-tile")
    tile.firstChild.textContent = "8"
  } else if (v === 16) {
    tile.firstChild.classList.toggle("board-16-tile")
    tile.firstChild.textContent = "16"
  } else if (v === 32) {
    tile.firstChild.classList.toggle("board-32-tile")
    tile.firstChild.textContent = "32"
  } else if (v === 64) {
    tile.firstChild.classList.toggle("board-64-tile")
    tile.firstChild.textContent = "64"
  } else if (v === 128) {
    tile.firstChild.classList.toggle("board-128-tile")
    tile.firstChild.textContent = "128"
  } else if (v === 256) {
    tile.firstChild.classList.toggle("board-256-tile")
    tile.firstChild.textContent = "256"
  } else if (v === 512) {
    tile.firstChild.classList.toggle("board-512-tile")
    tile.firstChild.textContent = "512"
  } else if (v === 1024) {
    tile.firstChild.classList.toggle("board-1024-tile")
    tile.firstChild.textContent = "1024"
  } else if (v === 2048) {
    tile.firstChild.classList.toggle("board-2048-tile")
    tile.firstChild.textContent = "2048"
  }
}

function moveClockwise(first, second, third, fourth, axis) {
  if (!isFull(tiles[fourth])) {
    if (!isFull(tiles[third])) {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          goToTile(first, fourth, relPosition("tile1", "tile4"), axis)
        }
      } else {
        if (!isFull(tiles[first])) {
          goToTile(second, fourth, relPosition("tile1", "tile3"), axis)
        } else {
          if (compareTile(tiles[first], tiles[second])) {
            moveToTile(first, second, relPosition("tile1", "tile4"), axis)
            goToTile(second, fourth, relPosition("tile1", "tile3"), axis)
          } else {
            goToTile(second, fourth, relPosition("tile1", "tile3"), axis)
            goToTile(first, third, relPosition("tile1", "tile3"), axis)
          }
        }
      }
    } else {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[first], tiles[third])) {
            moveToTile(first, third, relPosition("tile1", "tile4"), axis)
            goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
          } else {
            goToTile(first, third, relPosition("tile1", "tile3"), axis)
            goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
          }
        } else {
          goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
        }
      } else {
        if (!isFull(tiles[first])) {
          if (compareTile(tiles[second], tiles[third])) {
            moveToTile(second, third, relPosition("tile1", "tile2"), axis)
            goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
          } else {
            goToTile(second, third, relPosition("tile1", "tile2"), axis)
            goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
          }
        } else {
          if (compareTile(tiles[second], tiles[third])) {
            goToTile(first, third, relPosition("tile1", "tile3"), axis)
            moveToTile(second, third, relPosition("tile1", "tile2"), axis)
            goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
          } else {
            if (compareTile(tiles[first], tiles[second])) {
              moveToTile(first, second, relPosition("tile1", "tile3"), axis)
              goToTile(second, third, relPosition("tile1", "tile2"), axis)
              goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
            } else {
              goToTile(third, fourth, relPosition("tile1", "tile2"), axis)
              goToTile(second, third, relPosition("tile1", "tile2"), axis)
              goToTile(first, second, relPosition("tile1", "tile2"), axis)
            }
          }
        }
      }
    }
  } else {
    if (!isFull(tiles[third])) {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[first], tiles[fourth])) {
            moveToTile(first, fourth, relPosition("tile1", "tile4"), axis)
          } else {
            goToTile(first, third, relPosition("tile1", "tile3"), axis)
          }
        }
      } else {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[second], tiles[fourth])) {
            goToTile(first, third, relPosition("tile1", "tile3"), axis)
          } else {
            if (compareTile(tiles[first], tiles[second])) {
              moveToTile(first, second, relPosition("tile1", "tile3"), axis)
              goToTile(second, third, relPosition("tile1", "tile2"), axis)
            } else {
              goToTile(second, third, relPosition("tile1", "tile2"), axis)
              goToTile(first, second, relPosition("tile1", "tile2"), axis)
            }
          }
        } else {
          if (!compareTile(tiles[second], tiles[fourth])) {
            goToTile(second, third, relPosition("tile1", "tile2"), axis)
          }
        }
        if (compareTile(tiles[second], tiles[fourth])) {
          moveToTile(second, fourth, relPosition("tile1", "tile3"), axis)
        } else {
          goToTile(second, third, relPosition("tile1", "tile2"), axis)
        }
      }
    } else {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[third], tiles[fourth])) {
            moveToTile(third, fourth, relPosition("tile1", "tile2"), axis)
            goToTile(first, third, relPosition("tile1", "tile3"), axis)
          } else {
            if (compareTile(tiles[first], tiles[third])) {
              moveToTile(first, third, relPosition("tile1", "tile3"), axis)
            } else {
              goToTile(first, second, relPosition("tile1", "tile2"), axis)
            }
          }
        } else {
          if (compareTile(tiles[third], tiles[fourth])) {
            moveToTile(third, fourth, relPosition("tile1", "tile2"), axis)
          }
        }
      } else {
        if (compareTile(tiles[third], tiles[fourth])) {
          if (!isFull(tiles[first])) {
            moveToTile(third, fourth, relPosition("tile1", "tile2"), axis)
            goToTile(second, third, relPosition("tile1", "tile2"), axis)
          } else {
            if (compareTile(tiles[first], tiles[second])) {
              moveToTile(
                third,
                fourth,
                relPosition("tile1", "tile2") * 0.84,
                axis
              )
              moveToTile(first, second, relPosition("tile1", "tile3"), axis)
              goToTile(second, third, relPosition("tile1", "tile2"), axis)
            } else {
              moveToTile(third, fourth, relPosition("tile1", "tile2"), axis)
              goToTile(first, second, relPosition("tile1", "tile2"), axis)
              goToTile(second, third, relPosition("tile1", "tile2"), axis)
            }
          }
        } else if (compareTile(tiles[second], tiles[third])) {
          if (!isFull(tiles[first])) {
            moveToTile(second, third, relPosition("tile1", "tile2"), axis)
          } else {
            moveToTile(second, third, relPosition("tile1", "tile2"), axis)
            goToTile(first, second, relPosition("tile1", "tile2"), axis)
          }
        } else if (
          isFull(tiles[first]) &&
          compareTile(tiles[first], tiles[second]) &&
          !compareTile(tiles[third], tiles[fourth])
        ) {
          moveToTile(first, second, relPosition("tile1", "tile2"), axis)
        }
      }
    }
  }
}

function moveCounterClockwise(first, second, third, fourth, axis) {
  if (!isFull(tiles[fourth])) {
    if (!isFull(tiles[third])) {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          goToTile(first, fourth, -relPosition("tile1", "tile4"), axis)
        }
      } else {
        if (!isFull(tiles[first])) {
          goToTile(second, fourth, -relPosition("tile1", "tile3"), axis)
        } else {
          if (compareTile(tiles[first], tiles[second])) {
            moveToTile(first, second, -relPosition("tile1", "tile4"), axis)
            goToTile(second, fourth, -relPosition("tile1", "tile3"), axis)
          } else {
            goToTile(second, fourth, -relPosition("tile1", "tile3"), axis)
            goToTile(first, third, -relPosition("tile1", "tile3"), axis)
          }
        }
      }
    } else {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[first], tiles[third])) {
            moveToTile(first, third, -relPosition("tile1", "tile4"), axis)
            goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
          } else {
            goToTile(first, third, -relPosition("tile1", "tile3"), axis)
            goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
          }
        } else {
          goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
        }
      } else {
        if (!isFull(tiles[first])) {
          if (compareTile(tiles[second], tiles[third])) {
            moveToTile(second, third, -relPosition("tile1", "tile2"), axis)
            goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
          } else {
            goToTile(second, third, -relPosition("tile1", "tile2"), axis)
            goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
          }
        } else {
          if (compareTile(tiles[second], tiles[third])) {
            goToTile(first, third, -relPosition("tile1", "tile3"), axis)
            moveToTile(second, third, -relPosition("tile1", "tile2"), axis)
            goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
          } else {
            if (compareTile(tiles[first], tiles[second])) {
              moveToTile(first, second, -relPosition("tile1", "tile3"), axis)
              goToTile(second, third, -relPosition("tile1", "tile2"), axis)
              goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
            } else {
              goToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
              goToTile(second, third, -relPosition("tile1", "tile2"), axis)
              goToTile(first, second, -relPosition("tile1", "tile2"), axis)
            }
          }
        }
      }
    }
  } else {
    if (!isFull(tiles[third])) {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[first], tiles[fourth])) {
            moveToTile(first, fourth, -relPosition("tile1", "tile4"), axis)
          } else {
            goToTile(first, third, -relPosition("tile1", "tile3"), axis)
          }
        }
      } else {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[second], tiles[fourth])) {
            goToTile(first, third, -relPosition("tile1", "tile3"), axis)
          } else {
            if (compareTile(tiles[first], tiles[second])) {
              moveToTile(first, second, -relPosition("tile1", "tile3"), axis)
              goToTile(second, third, -relPosition("tile1", "tile2"), axis)
            } else {
              goToTile(second, third, -relPosition("tile1", "tile2"), axis)
              goToTile(first, second, -relPosition("tile1", "tile2"), axis)
            }
          }
        } else {
          if (!compareTile(tiles[second], tiles[fourth])) {
            goToTile(second, third, -relPosition("tile1", "tile2"), axis)
          }
        }
        if (compareTile(tiles[second], tiles[fourth])) {
          moveToTile(second, fourth, -relPosition("tile1", "tile3"), axis)
        } else {
          goToTile(second, third, -relPosition("tile1", "tile2"), axis)
        }
      }
    } else {
      if (!isFull(tiles[second])) {
        if (isFull(tiles[first])) {
          if (compareTile(tiles[third], tiles[fourth])) {
            moveToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
            goToTile(first, third, -relPosition("tile1", "tile3"), axis)
          } else {
            if (compareTile(tiles[first], tiles[third])) {
              moveToTile(first, third, -relPosition("tile1", "tile3"), axis)
            } else {
              goToTile(first, second, -relPosition("tile1", "tile2"), axis)
            }
          }
        } else {
          if (compareTile(tiles[third], tiles[fourth])) {
            moveToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
          }
        }
      } else {
        if (compareTile(tiles[third], tiles[fourth])) {
          if (!isFull(tiles[first])) {
            moveToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
            goToTile(second, third, -relPosition("tile1", "tile2"), axis)
          } else {
            if (compareTile(tiles[first], tiles[second])) {
              moveToTile(
                third,
                fourth,
                -relPosition("tile1", "tile2") * 0.84,
                axis
              )
              moveToTile(first, second, -relPosition("tile1", "tile3"), axis)
              goToTile(second, third, -relPosition("tile1", "tile2"), axis)
            } else {
              moveToTile(third, fourth, -relPosition("tile1", "tile2"), axis)
              goToTile(first, second, -relPosition("tile1", "tile2"), axis)
              goToTile(second, third, -relPosition("tile1", "tile2"), axis)
            }
          }
        } else if (compareTile(tiles[second], tiles[third])) {
          if (!isFull(tiles[first])) {
            moveToTile(second, third, -relPosition("tile1", "tile2"), axis)
          } else {
            moveToTile(second, third, -relPosition("tile1", "tile2"), axis)
            goToTile(first, second, -relPosition("tile1", "tile2"), axis)
          }
        } else if (
          isFull(tiles[first]) &&
          compareTile(tiles[first], tiles[second]) &&
          !compareTile(tiles[third], tiles[fourth])
        ) {
          moveToTile(first, second, -relPosition("tile1", "tile2"), axis)
        }
      }
    }
  }
}

function compareTile(tileA, tileB) {
  if (tileA.textContent === tileB.textContent) return true
}

function moveRowsRight() {
  onAnimation = true
  moveClockwise(0, 1, 2, 3, "X")
  moveClockwise(4, 5, 6, 7, "X")
  moveClockwise(8, 9, 10, 11, "X")
  moveClockwise(12, 13, 14, 15, "X")
  setTimeout(() => {
    updateCurrentPosition()
    if (!compare(previousPosition, currentPosition)) {
      generateRandomTile(1)
      previousPosition = currentPosition
      updateCurrentPosition()
    }
    onAnimation = false
  }, timeChoose)
}

function moveRowsLeft() {
  onAnimation = true
  moveCounterClockwise(3, 2, 1, 0, "X")
  moveCounterClockwise(7, 6, 5, 4, "X")
  moveCounterClockwise(11, 10, 9, 8, "X")
  moveCounterClockwise(15, 14, 13, 12, "X")
  setTimeout(() => {
    updateCurrentPosition()
    if (!compare(previousPosition, currentPosition)) {
      generateRandomTile(1)
      previousPosition = currentPosition
      updateCurrentPosition()
    }
    onAnimation = false
  }, timeChoose)
}

function moveColumnsDown() {
  onAnimation = true
  moveClockwise(0, 4, 8, 12, "Y")
  moveClockwise(1, 5, 9, 13, "Y")
  moveClockwise(2, 6, 10, 14, "Y")
  moveClockwise(3, 7, 11, 15, "Y")
  setTimeout(() => {
    updateCurrentPosition()
    if (!compare(previousPosition, currentPosition)) {
      generateRandomTile(1)
      previousPosition = currentPosition
      updateCurrentPosition()
    }
    onAnimation = false
  }, timeChoose)
}

function moveColumnsUp() {
  onAnimation = true
  moveCounterClockwise(12, 8, 4, 0, "Y")
  moveCounterClockwise(13, 9, 5, 1, "Y")
  moveCounterClockwise(14, 10, 6, 2, "Y")
  moveCounterClockwise(15, 11, 7, 3, "Y")
  setTimeout(() => {
    updateCurrentPosition()
    if (!compare(previousPosition, currentPosition)) {
      generateRandomTile(1)
      previousPosition = currentPosition
      updateCurrentPosition()
    }
    onAnimation = false
  }, timeChoose)
}

function goToTile(fromTile, toTile, distance, axis) {
  if (isFull(tiles[fromTile])) {
    let auxTile = tiles[fromTile].firstChild
    let player = tiles[fromTile].firstChild.animate(
      [
        { transform: "translate" + axis + "(0)" },
        { transform: "translate" + axis + "(" + distance + "px)" }
      ],
      {
        duration: 100
        //$
      }
    )
    player.addEventListener("finish", function() {
      tiles[toTile].appendChild(auxTile)
    })
  }
}

function generateRandomTile(numberOfRandomTiles) {
  for (let i = 0; i < numberOfRandomTiles; i) {
    let num = getRandomNumberExcArray()
    if (!isFull(tiles[num])) {
      generateTile(num + 1, dificult(medium))
      i++
    }
  }
  updateCurrentPosition()
}

// TILE CHECKING

function isFull(tile) {
  return tile.hasChildNodes()
}

function allTilesFull() {
  let counter = 0
  for (let index = 0; index < 16; index++) {
    if (tiles[index].hasChildNodes()) counter++
  }
  if (counter === 16) return true
  return false
}

function gameover() {
  if (allTilesFull()) {
    for (let y = 0; y < 12; y++) {
      if (
        tiles[y].firstChild.textContent === tiles[y + 4].firstChild.textContent
      )
        return false
    }
    for (let z = 0; z < 3; z++) {
      if (
        tiles[z].firstChild.textContent === tiles[z + 1].firstChild.textContent
      )
        return false
    }
    for (let z = 0; z < 3; z++) {
      if (
        tiles[z + 4].firstChild.textContent ===
        tiles[z + 5].firstChild.textContent
      )
        return false
    }
    for (let z = 0; z < 3; z++) {
      if (
        tiles[z + 8].firstChild.textContent ===
        tiles[z + 9].firstChild.textContent
      )
        return false
    }
    for (let z = 0; z < 3; z++) {
      if (
        tiles[z + 12].firstChild.textContent ===
        tiles[z + 13].firstChild.textContent
      )
        return false
    }
    return true
  }
  return false
}

// LEVEL MANAGEMENT

function dificult(level) {
  if (level === 1) {
    return getRandomNumberNoException([2, 2])
  } else if (level === 2) {
    return getRandomNumberNoException([2, 4])
  } else if (level === 3) {
    return getRandomNumberNoException([4, 8])
  }
}

function showgameover() {
  if (score > localStorage.getItem("recorde")) {
    localStorage.setItem("recorde", score)
    realrecord.textContent = score
  }
  document.getElementById("finalscore").textContent = score
  gameOverScreen.style.display = "flex"
  let player = gameOverScreen.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500
  })
  player.addEventListener("finish", function() {
    gameOverScreen.style.opacity = 1
  })
}

// RANDOMIC NUMBERS

function getRandomNumberNoException(numberArray) {
  let rand = Math.round(Math.random() * (numberArray.length - 1))
  return numberArray[rand]
}

function getRandomNumberExcArray() {
  let rand = Math.round(Math.random() * 15)
  if (!isFull(tiles[rand])) {
    return rand
  } else {
    return getRandomNumberExcArray()
  }
}

// GODMODE FUNCTIONS

function clear() {
  for (let index = 0; index < 16; index++) {
    if (tiles[index].firstChild !== null)
      tiles[index].removeChild(tiles[index].firstChild)
  }
}

// START GAME

function compare(a1, a2) {
  let result = 0
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] === a2[i]) result++
  }
  return result === a1.length
}

function checkrecord() {
  if (localStorage.getItem("recorde") === null) {
    localStorage.setItem("recorde", 0)
  } else {
    realrecord.textContent = localStorage.getItem("recorde")
  }
}

function startGame() {
  // checkrecord();
  updateCurrentPosition()
  // generateTile(14, 4);
  // generateTile(15, 4);
  // generateTile(16, 2);
  generateRandomTile(2);
  previousPosition = currentPosition
}

startGame()

// quem ta lendo é bobo XD
