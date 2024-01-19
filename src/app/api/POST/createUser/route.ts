import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    try {
        const data = await req.json();
        const { email, nom, prenom, phone, birthdate, job } = data.InformationPersonnelles;

        if (!email || !nom || !prenom || !phone || !birthdate || !job) {
            return NextResponse.json({
                status: 400,
                message: 'Missing information',
            });
        }

        const user = await db.user.create({
            data: {
                email: email,
                nom: nom,
                prenom: prenom,
                phone: phone,
                birthdate: birthdate,
                job: job,
            },
        });
        return NextResponse.json({
            status: 200,
            message: 'User created',
            body: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error (createUser)',
            error: error
        });
    }
}