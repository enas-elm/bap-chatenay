import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const data = await req.json();
    const { email, nom, prenom, phone, birthdate, job } = data.InformationPersonnelles;
    const user = await prisma.user.create({
        data: {
            email: email,
            nom: nom,
            prenom: prenom,
            phone: phone,
            birthdate: birthdate,
            job: job,
        },
    });
    return NextResponse.json(user);
}