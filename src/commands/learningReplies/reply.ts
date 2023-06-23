import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'reply',
	description: 'answer a message',
	type: ApplicationCommandType.ChatInput,
	
	run( { interaction }) {
		interaction.reply({ content: 'reply success' });
	}
});