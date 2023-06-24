# Criando Embeds
- Embeds são mensagens prontas enviadas normalmente por bots com extravagantes propriedades.

## Definindo uam constante do EmbedBuilder

Propriedades:
  - setTitle: utilizar para definir o título do Embed
  - setDescription: utilizar para definir a descrição do Embed
  - setColor: utilizar para definir a cor do Embed (O Embed possuí algumas cores padrões, podendo ser utilizadas). Também podemos usar o arquivo config.json ou mesmo o dotenv para definir as cores em `ColorResolvable`
    Ex.:
      ```typescript
        .setColor(config.colors.red as ColorResolvable)
      ```
  - setURL(): utilizar para definir um link no título do Embed
  - setAuthor({}): utilizar para definir o autor ou autores
    Possuí algumas propriedades
    - name
    - iconURL
    - url
    Ex.:
      ```typescript
        .setAuthor({
          name: 'Eduardo',
          iconURL: interaction.user.avatarURL() || undefined
          url: 'https://eduardozaniboni.com'
        })
      ```
  - setFooter({}): utilizar para definifir o roda pé do embed
    Possuí algumas propriedades
    - text
    - iconURL
    Ex.:
      ```typescript
        .setFooter({
          text: 'Este é um footer de um embed',
          iconURL: '...'
        })
      ```
  - setFields({}): utilizar para definir os campos do embed
    Possuí algumas propriedades
    - name
    - value
    - inline (boleano)
    Ex.: 
      ```typescript
        .setFields(
          {
            name: 'Este é um nome de field',
            value: 'Este é um valor de field'
          },
          {
            name: 'Este é um nome2 de field',
            value: 'Este é um valor2 de field'
          }
        )
      ```
  - setTimestamp(): utilizar para setar a hora, data ou alguma coisa referente a isso. Caso fique em branco, será exibido a data e hora que o embed foi enviado.
  - setThumbnail(): utilizar para definir a thumbnail do embed
    Ex.:
      ```typescript
        .setThumbnail(interaction.user.avatarURL())
      ```
  - setImage(): utilizar para definir a imagem do embed (Como se fosse um banner)
    Ex.: 
      ```typescript
        .setImage(interaction.user.avatarURL())
      ```
  - Masked Links: utilizado para mascarar links em mensagens
    Ex.: 
      ```typescript
        .setDescription('Acesse meu GitHub [clicando aqui](https://github.com/eduardozaniboni)')
      ```
  - Attachments: utilizar para enviar imagens nas mensagens
    Ex.: 
      ```typescript
        export default new Command({
          name: '',
          description: '',
          type: ApplicationCommandOptionType.ChatInput,
          options: [
            {
              name: 'attach',
              description: 'attach',
              type: ApplicationCommandOptionType.Attachment,
              required: true
            }
          ],

          async run({ interaction, options }) {
            const attach = options.getAttachment('attach', true)
            const files = [
              new AttachmentBuilder(
                attach.url, 
                {
                  name: 'image.png'
                }
              )
            ]

            const embed = new EmbedBuilder()
              .setTitle('Este é um embed')
              .setImage('attachment://image.png')

            interaction.reply({
              embeds: [embed], 
              files
            })
          }
        })
      ```
  > Limites:
    - Os títulos dos embeds são limitados a 256 caracteres
    - As descrições dos embeds são limitadas a 4096 caracteres
    - Pode haver até 25 fields
    - O nome de um field é limitado a 256 caracteres e seu valor a 1024 caracteres
    - O texto do footer é limitado a 2048 caracteres
    - O nome do autor é limitado a 256 caracteres
    - A soma de todos os caracteres de todos os elementos do embed em uma mensagem não deve exceder 6000 caracteres
    - 10 embeds podem ser enviados por mensagem
  