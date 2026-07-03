const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
Promise.all([
  prisma.cicloEscolar.findFirst({where:{nombre:'2027-2028'}}), 
  prisma.grupo.findFirst({where:{grado:'1', seccion:'B'}})
]).then(console.log).finally(()=>prisma.$disconnect());
