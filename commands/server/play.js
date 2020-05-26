import { dirname, join } from 'path';
import { existsSync } from 'fs';

module.exports = {
	name: `play`,
	aliases: ['p'],
	run: (bot, msg, args) => {

		const vc = msg.member.voice.channel;
		const [user, sound] = args;
		const baseDir = dirname(process.mainModule.filename);
		const file = join(baseDir, `/sounds/${user}/${sound}.mp3`);

		if (!vc ||!existsSync(file)) return;

		const connection = await vc.join();
		const dispatcher = connection.play(file);
		dispatcher.on('finish', () => {
			vc.leave();
			bot.destroy();
			bot.login(process.env.BOT_TOKEN);
		});

	}
}