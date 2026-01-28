# 🚀 Projeto Fullstack - Sistema de Vistorias (EPTA)

Este projeto é uma aplicação **Fullstack** desenvolvida com:

-   Backend: **Node.js + NestJS + Prisma + PostgreSQL**
-   Frontend: **React + Vite + TypeScript + Tailwind CSS**

-----------------------------------------------------------------------

# 🚀 BACKEND

## Instalação

    cd backend
    npm install

## Variáveis de ambiente (.env)

    DATABASE_URL="postgresql://usuario:senha@localhost:5432/vistorias"
    JWT_SECRET="minha_chave_secreta"

## Criar banco

    psql -U postgres
    CREATE DATABASE vistorias;

## Migration

    npx prisma migrate dev --name init

## Seed

    npx prisma db seed

Usuários:

Vendedor: vendedor@teste.com / 123456\
Vistoriador: admin@teste.com / 123456

## Iniciar backend

    npm run start:dev

------------------------------------------------------------------------

# 🎨 FRONTEND

## Instalação

    cd frontend
    npm install

## Iniciar frontend

    npm run dev

Acesse: http://localhost:5173

------------------------------------------------------------------------

# 📌 Scripts

## Backend

-   npm run start
-   npm run start:dev

## Frontend

-   npm run dev
-   npm run build

------------------------------------------------------------------------

# 📈 Tecnologias

-   NestJS
-   Prisma
-   PostgreSQL
-   React
-   Vite
-   Tailwind

------------------------------------------------------------------------
# 👨‍💻 Autor

Kelvin Guimarães Melo