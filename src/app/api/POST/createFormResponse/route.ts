import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    const data = await req.json();

    console.log(data);
    try {
        const formResponse = await db.formResponse.create({
            data: {
                userId: data.userId,
            },
        });
        return NextResponse.json(formResponse);
    } catch (error) {
        return NextResponse.json(error);
    }
}


