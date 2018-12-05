const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  let prefix = botconfig.prefix;
if (!message.content.startsWith(prefix)) return;

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You Don't have MANAGE_MEMBERS Permission.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Can't find That User");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.help = {
  name: "warnlevel"
}
