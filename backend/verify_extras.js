const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
Promise.all([
  prisma.tarifa.findMany({where:{cicloId: 9}}), 
  prisma.materia.findMany({where:{nombre: 'Matemáticas'}, include: {gruposMaterias: true}})
]).then(res => {
    console.log("Tarifas:", res[0]);
    console.log("Materias:", JSON.stringify(res[1], null, 2));
}).finally(()=>prisma.$disconnect());
