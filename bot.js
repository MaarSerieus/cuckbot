var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Op");
    setInterval(function(){
        setTimeout(function(){
        bot.user.setGame("with your hoe.");
        }, 15 * 1000);
        setTimeout(function(){
        bot.user.setGame("with this shit, fuck off.");
        }, 30 * 1000);
        setTimeout(function(){
        bot.user.setGame("with a hot chick.");
        }, 45 * 1000);
        setTimeout(function(){
        bot.user.setGame("with your nan.");
        }, 60 * 1000);
    }, 75 * 1000);
});

bot.on("guildMemberAdd", (user) => {
    try {
    bot.guilds.get("397534156411895819").send(`Fuck you ${user}`);
    } catch(e) {
        console.log(`${e}`);
    }
});

bot.login(process.env.TOKEN);
