
const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let prefix = botconfig.prefix;
if (!message.content.startsWith(prefix)) return
    
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
    if (!bUser) return message.channel.send("Cant Find This User!")
    let breason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Dont Have BAN_MEMBER Permission)");
    if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("You Can't Ban This Member)");

    let banEmbed = new Discord.RichEmbed()
        .setDescription("Banned User")
        .setColor("#e56b00")
        .addField("Banned User", `${bUser} With ID ${bUser.id}`)
        .addField("In Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", breason);

    let banchannel = message.guild.channels.find(`name`, "mod-log");
    if (!banchannel) return message.channel.send("Cant Find mod-log");

    message.guild.member(bUser).ban(breason);
    banchannel.send(banEmbed);

}
module.exports.help = {
    name: "ban"
}
