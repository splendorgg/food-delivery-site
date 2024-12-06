import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function DELETE(req: Request) {
    if (req.method === "DELETE") {
        try {
            const body = await req.json()
            const { id } = body
            const item = await prisma.item.findUnique({
                where: { id }
            })
            if (!item) {
                return NextResponse.json({ error: "Item does not exist" }, { status: 400 })
            }
            const deletedItem = await prisma.item.delete({
                where: {
                    id: id,
                },
            });
            return NextResponse.json({ message: "Item deteled", deletedItem })
        } catch {
            return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
        }

    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 400 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, price, desc, restaurantId } = body;
        if (!name || !price || !desc || !restaurantId) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const newItem = await prisma.item.create({
            data: {
                name,
                price,
                description: desc,
                restaurantId,
            },
        });


        return NextResponse.json(
            { message: "Item created successfully", newItem },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating item:", error);

        return NextResponse.json(
            { error: "Failed to create item. Please try again later." },
            { status: 500 }
        );
    }
}
