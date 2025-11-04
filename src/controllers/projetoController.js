import prisma from '../prismaClient.js';

export const list = async (req, res) => {
  const { pessoaId } = req.query;
  const where = pessoaId ? { pessoaId: Number(pessoaId) } : {};
  const items = await prisma.projeto.findMany({ where, orderBy: { id: 'asc' } });
  res.json(items);
};
export const create = async (req, res) => {
  try { const item = await prisma.projeto.create({ data: req.body }); res.status(201).json(item); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
export const update = async (req, res) => {
  try { const id = Number(req.params.id); const item = await prisma.projeto.update({ where: { id }, data: req.body }); res.json(item); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
export const remove = async (req, res) => { const id = Number(req.params.id); await prisma.projeto.delete({ where: { id } }); res.json({ ok: true }); };
