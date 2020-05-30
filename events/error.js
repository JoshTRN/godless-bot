module.exports = {
	name: 'error',
	run: (bot, err) => {
		console.log('The bot registered the following error:')
		console.log(err.message)
	}
}