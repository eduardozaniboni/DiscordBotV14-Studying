import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'followup',
	description: 'follow a message',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		await interaction.reply({ content: 'reply success' });
		interaction.followUp({ content: 'followUp success' });
	}
});