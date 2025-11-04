import prisma from '../prismaClient.js';

export const list = async (_req, res) => {
  const pessoas = await prisma.pessoa.findMany({ include: { experiencias: true, projetos: true, contatos: true }, orderBy: { id: 'asc' } });
  res.json(pessoas);
};
export const get = async (req, res) => {
  const id = Number(req.params.id);
  const pessoa = await prisma.pessoa.findUnique({ where: { id }, include: { experiencias: true, projetos: true, contatos: true } });
  if (!pessoa) return res.status(404).json({ error: 'Pessoa não encontrada' });
  res.json(pessoa);
};
export const create = async (req, res) => {
  try { const pessoa = await prisma.pessoa.create({ data: req.body }); res.status(201).json(pessoa); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
export const update = async (req, res) => {
  try { const id = Number(req.params.id); const pessoa = await prisma.pessoa.update({ where: { id }, data: req.body }); res.json(pessoa); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
export const remove = async (req, res) => { const id = Number(req.params.id); await prisma.pessoa.delete({ where: { id } }); res.json({ ok: true }); };
