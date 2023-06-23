import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'buttons',
	description: 'Select a subject',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		const mathematicsButton = new ButtonBuilder({
			customId: 'mathematics',
			label: 'Mathematics',
			emoji: '📕',
			style: ButtonStyle.Primary
		});
		
		const physicalButton = new ButtonBuilder({
			customId: 'physical',
			label: 'Physical',
			emoji: '📘',
			style: ButtonStyle.Primary
		});

		const chemicalButton = new ButtonBuilder({
			customId: 'chemical',
			label: 'Chemical',
			emoji: '📙',
			style: ButtonStyle.Primary
		});
		
		const biologyButton = new ButtonBuilder({
			customId: 'biology',
			label: 'Biology',
			emoji: '📗',
			style: ButtonStyle.Primary
		});

		const row = new ActionRowBuilder<ButtonBuilder>({ 
			components: [
				mathematicsButton, 
				physicalButton, 
				chemicalButton, 
				biologyButton
			]
		});

		interaction.reply({
			content: 'Click the button to select a subject',
			components: [row]
		});
	},

	buttons: new Collection([
		['mathematics', async (buttonInteraction) => {
			const { user, component } = buttonInteraction;

			buttonInteraction.update({
				content: `The user ${user.username} selected the subject: ${component.label}!`,
				components: []
			});
		}],

		['physical', async (buttonInteraction) => {
			const { user, component } = buttonInteraction;

			buttonInteraction.update({
				content: `The user ${user.username} selected the subject: ${component.label}!`,
				components: []
			});
		}],

		['chemical', async (buttonInteraction) => {
			const { user, component } = buttonInteraction;

			buttonInteraction.update({
				content: `The user ${user.username} selected the subject: ${component.label}!`,
				components: []
			});
		}],

		['biology', async (buttonInteraction) => {
			const { user, component } = buttonInteraction;

			buttonInteraction.update({
				content: `The user ${user.username} selected the subject: ${component.label}!`,
				components: []
			});
		}]
	]),
});