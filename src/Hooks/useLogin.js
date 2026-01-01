import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert } from 'react-native';
import { auth } from '../config/firebaseconfig';

export default function useLogin(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = async (router) => {
        try{
            await signInWithEmailAndPassword(auth, email, senha);
            router.replace('./home');

        } catch(error){
            Alert.alert(`Erro ao fazer login - ${error}`);
        }
    };

    return{
        setEmail,
        setSenha,
        login
    }


}



//FUNCAO LOGIN -----------------------------------------------------------------------------------

