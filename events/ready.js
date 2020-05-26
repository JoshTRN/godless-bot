module.exports = {
    name: 'ready',
    run: (bot, err) => {
		console.log(`Logged in as ${bot.user.tag}!`);
		console.log(`at ${bot.readyAt}`);
    }
}