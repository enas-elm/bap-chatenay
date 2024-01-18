export const checkIfUserExists = async (email: string) => {
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
    const response = await fetch('api/POST/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const dataResponse = await response.json();
    console.log(dataResponse);
}