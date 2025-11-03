import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import pessoaRoutes from '../src/routes/pessoaRoutes.js';
import experienciaRoutes from '../src/routes/experienciaRoutes.js';
import projetoRoutes from '../src/routes/projetoRoutes.js';
import contatoRoutes from '../src/routes/contatoRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.json({ ok: true, msg: 'Portfolio API (Vercel)' }));
app.use('/pessoas', pessoaRoutes);
app.use('/experiencias', experienciaRoutes);
app.use('/projetos', projetoRoutes);
app.use('/contatos', contatoRoutes);

export const handler = serverless(app);
export default app;
