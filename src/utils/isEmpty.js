export function isEmpty(value) {
  const data = []
  //eslint-disable-next-line
  for (let x in value) {
    data.push(value[x].length)
  }
  const check = data.every(x => x === 0) && data.length > 0

  return check
}
