import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    const data = await req.json();

    try {
        const { formResponseId, value, label } = data;

        const priority = await db.priorities.create({
            data: {
                value: value,
                label: label,
                formResponseId: formResponseId,
            },
        });

        return NextResponse.json({
            status: 200,
            message: 'Answers created',
            body: {
                priority,
            }
        });
    } catch (error) {
        return NextResponse.json(error);
    }

}