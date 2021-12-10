function day10(input) {
  // Part 1

  input.forEach(line => {
    const brackets = line.split('')
    let stack = new Array();

    

    brackets.forEach(bracket => {
      if(['(','[','{','<'].includes(bracket)) {
        stack.push(bracket)
      } else if([')',']','}','>'].includes(bracket)) {
        let popped = stack.pop()
        switch(bracket) {
          case ')':
            if(popped != '(') 
        }
      }
    })
  })

  // Part 2

  return [0, 0]
}

module.exports = day10