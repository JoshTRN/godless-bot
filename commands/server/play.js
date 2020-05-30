import { dirname, join } from 'path';
import { existsSync, readdirSync, } from 'fs';

module.exports = {
	name: `play`,
	aliases: ['p'],
	run: async (bot, msg, args) => {

		const vc = msg.member.voiceChannel;
		const [user, sound] = args;
		const baseDir = dirname(process.mainModule.filename);

		if (user && !sound) {
			const userDirectory = join(baseDir, `/sounds/${user}`);
			const files = readdirSync(userDirectory);
			const fileNames = files.map(file => file.split('.')[0]);
			let commandOptions = '';

            for (let index in fileNames) {
                commandOptions += `${parseInt(index) + 1}: ${fileNames[index]}\n`;
            }
			msg.channel.send('Commands for ' + user + "\n```" + commandOptions + "```");
			return;
		}

		const file = join(baseDir, `/sounds/${user}/${sound}.mp3`);

		if (!vc ||!existsSync(file)) return;

		const connection = await vc.join();
		const dispatcher = connection.playFile(file);
		dispatcher.on('end', () => { vc.leave() });
	}
}