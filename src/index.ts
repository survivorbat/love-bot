import {Client, Intents} from "discord.js"

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

const swagConfusion = '945283067768078357';
const swagBlessed = '870578064323657778';
const swagOui = '870581147824955423';
const swagYes = '870578294142165012';
const swagOw = '870580879804751923';
const swagShroom = '882006639354462278';
const swagHuh = '870580845948334170';
const swagGay = '870581114819989535';
const swagBitch = '870580711529250827';
const swagCool = '870580980111511573';
const swagWar = '870578369517993984';
const swagFinger = '913056452401303652';
const swagFriends = '870581255899603015';
const swagAnger = '870580932464234496';
const swagSad = '870581465434443796';
const swagCry = '870578436710752327';
const swagHappy = '876196633556185128';
const swagPray = '938164293994692688';
const swagSaucy = '913057483457720330';

const swags = {
  'yes': [swagOui, swagYes],
  'fuck': [swagFinger, swagSaucy],
  'friends': [swagFriends],
  'gay': [swagGay],
  'huh': [swagHuh, swagConfusion],
  'war': [swagWar],
  'bitch': [swagBitch],
  'cool': [swagCool],
  'shroom': [swagShroom],
  'oh': [swagOw],
  'ow': [swagOw],
  'uwu': [swagBlessed],
  'please': [swagPray],
  'pls': [swagPray],
  'good': [swagBlessed],
  'sex': [swagSaucy],
  'sorry': [swagCry],
  'cry': [swagCry],
  'lol': [swagBlessed],
  ':3': [swagBlessed],
  ':\'(': [swagCry],
  '>:(': [swagAnger],
  ':)': [swagHappy, swagBlessed],
  ':(': [swagSad],
  'B)': [swagCool],
  'B-)': [swagCool],
};

const searchSymbols = Object.keys(swags);

client.on("messageCreate", (msg) => {
  // Ignore the messages from bots
  if (msg.author.bot) {
    return
  }

  // If the bot is mentioned, be blessed <3
  if (msg.mentions.users.hasAny(client.user.id)) {
    msg.reply(`<:swagblessed:${swagBlessed}>`);
  }

  // Otherwise, check if the message contains any of the strings
  const lowercaseContent = msg.content.toLowerCase();

  searchSymbols.forEach((symbol) => {
    if (lowercaseContent.includes(symbol)) {
      const swagEmojis = swags[symbol];

      const swagResult = swagEmojis[Math.floor(Math.random() * swagEmojis.length)]

      console.log(`Got a '${swagResult}' in '${msg.guildId}'!`)
      msg.react(swagResult);
    }
  })
})


client.login(process.env.DISCORD_TOKEN!)
  .catch((err) => console.error(err))
