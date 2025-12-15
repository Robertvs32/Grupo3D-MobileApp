import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

export default function useBuscas(){

    const buscaPlacas = async () => {
        const docRef = doc(db, 'placas e valores', 'WKoQg1pcB401ZWmAk2Pz');
        const docSnapShot = await getDoc(docRef);
        const placas = docSnapShot.data().placas;

        return placas;
    }

    return{
        buscaPlacas
    }

}