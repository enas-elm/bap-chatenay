import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const GET = async (req: Request) => {
    try {
        const priorities = await db.priorities.findMany();
        return NextResponse.json({
            status: 200,
            message: 'Success',
            body: priorities
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
            error: error
        });
    }
}