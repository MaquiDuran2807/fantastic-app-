// Date: 07/04/2021

export const fetchUser = async () => {
    const response = await fetch('/api/user');
    if (!response.ok) {
        throw new Error('Error al obtener los datos del usuario');
    }
    const user = await response.json();
    return user;
};

