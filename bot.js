import { Client, Collection } from 'discord.js';
require('dotenv').config();

const bot = new Client();
bot.commands = new Collection;

['command', 'event'].forEach(handler => require(`./handler/${handler}`)(bot));

bot.login(process.env.BOT_TOKEN);