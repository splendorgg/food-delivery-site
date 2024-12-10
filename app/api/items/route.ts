import prisma from "@/lib/db"
import { NextResponse } from "next/server"
// import { promises as fs } from "fs";
// import path from "path"
import { del, put } from "@vercel/blob";

//!For Local Image Storage
/*
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

            if (item.photoUrl) {
                const filePath = path.join(process.cwd(), 'public', item.photoUrl);
                try {
                    await fs.unlink(filePath);
                } catch (err) {
                    console.error("Failed to delete photo file:", err);
                }
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
*/
//? For Vercel Blob
export async function DELETE(req: Request) {
    if (req.method === "DELETE") {
        try {
            const body = await req.json();
            const { id } = body;

            const item = await prisma.item.findUnique({
                where: { id },
            });

            if (!item) {
                return NextResponse.json(
                    { error: "Item does not exist" },
                    { status: 400 }
                );
            }

            if (item.photoUrl) {
                const blobPath = new URL(item.photoUrl).pathname.slice(1);
                try {
                    await del(blobPath);
                } catch (err) {
                    console.error("Failed to delete photo from Blob:", err);
                }
            }

            const deletedItem = await prisma.item.delete({
                where: {
                    id: id,
                },
            });

            return NextResponse.json(
                { message: "Item deleted", deletedItem },
                { status: 200 }
            );
        } catch (error) {
            console.error("Failed to delete item:", error);
            return NextResponse.json(
                { error: "Failed to delete item" },
                { status: 500 }
            );
        }
    } else {
        return NextResponse.json(
            { error: "Method not allowed" },
            { status: 405 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const name = formData.get("name") as string
        const price = parseFloat(formData.get("price") as string)
        const desc = formData.get("desc") as string
        const restaurantId = parseInt(formData.get("restaurantId") as string)
        const file = formData.get("file") as File

        if (!name || !price || !desc || !restaurantId || !file) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }
        //!For Local Image Storage
        /* const buffer = Buffer.from(await file.arrayBuffer())
         const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
         const fileName = `${Date.now()}-${sanitizedFileName}`
         const filePath = path.join(process.cwd(), "public/uploads", fileName)
         await fs.writeFile(filePath, buffer)
         const photoUrl = `/uploads/${fileName}`
        */
        //? For Vercel Blob
        let photoUrl = null
        if (file) {
            const profileBlob = await put(
                `${Date.now()}-${file.name}`,
                file.stream(),
                { access: "public" }
            );
            photoUrl = profileBlob.url;
        }

        const newItem = await prisma.item.create({
            data: {
                name,
                price,
                description: desc,
                restaurantId,
                photoUrl,
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
