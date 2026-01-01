import { useEffect, useState } from 'react';
import useAtribuicao from '../../Hooks/useAtribuicao';
import SelectOptions from "../SelectOptions";

export default function Atribuicao({state, setState, setOutros}){

    const { buscaAtribuicoes } = useAtribuicao();
    const [atribuicoes, setAtribuicoes] = useState([])

    useEffect(() => {
        const busca = async () => {
            const arrayAtribuicoes = await buscaAtribuicoes();
            const arrayObjects = arrayToArrayObjects(arrayAtribuicoes);
            setAtribuicoes(arrayObjects);
        }
        busca();
    }, [])

    function arrayToArrayObjects(array){
        const arrayObjects = array.map((item) => {
            return {
                nome: item
            }
        })
        return arrayObjects;
    }

    return(
        <SelectOptions
            object={atribuicoes}
            nameSelect={"nome"}
            state={state}
            setState={setState}
            txtContainer="Atribuicoes"
            setOutros={setOutros}
        />
    );
}