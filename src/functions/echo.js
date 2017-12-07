const commands = appRequire('Commands.js');
const config = appRequire('config.js');
const PropTypes = require('prop-types');

class Echo extends appRequire('BotFunc.js') {
  initialize() {
    super.initialize();
    config.echos.forEach((echo) => {
      commands.add(echo.challenge, [], (msg, args) => {
        if(msg.guild.id == echo.server_id) {
          console.log(echo.response);
        }
      });
    });
    commands.add('echo add', [{
      name: 'call',
      type: PropTypes.string.isRequired,
    }, {
      name: 'response',
      type: PropTypes.string.isRequired,
    }], (msg, args) => {

    });
  }
}

module.exports = new Echo();