import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Forma antiga de usar o prisma, o professor vai estar usando.
// const prisma = new PrismaClient();

export { prisma };

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conectado ao banco de dados!!!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}
