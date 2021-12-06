function day6(input, days) {
  let fish = input.split(',').map((gestation) => {
    return parseInt(gestation)
  })

  let map = new Map()

  for(let i = 0; i < 10; i++) {
    map.set(i, 0)
  }

  fish.forEach((f) => {
    if(map.has(f)) {
      map.set(f, map.get(f) + 1)
    }
  })

  //console.log(map)
  
  // brute force
  /*for(let i = 0; i < days; i++) {
    const fishCountAtStart = fish.length

    for(let j = 0; j < fishCountAtStart; j++) {
      if(fish[j] == 0) {
        fish[j] = 6
        fish.push(8)
      } else {
        fish[j]--
      }
    }
  }*/

  // optimized
  for(let i = 0; i < days; i++) {
    let zeros = map.get(0)

    for(let j = 0; j < 8; j++) {
      map.set(j, map.get(j + 1))
    }

    map.set(6, zeros + map.get(6))
    map.set(8, zeros)
  }

  //console.log(map)

  let sum = 0

  map.forEach(function(value, key) {
    sum += value
  })

  return sum
}

module.exports = day6