function day3(input) {
  // Part 1 //
  let gammaRate = 0

  let counter = []

  input.forEach((val, i) => {
    const bits = val.split('')
    //console.log(bits)
    bits.forEach((bit, j) => {
      if(counter[j] == undefined) counter[j] = {
        zero: 0,
        one: 0
      }

      if(parseInt(bit) == 0) counter[j].zero++
      else if(parseInt(bit) == 1) counter[j].one++
    })
  })

  //console.log(counter)

  counter.forEach((data, i) => {
    if(data.one > data.zero) {
      //console.log('here', i)
      gammaRate |= (1 << (counter.length - i - 1))
    }
  })

  //console.log(gammaRate)

  let epsilonRate = gammaRate ^ ( Math.pow(2, gammaRate.toString(2).length) - 1 ) // XOR with N bit mask

  const powerConsumption = gammaRate * epsilonRate

  // Part 2 //
  let counter_mutable = JSON.parse(JSON.stringify(counter))

  let oxygenGenRating = 0
  let CO2ScrubberRating = 0

  let ox_arr_workable = JSON.parse(JSON.stringify(input))

  let i = 0
  while(ox_arr_workable.length > 1) {
    let maxBit = (counter_mutable[i].one >= counter_mutable[i].zero) ? 1 : 0
    ox_arr_workable = ox_arr_workable.filter((bitSequence) => {
      let bits = bitSequence.split('')
      return bits[i] == maxBit
    })
    ox_arr_workable.forEach((val, i) => {
      const bits = val.split('')
      counter_mutable[i] = {
        zero: 0,
        one: 0
      }
      //console.log(bits)
      bits.forEach((bit, j) => {
        if(parseInt(bit) == 0) counter_mutable[j].zero++
        else if(parseInt(bit) == 1) counter_mutable[j].one++
      })
    })
    i++
    //console.log(ox_arr_workable)
  }

  //console.log(parseInt(ox_arr_workable[0], 2))

  counter_mutable = JSON.parse(JSON.stringify(counter))

  oxygenGenRating = parseInt(ox_arr_workable[0], 2)

  let co2_arr_workable = JSON.parse(JSON.stringify(input))

  i = 0
  while(co2_arr_workable.length > 1) {
    let maxBit = (counter_mutable[i].zero <= counter_mutable[i].one) ? 0 : 1
    co2_arr_workable = co2_arr_workable.filter((bitSequence) => {
      let bits = bitSequence.split('')
      return bits[i] == maxBit
    })
    co2_arr_workable.forEach((val, i) => {
      const bits = val.split('')
      counter_mutable[i] = {
        zero: 0,
        one: 0
      }
      //console.log(bits)
      bits.forEach((bit, j) => {
        if(parseInt(bit) == 0) counter_mutable[j].zero++
        else if(parseInt(bit) == 1) counter_mutable[j].one++
      })
    })
    i++
    //console.log(counter_mutable)
    //console.log(co2_arr_workable)
  }

  //console.log(parseInt(co2_arr_workable[0], 2))

  CO2ScrubberRating = parseInt(co2_arr_workable[0], 2)

  const lifeSupportRating = oxygenGenRating * CO2ScrubberRating
  
  return [powerConsumption, lifeSupportRating]
}

module.exports = day3