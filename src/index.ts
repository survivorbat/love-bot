import { Client, Intents } from 'discord.js';
import { searchSymbols, swagBlessed } from './constants';
import { applySwag } from './swag';

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

client.on('ready', async () => {
  console.log(
    `Logged in as ${client.user?.tag} in ${client.guilds.cache.size} guilds!`,
  );
  console.log(`Available swag: ${searchSymbols.join(', ')}`);
});

client.on('messageCreate', async (msg) => {
  // Ignore the messages from bots
  if (msg.author.bot) {
    return;
  }

  // If the bot is mentioned, be blessed <3
  if (msg.mentions.users.hasAny(client.user.id)) {
    await msg.reply(`<:swagblessed:${swagBlessed}>`);
  }

  await applySwag(msg.content.toLowerCase(), <any>msg.reply);
});

client.login(process.env.DISCORD_TOKEN!).catch((err) => console.error(err));
