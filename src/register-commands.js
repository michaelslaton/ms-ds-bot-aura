require('dotenv').config();
const { REST, Routes } = require('discord.js');
const { token, client_id, guild_id } = process.env;

const commands = [
  {
    name: 'hey',
    description: 'Replies with hey!',
  },
  {
    name: 'ping',
    description: 'Pong!',
  }
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(client_id, guild_id),
      { body: commands }
    )

    console.log('Slash commands were registered successfully!')
  } catch (err) {
    console.log(`There was an error: ${err}`)
  }
})();