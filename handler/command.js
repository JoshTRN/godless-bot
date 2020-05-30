import { readdirSync } from 'fs'
import ascii from 'ascii-table'
const table = new ascii().setHeading('Command', 'Load Status')

module.exports = (bot) => {

	readdirSync('./commands/').forEach(dir => {
		const commands = readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'))

		for (let file of commands) {
			const commandFile = require(`../commands/${dir}/${file}`)

			if (commandFile.name) {
				bot.commands.set(commandFile.name, commandFile)
				table.addRow(file, '✅')
			} else {
				table.addRow(file, '❌ => file missing.')
				continue
			}

			if (commandFile.aliases && Array.isArray(commandFile.aliases)) 
				commandFile.aliases.forEach(alias => bot.aliases.set(alias, commandFile.name))
		}
	})
	console.log(table.toString())
}