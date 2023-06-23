# Criando botões
  - Os menus são componentes de seleção, então eles precisam ser enviados em alguma mensagem ou resposta de comando, ou ainda em qualquer tipo de resposta de interação

  ### Definir uma constante do StringSelectMenuBuilder
    - customId (sempre diferente dos demais menus)
    - placeholder (descrição do menu)
    - minValues
    - maxValues
    - disabled
    - options (opções para seleção)
      - é possível colocar alguns propriedades:
        label
        value
        emoji (predefinido do ALT + .) ou emoji: {id: (id de um emoji custom)}
        description
        - exemplo: 
          options: [
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' },
            { label: 'label3', value: 'value3' },
            { label: 'label4', value: 'value4' },
          ]

    ```typescript

    const select = new StringSelectMenuBuilder({
      customId: 'notify-select',
      placeholder: "Selecione um cargo de notificação",
      options: [
            { 
              label: 'Novos vídeos', 
              value: 'videos' 
            },
            { 
              label: 'Lives', 
              value: 'streams' 
            },
            { 
              label: 'Novidades no servidor', 
              value: 'server' 
            },
            { 
              label: 'Eventos', 
              value: 'events' 
            },
          ]
    })

    ```

  ### Definir uma constante do ActionRowBuilder
    - Passa o tipo de componente que terá nesse ActionRowBuilder
    - propriedades `components` e passar o menu
    - pode receber somente 1 menu

    ```typescript

    custom row = new ActionRowBuilder<StringSelectMenuBuilder>({ components: [select] })
    
    ```
    - Também é possível criar diretamente do ActionRowBuilder dessa forma aqui:

    ```typescript

    custom row = new ActionRowBuilder<SelectBuilder>({
      components: [
        new StringSelectMenuBuilder({
          customId: 'notify-select',
          placeholder: "Selecione um cargo de notificação",
          options: [
            { 
              label: 'Novos vídeos', 
              value: 'videos' 
            },
            { 
              label: 'Lives', 
              value: 'streams' 
            },
            { 
              label: 'Novidades no servidor', 
              value: 'server' 
            },
            { 
              label: 'Eventos', 
              value: 'events' 
            },
          ]
        })
      ]
    })

    ```

  ### Exemplo: respondendo com menus

  ```typescript

  export default new Command({
    name: 'materia',
    description: 'Selecione uma matéria escolar',
    type: ApplicationCommandType.ChatInput,

    async run({ interaction }) {
      const menuMateria = new StringSelectMenuBuilder({
        customId: 'select-materia',
        placeholder: 'Qual matéria você mais gosta? (Máximo 3)',
        minValues: 1,
        maxValues: 3,
        options: [
          { label: 'Matemática', value: 'mat', emoji: '📕', description: 'Define a matéria de matemática como sua preferida' },
          { label: 'Física', value: 'fis' emoji: '📗', description: 'Define a matéria de física como sua preferida' },
          { label: 'Química', value: 'qui' emoji: '📘', description: 'Define a matéria de química como sua preferida' },
          { label: 'Biologia', value: 'bio' emoji: '📙', description: 'Define a matéria de biologia como sua preferida' },
        ]
      })

      const row = new ActionRowBuilder<StringSelectMenuBuilder>({ components: [menuMateria] })

      interaction.reply({
        components: [row] // passando meu button
      })
    },

    selects: new Collection([
      ['select-materia', async (selectInteraction) => {

        const { user } = selectInteraction
        const values = selectInteraction.values.map(value => `> ${value}`)

        // row.components[0].setDisabled(true) -> desabilita o menu após a seleção

        selectInteraction.update({ 
          content: `${user.username} selecionou ${values.join('\n')} como sua(s) matéria(s) preferida(s).`
          components: [],
          // components: [row]
        })
      }]
    ])
  })

  ```

 ## SelectMenu de Canais
 
 ### Definir uma constante do ChannelSelectMenuBuilder
  - Propriedades:
    - customId
    - placeholder
    - channelTypes: [] (array de canais)
      - exemplo: 
        channelTypes: [ChannelType.GuildText] (canais de texto)

  ### Exemplo: 

 ```typescript
 
 export default new Command({
  name: 'canais',
  description: 'descrição de canais',
  type: ApplicationCommandType.ChatInput,

  async run({ interaction }) {
    const row = new ActionRowBuilder<StringSelectMenuBuilder>({
      components: [
        new ChannelSelectMenuBuilder({
          customId: 'select-channel',
          placeholder: 'Selecione um canal'
          channelTypes: [ChannelType.GuildText]
        })
      ]
    })

    interaction.reply({ components: [row] }) 
  },

  selects: new Collection([
    ['select-channel', async (selectInteraction) => {

      const { user } = selectInteraction
      const channelId = selectInteraction.values[0]
      const channel = selectInteraction.guild?.channels.cache.get(channelId)

      selectInteraction.update({
        content: `${channel}`
        components: [row],
      })
    }]
  ])
 })

 ```

  ## SelectMenu de Cargos

  ### Definir uma constante do RoleSelectMenuBuilder
  - Propriedades:
    - customId
    - placeholder

  ### Exemplo: 

 ```typescript
 
 export default new Command({
  name: 'cargos',
  description: 'descrição de cargos',
  type: ApplicationCommandType.ChatInput,

  async run({ interaction }) {
    const row = new ActionRowBuilder<StringSelectMenuBuilder>({
      components: [
        new RoleSelectMenuBuilder({
          customId: 'select-roles',
          placeholder: 'Select a role'
        })
      ]
    })

    interaction.reply({ components: [row] }) 
  },

  selects: new Collection([
    ['select-roles', async (selectInteraction) => {

      const { user } = selectInteraction
      const roleId = selectInteraction.values[0]
      const role = selectInteraction.guild?.roles.cache.get(roleId)

      selectInteraction.update({
        content: `${role}`
        components: [row],
      })
    }]
  ])
 })

 ```

  ## SelectMenu de Usuários

  ### Definir uma constante do UserSelectMenuBuilder
  - Propriedades:
    - customId
    - placeholder

  ### Exemplo: 

 ```typescript
 
 export default new Command({
  name: 'users',
  description: 'descrição de usuários',
  type: ApplicationCommandType.ChatInput,

  async run({ interaction }) {
    const row = new ActionRowBuilder<StringSelectMenuBuilder>({
      components: [
        new UserSelectMenuBuilder({
          customId: 'select-users',
          placeholder: 'Select a user'
        })
      ]
    })

    interaction.reply({ components: [row] }) 
  },

  selects: new Collection([
    ['select-users', async (selectInteraction) => {

      const { user } = selectInteraction
      const userId = selectInteraction.values[0]
      const member = selectInteraction.guild?.members.cache.get(userId)

      selectInteraction.update({
        content: `${member}`
        components: [row],
      })
    }]
  ])
 })

 ```