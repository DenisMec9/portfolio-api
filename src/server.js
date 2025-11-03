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

app.get('/', (_req, res) => res.json({ ok: true, msg: 'Portfolio API 👋' }));
app.use('/pessoas', pessoaRoutes);
app.use('/experiencias', experienciaRoutes);
app.use('/projetos', projetoRoutes);
app.use('/contatos', contatoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
