const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.alumno.findFirst({
  where: { matricula: 'SDM-2023-534' },
  include: {
    inscripciones: {
      orderBy: [{ ciclo: { activo: 'desc' } }, { ciclo: { nombre: 'desc' } }],
      take: 1,
      include: { planDepago: true }
    }
  }
}).then(a => console.dir(a, {depth: null})).finally(() => prisma.$disconnect());
