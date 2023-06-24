import { ActionRowBuilder, ApplicationCommandType, Collection, ModalBuilder, StringSelectMenuBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'rpg-register',
	description: 'Faça seu registro para jogar o RPG.',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		const rpgModal = new ModalBuilder({
			customId: 'rpg-modal',
			title: 'Registro de RPG'
		});

		const playerNameInput = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'player-name',
					label: 'Nome Completo',
					placeholder: 'Ex.: Eduardo Zaniboni',
					style: TextInputStyle.Short
				})
			]      
		});

		const playerAgeInput = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'player-age',
					label: 'Idade',
					placeholder: 'Ex.: 18',
					style: TextInputStyle.Short
				})
			]
		});

		const characterNameInput = new ActionRowBuilder<TextInputBuilder>({
			components: [
				new TextInputBuilder({
					customId: 'character-name',
					label: 'Nome Completo do Personagem',
					placeholder: 'Ex.: Dimitry Merlusc Forc',
					style: TextInputStyle.Short
				})
			]
		});

		const classesSelect = new StringSelectMenuBuilder({
			customId: 'classes',
			placeholder: 'Qual será sua classe?',
			minValues: 1,
			maxValues: 1,
			options: [
				{
					label: 'Guerreiro',
					value: 'guerreiro',
					description: 'Um guerreiro que utiliza espada e escudo'
				},
				{
					label: 'Mago',
					value: 'mago',
					description: 'Um mago que utiliza cajado e livro'
				},
				{
					label: 'Arqueiro',
					value: 'arqueiro',
					description: 'Um arqueiro que utiliza arco e aljava'
				}
			]
		});

		const classesRow = new ActionRowBuilder<StringSelectMenuBuilder>({
			components: [classesSelect]
		});

		rpgModal.addComponents(
			playerNameInput,
			playerAgeInput,
			characterNameInput,
		);

		interaction.showModal(rpgModal);
	},
   
	modals: new Collection([
		['rpg-modal', (modalInteraction) => {

			modalInteraction.reply({
				content: 'Modal deu certo'
			});
		}]
	])
});