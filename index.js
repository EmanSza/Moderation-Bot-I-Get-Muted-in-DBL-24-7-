const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
//const dbl = new DBL('Your discordbots.org token', client);

bot.login(NTI4NzUxNDMyNzc4NjQ1NTA1.Dwm1xQ.w_vDsMbVvxE7CIKGPmACWAvdTVc);

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
  bot.user.setActivity(` ${bot.users.size} Members :D` , {type: "WATCHING"});

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
