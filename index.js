const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {
    console.log(bot.user.username + " Elindult!");

    let státus = [
        `${bot.guilds.cache.size} Szerver | !help`,
        `Fejlesztés alatt!`
    ]

    setInterval(function() {
        let status = státus[Math.floor(Math.random()* státus.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = config.prefix;

    if(cmd === `${prefix}help`) {
        message.channel.send("*Fejelsztés alatt!*")
    }

    if(cmd === `${prefix}embed`) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Title")
        .setColor("RANDOM")
        .setDescription("Description")
        .setTimestamp()
        .setFooter("Tutorial", message.author.displayAvatarURL)

        message.channel.send(embed)
    }
})

bot.login(config.token);
