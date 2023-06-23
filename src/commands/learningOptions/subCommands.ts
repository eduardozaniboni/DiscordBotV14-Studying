import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'management',
	description: 'server management',
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: 'members',
			description: 'members management',
			type: ApplicationCommandOptionType.Subcommand,
			options: [
				{
					name: 'member',
					description: 'member management',
					type: ApplicationCommandOptionType.User,
					required: true
				}
			]
		},
		{
			name: 'channels',
			description: 'management channels',
			type: ApplicationCommandOptionType.Subcommand
		},
		{
			name: 'roles',
			description: 'management roles',
			type: ApplicationCommandOptionType.Subcommand
		}
	],
  
	run({ interaction, options }) {
		const mention = options.getMember('member');

		if (!mention) {
			interaction.reply({ content: 'Member unavailable' });
			return;
		}

		interaction.reply({ ephemeral: true, content: `You mentioned ${mention}` });
	}
});