const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.usuario.findMany({ take: 5 }).then(a => console.dir(a, {depth: null})).finally(() => prisma.$disconnect());
