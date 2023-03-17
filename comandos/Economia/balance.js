const Discord = require("discord.js")
const Eco = require('swift.eco');
const eco = new Eco.Manager();

module.exports = {
  name: "bal",
  description: "Veja o seu saldo ou de algum usuário.",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
        {
         name: "usuário",
         description: "Usuário que você pretende ver o saldo.",
         type: 6,
         required: false
        },
        ],

  run: async (client, interaction) => {
      
      const user = interaction.options.getUser("usuário") || interaction.user
      let personalBal = eco.fetchMoney(user.id);
      
      
     interaction.reply(`${user.id == interaction.user.id ? `Você possui` : `${user} possui`} <:gemas:1084113140805029910> **${abreviar(personalBal.amount)} Gemas.**\n :trophy: É o **#${personalBal.position} mais rico!**.Veja o ranking dos mais ricos em \`/rank\`.`)

    
 }

}
function abreviar(number, precision=1) {
  return number.toLocaleString('de-DE', { maximumFractionDigits: precision })
}