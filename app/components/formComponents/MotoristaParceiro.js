import InputCheckBox from "../InputCheckBox";

export default function MotoristaParceiro({parceiro, setParceiro}){

    return(
        <InputCheckBox
            txtInput="Motorista parceiro"
            btnState={parceiro}
            setbtnState={setParceiro}
            iconName="user"
            size={20}
        />
    );
    
}


