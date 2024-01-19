import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const GET = async (req: Request) => {
    try {
        const users = await db.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json(error);
    }
}