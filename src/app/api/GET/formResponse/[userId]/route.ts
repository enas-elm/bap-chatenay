import { NextResponse } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    const userFormResponse = params.userId

    if (!userFormResponse) {
        return NextResponse.json({
            status: 400,
            message: 'Missing user id',
        });
    }

    try {
        const user = await db.formResponse.findMany({
            where: { userId: parseInt(userFormResponse) },
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
