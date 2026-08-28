import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("ChangeMe123!", 12);

  const owner = await prisma.user.upsert({
    where: { email: "owner@vanta-eg.com" },
    update: {},
    create: {
      name: "VANTA Owner",
      email: "owner@vanta-eg.com",
      passwordHash,
      role: "OWNER",
      referralCode: "VANTAOWNER",
      wallet: { create: { balance: 0 } }
    }
  });

  const games = [
    ["PUBG Mobile", "pubg-mobile"],
    ["PUBG Korea", "pubg-korea"],
    ["PUBG Vietnam", "pubg-vietnam"],
    ["eFootball", "efootball"],
    ["Free Fire", "free-fire"],
    ["Roblox", "roblox"]
  ];

  for (const [name, slug] of games) {
    await prisma.game.upsert({
      where: { slug },
      update: {},
      create: { name, slug }
    });
  }

  const category = await prisma.category.upsert({
    where: { slug: "game-top-up" },
    update: {},
    create: { nameAr: "شحن ألعاب", nameEn: "Game Top-Up", slug: "game-top-up" }
  });

  const pubg = await prisma.game.findUnique({ where: { slug: "pubg-mobile" } });

  await prisma.product.upsert({
    where: { slug: "pubg-mobile-60-uc" },
    update: {},
    create: {
      nameAr: "ببجي موبايل - 60 UC",
      nameEn: "PUBG Mobile - 60 UC",
      slug: "pubg-mobile-60-uc",
      descriptionAr: "شحن 60 UC لببجي موبايل.",
      descriptionEn: "PUBG Mobile 60 UC top-up.",
      price: 50,
      stock: 999,
      featured: true,
      categoryId: category.id,
      gameId: pubg?.id,
      fields: {
        create: [
          { key: "playerId", labelAr: "Player ID", labelEn: "Player ID", required: true }
        ]
      }
    }
  });

  await prisma.storeSetting.upsert({
    where: { key: "maintenanceMode" },
    update: {},
    create: { key: "maintenanceMode", value: "false" }
  });

  console.log("Seed complete. Owner:", owner.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
