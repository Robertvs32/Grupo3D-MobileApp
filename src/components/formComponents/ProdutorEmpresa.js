import InputComponent from "../InputComponent";

export default function ProdutorEmpresa({produtorEmpresa, setProdutorEmpresa}){
    return(
        <InputComponent
            txtInput="Produtora - Empresa"
            txtPlaceholder="Digite aqui"
            setState={setProdutorEmpresa}
            value={produtorEmpresa}
            iconName="building"
            size={20}
        />
    );
}