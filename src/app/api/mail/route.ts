import type { NextApiRequest, NextApiResponse } from 'next';
import { VercelInviteUserEmail } from '@email/chatenay-email'
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
    try {
        const payload = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Chatenay-Malabry<onboarding@resend.dev>',
            to: ['patrick.bartosik@edu.devinci.fr'],
            subject: 'Confirmation de traitement de votre formulaire - Opportunité de rendez-vous personnalisé',
            react: VercelInviteUserEmail(
                {
                    username: payload.username,
                    invitedByUsername: payload.invitedByUsername,
                    inviteLink: "https://calendly.com/vercel/invite?token=secret",
                    inviteFromIp: "Chatenay-Malabry",
                    inviteFromLocation: "Paris, France",
                }
            ),
        });

        if (error) {
            return NextResponse.json({
                status: 500,
                message: 'Internal server error',
                error: error
            })
        }

        return NextResponse.json({
            status: 'success',
            message: 'Email sent',
            body: data
        })

    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
            error: error
        })
    }
}