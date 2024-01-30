import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const GET = async (req: Request) => {
    try {
        const users = await db.user.findMany();
        return NextResponse.json({
            status: 200,
            message: 'Success',
            body: users
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
            error: error
        });
    }
}