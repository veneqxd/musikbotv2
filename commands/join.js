const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "join",
        aliases: ["join"],
        description: "Join The Voice Channel!",
        usage: "Join",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);

        try {
            let channel = message.member.voice.channel;
            if(message.member.voicechannel)
            await message.guild.me.voiceconnection();
        } catch (error) {
            await message.guild.meember.voicechannel.join(message.guild.me.id);
            return sendError("Trying To Join The Voice Channel...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Join Voice Channel", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Joined The Voice Channel.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Join The Voice Channel :D"));
    },
};
