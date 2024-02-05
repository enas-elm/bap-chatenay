import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const GET = async (req: Request) => {
    try {
        const formResponses = await db.formResponse.findMany();
        return NextResponse.json({
            status: 200,
            message: 'Success',
            body: formResponses
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
            error: error
        });
    }
}