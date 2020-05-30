import { readdirSync } from 'fs'
import ascii from 'ascii-table'
const table = new ascii().setHeading('Event', 'Load Status')

module.exports = (bot) => {

	readdirSync('./events/').forEach(file => {

		const { name, run } = require(`../events/${file}`)

		if (name) {
			bot.on(name, run.bind(null, bot))
			table.addRow(name, '✅')
		} else {
			table.addRow(file, '❌ => file missing??')
		} 
	})
	console.log(table.toString())
}