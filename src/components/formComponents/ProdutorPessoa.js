import InputComponent from "../InputComponent";

export default function ProdutorPessoa({produtorPessoa, setProdutorPessoa}){
    return(
        <InputComponent
            txtInput="Produtor(a) - Pessoa"
            txtPlaceholder="Digite aqui"
            setState={setProdutorPessoa}
            value={produtorPessoa}
            iconName="user"
            size={20}
        />
    );
}