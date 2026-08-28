import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
  const token = (await cookies()).get("vanta_session")?.value;
  if (!token) return null;

  const user = await prisma.user.findUnique({
    where: { id: token },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      isActive: true,
      twoFactorEnabled: true
    }
  });

  return user?.isActive ? user : null;
}
