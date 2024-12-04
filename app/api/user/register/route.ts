import prisma from "@/lib/db"; 
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password } = body;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.error("Error in register route:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
