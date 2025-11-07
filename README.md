# FutFem Social

Plataforma de rede social dedicada ao futebol feminino brasileiro. Conecte-se com jogadoras, organize peladas, acompanhe jogos e faça parte da comunidade do futebol feminino.

## Funcionalidades

- **Feed Social**: Compartilhe posts, fotos e interaja com a comunidade
- **Jogos**: Encontre e organize peladas e eventos de futebol feminino
- **Mensagens**: Chat em tempo real com outras jogadoras
- **Notificações**: Acompanhe curtidas, comentários e menções
- **Tema Claro/Escuro**: Alterne entre os temas de acordo com sua preferência
- **Persistência Local**: Todos os dados são salvos no localStorage do navegador

## Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19.2** - Biblioteca de interface
- **Tailwind CSS v4** - Estilização utilitária
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones modernos
- **LocalStorage** - Persistência de dados do lado do cliente

## Desenvolvimento Local

\`\`\`bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000) para ver o aplicativo.

## Estrutura do Projeto

\`\`\`
futfem-social/
├── app/                    # Rotas e páginas (App Router)
│   ├── explorar/          # Página de busca e exploração
│   ├── jogos/             # Listagem de jogos e peladas
│   ├── mensagens/         # Chat e mensagens
│   ├── notificacoes/      # Feed de notificações
│   ├── perfil/            # Perfil do usuário
│   └── page.tsx           # Feed principal
├── components/            # Componentes React reutilizáveis
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── navigation.tsx    # Menu de navegação
│   ├── post-card.tsx     # Card de post
│   └── game-card.tsx     # Card de jogo
├── lib/                  # Utilitários e helpers
│   ├── storage.ts        # Funções de localStorage
│   └── theme-provider.tsx # Gerenciador de tema
├── public/               # Arquivos estáticos
└── next.config.mjs       # Configuração Next.js
\`\`\`

## Recursos de Design

- **Paleta Verde Futebol**: Cores inspiradas no campo de futebol
- **Tema Duplo**: Suporte completo para modo claro e escuro
- **Animações Suaves**: Transições e efeitos hover em todos os elementos
- **Design Responsivo**: Otimizado para mobile, tablet e desktop
- **Componentes Acessíveis**: Baseados em Radix UI com ARIA completo

## Persistência de Dados

Todos os dados são armazenados localmente no navegador usando localStorage:

- **Posts**: Publicações, curtidas e comentários
- **Jogos**: Eventos e participações
- **Mensagens**: Conversas e histórico
- **Notificações**: Atividades e alertas
- **Tema**: Preferência de tema claro/escuro

## Colaboradores

- Leonardo Vinicius - RM652299
- Pedro Henrique - RM566235
- Gabriel Silva - RM563169
- João Gabriel - RM563953

## Licença

MIT

---

Feito com ⚽ para o futebol feminino brasileiro
