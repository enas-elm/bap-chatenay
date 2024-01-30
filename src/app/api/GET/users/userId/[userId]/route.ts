import { NextResponse } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    const userIdOrEmail = params.userId;

    if (!userIdOrEmail) {
        return NextResponse.json({
            status: 400,
            message: 'Missing user identifier',
        });
    }

    try {
        let user;
        if (isNaN(Number(userIdOrEmail))) {
            // userIdOrEmail est un email
            user = await db.user.findUnique({
                where: { email: userIdOrEmail },
            });
        } else {
            // userIdOrEmail est un userId
            const userId = parseInt(userIdOrEmail);
            user = await db.user.findUnique({
                where: { id: userId },
            });
        }

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