import { ActionRowBuilder, ApplicationCommandType, Collection, StringSelectMenuBuilder } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'select',
	description: 'select a subject',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		const subjectMenu = new StringSelectMenuBuilder({
			customId: 'subject',
			placeholder: 'Choose a subject (max: 3)',
			minValues: 1,
			maxValues: 3,
			options: [
				{
					label: 'Mathematics',
					value: 'mathematics',
					emoji: '📕',
					description: 'The subject: Mathematics'
				},
				{
					label: 'Physical',
					value: 'physical',
					emoji: '📘',
					description: 'The subject: Physical'
				},
				{
					label: 'Chemical',
					value: 'chemical',
					emoji: '📙',
					description: 'The subject: Chemical'
				},
				{
					label: 'Biology',
					value: 'biology',
					emoji: '📗',
					description: 'The subject: Biology'
				}
			]
		});

		const row = new ActionRowBuilder<StringSelectMenuBuilder>({
			components: [subjectMenu]
		});

		interaction.reply({
			components: [row]
		});
	}, 

	selects: new Collection([
		['subject', async (selectInteraction) => {
			const { user } = selectInteraction;
			const subjects  = selectInteraction.values.map(subject => `${subject}`);
			
			selectInteraction.update({
				content: `The user ${user.username} selected ${subjects.join(', ')}`,
				components: []
			});
		}]
	])
});