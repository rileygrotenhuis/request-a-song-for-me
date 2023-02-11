import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const requestBody = JSON.parse(req.body);

        const {
            name,
            artist,
            image_url,
            image_height,
            image_width,
            url
        } = requestBody;

        const prisma = new PrismaClient();

        const newRequest = await prisma.request.create({
            data: {
                name,
                artist,
                image_url,
                image_height,
                image_width,
                url
            }
        });

        prisma.$disconnect();

        return res.status(200).json(newRequest);
    }

    res.status(200).json('New Request');
}