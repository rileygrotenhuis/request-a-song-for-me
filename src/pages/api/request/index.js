import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    if (req.method === 'POST') {
        const requestBody = JSON.parse(req.body);

        const {
            name,
            artist,
            image_url,
            image_height,
            image_width,
            preview_url,
            url,
        } = requestBody;

        const newRequest = await prisma.request.create({
            data: {
                name,
                artist,
                image_url,
                image_height,
                image_width,
                preview_url,
                url,
            },
        });

        prisma.$disconnect();

        return res.status(200).json(newRequest);
    }

    const allRequests = await prisma.request.findMany();

    prisma.$disconnect();

    return res.status(200).json(allRequests);
}
