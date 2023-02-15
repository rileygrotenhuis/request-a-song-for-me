import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const { id } = req.query;

    const prisma = new PrismaClient();
    
    if (req.method === 'DELETE') {
        try {
            await prisma.request.delete({
                where: {
                    id: parseInt(id)
                }
            });
    
            prisma.$disconnect();
    
            return res.status(204).json({});   
        } catch (e) {
            return res.status(400).json('An error occurred while trying to delete this request');
        }
    }

    const request = await prisma.request.findMany({
        where: {
            id: {
                equals: parseInt(id)
            }
        }
    });

    prisma.$disconnect();

    return res.status(200).json(request);
}
