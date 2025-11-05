import prisma from '../prismaClient.js';

// LISTAR EXPERIÊNCIAS (opcional filtrar por pessoaId)
export const list = async (req, res) => {
  const { pessoaId } = req.query;

  const where = pessoaId ? { pessoaId: Number(pessoaId) } : {};

  const items = await prisma.experiencia.findMany({
    where,
    orderBy: { id: 'asc' }
  });

  res.json(items);
};


// BUSCAR EXPERIÊNCIA POR ID
export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const item = await prisma.experiencia.findUnique({
      where: { id }
    });

    if (!item) {
      return res.status(404).json({ error: "Experiência não encontrada." });
    }

    res.json(item);

  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


// CRIAR EXPERIÊNCIA
export const create = async (req, res) => {
  try {
    const item = await prisma.experiencia.create({
      data: req.body
    });

    res.status(201).json(item);

  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


// ATUALIZAR EXPERIÊNCIA
export const update = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const item = await prisma.experiencia.update({
      where: { id },
      data: req.body
    });

    res.json(item);

  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


// DELETAR EXPERIÊNCIA
export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.experiencia.delete({
      where: { id }
    });

    res.json({ ok: true });

  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
