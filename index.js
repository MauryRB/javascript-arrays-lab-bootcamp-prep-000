var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyprependKitten(name) {
  return kittens.unshift(name)
}
