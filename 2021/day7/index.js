function calc_median(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function day7(input) {
  const crabs_x = input.split(',').map(x => parseInt(x))
  const median = calc_median(crabs_x)
  const mean = Math.round(crabs_x.reduce((a, b) => a + b) / crabs_x.length); //or floor or ceil, depends

  //console.log(crabs_x, median, mean)

  let fuelRequired = 0

  crabs_x.forEach(x => {
    fuelRequired += Math.abs(x - median)
  })

  let fuelRequired2 = 0

  crabs_x.forEach(x => {
    const steps = Math.abs(x - mean) + 1
    const fuel = (steps*(steps-1))/2
    fuelRequired2 += fuel
  })

  return [fuelRequired, fuelRequired2]
}

module.exports = day7