import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'deletereply',
	description: 'delete a message',
	type: ApplicationCommandType.ChatInput,

	run({ interaction }) {
		interaction.reply({ content: 'this message will be deleted in some seconds' });
		setTimeout(() => {
			interaction.deleteReply();
		}, 4000);
	}
});