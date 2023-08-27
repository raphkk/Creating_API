const cheerio = require('cheerio') //install stock info using npm i cheerio in terminal

function fetchPrice(html) {
  const $ = cheerio.load(html)
  const prices = $('td:nth-child(6)').get().map(val => $(val).text())
  return prices
}

module.exports = {fetchPrice}