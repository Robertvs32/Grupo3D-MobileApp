import iconViagem from '../../assets/icons/distancia.png';
import InputCheckBox from "../InputCheckBox";

export default function ForaPerimetro({foraPerimetro, setForaPerimetro}){
    return(
        <InputCheckBox
            txtInput="Fora do perimetro"
            btnState={foraPerimetro}
            setbtnState={setForaPerimetro}
            source={iconViagem}
            size={20}
        />
    );
}