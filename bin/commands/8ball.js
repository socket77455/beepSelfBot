module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")
    const snekfetch = require('snekfetch')

  if (!args.length) {
    return message.error('You must provide something to ask!')
  }

  await message.edit('ðŸ”„\u2000Asking 8-ball\u2026')
  const res = await snekfetch.get(`https://8ball.delegator.com/magic/JSON/${args.join(' ')}`)

  if (res.status !== 200) {
    return message.error('Could not retrieve answer from 8-ball!')
  }

  const magic = res.body.magic
  return message.edit(`ðŸŽ±\u2000|\u2000**Question:** ${bot.utils.capitalizeFirstLetter(magic.question)}?\n\n` +
    `${magic.answer}, **${message.member.displayName}**.`)
}

module.exports.config = {
    command: "fath"
}
