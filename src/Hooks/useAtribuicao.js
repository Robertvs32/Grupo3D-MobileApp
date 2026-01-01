import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

export default function useAtribuicao(){

    async function buscaAtribuicoes(){
        const docRef = doc(db, 'atribuicoes', 'IgxVe1QYFBXPgbZxxh89');
        const docSnapshot = await getDoc(docRef);
        const arrayAtribuicoes = docSnapshot.data().atribuicoes;

        return arrayAtribuicoes;
    }

    return{
        buscaAtribuicoes
    }
}