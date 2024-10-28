// app/actions.ts
"use server";

import { prisma } from "./lib/prisma";
import { revalidatePath } from "next/cache";

export async function addUser(formData: FormData) {
  const name = formData.get("name") as string;

  try {
    await prisma.user.create({
      data: {
        name,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error adding user:", error);
    throw new Error("Failed to add user");
  }
}
