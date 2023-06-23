import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'deferreply',
	description: 'deferReply a message',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		await interaction.deferReply({});
		interaction.editReply({ content: 'deferReply success' });
	}
});