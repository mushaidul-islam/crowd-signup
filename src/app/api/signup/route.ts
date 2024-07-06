import { PrismaClient } from "@prisma/client";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest) {
  const { email, name }: { email: string; name: string } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    console.log(newUser);
    return NextResponse.json({ message: "User added successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
