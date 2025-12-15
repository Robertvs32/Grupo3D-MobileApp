import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { Alert } from 'react-native';
import { auth, db } from '../config/firebaseconfig';

export default function useLogin(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');


    const emailByUser = async (usuarioLogin) => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("user", "==", usuarioLogin));
        const resultadoQuery =  await getDocs(q);

        if(resultadoQuery.empty){
            return null;
        }
        
        const email = resultadoQuery.docs[0].data().email;
        return email;
    };


    const login = async (router) => {
        try{
            const email = await emailByUser(usuario)
            await signInWithEmailAndPassword(auth, email, senha);
            router.replace({pathname: './home', params: {usuario: usuario}});

        } catch(error){
            Alert.alert(`Erro ao fazer login - ${error}`);
        }
    };

    return{
        setUsuario,
        setSenha,
        login
    }


}



//FUNCAO LOGIN -----------------------------------------------------------------------------------

