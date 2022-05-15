import {Client, Intents} from "discord.js"

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.on("messageCreate", async (msg) => {
  if (msg.author.id === client.user.id) {
    return
  }

  if ((Math.ceil(Math.random() * 3) <= 2)) {
    return
  }

  await msg.reply('I love you <3')
})

client.login(process.env.DISCORD_TOKEN!)
  .catch((err) => console.error(err))
