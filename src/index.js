require("dotenv").config();
const { Client, IntentsBitField } = require('discord.js');
const { token } = process.env;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on('ready', (c)=>{
  console.log(`${c.user.tag} is online...`)
})

client.on('messageCreate', (msg)=> {
  if (msg.author.bot) return;

  const message = msg.content.toLowerCase();
  if (message === 'hello aura' || message === 'hi aura' || message === 'hey aura') msg.reply(`Hello ${msg.author.username}.`)

})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  // console.log(interaction)
  if (interaction.commandName === 'hey') interaction.reply(`Hey ${interaction.member.user.username}!`);

  if (interaction.commandName === 'ping') interaction.reply('Pong!');
})

client.login(token);