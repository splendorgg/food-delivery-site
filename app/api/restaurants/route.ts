import prisma from "@/lib/db"
import { NextResponse } from "next/server"
import { promises as fs } from "fs";
import path from "path"
import { put } from "@vercel/blob";


export async function DELETE(req: Request) {
    if (req.method === "DELETE") {
        try {
            const body = await req.json()
            const { id } = body
            const restaurant = await prisma.restaurant.findUnique({
                where: { id }
            })
            if (!restaurant) {
                return NextResponse.json({ error: "Restaurant does not exist" }, { status: 400 })
            }
            if (restaurant.profilePhoto) {
                const filePath = path.join(process.cwd(), 'public', restaurant.profilePhoto);
                try {
                    await fs.unlink(filePath);
                } catch (err) {
                    console.error("Failed to delete profile photo:", err);
                }
            }
            if (restaurant.bannerPhoto) {
                const filePath = path.join(process.cwd(), 'public', restaurant.bannerPhoto);
                try {
                    await fs.unlink(filePath);
                } catch (err) {
                    console.error("Failed to delete banner photo:", err);
                }
            }
            const deletedRestaurant = await prisma.restaurant.delete({
                where: {
                    id: id,
                },
            });
            return NextResponse.json({ message: "Restaurant deteled", deletedRestaurant })
        } catch {
            return NextResponse.json({ error: 'Failed to delete restaurant' }, { status: 500 });
        }

    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 400 })
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const name = formData.get("name") as string
        const location = formData.get("location") as string
        const opening = formData.get("opening") as string
        const closing = formData.get("closing") as string
        const profilePhoto = formData.get("profilePhoto") as File
        const bannerPhoto = formData.get("bannerPhoto") as File
        const userId = parseInt(formData.get("userId") as string);

        if (!name || !location || !opening || !closing || !profilePhoto || !bannerPhoto) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }
        let profilePhotoUrl = null;
        //!For Local Image Storage
        /* if (profilePhoto) {
             const buffer = Buffer.from(await profilePhoto.arrayBuffer());
             const profilePhotoName = `${Date.now()}-${profilePhoto.name}`;
             const profilePhotoPath = path.join(process.cwd(), "public/uploads/restaurants", profilePhotoName);
             await fs.writeFile(profilePhotoPath, buffer);
             profilePhotoUrl = `/uploads/restaurants/${profilePhotoName}`;
        }*/

        //? For Vercel Blob
        if (profilePhoto) {
            const profileBlob = await put(
                `${Date.now()}-${profilePhoto.name}`,
                profilePhoto.stream(),
                { access: "public" }
            );
            profilePhotoUrl = profileBlob.url;
        }

        let bannerPhotoUrl = null;
        //!For Local Image Storage
        /*if (bannerPhoto) {
            const buffer = Buffer.from(await bannerPhoto.arrayBuffer());
            const bannerPhotoName = `${Date.now()}-${bannerPhoto.name}`;
            const bannerPhotoPath = path.join(process.cwd(), "public/uploads/restaurants", bannerPhotoName);
            await fs.writeFile(bannerPhotoPath, buffer);
            bannerPhotoUrl = `/uploads/restaurants/${bannerPhotoName}`;
        }*/
        //? For Vercel Blob
        if (bannerPhoto) {
            const bannerBlob = await put(
                `${Date.now()}-${bannerPhoto.name}`,
                bannerPhoto.stream(),
                { access: "public" }
            );
            bannerPhotoUrl = bannerBlob.url;
        }

        const newRestaurant = await prisma.restaurant.create({
            data: {
                name,
                location,
                opening,
                closing,
                userId,
                profilePhoto: profilePhotoUrl,
                bannerPhoto: bannerPhotoUrl,
            },
        });
        return NextResponse.json({ message: "Restaurant created successfully", newRestaurant }, { status: 201 });
    } catch (error) {
        console.error("Error creating restaurant:", error);
        return NextResponse.json({ error: "Failed to create restaurant" }, { status: 500 });
    }
}


