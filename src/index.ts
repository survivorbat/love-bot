import {Client, Intents} from "discord.js"

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.login(process.env.DISCORD_TOKEN!)
  .catch((err) => console.error(err))
