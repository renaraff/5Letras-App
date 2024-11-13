import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [login, setLogin ] = useState( false );
    const [cadastro, setCadastro ] = useState( false );
    const [usuario, setUsuario] = useState();
    const [error, setError] = useState(false);

    async function Login(email, senha) {      
        
        if (email != "" && senha != "") {
            await fetch( process.env.EXPO_PUBLIC_URL + '/api/Auth/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                })
            })
                .then(res => res.json())             
                .then(json => {
                    
                   if(json.usuarioId != 0)
                    {
                        console.log( json );
                        setLogin(true);
                        setUsuario(json);
                    }
                })
                .catch(err => setError(true))                
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{  Login, login: login, setLogin, error: error, cadastro: cadastro, usuario:usuario, setCadastro }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;