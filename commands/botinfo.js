const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Watching", `${bot.guilds.size} Guilds`)
    .setDescription(`[Our Website](https://illusionco.me) \n [Vote Here](https://discordbots.org/bot/523375452669083655)`);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"bi"
}
