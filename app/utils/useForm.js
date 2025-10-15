import { useState } from 'react';
import { loadData, saveData } from '../utils/saveDataLoad';

export function useFormData(){

        const [dateIni, setDateIni] = useState(new Date);
        const [dateFim, setDateFim] = useState(new Date);
        const [horaIni, setHoraIni] = useState(new Date);
        const [horaFim, setHoraFim] = useState(new Date);
        const [obs, setObs] = useState('');
        const [estacionamento, setEstacionamento] = useState('');
        const [valorEstacionamento, setValorEstacionamento] = useState('');
        const [job, setJob] = useState('');
        const [produtorEmpresa, setProdutorEmpresa] = useState('');
        const [produtorPessoa, setProdutorPessoa] = useState('');
        const [kmIni, setKmIni] = useState('');
        const [kmFim, setKmFim] = useState('');
        const [zonaAzul, setZonaAzul] = useState('');
        const [qtdZonaAzul, setQtdZonaAzul] = useState('');
        const [valorZonaAzul, setValorZonaAzul] = useState(0);
        const [inversor, setInversor] = useState('');
        const [pedagio, setPedagio] = useState('');
        const [parceiro, setParceiro] = useState('');
        const [valorPedagioParceiro, setValorPedagioParceiro] = useState(0);
        const [placa, setPlaca] = useState("Selecione a placa");
        const [atribuicao, setAtribuicao] = useState("Selecionar atribuição");
        const [setor, setSetor] = useState("Selecionar setor");
        const [outrosAtribuicao, setOutrosAtribuicao] = useState('');
        const [outrosSetor, setOutrosSetor] = useState('');
        const [alimentacao, setAlimentacao] = useState('');
        const [arrayAlimentacao, setArrayAlimentacao] = useState([
            {id: 1, refeicao: '', valor: ''},
        ]);
         
        const objectGetters = {
            dateIni,
            dateFim,
            obs,
            estacionamento,
            valorEstacionamento,
            horaIni,
            horaFim,
            job,
            produtorEmpresa,
            produtorPessoa,
            kmIni,
            kmFim,
            zonaAzul,
            qtdZonaAzul,
            valorZonaAzul,
            inversor,
            pedagio,
            parceiro,
            valorPedagioParceiro,
            placa,
            atribuicao,
            setor,
            outrosAtribuicao,
            outrosSetor,
            alimentacao,
            arrayAlimentacao
        }
    
        const objectSetters = {
            setDateIni,
            setDateFim,
            setObs,
            setEstacionamento,
            setValorEstacionamento,
            setHoraIni,
            setHoraFim,
            setJob,
            setProdutorEmpresa,
            setProdutorPessoa,
            setKmIni,
            setKmFim,
            setZonaAzul,
            setQtdZonaAzul,
            setValorZonaAzul,
            setInversor,
            setPedagio,
            setParceiro,
            setValorPedagioParceiro,
            setPlaca,
            setAtribuicao,
            setSetor,   
            setOutrosAtribuicao,
            setOutrosSetor,
            setAlimentacao,
            setArrayAlimentacao
        }

        const handleSave = async () => {
            await saveData(objectGetters);
        }
    
        const handleLoad = async () => {
            await loadData(objectSetters);
        }

        const enviarDadosJson = async (url) => {

            const dateTimeIni = new Date();
            const dateTimeFim = new Date();

            dateTimeIni.setFullYear(dateIni.getFullYear(), dateIni.getMonth(), dateIni.getDate());
            dateTimeIni.setHours(horaIni.getHours(), horaIni.getMinutes(), 0, 0);
            

            dateTimeFim.setFullYear(dateFim.getFullYear(), dateFim.getMonth(), dateFim.getDate());
            dateTimeFim.setHours(horaFim.getHours(), horaFim.getMinutes(), 0, 0);


            const valores = {
                dateTimeIni,
                dateTimeFim,
                obs,
                estacionamento,
                valorEstacionamento,
                job,
                produtorEmpresa,
                produtorPessoa,
                kmIni,
                kmFim,
                zonaAzul,
                qtdZonaAzul,
                valorZonaAzul,
                inversor,
                pedagio,
                parceiro,
                valorPedagioParceiro,
                placa,
                atribuicao,
                setor,
                outrosAtribuicao,
                outrosSetor,
                alimentacao,
                arrayAlimentacao
            }

            const json = JSON.stringify(valores);

            try{

                fetch(url, {
                    method: 'POST',
                    body: json
                });

                Alert.alert("Relatório enviado!");

            } catch(error){
                Alert.alert("Erro ao enviar relatório!");
            }


        }

        return{
            ...objectGetters, 
            ...objectSetters,
            handleSave,
            handleLoad,
            enviarDadosJson,
        };
}