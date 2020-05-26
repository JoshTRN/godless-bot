import { dirname, join } from 'path';
import { existsSync } from 'fs';

module.exports = {
	name: `play`,
	aliases: ['p'],
	run: (bot, msg, args) => {

		const vc = msg.member.voice.channel;

		if (!vc) {
			return;
		}

		const [user, sound] = args;
		const baseDir = dirname(process.mainModule.filename)
		const file = join(baseDir, `/sounds/${user}/${sound}.mp3`);
		
		if (!existsSync(file)) {
			console.log('could not find file')
			return;
		}

		playFile(vc, file)

		async function playFile(vc, file) {
			const connection = await vc.join()
			const dispatcher = connection.play(file);
			dispatcher.on('finish', () => {
				vc.leave();
			});
		}
	}
}