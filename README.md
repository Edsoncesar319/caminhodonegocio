## Instalação e Execução

Após a seção "Instalação e Execução", adicione a seguinte seção mais detalhada:

## 🚀 Executando a Aplicação

### Ambiente de Desenvolvimento

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/marketplace.git
   cd marketplace
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   # ou
   yarn install
   \`\`\`

3. Execute o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   \`\`\`

4. Acesse a aplicação em `http://localhost:3000`

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run start` - Inicia o servidor de produção (após build)
- `npm run lint` - Executa o linter para verificar problemas de código
- `npm run test` - Executa os testes (quando implementados)

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

\`\`\`
# Exemplo de variáveis de ambiente
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

Para ambientes de produção, configure estas variáveis na plataforma de hospedagem (como Vercel).

### Build de Produção

Para criar uma versão de produção:

\`\`\`bash
npm run build
# ou
yarn build
\`\`\`

Para testar a versão de produção localmente:

\`\`\`bash
npm run start
# ou
yarn start
\`\`\`

### Deploy

A forma mais simples de fazer deploy deste projeto é usando a [Vercel](https://vercel.com):

1. Faça push do código para um repositório GitHub
2. Importe o projeto na Vercel
3. A Vercel detectará automaticamente que é um projeto Next.js e aplicará as configurações adequadas
4. Configure as variáveis de ambiente necessárias
5. Clique em "Deploy"

Alternativamente, você pode fazer deploy em qualquer provedor que suporte Node.js:

\`\`\`bash
# Construa o projeto
npm run build

# Inicie o servidor
npm run start
\`\`\`

### Troubleshooting

**Problema**: Módulos não encontrados após instalação
**Solução**: Tente remover a pasta `node_modules` e o arquivo `package-lock.json` ou `yarn.lock`, e então execute `npm install` ou `yarn install` novamente.

**Problema**: Erros de porta em uso
**Solução**: Verifique se a porta 3000 não está sendo usada por outro processo. Você pode mudar a porta usando:
\`\`\`bash
npm run dev -- -p 3001
# ou
yarn dev -p 3001
\`\`\`

**Problema**: Imagens não carregam em desenvolvimento
**Solução**: Verifique se as imagens estão na pasta `public` e se os caminhos estão corretos.

