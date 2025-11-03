# Portfolio API (Express + Prisma + PostgreSQL)

API REST para currículo/portfólio. Pronta para rodar local e na Vercel.

## Como rodar local
```
npm install
# criar .env a partir de .env.example com sua DATABASE_URL
npx prisma migrate dev --name init
npm run seed
npm run dev
```
## Deploy na Vercel
1) Suba no GitHub.
2) Import Project na Vercel.
3) Variables: DATABASE_URL.
4) Deploy. Rotas em https://SEU-PROJ.vercel.app/
