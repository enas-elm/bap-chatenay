import { NextResponse } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    const userId = params.userId

    if (!userId) {
        return NextResponse.json({
            status: 400,
            message: 'Missing user id',
        });
    }
    try {
        const user = await db.user.findMany({
            where: { id: parseInt(userId) },
        });

        if (!user) {
            return NextResponse.json({
                status: 404,
                message: 'User not found',
            });
        }

        return NextResponse.json({
            status: 200,
            message: 'User found',
            body: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
        });
    }
}
