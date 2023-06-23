# O que aprendi até agora?

### Métodos de resposta de comando
	- reply()
		- responde um comando de alguma forma
		- tempo máximo de 3 segundos

		> Propriedades para respostas:
			- ephemeral: Torna a mensagem privada para quem utilizou o comando.
			- content: Conteúdo da mensagem.
			- embeds: Serão os Embeds que terão na mensagem.
			- files: Arquivos da mensagem.
			- components: Serão os componentes da mensagem.
			- fetchReply: Consegue pegar a resposta da interação.

	- deferReply()
		- faz adiamento de uma resposta
		- tempo máximo de 15 minutos

	- editReply()
		- faz a edição de uma resposta já enviada

	- followUp()
		- segue uma resposta já enviada com outro

	- deleteReploy()
		- deleta uma mensagem que foi enviada
