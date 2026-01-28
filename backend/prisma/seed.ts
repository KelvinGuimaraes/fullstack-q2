import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword1 = await bcrypt.hash('123456', 10);
  const hashedPassword2 = await bcrypt.hash('123456', 10);

  await prisma.user.createMany({
    data: [
      {
        name: 'Vendedor',
        email: 'vendedor@teste.com',
        password: hashedPassword1,
        role: 'VENDEDOR',
      },
      {
        name: 'Admin',
        email: 'admin@teste.com',
        password: hashedPassword2,
        role: 'VISTORIADOR',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });