import { ResponseType } from '@/types/Form';

/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */

export const getUsers = async () => {
    try {
        const response = await fetch('api/GET/users', {
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
            message: 'Internal server error (getUsers)',
            error: error
        }
    }
}

export const getUserById = async (userId: string | undefined) => {
    try {
        const response = await fetch(`api/GET/user/${userId}`, {
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
            message: 'Internal server error (getUserById)',
            error: error
        }
    }
}

export const getUserByEmail = async (email: string | undefined) => {
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
            message: 'Internal server error (getUserByEmail)',
            error: error
        }
    }
}

export const checkIfUserExistsByEmail = async (email: string | undefined) => {
    try {
        const response = await fetch(`api/GET/user/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        if (data.body.length === 0) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Internal server error (checkIfUserExists)',
            error: error
        }
    }
}

type createUserPayload = {
    InformationPersonnelles: {
        email: string;
        nom: string;
        prenom: string;
        phone: string;
        birthdate: string;
        job: string;
    }
}

export const createUser = async (data: createUserPayload) => {
    try {
        const payload = {
            email: data.InformationPersonnelles.email,
            nom: data.InformationPersonnelles.nom,
            prenom: data.InformationPersonnelles.prenom,
            phone: data.InformationPersonnelles.phone,
            birthdate: data.InformationPersonnelles.birthdate,
            job: data.InformationPersonnelles.job,
        }

        const response = await fetch('api/POST/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const dataResponse = await response.json();
        return {
            status: 'success',
            message: 'User created',
            body: dataResponse
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Internal server error (createUser)',
            error: error
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                                 FormReponse                                */
/* -------------------------------------------------------------------------- */

export const getFormResponses = async () => {
    try {
        const response = await fetch('api/GET/formResponses', {
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
            message: 'Internal server error (getFormResponses)',
            error: error
        }
    }
}

export const getFormResponseByUserId = async (userId: string | undefined) => {
    try {
        const response = await fetch(`api/GET/formResponse/${userId}`, {
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
            message: 'Internal server error (getFormResponseByUserId)',
            error: error
        }
    }
}


type DataPayload = {
    userId: string;
}

export const associateResponseToUser = async (data: DataPayload) => {
    try {
        const payload = {
            userId: data.userId,
        }

        const response = await fetch('api/POST/associateResponseToUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
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
            message: 'Internal server error (associateResponseToUser)',
            error: error
        }
    }
}


/* -------------------------------------------------------------------------- */
/*                                   Answers                                  */
/* -------------------------------------------------------------------------- */


type AnswersPayload = {
    formResponseId: string;
    HorairesDeTravail: ResponseType;
    LEffortMental: ResponseType;
    LEffortPhysique: ResponseType;
    LEnvironnement: ResponseType;
    SatisfactionEtEvolutionDeCarriere: ResponseType;
}

export const createAnswers = async (data: AnswersPayload) => {
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

export const getAnswers = async (id: string) => {
    try {
        const response = await fetch(`api/GET/answers/${id}`, {
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

