export function leftPad(str, pad) {
  str += ''
  return pad.substring(0, pad.length - str.length) + str
}

export function generateSequenceNames(pad, from, to) {
  const names = []

  while (from <= to) {
    names.push(leftPad(from++, pad))
  }
  return names
}