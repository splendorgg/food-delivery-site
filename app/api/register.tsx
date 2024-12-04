//! BU PAGES SAYFASI VARKEN ÇALIŞIYORMUŞ BUNU KULLAN BENDE PAGES YOK!
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).end()
        }

        const { email, name, password } = req.body
        console.log("request body", req.body);
        if (!email || !name || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log("error occurred", error);
        return res.status(500).json({ error: `Something went wrong: ${error}` })
    }

}