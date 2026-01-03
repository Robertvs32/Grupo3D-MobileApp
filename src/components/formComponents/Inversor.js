import iconInversor from '../../assets/icons/eletricidade.png';
import InputCheckBox from "../InputCheckBox";

export default function Inversor({inversor, setInversor}){
    return(
        <InputCheckBox
            txtInput="Inversor"
            btnState={inversor}
            setbtnState={setInversor}
            source={iconInversor}
            size={20}
        />
    );
}