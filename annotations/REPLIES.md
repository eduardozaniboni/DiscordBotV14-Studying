### Métodos de Respostas de Comandos

# reply
* Responde a interação.
* Obs.: Válido somente por 3 segundos

> Opções:
  - ephemeral: Torna a mensagem privada para quem utilizou o comando.
  - content: Conteúdo da mensagem.
  - embeds: Serão os Embeds que terão na mensagem.
  - files: Arquivos da mensagem.
  - components: Serão os componentes da mensagem.
  - fetchReply: Consegue pegar a resposta da interação.

```typescript

import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'ping',
	description: 'reply with pong',
	type: ApplicationCommandType.ChatInput,
	async run({ interaction }) {

		await interaction.reply({ content: 'pong' });
    
	},
});
```

# deferReply
* Responde a interação.
* Obs.: Válido por 15 minutos

```typescript

import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'ping',
	description: 'reply with pong',
	type: ApplicationCommandType.ChatInput,
	async run({ interaction }) {

		await interaction.deferReply({ ephemeral: true });

    setTimeout(() => {
      interaction.editReply({
        content: "pong",
      });
    }, 6000)
    
	},
});
```

# editReply
* Edita a resposta.

```typescript

import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'ping',
	description: 'reply with pong',
	type: ApplicationCommandType.ChatInput,
	async run({ interaction }) {

		await interaction.reply({ content: 'pong' });
		setTimeout(() => {
			interaction.editReply({ content: 'pong x2' });
		}, 6000);

	},
});
```

# followUp
* Segue uma mensagem já enviada.

```typescript

import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'ping',
	description: 'reply with pong',
	type: ApplicationCommandType.ChatInput,
	async run({ interaction }) {

		await interaction.reply({ content: 'pong' });
    await interaction.followUp({ content: 'pong x2' });

	},
});
```

# deleteReply
* Deleta uma mensagem já enviada.

```typescript

import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../structs/types/Command';

export default new Command({
	name: 'ping',
	description: 'reply with pong',
	type: ApplicationCommandType.ChatInput,
	async run({ interaction }) {

		await interaction.reply({ content: 'pong' });

    // deleta a mensagem após 3 segundos
    setTimeout(() => {
      interaction.deleteReply()
    }, 3000)

	},
});
```