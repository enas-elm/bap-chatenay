import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    const data = await req.json();
    try {
        const formResponse = await db.formResponse.create({
            data: {
                userId: data.userId,
            },
        });
        return NextResponse.json({
            status: 'success',
            message: 'UserId associated to formResponse',
            body: formResponse
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
            error: error
        })
    }
}