import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Alert } from 'react-native';
import { db } from '../config/firebaseconfig';
import { loadData, saveData } from '../utils/saveDataLoad';

export function useFormData(){

        const [motorista, setMotorista] = useState('')
        const [dateIni, setDateIni] = useState(new Date);
        const [dateFim, setDateFim] = useState(new Date);
        const [horaIni, setHoraIni] = useState(new Date);
        const [horaFim, setHoraFim] = useState(new Date);
        const [obs, setObs] = useState('');
        const [estacionamento, setEstacionamento] = useState(false);
        const [valorEstacionamento, setValorEstacionamento] = useState('');
        const [job, setJob] = useState('');
        const [produtorEmpresa, setProdutorEmpresa] = useState('');
        const [produtorPessoa, setProdutorPessoa] = useState('');
        const [kmIni, setKmIni] = useState('');
        const [kmFim, setKmFim] = useState('');
        const [zonaAzul, setZonaAzul] = useState(false);
        const [qtdZonaAzul, setQtdZonaAzul] = useState('');
        const [valorZonaAzul, setValorZonaAzul] = useState(0);
        const [inversor, setInversor] = useState(false);
        const [pedagio, setPedagio] = useState(false);
        const [parceiro, setParceiro] = useState(false);
        const [valorPedagioParceiro, setValorPedagioParceiro] = useState('');
        const [placa, setPlaca] = useState("Selecione a placa");
        const [atribuicao, setAtribuicao] = useState("Selecionar atribuição");
        const [setor, setSetor] = useState("Selecionar setor");
        const [outrosAtribuicao, setOutrosAtribuicao] = useState('');
        const [outrosSetor, setOutrosSetor] = useState('');
        const [alimentacao, setAlimentacao] = useState(false);
        const [arrayAlimentacao, setArrayAlimentacao] = useState([
            {id: 1, refeicao: '', valor: ''}
        ]);
        const verificado = false;
        const [horasTrabalhadas, setHorasTrabalhadas] = useState();
         
        const objectGetters = {
            motorista,
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
            setMotorista,
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

        const enviarDados = async () => {

            const dateTimeIni = new Date();
            const dateTimeFim = new Date();

            dateTimeIni.setFullYear(dateIni.getFullYear(), dateIni.getMonth(), dateIni.getDate());
            dateTimeIni.setHours(horaIni.getHours(), horaIni.getMinutes(), 0, 0);
            

            dateTimeFim.setFullYear(dateFim.getFullYear(), dateFim.getMonth(), dateFim.getDate());
            dateTimeFim.setHours(horaFim.getHours(), horaFim.getMinutes(), 0, 0);


            setHorasTrabalhadas(dateTimeFim - dateTimeIni);

        
            const valores = {
                motorista,
                dateTimeIni,
                dateTimeFim,
                obs,
                estacionamento,
                valorEstacionamento: Number(valorEstacionamento),
                job,
                produtorEmpresa,
                produtorPessoa,
                kmIni: Number(kmIni),
                kmFim: Number(kmFim),
                zonaAzul,
                qtdZonaAzul: Number(qtdZonaAzul),
                valorZonaAzul: Number(valorZonaAzul),
                inversor,
                pedagio,
                parceiro,
                valorPedagioParceiro: Number(valorPedagioParceiro),
                placa,
                atribuicao,
                setor,
                outrosAtribuicao,
                outrosSetor,
                alimentacao,
                ...(alimentacao && {arrayAlimentacao: arrayAlimentacao.map(item => ({
                    ...item,
                    valor: Number(item.valor),
                })),}),
                verificado,
                horasTrabalhadas,
                dateIni
            }

            try{

                const docRef = await addDoc(collection(db, "relatorios"), valores);

                Alert.alert("Sucesso!","Relatório enviado! ID do documento: " + docRef.id);
            
            } catch(error){
                Alert.alert(`Erro ao enviar relatório!`);
            }
        }

        return{
            ...objectGetters, 
            ...objectSetters,
            handleSave,
            handleLoad,
            enviarDados,
        };
}