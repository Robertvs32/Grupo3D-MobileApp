import { useEffect, useState } from 'react';
import useSetor from '../../Hooks/useSetor';
import SelectOptions from "../SelectOptions";

export default function Setor({state, setState, setOutros}){

    const { buscaSetores } = useSetor();
    const [setores, setSetores] = useState([])

    useEffect(() => {
        const busca = async () => {
            const arraySetores = await buscaSetores();
            const arrayObjects = arrayToArrayObjects(arraySetores);
            setSetores(arrayObjects);
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
            object={setores}
            nameSelect={"nome"}
            state={state}
            setState={setState}
            txtContainer="Setor"
            setOutros={setOutros}
        />
    );
}