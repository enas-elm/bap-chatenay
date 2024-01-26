// app/api/user/[userId].ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { id: number } }
) => {
    const ResponseFormId = params.id

    if (!ResponseFormId) {
        return NextResponse.json({
            status: 400,
            message: 'Missing ResponseForm id',
        });
    }

    try {
        const ResponseForm = await db.formResponse.findMany({
            where: { userId: parseInt(ResponseFormId) },
        });

        if (!ResponseForm) {
            return NextResponse.json({
                status: 404,
                message: 'ResponseForm not found',
            });
        }

        return NextResponse.json({
            status: 200,
            message: 'ResponseForm found',
            body: ResponseForm,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
        });
    }
}
