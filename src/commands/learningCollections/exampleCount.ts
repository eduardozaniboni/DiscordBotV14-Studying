import { ApplicationCommandType, ChannelType, EmbedBuilder } from 'discord.js';
import { Command } from '../../structs/types/Command';
import embed from '../learningEmbeds/embed';

export default new Command({
	name: 'contagem',
	description: 'Contagem de algumas áreas do servidor',
	type: ApplicationCommandType.ChatInput,

	async run({ interaction }) {

		if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;
		
		const { guild } = interaction;

		const members = guild.members.cache;
		const onlineMembers = members.filter(m => m.presence?.status == 'online');
		const dndMembers = members.filter(m => m.presence?.status == 'dnd');

		const roles = guild.roles.cache;
		const inUseRoles = roles.filter(r => r.members.size > 0);
		const unUseRoles = roles.difference(inUseRoles);

		const channels = guild.channels.cache;
		const textChannels = channels.filter(c => c.type == ChannelType.GuildText);
		const voiceChannels = channels.filter(c => c.type == ChannelType.GuildVoice);

		const embed = new EmbedBuilder({
			description: `> ${guild.name}
      **Membros**
      - Online: ${onlineMembers.size}
      - Ocupados: ${dndMembers.size}
      - Total: ${members.size}
      
      **Cargos** 
      - Atribuitos: ${inUseRoles.size}
      - Não atribuitos: ${unUseRoles.size}
      - Total: ${roles.size}
      
      **Canais**
      - Texto: ${textChannels.size}
      - Voz: ${voiceChannels.size}
      `
		}).setColor('DarkNavy');

		interaction.reply({
			embeds: [embed]
		});
	}
});