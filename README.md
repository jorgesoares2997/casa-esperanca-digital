# Casa Esperança Digital

Bem-vindo ao repositório do **Instituto Casa Esperança Digital**. Este é o código-fonte da landing page/site institucional da organização, que tem como missão levar esperança, dignidade e apoio às famílias em situação de vulnerabilidade em Prazeres, Jaboatão dos Guararapes.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas e práticas mais modernas do ecossistema React:

- **React 18** (com TypeScript)
- **Vite** (Build tool e servidor de desenvolvimento super rápido)
- **Tailwind CSS** (Estilização utilitária e responsiva)
- **shadcn/ui** e **Radix UI** (Componentes de UI acessíveis e altamente customizáveis)
- **Lucide React** (Ícones SVG maravilhosos e consistentes)
- **React Router** (Navegação SPA)

## 📦 Como iniciar o projeto localmente

Você precisará ter o **Node.js** e o **pnpm** (ou npm/yarn) instalados na sua máquina.

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd casa-esperanca-digital
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   # ou npm run dev
   ```
   
   O projeto estará disponível em `http://localhost:5173` (ou a porta disponível listada no seu terminal).

4. **Gerar Versão de Produção (Build)**
   ```bash
   pnpm run build
   ```
   Os arquivos compilados estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

Abaixo uma visão simplificada da arquitetura do projeto:

```text
src/
├── api/             # Serviços mockados/integrações (ex: mock de email)
├── assets/          # Imagens, fontes e outros recursos estáticos
├── components/      # Componentes React reutilizáveis
│   ├── ui/          # Componentes base do shadcn/ui (Button, Input, etc)
│   └── ...          # Blocos da página (Contact, About, Header, Footer...)
├── hooks/           # Hooks customizados do React
├── lib/             # Utilitários (como o `cn` para mesclar classes Tailwind)
├── pages/           # Visualizações de página completas (Index.tsx, NotFound.tsx)
├── App.tsx          # Ponto de entrada das rotas e provedores
└── main.tsx         # Ponto de entrada do React DOM
```

## 🤝 Como Ajudar o Instituto

O sistema dispõe de rotas diretas de API do WhatsApp para que qualquer visitante possa contatar a organização rapidamente a respeito de:
- **Doações Financeiras**
- **Doações de Materiais**
- **Voluntariado**
- **Parcerias**

Todo o fluxo é integrado na seção "Como Ajudar".

---
*Feito com ❤️ para a comunidade.*
