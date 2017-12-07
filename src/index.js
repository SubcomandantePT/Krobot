global.appRequire = function(name) {
  return require(__dirname + '/' + name);
}
const fs = require('fs');

const Discord = require('discord.js');

const config = require('./config.js');

let botFunctions = [];
fs.readdirSync('src/functions').forEach(function(file) {
  botFunctions.push(appRequire("functions/" + file));
});
botFunctions.forEach((func) => {
  func.initialize();
});

const commands = appRequire('Commands.js');

config.tokens.forEach((token) => {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if(msg.content.startsWith('!')) {
      for(let i = 0; i < commands.list.length; i++) {
        let command = commands.list[i];
        if(msg.content.substr(1).startsWith(command.name)) {
          command.func(msg); //TODO: Args
        }
      }
    }
  });
  
  client.login(token);
})