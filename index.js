const Discord = require("discord.js");
"use strict";
const dotenv = require('dotenv');
dotenv.config();

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildBans,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.GuildInvites,
    Discord.GatewayIntentBits.GuildWebhooks,
    Discord.GatewayIntentBits.GuildVoiceStates,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildPresences,
  ]
});

module.exports = client

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  let mencoes = [`<@${client.user.id}>`, `<@!${client.user.id}>`]

  mencoes.forEach(element => {
    if (message.content === element) {

      message.reply({ content: `<:erykaola:1084223833298456746> Olá, ${message.author}. Utilize \`/ajuda\` para ver a minha lista de comandos. Caso queira ver as minhas informações utilize \`/info\`.`})
  }
      

})
    
    })
    

client.on('interactionCreate', async (interaction) => {
  if (interaction.isCommand()) {
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) {
      return interaction.reply({
        content: 'Não foi possível executar este comando.',
        ephemeral: true
      });
    }
    try {
      interaction.member = interaction.guild.members.cache.get(interaction.user.id);
      await cmd.run(client, interaction);
    } catch (error) {
      console.error(`Erro ao executar o comando "${cmd.name}": ${error}`);
      interaction.reply({
        content: 'Desculpe, ocorreu um erro ao utilizar este comando, caso este erro persista entre em meu servidor de suporte para obter ajuda.',
        ephemeral: true
      });
    }
  }
});

client.on('ready', () => {
  console.log(`Obaaa, eu sou a ${client.user.tag} e acabei de ficar online!\n Atualmente conheço ${client.users.cache.size} usuários, em ${client.guilds.cache.size} servidores!`)
  client.user.setStatus("online");
  client.user.setPresence({
    activities: [{
      name: "",
   }],
  })
})

process.on('multipleResolutions', (type, reason, promise) => {
  console.log(`🚫 Erro Detectado\n\n` + type, promise, reason)
});

process.on('unhandledRejection', (reason, promise) => {
  console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});

process.on('uncaughtException', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});

process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const tempoAtual = Date.now();
  const tempoAnterior = message.createdTimestamp;
  const intervaloTempo = (tempoAtual - tempoAnterior) / 1000;
  if (intervaloTempo > 30) return;
});

client.slashCommands = new Discord.Collection()

require('./handler')(client)
    
       

client.login(process.env.DISCORD_TOKEN);
