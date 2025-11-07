import InputComponent from "../InputComponent";

export default function KmInicial({kmIni, setKmIni}){
    return(
        <InputComponent
            txtInput="Km Inicial"
            txtPlaceholder="Digite aqui"
            setState={setKmIni}
            value={kmIni}
            iconName="road"
            size={20}
        />
    );
}