import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Alimentacao from './components/formComponents/Alimentacao';
import Atribuicao from './components/formComponents/Atribuicao';
import BtnEnviar from './components/formComponents/BtnEnviar';
import BtnVoltar from './components/formComponents/BtnVoltar';
import DataFim from './components/formComponents/DataFim';
import DataInicio from './components/formComponents/DataInicio';
import Estacionamento from './components/formComponents/Estacionamento';
import HoraFim from './components/formComponents/HoraFim';
import HoraInicio from './components/formComponents/HoraInicio';
import Inversor from './components/formComponents/Inversor';
import Job from './components/formComponents/Job';
import KmFinal from './components/formComponents/KmFinal';
import KmInicial from './components/formComponents/KmInicial';
import ModalBack from './components/formComponents/ModalBack';
import MotoristaParceiro from './components/formComponents/MotoristaParceiro';
import Obs from './components/formComponents/Obs';
import Pedagio from './components/formComponents/Pedagio';
import ProdutorEmpresa from './components/formComponents/ProdutorEmpresa';
import ProdutorPessoa from './components/formComponents/ProdutorPessoa';
import Setor from './components/formComponents/Setor';
import ZonaAzul from './components/formComponents/zonaAzul';
import PlacaCarro from './components/Placa';
import { colors } from './styles/colors';
import { loadData, saveData } from './utils/saveDataLoad';

export default function Formulario(){

    const { loadData: shouldLoadData } = useLocalSearchParams();

    //STATES
    const [dateIni, setDateIni] = useState(new Date());
    const [dateFim, setDateFim] = useState(new Date());
    const [obs, setObs] = useState('');
    const [estacionamento, setEstacionamento] = useState('');
    const [valorEstacionamento, setValorEstacionamento] = useState('');
    const [horaIni, setHoraIni] = useState(new Date());
    const [horaFim, setHoraFim] = useState(new Date());
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
    const [showModal, setShowModal] = useState(false);
    //FIM STATES
     
    const objectStates = {
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

    const objectSets = {
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
        await saveData(objectStates);
    }

    const handleLoad = async () => {
        await loadData(objectSets);
    }

    useEffect(() => {
        if(shouldLoadData == 'true'){
            handleLoad();
        }
        else {
            const tempDate = (new Date());
            tempDate.setHours(0, 0, 0, 0);
            setDateIni(tempDate);
            setDateFim(tempDate);
        }
    }, [])

    return(
        <View style={styles.containerSafeView}>

            <StatusBar style="light"/>

            <Text style={styles.titleRelatorio}>Relatório de viagem</Text>

            <ScrollView style={styles.containerScroll}>
                    <View style={styles.containerView}>

                            <PlacaCarro
                                state={placa}
                                setState={setPlaca}
                            />

                            <DataInicio
                                dateIni={dateIni}
                                setDateIni={setDateIni}
                                dateFim={dateFim}
                            />
                            
                            <HoraInicio
                                timeIni={horaIni}
                                setTimeIni={setHoraIni}
                                dateIni={dateIni}
                                timeFim={horaFim}
                                dateFim={dateFim}
                            />

                            <DataFim
                                dateFim={dateFim}
                                setDateFim={setDateFim}
                                dateIni={dateIni}
                            />
                            <HoraFim
                                timeFim={horaFim}
                                setTimeFim={setHoraFim}
                                dateIni={dateIni}
                                timeIni={horaIni}
                                dateFim={dateFim}
                            />

                            <Job
                                job={job}
                                setJob={setJob}
                            />

                            <KmInicial
                                kmIni={kmIni}
                                setKmIni={setKmIni}
                            />

                            <KmFinal
                                kmFim={kmFim}
                                setKmFim={setKmFim}
                            />

                            <ProdutorEmpresa
                                produtorEmpresa={produtorEmpresa}
                                setProdutorEmpresa={setProdutorEmpresa}
                            />

                            <ProdutorPessoa
                                produtorPessoa={produtorPessoa}
                                setProdutorPessoa={setProdutorPessoa}
                            />

                            <Atribuicao
                                state={atribuicao}
                                setState={setAtribuicao}
                                setOutros={setOutrosAtribuicao}
                            />

                            <Setor
                                state={setor}
                                setState={setSetor}
                                setOutros={setOutrosSetor}
                            />

                            <MotoristaParceiro
                                parceiro={parceiro}
                                setParceiro={setParceiro}
                            />

                            <Pedagio
                                pedagio={pedagio}
                                setPedagio={setPedagio}
                                parceiro={parceiro}
                                valorPedagioParceiro={valorPedagioParceiro}
                                setValorPedagioParceiro={setValorPedagioParceiro}
                            />

                            <ZonaAzul
                                zonaAzul={zonaAzul}
                                setZonaAzul={setZonaAzul}
                                qtdZonaAzul={qtdZonaAzul}
                                setQtdZonaAzul={setQtdZonaAzul}
                                valorZonaAzul={valorZonaAzul}
                                setValorZonaAzul={setValorZonaAzul}

                            />

                            <Alimentacao
                                state={alimentacao}
                                setState={setAlimentacao}
                                array={arrayAlimentacao}
                                setArray={setArrayAlimentacao}
                            />

                            <Inversor
                                inversor={inversor}
                                setInversor={setInversor}
                            />

                            <Estacionamento
                                estacionamento={estacionamento}
                                valorEstacionamento={valorEstacionamento}
                                setEstacionamento={setEstacionamento}
                                setValorEstacionamento={setValorEstacionamento}
                            />
                            <Obs
                                obs={obs}
                                setObs={setObs}
                            />

                    </View>
            </ScrollView>


            <View style={styles.containerBtns}>
                <BtnVoltar
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
                <BtnEnviar/>
            </View>

            <ModalBack
                visible={showModal}
                setShowModal={setShowModal}
                saveData={handleSave}
            />

        </View>
        
    )
}

const styles = StyleSheet.create({
    containerSafeView:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        paddingVertical: 10
    },
    containerScroll:{
        backgroundColor: 'rgba(130, 128, 128, 1)',
        borderRadius: 7,
        margin: 10,
        padding: 5
    },
    containerView:{
        alignItems: 'center',
        width: '100%'
    },
    containerBtns:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    titleRelatorio:{
        color: 'white',
        width: '100%',
        backgroundColor: colors.orange,
        fontSize: 25,
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid'
    }
})