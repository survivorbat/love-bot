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
const swagFriends = '828018624442531901';
const swagAnger = '870580932464234496';
const swagSad = '870581465434443796';
const swagCry = '870578436710752327';
const swagHappy = '876196633556185128';

const swags = {
  ':3': [swagBlessed],
  ':\'(': [swagCry],
  '>:(': [swagAnger],
  ':)': [swagHappy, swagBlessed],
  ':(': [swagSad],
  ':S': [swagConfusion],
  'B)': [swagCool],
  'yes': [swagOui, swagYes],
  'fuck': [swagFinger],
  'friends': [swagFriends],
  'gay': [swagGay],
  'huh': [swagHuh],
  'war': [swagWar],
  'bitch': [swagBitch],
  'cool': [swagCool],
  'shroom': [swagShroom],
  'oh': [swagOw],
  'ow': [swagOw],
};

const searchSymbols = Object.keys(swags);

client.on("messageCreate", async (msg) => {
  // Ignore the messages from bots
  if (msg.author.bot) {
    return
  }

  searchSymbols.forEach((symbol) => {
    // React with the first finding, then return and quit.
    if (msg.content.includes(symbol)) {
      return msg.react(symbol);
    }
  })
})


client.login(process.env.DISCORD_TOKEN!)
  .catch((err) => console.error(err))
