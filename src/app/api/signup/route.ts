import { PrismaClient } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export type ApiPayload = {
  email: string;
  name: string;
};

export async function POST(req: NextRequest) {
  const { email, name } = (await req.json()) as ApiPayload;

  if (!email || !name) {
    return NextResponse.json(
      { message: "Please provide both name and email. Thanks !" },
      { status: 400 }
    );
  }

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email. Thanks !" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      return NextResponse.json(
        { message: "This mail is already registered!" },
        { status: 400 }
      );
    }
    await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return NextResponse.json({ message: "Registered Successfully. Thanks!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Oops. Something Went Wrong !!!" },
      { status: 500 }
    );
  }
}
