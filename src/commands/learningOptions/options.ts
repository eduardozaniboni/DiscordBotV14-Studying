import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'options',
	description: 'options on message',
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: 'text',
			description: 'text in options',
			type: ApplicationCommandOptionType.String,
			// required: true,
		}
	],

	run({ interaction, options }) {
		const text = options.getString('text'/* , true */);

		if (text) {
			interaction.reply({ content: `option success and your text is here: ${text}` });
		} else {
			interaction.reply({ content: 'you didn\'t say anything' });
		}
	}
});