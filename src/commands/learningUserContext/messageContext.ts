import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'Message',
	type: ApplicationCommandType.Message,

	run({ interaction }) {
		if (!interaction.isMessageContextMenuCommand()) return;

		const message = interaction.targetMessage;

		interaction.reply({ content: `This message say ${message}` });
	}
});