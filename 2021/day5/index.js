function day5(input) {
  // Part 1 //
  let grid = new Array(999)
  grid.forEach((row, i) => {
    row[i] = new Array(999)
  })

  let lines = []

  input.forEach((line, i) => {
    let points = line.split(' -> ').join(',')
    let [x1,y1,x2,y2] = points.split(',')

    lines.push({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2
    })
  })

  lines = lines.filter((line) => {
    return line.x1 == line.x2 || line.y1 == line.y2
  })

  lines.forEach((line) => {
    if(line.x1 == line.x2) {
      
    } else if(line.y1 == line.y2) {

    }  
  })

  // Part 2 //


  return [0, 0]
}

module.exports = day5