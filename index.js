const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const client = new Discord.Client();
const CHANNEL = 'global-mod-log';
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUyMzM3NTQ1MjY2OTA4MzY1NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQ3NzUyODQ2fQ._aqLPSuEL6YIFnEV5QvG2BBUFyf9Tn87hmjEqJWky7M', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
bot.on('ready', () => {
    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 900000);
});
dbl.getStats("523375452669083655").then(stats => {
    console.log(stats) // {"server_count":2,"shards":[]}
});
dbl.getBot("523375452669083655").then(bot => {
    console.log(bot.username)
});
dbl.getUser("519861424017768451").then(user => {
    console.log(user.username) 
});
dbl.isWeekend().then(weekend => {
    if (weekend) console.log("Woo! Multiplier time!")
});

bot.login(`NTIzMzc1NDUyNjY5MDgzNjU1.XPUsdw.OIhzNNI4PsQmSlMbIV6dsRP_zjw`);

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  
  });
});
bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`nb.| Look Gamers!` , {type: "WATCHING"});

});

//bot.on('ready', () => {
   // bot.user.setStatus('available')
    //bot.user.setPresence({
      //  game: {
        //    name: ` ${guild.memberCount} Members :D`,
          //  type: "watching",
            //url:"https://www.twitch.tv/monstercat"
        //}
    //});
//});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
// }

});
bot.on('channelCreate', async channel => {

  console.log(`${channel.name} has been created.`);

if (channel.type != 'text') return;
  let sChannel = channel.guild.channels.find(ch => ch.name === 'mod-log');
  sChannel.send(`The channel ${channel} has been created`);

});
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'mod-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} joined the Server`);
});
bot.on('guildMemberremove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'mod-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} left the Server`);
});
 /*dbl.on('posted', () => {
  console.log('Server count posted!');
})*/ 
bot.on('guildBanAdd', function(guild, user) {

    //log to console
    console.log('[' + guild.name + '][BAN] ' + user.username + '#' + user.discriminator);
    console.log(` Banned By ${message.author.username}`);
    //post in the guild's log channel
    var log = guild.channels.find(ch => ch.name === 'mod-log');
    if (log != null)
        log.sendMessage('**[Banned]** ' + user);

});

//user has been unbanned
bot.on('guildBanRemove', function(guild, user) {

    //log to console
    console.log('[' + guild.name + '][UNBAN] ' + user.username + '#' + user.discriminator);

    //post in the guild's log channel
    var log = guild.channels.find(ch => ch.name === 'mod-log');
    if (log != null)
        log.sendMessage('**[Unbanned]** ' + user);

});
