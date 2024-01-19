// app/api/user/[userId].ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    const userId = params.userId

    if (!userId) {
        return new Response('User ID not provided', { status: 400 }); // Bad Request
    }

    try {
        const user = await db.user.findUnique({
            where: { id: parseInt(userId) },
        });

        if (!user) {
            return new Response('User not found', { status: 404 }); // Not Found
        }

        return new Response(JSON.stringify(user), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
    }
}
