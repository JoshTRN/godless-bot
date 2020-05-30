module.exports = {
	name: 'message',
	run: async (bot, msg) => {

		const commandChannel = '714659786691444818'
		const blackbelt = bot.blackbelts.get(msg.author.id)

		if (blackbelt) msg.react('702013001435447297')
		
		const prefix = 'c!'
		
		if (msg.channel.id !== commandChannel) return
		if (msg.author.bot) return
		if (!msg.guild) return
		if (!msg.member) msg.member = await msg.guild.fetchMember(msg)

		const cachedPlayCommandUser = bot.commandCache.get('currentUser')
		const cachedPlayCommand = bot.commandCache.get(parseInt(msg.content))
		
		if (cachedPlayCommand && cachedPlayCommandUser) {
			const playCommand = bot.commands.get('play')
			playCommand.run(bot, msg, [cachedPlayCommandUser, cachedPlayCommand])
			return
		}

		const args = msg.content.slice(prefix.length).trim().split(/ +/g)
		const cmd = args.shift().toLowerCase()

		if (!cmd.length) return

		const command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))

		if (command) command.run(bot, msg, args)
	}
}