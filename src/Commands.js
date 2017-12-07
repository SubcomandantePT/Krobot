const commands = [];

module.exports = {
  list: commands,
  add: (name, args, func) => {
    commands.push({
      name: name,
      args: args,
      func: func,
    })
  }
}