import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
  name: "ping",
  description: "reply with pong",
  type: ApplicationCommandType.ChatInput,
  async run({ interaction }) {
    await interaction.reply({ content: "pong" })
  },
})