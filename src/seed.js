import { prisma } from './prismaClient.js';
async function main() {
  await prisma.contato.deleteMany();
  await prisma.projeto.deleteMany();
  await prisma.experiencia.deleteMany();
  await prisma.pessoa.deleteMany();
  const denis = await prisma.pessoa.create({
    data: {
      nome: 'Denis Barbosa',
      descricao: 'Desenvolvedor Full Stack com foco em Front-end e IoT.',
      areaAtuacao: 'Full Stack',
      experiencias: { create: [
        { cargo: 'Estagiário em Desenvolvimento de Sistemas', empresa: 'Aponti', periodo: '2025 - atual', descricao: 'Manutenção de portais e e-commerce; suporte; testes.' },
        { cargo: 'Estagiário', empresa: 'Conteúdo Legal', periodo: '2025', descricao: 'Implementação de soluções digitais e apoio em conteúdo.' }
      ]},
      projetos: { create: [
        { titulo: 'Conversores Next.js', descricao: 'Conversores de moeda, temperatura e distância.', link: 'https://conversores-nextjs.vercel.app/' }
      ]},
      contatos: { create: [
        { tipo: 'whatsapp', valor: 'https://wa.me/5581988954430' },
        { tipo: 'linkedin', valor: 'https://linkedin.com/in/denis-barbosa-7b98972bb/' },
        { tipo: 'github', valor: 'https://github.com/DenisMec9' }
      ]}
    }
  });
  const maria = await prisma.pessoa.create({
    data: {
      nome: 'Maria Silva',
      descricao: 'Engenheira de Software com foco em backend.',
      areaAtuacao: 'Backend',
      experiencias: { create: [
        { cargo: 'Desenvolvedora Backend', empresa: 'Tech Co', periodo: '2024 - atual', descricao: 'APIs Node.js e bancos relacionais.' }
      ]},
      projetos: { create: [
        { titulo: 'API Finanças', descricao: 'API REST para controle financeiro.', link: 'https://example.com' }
      ]},
      contatos: { create: [{ tipo: 'email', valor: 'maria@example.com' }] }
    }
  });
  console.log({ denis, maria });
}
main().finally(async () => { await prisma.$disconnect(); });
