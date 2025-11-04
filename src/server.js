import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pessoaRoutes from './routes/pessoaRoutes.js';
import experienciaRoutes from './routes/experienciaRoutes.js';
import projetoRoutes from './routes/projetoRoutes.js';
import contatoRoutes from './routes/contatoRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  return res.json({
    ok: true,
    msg: 'Portfolio API (Vercel)',
  });
});

app.use('/pessoas', pessoaRoutes);
app.use('/experiencias', experienciaRoutes);
app.use('/projetos', projetoRoutes);
app.use('/contatos', contatoRoutes);

// NÃO usar app.listen na Vercel!
export default app;
