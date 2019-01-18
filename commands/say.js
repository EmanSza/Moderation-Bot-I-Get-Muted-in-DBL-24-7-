//519861424017768451

const discord = require("discord.js")

exports.run = (bot,msg,args) =>{
  msg.delete();
  if(msg.author.id !== "519861424017768451") return msg.reply('Owner only');
  if(args <=0) return msg.reply(`Say what ?`);
  let content = args.join(" ");
  let embed = new discord.RichEmbed().setTitle(content).setColor("0x3d3d29");
  msg.channel.send(embed)
    
}

exports.help = {
  name:"say"
}
