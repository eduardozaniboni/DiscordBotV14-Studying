import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'manegement',
	description: 'server manegement',
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: 'members',
			description: 'manegement members',
			type: ApplicationCommandOptionType.SubcommandGroup,
			options: [
				{
					name: 'kick',
					description: 'kick a member',
					type: ApplicationCommandOptionType.Subcommand,
					options: [
						{
							name: 'member',
							description: 'member',
							type: ApplicationCommandOptionType.User,
							required: true
						},
					]
				},
				{
					name: 'ban',
					description: 'ban a member',
					type: ApplicationCommandOptionType.Subcommand,
					options: [
						{
							name: 'member',
							description: 'member',
							type: ApplicationCommandOptionType.User,
							required: true
						}
					]
				}
			]
		},
		{
			name: 'roles',
			description: 'manegement roles',
			type: ApplicationCommandOptionType.SubcommandGroup,
			options: [
				{
					name: 'add',
					description: 'add new role',
					type: ApplicationCommandOptionType.Subcommand,
					options: [
						{
							name: 'name',
							description: 'role name',
							type: ApplicationCommandOptionType.String
						}
					]
				}
			]
		}
	],

	run({ interaction, options }) {
    
		const subCommandGroup = options.getSubcommandGroup();

		switch (subCommandGroup) {
			case 'members': {
				const subCommand = options.getSubcommand();

				let content = '';

				switch (subCommand) {
					case 'kick': {
						content = 'kick';
						break;
					}

					case 'ban': {
						content = 'ban';
						break;
					}

				}

				interaction.reply({ content });

				break;
			}

			case 'roles': {
				break;
			}

			case 'channels': {
				break;
			}

			default:
				break;
		}
	}
});