const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Command Error", "Error")
        .addField("Meme Command Is Currently Down", "Please Join our Support Server For More Information")
    .addField("Offical Support Server", "https://discord.gg/9JbKgUm")
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
