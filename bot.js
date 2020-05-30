import { Client, Collection } from 'discord.js';
require('dotenv').config();

const bot = new Client();
bot.blackbelts = new Collection;
bot.commands = new Collection;
bot.aliases = new Collection;
bot.commandCache = new Collection;

['command', 'event'].forEach(handler => require(`./handler/${handler}`)(bot));

bot.login(process.env.BOT_TOKEN);