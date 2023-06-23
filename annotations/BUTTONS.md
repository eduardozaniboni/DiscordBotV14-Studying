# Criando botões
	- Os botões são componentes de mensagens, então eles precisam ser enviados em alguma mensagem ou resposta de comando, ou ainda em qualquer tipo de resposta de interação

  ### Definir uma constante do ButtonBuilder
    - customId (sempre diferente dos demais botões)
    - label e emoji, ou apenas um dos dois
    - style

    ```typescript

    const button = new ButtonBuilder({
      customId: 'test-button',
      label: "Clique aqui",
      style: ButtonStyle.Primary
    })

    ```

  ### Definir uma constante do ActionRowBuilder
    - Passar o tipo de componente que terá nesse ActionRowBuilder
    - propriedade: `components` e passar um array de botões
    - pode receber até 5 botões

    ```typescript

    custom row = new ActionRowBuilder<ButtonBuilder>({ components: [button] })
    
    ```
    - Também é possível criar diretamente do ActionRowBuilder dessa forma aqui:

    ```typescript

    custom row = new ActionRowBuilder<ButtonBuilder>({
      components: [
        new ButtonBuilder({
          customId: 'primary-button',
          label: 'Clique aqui!',
          style: ButtonStyle.Primary
        }),
        new ButtonBuilder({
          customId: 'sucess-button',
          label: 'Clique aqui!',
          emoji: '✅',
          style: ButtonStyle.Sucess
        }),
        new ButtonBuilder({
          customId: 'danger-button',
          emoji: '❌'
          style: ButtonStyle.Danger
        }),
        new ButtonBuilder({
          customId: 'secondary-button',
          label: 'Clique aqui!',
          style: ButtonStyle.Secondary
        })
      ]
    })

    ```

  ### Criando botão com link
    ```typescript

    const row = new ActionRowBuilder<ButtonBuilder>({
      components: [
        new ButtonBuilder({
          url: 'https://eduardozaniboni.com',
          label: 'Portfólio',
          emoji: '🪪',
          style: ButtonStyle.Link
        })
      ]
    })

    ```

  ### Exemplo: respondendo com botões

  ```typescript

  export default new Command({
    name: 'sorteio',
    description: 'entra no sorteio',
    type: ApplicationCommandType.ChatInput,

    async run({ interaction }) {
      const givewayButton = new ButtonBuilder({
        customId: 'giveway-button',
        label: 'Participar',
        emoji: '📢',
        style: ButtonStyle.Primary
      })

      const row = new ActionRowBuilder<ButtonBuilder>({ components: [givewayButton] })

      interaction.reply({
        content: 'Clique no botão para participar do sorteio!',
        components: [row] // passando meu button
      })
    },

    buttons: new Collection([
      ['giveway-button', async (buttonInteraction) => {

        const { user } = buttonInteraction

        buttonInteraction.reply({ content: `✅ - ${user.username} entrou no sorteio!` })
      }]
    ])
  })

  ```