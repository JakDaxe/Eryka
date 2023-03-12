const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "Mostra o tempo de respota.",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;


    interaction.reply({ content: `<:latency:1084530420152008765> Olá **${interaction.user}**, meu ping é de \`${ping}\` ms.` })
 }

}
