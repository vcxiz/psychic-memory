/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'welcome-channel');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to **NicePlaysGames!**, ${member}. Check your DMs for required information.`);
  member.send({embed: {"title": '**Welcome to NicePlaysGames!**'; "description": '**This is what you need to know.**\n\n**GUIDELINES:**\n *Please note to read the rules, this is just the general guidelines.*\n1. Be kind.\n2. Be respectful\n3. Don't ragequit just because the server has high activity.\n**GIVEAWAYS:**\n We host giveaways often. We have a certain channel for it.\n**ANNOUNCEMENTS:**\n Read the announcements. Just in case something big happened.\n*Thanks for reading! Have a* **great** *time!*'; "color": 3447003}});
});

// Log our bot in
client.login(process.env.PIZZA_TOKEN);
