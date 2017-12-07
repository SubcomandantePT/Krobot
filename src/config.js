const fs = require('fs');

module.exports = {
  tokens: [
    'MzQ4OTIzNzA3MTQ3OTQzOTM3.DHuAEw.z6fdYBVLWY5Cg6vC8fS6DSufOyI'
  ],
  echos: JSON.parse(fs.readFileSync('src/echos.json', 'utf8')),
}