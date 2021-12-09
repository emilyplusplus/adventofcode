function day8(input) {
  // console.log(input)

  let map = new Map([[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]])

  input.forEach((entry) => {
    entry.replace('\r', '') // did this on windows :)
    const [, code] = entry.split(' | ')

    code.split(' ').forEach(digit => {
      const segmentsUsed = digit.trim().length
      // console.log(segmentsUsed, digit)
      map.set(segmentsUsed, map.get(segmentsUsed) + 1)
    })
  })

  // console.log(map)
  const sumUniqueSegments = map.get(2) + map.get(4) + map.get(3) + map.get(7) // 1,4,7,8

  return sumUniqueSegments
}

module.exports = day8