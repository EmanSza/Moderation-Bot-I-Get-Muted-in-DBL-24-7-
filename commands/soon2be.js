const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Updates", "Future Update List")
        .addField("Number 1","Update Bot code from v11 to v12")
        .addField("Number 2", "Make bot more simple to use")
        .setColor('RANDOM');
      

    message.channel.send(botembed);
}

module.exports.help = {
    name: "updates"
}
