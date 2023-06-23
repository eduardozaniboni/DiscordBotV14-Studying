import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'edit',
	description: 'edit a message',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		await interaction.reply({ content: 'reply success' });
		interaction.editReply({ content: 'editReply success' });
	}
});