import { ApplicationCommandType, EmbedBuilder } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'embed',
	description: 'this is a embed',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {
		
		const embed = new EmbedBuilder()
			.setTitle('RPG')
			.setDescription('Ficha do Personagem')
			.setColor('Blurple')
			.setFields(
				[
					{ name: '\n', value: '\n' }, // line-space
					{ name: 'Nome', value: 'Gunnister Frondelier ', inline: true },
					{ name: 'Classe', value: 'Mago', inline: true },
					{ name: 'Level', value: '1', inline: true },
					{ name: '\n', value: '\n' }, // line-space
					{ name: 'Exp', value: '0/500', inline: true },
					{ name: '\n', value: '\n' }, // line-space
					{ name: '\nInventário', value: '\n' },
					{ name: '\n', value: '- Espada' },
					{ name: '\n', value: '- Escudo' },
					{ name: '\n', value: '- Poção' },
					{ name: '\n', value: '- Pedra mágica' },
				],
			)
			.setThumbnail(interaction.user.avatarURL());

		await interaction.deferReply({
			ephemeral: true
		});

		interaction.editReply({
			embeds: [embed]
		});
	}
});