import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Alert } from 'react-native';
import { auth, db } from '../config/firebaseconfig';

export const emailByUser = async (usuarioLogin) => {

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("user", "==", usuarioLogin));
    const resultadoQuery =  await getDocs(q);

    if(resultadoQuery.empty){
        return null;
    }
    
    const email = resultadoQuery.docs[0].data().email;
    return email;
};

export const login = async (email, senha, user, router) => {

    try{
        await signInWithEmailAndPassword(auth, email, senha);
        router.replace({pathname: './home', params: {usuario: user}});

    } catch(error){
        Alert.alert(`Erro ao fazer login - ${error}`);
    }
};

export const logout = async () => {

    try{
        signOut(auth);
        router.replace('./index.js');

    } catch(error){
        Alert.alert("Erro ao deslogar!");
    }

}