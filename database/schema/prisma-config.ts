import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env.DATABASE_URL,
  },
});

model User {

  id BigInt @id @default(autoincrement())

  uuid String @unique @db.Char(36)

  fullName String @db.VarChar(150)

  username String @unique @db.VarChar(50)

  email String? @unique @db.VarChar(150)

  phone String? @db.VarChar(25)

  password String @db.VarChar(255)

  avatar String? @db.VarChar(255)

  isActive Boolean @default(true)

  lastLogin DateTime?

  createdAt DateTime @default(now())

  updatedAt DateTime @updatedAt

  deletedAt DateTime?

  @@map("users")
}