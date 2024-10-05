# CAOS BOT

## Índice

### Descrição
- CAOS BOT é um bot de automação poderoso e flexível projetado para facilitar a interação no WhatsApp. Ele oferece uma variedade de funcionalidades, permitindo que os usuários automatizem tarefas, gerenciem interações e criem experiências personalizadas.
### Recursos
- Comandos de diversão
- Comandos de criação de Figurinhas
- Comandos de Clima / DDD / Cep
### Pré-requisitos
- Node.js
- Git
### Uso
- Utilize o comando >menu para ver o menu de comandos do bot.
### Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
### Alguns Recursos Tecnológicos

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Baileys](https://github.com/WhiskeySockets/Baileys)
- [Node.js 20.12.2](https://nodejs.org/en)
- [API Openweathermap](openweathermap.org)
- [Spider X API](https://api.spiderx.com.br)
## Descrição

CAOS BOT é um bot versátil para WhatsApp que permite automatizar tarefas, responder a mensagens e muito mais. Com uma estrutura modular, é fácil adicionar novas funcionalidades e personalizações.

## Recursos

- Respostas automáticas a mensagens.
- Comandos personalizados.
- Fácil configuração e instalação.
- Extensível e personalizável.

## Pré-requisitos

Antes de começar, você precisa ter:

- [Node.js](https://nodejs.org/) (versão 20) instalado.
- [Git](https://git-scm.com/) para clonar o repositório.

## Instalação no Mobile ( Termux )
1 - Abra o Termux e execute os comandos abaixo:
```
pkg upgrade -y && pkg update -y && pkg install git -y
```

2 - Conceda acesso à pasta de armazenamento no Termux.
```
termux-setup-storage
```

3 - Acesse a pasta de armazenamento (use o comando ls antes para listar as pastas e verificar o nome correto da pasta do cartão de memória, se necessário).
```
cd storage
```

4 - Clone o repositório com o comando abaixo:
```
git clone https://github.com/caioreis29974/CAOS-BASE/
```

5 - Entre na pasta clonada:
```
cd caos-bot
```

6 - Inicie o bot com o comando:
```
npm start ou node index.js
```

7 - Insira o número de telefone e pressione `enter`.

8 - Informe o código que aparece no termux, no seu WhatsApp.

9 - Após esperar 10 segundos, pressione CTRL + C para parar o bot e reinicie com o comando:
```
npm start
```

### Instalação no PC

1. Instale o Node.js:
- O CAOS BOT requer o Node.js para funcionar. Se você ainda não tem o Node.js instalado, acesse o [site oficial do Node.js](https://nodejs.org).
Durante a instalação, certifique-se de marcar a opção para instalar o npm (Node Package Manager), que será utilizado posteriormente.

2. Instale o Git:
- O Git é necessário para clonar o repositório do bot. Caso não o tenha instalado, baixe-o do [site oficial do Git](https://git-scm.com) e siga as instruções de instalação para o seu sistema operacional.

3. Abra o terminal ou prompt de comando:
- No Windows, você pode usar o PowerShell ou Prompt de Comando.
- No macOS ou Linux, utilize o Terminal.

4. Clone o repositório:
- Navegue até o diretório onde deseja instalar o bot (use o comando cd para navegar até a pasta de destino) e execute o comando abaixo para clonar o repositório:
```
git clone https://github.com/caioreis29974/CAOS-BASE.git
```

5. Acesse a pasta do projeto:
- Entre na pasta clonada com o comando:
```
cd CAOS-BASE
```

6. Instale as dependências do projeto:
- O projeto utiliza pacotes do Node.js. Para instalar todas as dependências necessárias, execute o comando:
```
npm install
```

7. Inicie o bot:
- Após a instalação das dependências, você pode iniciar o bot usando um dos comandos abaixo:
```
npm start
```
ou
```
node index.js
```

8. Configuração do WhatsApp:

- Ao rodar o bot pela primeira vez, você precisará vincular sua conta do WhatsApp. Siga as instruções no terminal:
- Insira seu número de telefone e pressione enter.
- Aguarde o código de verificação no Terminal e insira-o no WhatsApp quando solicitado.

9. Finalizando a configuração:
- Após inserir o código, espere 10 segundos, em seguida pressione CTRL + C para interromper o bot.
- Execute novamente o comando para iniciar o bot:
```
npm start
```

Observações:
- Certifique-se de que o Node.js e o Git estejam corretamente instalados antes de iniciar o processo.
- Em caso de problemas com as dependências, tente executar o comando npm install novamente.
- Para automatizar o início do bot ao iniciar o sistema, considere configurar scripts ou serviços dependendo do seu sistema operacional.
