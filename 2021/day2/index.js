function day2(input) {
  // Part 1 //
  let x = 0
  let y = 0

  input.forEach((command_raw, i) => {
    const [command, units] = command_raw.split(' ')

    switch(command) {
      case 'forward':
        x += parseInt(units)
        break;
      case 'down':
        y += parseInt(units)
        break;
      case 'up':
        y -= parseInt(units)
        break;
      default:
        break;
    }
  })

  const product = x * y

  // Part 2 //
  let x_aim = 0
  let y_aim = 0
  let aim = 0

  input.forEach((command_raw, i) => {
    const [command, units] = command_raw.split(' ')

    switch(command) {
      case 'forward':
        x_aim += parseInt(units)
        y_aim += parseInt(units) * aim
        break;
      case 'down':
        aim += parseInt(units)
        break;
      case 'up':
        aim -= parseInt(units)
        break;
      default:
        break;
    }
  })

  const product_aim = x_aim * y_aim
  
  return [product, product_aim]
}

module.exports = day2