import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'Mention',
	type: ApplicationCommandType.User,

	run({ interaction }) {
		if (!interaction.isUserContextMenuCommand()) return;

		const mention = interaction.targetMember;

		interaction.reply({ content: `User ${interaction.user} mentioned ${mention}` });
	}
});