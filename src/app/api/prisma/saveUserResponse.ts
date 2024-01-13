import prisma from './prismaClient';
import { ResponseType } from '../../../types/Form'

export const saveUserResponse = async (response: ResponseType, userId?: string) => {
    try {
        const result = await prisma.userResult.create({
            data: {
                userId: userId,
                InformationPersonnelles: response.InformationPersonnelles,
                HorairesDeTravail: response.HorairesDeTravail,
                LEnvironnement: response.LEnvironnement,
                LEffortMental: response.LEffortMental,
                SatisfactionEtEvolution: response.SatisfactionEtEvolutionDeCarriere,
                ResultatFinal: response.Resultat,
            },
        });

        return result;
    } catch (error) {
        console.error("Erreur lors de l'enregistrement de la réponse de l'utilisateur :", error);
        throw error;
    }
};
