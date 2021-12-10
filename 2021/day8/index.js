function difference(setA, setB) {
  const diff = new Set(setA);

  for (const elem of setB) {
      diff.delete(elem);
  }

  return diff;
}

function day8(input) {
  // Part 1
  let map = new Map([[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]])

  input.forEach((entry) => {
    entry.replace('\r', '') // did this on windows :)
    const [, code] = entry.split(' | ')

    code.split(' ').forEach(digit => {
      const segmentsUsed = digit.trim().length
      map.set(segmentsUsed, map.get(segmentsUsed) + 1)
    })
  })

  const sumUniqueSegments = map.get(2) + map.get(4) + map.get(3) + map.get(7) // 1,4,7,8

  // Part 2
  let sumOutput = 0

  input.forEach((entry) => {
    entry.replace('\r', '') // did this on windows :)
    const [data, code] = entry.split(' | ')

    let mapSeq = new Map([[2,new Array()],[3,new Array()],[4,new Array()],[5,new Array()],[6,new Array()],[7,new Array()]])
    let codeArr = []

    data.split(' ').forEach(seq => {
      const segmentsUsed = seq.trim().length

      let seqTemp = mapSeq.get(segmentsUsed)
      seqTemp.push(seq.trim())
      mapSeq.set(segmentsUsed, seqTemp)
    })

    code.split(' ').forEach(digit => {
      codeArr.push(digit.trim())
    })

    // console.log(mapSeq, codeArr)

    let seqDigitMap = new Map([
      [mapSeq.get(2)[0], 1],
      [mapSeq.get(4)[0], 4],
      [mapSeq.get(3)[0], 7],
      [mapSeq.get(7)[0], 8],
    ])

    let nineNeg = new Set((mapSeq.get(4) + mapSeq.get(3)).split(''))

    mapSeq.get(6).forEach(seq => {
      // console.log(difference(new Set(seq), nineNeg))
      if(difference(new Set(seq), nineNeg).size == 1) seqDigitMap.set(seq, 9)
    })

    //console.log(seqDigitMap)
  })

  return [sumUniqueSegments, sumOutput]
}

module.exports = day8