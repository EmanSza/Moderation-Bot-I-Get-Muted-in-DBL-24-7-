//519861424017768451

const discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args, color) => {
    let prefix = botconfig.prefix;
    if (message.author.id !== '519861424017768451' && message.author.id !== '519861424017768451') return;
if (!message.content.startsWith(prefix)) return;
  if(args <=0) return msg.reply(`Say what ?`);
  let content = args.join(" ");
  let embed = new discord.RichEmbed().setTitle(content).setColor("0x3d3d29");
  msg.channel.send(embed)
    
}

exports.help = {
  name:"say"
}
