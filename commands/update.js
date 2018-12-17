exports.run = async (client, message, args, level) => {
    const token = `process.env.token`
    if (message.author.id == "261483656411873280")
        message.channel.send('``Restarting The Bot``')
        .then(message => client.destroy())
        .then(() => client.login(process.env.token))
       message.channel.send('...')
       message.channel.send(`You Are Not The Owner`)
        
        
        
}






exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "Dev"
};

exports.help = {
    name: "restart",
    category: "Developer",
    description: "Reboot command to reboot the bot.",
    usage: "restart"
}
