import SelectOptions from "../SelectOptions";

export default function Setor({state, setState, setOutros}){

    const Setor = [
        {nome: "Figurino"},
        {nome: "Produção"},
        {nome: "Cliente"},
        {nome: "Objeto"},
        {nome: "Câmera"},
        {nome: "Maquinaria"},
        {nome: "Eletrica"},
        {nome: "Arte"},
        {nome: "Outros"},
    ]


    return(
        <SelectOptions
            object={Setor}
            nameSelect={"nome"}
            state={state}
            setState={setState}
            txtContainer="Setor"
            setOutros={setOutros}
        />
    );
}