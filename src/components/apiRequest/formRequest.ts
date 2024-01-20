import { ResponseType } from '@/types/Form';

/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */
export const checkIfUserExists = async (email: string | undefined) => {
    try {
        const response = await fetch(`api/GET/user/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return {
            status: data.status,
            message: data.message,
            body: data.body
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Internal server error (checkIfUserExists)',
            error: error
        }
    }
}

export const createUser = async (data: any) => {
    try {
        const response = await fetch('api/POST/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const dataResponse = await response.json();
    } catch (error) {
        return {
            status: 500,
            message: 'Internal server error',
            error: error
        }
    }
}

export const getUserId = async (email: string | undefined) => {
    try {
        const response = await fetch(`api/GET/user/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return {
            status: data.status,
            message: data.message,
            body: data.body
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Internal server error (checkIfUserExists)',
            error: error
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Answers                                  */
/* -------------------------------------------------------------------------- */

export const createAnswers = async (data: any) => {
    const payload = {
        formResponseId: data.formResponseId,
        HorairesDeTravail: data.HorairesDeTravail,
        EffortMental: data.LEffortMental,
        EffortPhysique: data.LEffortPhysique,
        Environnement: data.LEnvironnement,
        SatisfactionEtEvolutionDeCarriere: data.SatisfactionEtEvolutionDeCarriere,
    };

    try {
        const response = await fetch('api/POST/createAnswers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const dataResponse = await response.json();
        console.log('dataResponse', dataResponse);
        return {
            status: 'success',
            message: 'Answers created',
            body: dataResponse
        };
    } catch (error) {
        console.error('Error creating answers', error);
        return {
            status: 'error',
            message: 'Internal server error',
            error: error
        };
    }
}

/* -------------------------------------------------------------------------- */
/*                                 FormReponse                                */
/* -------------------------------------------------------------------------- */

export const associateResponseToUser = async (data: object) => {
    try {
        const response = await fetch('api/POST/associateResponseToUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const dataResponse = await response.json();
        return {
            status: 'success',
            message: 'UserId associated to formResponse',
            body: dataResponse
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Internal server error',
            error: error
        }
    }
}
