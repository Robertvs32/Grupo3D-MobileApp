import InputComponent from "../InputComponent";

export default function KmFinal({kmFim, setKmFim}){
    return(
        <InputComponent
            txtInput="Km Final"
            txtPlaceholder="Digite aqui"
            setState={setKmFim}
            value={kmFim}
            iconName="road"
            size={20}
        />
    );
}