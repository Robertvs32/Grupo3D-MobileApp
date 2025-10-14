import InputCheckBox from "../InputCheckBox";

export default function Inversor({inversor, setInversor}){
    return(
        <InputCheckBox
            txtInput="Inversor"
            btnState={inversor}
            setbtnState={setInversor}
            iconName="bolt"
            size={20}
        />
    );
}