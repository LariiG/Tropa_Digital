# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Tropa Digital

Projeto web frontend para gerenciamento de eventos, equipes e inscrições, com dashboard interativo.

---

## Descrição

Este sistema foi desenvolvido para gerenciar eventos, equipes e inscrições. Possui:

- Simulação de autenticação de usuários (login/logout)
- Dashboard com resumo e listagem paginada de eventos
- Menu lateral com navegação entre telas
- Modal para criação de novos eventos
- Layout responsivo com design inspirado no Figma
- Componentização com React (JSX + SCSS)
- Uso de ícones SVG importados como React Components
- Organização de componentes e estilos por pastas

---

## Tecnologias Utilizadas

- ReactJS (com JSX e hooks)
- React Router DOM (para navegação)
- SCSS para estilização modular
- React Icons para ícones vetoriais
- SVGs importados como React Components para ícones customizados
- Git para versionamento
- GitHub para repositório remoto

---
Funcionalidades
Login: Tela com autenticação simulada, sem backend.

Sidebar: Menu lateral com links para Dashboard, Eventos, Equipes, Inscrições.

Dashboard: Exibe cards com resumo (total eventos, equipes, atletas) e tabela paginada dos próximos eventos.

Adicionar Evento: Modal para criar novo evento que atualiza a tabela e resumo dinamicamente.

Logout: Limpa dados simulados e redireciona para login.

Estilização: Layout fiel ao design do Figma, com SCSS modular.

Detalhes Técnicos
SVGs importados com ?react para usar como componentes React e estilizar via CSS.

Uso de useState e useEffect para controle de estado e efeitos colaterais.

Paginação manual na tabela com controle de página e filtro por busca.

Componentização clara para fácil manutenção e reaproveitamento.

Contato
Desenvolvido por Larissa Gontijo
GitHub | lariimgontijo@icloud.com







---

## Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/LariiG/Tropa_Digital.git
cd Tropa_Digital/login-dashboard

npm install

npm run dev

