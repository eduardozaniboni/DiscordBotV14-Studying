# Criando modais
  - Os modais são componentes que necessitam de `Inputs` para que o usuário consiga interagir. 
  - Os Inputs devem ficar dentro do ActionRows que ficam dentro do Modal. Um Modal pode ter até 5 ActionRow e cada ActionRow desse Modal só pode ter um componente de texto (text input).

  ### Definir uma constante do ModalBuilder
    - customId
    - title
    - components (pode ser feito a criação dos Inputs diretamente)

    ```typescript
    
    const modal = new ModalBuilder({
      customId: 'staff-form-modal',
      title: 'Formuário para staff'
    })

    ```

  ### Definir uma constante do ActionRowBuilder e Criando os Inputs de texto
    - Passar o tipo de componente que terá nesse ActionRowBuilder
    - Criar propriedade Components e passar as características do componente
      - TextInputBuilder:
        propriedades:
          - customId
          - label (nome do campo)
          - placeholder (descrição para acessibilidade do campo)
          - style (estilo do campo)
          - required (torna o campo obrigatório)
          - minLength (defini o valor mínimo de caracteres)
          - maxLength (defini o valor máximo de caracteres)
          - value (defini um valor padrão)

    ```typescript

    const input1 = new ActionRowBuilder<TextInputBuilder>({
      components: [
        new TextInputBuilder({
          customId: 'staff-form-name-input',
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          style: TextInputStyle.Short
        })
      ]
    })

    const input2 = new ActionRowBuilder<TextInputBuilder>({
      components: [
        new TextInputBuilder({
          customId: 'staff-form-age-input',
          label: 'Idade',
          placeholder: 'Digite sua idade',
          style: TextInputStyle.Short
        })
      ]
    })

    const input3 = new ActionRowBuilder<TextInputBuilder>({
      components: [
        new TextInputBuilder({
          customId: 'staff-form-about-input',
          label: 'Sobre você',
          placeholder: 'Escreva um pouco sobre você',
          style: TextInputStyle.Paragraph
        })
      ]
    })

    ```

  ### Como colocar o Input dentro do Modal

  ```typescript

  modal.setComponents(input1, input2, input3) // de acordo com a quantidade de inputs (máx 5)

  interaction.showModal(modal)
  
  ```
  
  ### Criando o ModalBuilder e os Inputs diretamente dentro do Modal

  ```typescript
  
  const modal = new ModalBuilder({
    customId: 'staff-form-modal',
    title: 'Formulário para staff',
    // Criação dos components do modal
    components: [
      new ActionRowBuilder<TextInputBuilder>({
        components: [
          new TextInputBuilder({
            customId: 'staff-form-name-input',
            label: 'Nome',
            placeholder: 'Digite seu nome completo',
            style: TextInputStyle.Short
          })
        ]
      }),

      new ActionRowBuilder<TextInputBuilder>({
        components: [
          new TextInputBuilder({
            customId: 'staff-form-age-input',
            label: 'Idade',
            placeholder: 'Digite sua idade',
            style: TextInputStyle.Short
          })
        ]
      }),

      new ActionRowBuilder<TextInputBuilder>({
        components: [
          new TextInputBuilder({
            customId: 'staff-form-about-input',
            label: 'Sobre você',
            placeholder: 'Escreva um pouco sobre você',
            style: TextInputStyle.Paragraph
          })
        ]
      })
    ]
  })
  
  interaction.showModal(modal)

  ```

  ### Criando tudo dentro do ShowModal, caso for usado apenas uma vez

  ```typescript
  
  interaction.showModal(
    new ModalBuilder({
      customId: 'staff-form-modal',
      title: 'Formulário para staff',
      // Criação dos components do modal
      components: [
        new ActionRowBuilder<TextInputBuilder>({
          components: [
            new TextInputBuilder({
              customId: 'staff-form-name-input',
              label: 'Nome',
              placeholder: 'Digite seu nome completo',
              style: TextInputStyle.Short
            })
          ]
        }),

        new ActionRowBuilder<TextInputBuilder>({
          components: [
            new TextInputBuilder({
              customId: 'staff-form-age-input',
              label: 'Idade',
              placeholder: 'Digite sua idade',
              style: TextInputStyle.Short
            })
          ]
        }),

        new ActionRowBuilder<TextInputBuilder>({
          components: [
            new TextInputBuilder({
              customId: 'staff-form-about-input',
              label: 'Sobre você',
              placeholder: 'Escreva um pouco sobre você',
              style: TextInputStyle.Paragraph
            })
          ]
        })
      ]
    })
  )

  ```

  ### Recebendo a resposta do Modal

    ### Primeira forma (Com tempo definido para responder)

    ```typescript

    const modalInteraction = interaction.awaitModalSubmit({
      time: 30_000, // tempo para responder
      filter: (i) => i.user.id === interaction.user.id
    }).catch(() => null)

    if (!modalInteraction) return;

    modalInteraction.reply({
      ephemeral: true,
      content: 'Seu formulário foi enviado!'
    })
    
    ```

    ### Segunda forma (Sem tempo definido para responder porém não recomendada com esse tipo de configuração de handler)
      - Deve ser feito dentro do arquivo index.ts

      ```typescript 
      
      client.on('interactionCreate', (interaction) => {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId !== 'staff-form-modal') return;

        interaction.reply({
          ephemeral: true,
          content: 'Seu formulário foi enviado!'
        })
      })

      ```

    ### Usando o handler do projeto (Sem tempo definido)

    ```typescript
    
    modals: new Collection([
      ['staff-form-modal', (modalInteraction) => {
        modalInteraction.reply({
          ephemeral: true,
          content: 'Seu formulário foi enviado!'
        })
      }]
    ])
    
    ```
  
  ### Obtendo os dados do Modal utilizando a primeira forma descrita acima

  ```typescript
  
  const { fields } = modalInteraction
  const name = fields.getTextInputValue('staff-form-name-input')
  const age = fields.getTextInputValue('staff-form-age-input')
  const about = fields.getTextInputValue('staff-form-about-input')

  modalInteraction.reply({
    ephemeral: true,
    content: `Seu formulário foi enviado! \nNome: ${name}\nIdade: ${age}\nSobre você: ${about}`
  })

  ```




    
