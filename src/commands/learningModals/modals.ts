import { ActionRowBuilder, ApplicationCommandType, Collection, ModalBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'rpg-form',
	description: 'Application form',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		const modal = new ModalBuilder({
			customId: 'rpg-form',
			title: 'Form for RPG'
		});

		const playerNameInput = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'player-name',
					label: 'Nome do Jogador',
					placeholder: 'Ex.: José Roberto de Souza',
					style: TextInputStyle.Short
				})
			]
		});

		const playerAgeInput = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'player-age',
					label: 'Idade do Jogador',
					placeholder: 'Ex.: 18',
					style: TextInputStyle.Short
				})
			]
		});

		const characterNameInput = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'character-name',
					label: 'Nome do Personagem',
					placeholder: 'Ex.: Gunnister',
					style: TextInputStyle.Short
				})
			]
		});

		const characterStory = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'character-story',
					label: 'História do Personagem',
					placeholder: 'Ex.: "Era uma vez um feiticeiro medieval..."',
					style: TextInputStyle.Paragraph
				})
			]
		});

		modal.setComponents(
			playerNameInput, 
			playerAgeInput, 
			characterNameInput, 
			characterStory
		);

		await interaction.showModal(modal);
	},

	modals: new Collection([
		['rpg-form', (modalInteraction) => {
			const { fields } = modalInteraction;
			const playerName = fields.getTextInputValue('player-name');
			const playerAge = fields.getTextInputValue('player-age');
			const characterName = fields.getTextInputValue('character-name');
			const characterStory = fields.getTextInputValue('character-story');

			modalInteraction.reply({
				ephemeral: true,
				content: `Seu formulário foi enviado!\n\nDados do Jogador:\n- Nome do Jogador: ${playerName}\n\n- Idade do Jogador: ${playerAge}\n\n- Nome do Personagem: ${characterName}\n\n- História do Personagem: \n${characterStory}`
			});
		}]
	])
});