const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Updates", "Future Update List")
        .addField("Number 1"," Planning To Add GLobal Kick Mute Logs")
        .addField("Number 2", "Plan on Adding Anti Spam To The bot")
        .setColor('RANDOM');
      

    message.channel.send(botembed);
}

module.exports.help = {
    name: "updates"
}
