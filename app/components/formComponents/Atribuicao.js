import SelectOptions from "../SelectOptions";

export default function Atribuicao({state, setState, setOutros}){

    const Atribuicoes = [
        {nome: "Retirada"},
        {nome: "Pesquisa"},
        {nome: "Set"},
        {nome: "Devolução"},
        {nome: "Visita - Locação"},
        {nome: "Outros"},
    ]


    return(
        <SelectOptions
            object={Atribuicoes}
            nameSelect={"nome"}
            state={state}
            setState={setState}
            txtContainer="Atribuição"
            setOutros={setOutros}
        />
    );
}