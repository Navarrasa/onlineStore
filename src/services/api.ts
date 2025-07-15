// Funções para enviar requisições às API's externas.

export const UserLogin = async (username: string, password: string) =>{
    
    const response = await fetch('https://dummyjson.com/auth/login', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    
    });

    if (!response.ok) {
        throw new Error('Credenciais inválidas');
    }

    return response.json();

};

export const getProductsAPI = async(limit: number, skip: number) =>{

    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`,)
    
    return await response.json()

}