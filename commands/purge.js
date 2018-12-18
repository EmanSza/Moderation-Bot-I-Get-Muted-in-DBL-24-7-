const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  let prefix = botconfig.prefix;
if (!message.content.startsWith(prefix)) return;

  const deleteCount = parseInt(args[0], 10);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You Do Not Have MANAGE_MESSAGES Permmission");
    if (!args[0] || args[0 == "help"]) return message.reply(`Please Usage:nb.purge "`);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete.");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
  let purgeEmbed = new Discord.RichEmbed()
    .setAuthor("♻️ Action | Purge")
    .setColor("RANDOM")
    .addField("Executor", `<@${message.author.id}>`)
    .addField("Purge", `${args[0]}`)
    .addField("Deleted", `${args[0]}`)
    .setFooter("Bot Version 1.0.2", bot.user.displayAvatarURL);

    let purgeChannel = message.guild.channels.find(`name`, "mod-log");
    if(!purgeChannel) return message.channel.send("Can't find mod-log channel.");

    purgeChannel.send(purgeEmbed);

  }
  module.exports.help = {
    name: "purge",
    category: "moderation"
}
