import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

export default function useSetor(){

    async function buscaSetores(){
        const docRef = doc(db, 'setor', 'setor');
        const docSnapshot = await getDoc(docRef);
        const arraySetores = docSnapshot.data().setores;

        return arraySetores;
    }

    return{
        buscaSetores
    }
}