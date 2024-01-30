import { NextResponse } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { userEmail: string } }
) => {
    const userEmail = params.userEmail

    if (!userEmail) {
        return NextResponse.json({
            status: 400,
            message: 'Missing user email',
        });
    }

    try {
        const user = await db.user.findMany({
            where: { email: userEmail },
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
