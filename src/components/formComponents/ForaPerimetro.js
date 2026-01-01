import InputCheckBox from "../InputCheckBox";

export default function ForaPerimetro({foraPerimetro, setForaPerimetro}){
    return(
        <InputCheckBox
            txtInput="Fora do perimetro"
            btnState={foraPerimetro}
            setbtnState={setForaPerimetro}
            iconName="bolt"
            size={20}
        />
    );
}