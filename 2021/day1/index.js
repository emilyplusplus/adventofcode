function day1(input) {
  // Part 1 //
  let inc_count = 0

  for(let i = 1; i < input.length; i++) {
    if(parseInt(input[i]) > parseInt(input[i - 1])) inc_count++
  }

  // Part 2 //
  let inc_count_3 = 0

  for(let i = 3; i < input.length; i++) {
    const a = parseInt(input[i]) + parseInt(input[i-1]) + parseInt(input[i-2])
    const b = parseInt(input[i-1]) + parseInt(input[i-2]) + parseInt(input[i-3])

    if(a > b) inc_count_3++
  }

  return [inc_count, inc_count_3]
}

module.exports = day1