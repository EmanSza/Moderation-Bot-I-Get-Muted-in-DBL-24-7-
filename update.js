exports.run = async (client, message, args, level) => {
    const token = `process.env.token`
    if (message.author.id == "261483656411873280")
        message.channel.send('``Restarting The Bot``')
        .then(message => client.destroy())
        .then(() => client.login(process.env.token))
       message.channel.send('...')
       message.channel.send(`You Are Not The Owner`)
        
        
        
}


// If you want more commands, upvote this! ;)



exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "Dev"
};

exports.help = {
    name: "restart",
    category: "Developper",
    description: "Reboot command to reboot the bot.",
    usage: "restart"
}
