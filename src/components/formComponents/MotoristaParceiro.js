import iconMotorista from '../../assets/icons/motorista.png';
import InputCheckBox from "../InputCheckBox";

export default function MotoristaParceiro({parceiro, setParceiro}){

    return(
        <InputCheckBox
            txtInput="Motorista parceiro"
            btnState={parceiro}
            setbtnState={setParceiro}
            source={iconMotorista}
            size={20}
        />
    );
    
}


