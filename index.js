var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop(2)
}

function destructivelyRemoveFirstKitten() {
  return kittens.slice(0)
}

function appendKitten(name) {
  return [...kittens, name]
}
