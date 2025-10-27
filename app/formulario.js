import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './styles/colors';
import { useFormData } from './utils/useForm';

import {
    Alimentacao,
    Atribuicao,
    BtnEnviar,
    BtnVoltar,
    DataFim,
    DataInicio,
    Estacionamento,
    HoraFim,
    HoraInicio,
    Inversor,
    Job,
    KmFinal,
    KmInicial,
    ModalBack,
    ModalForm,
    MotoristaParceiro,
    Obs,
    Pedagio,
    PlacaCarro,
    ProdutorEmpresa,
    ProdutorPessoa,
    Setor,
    ZonaAzul
} from './components/components';

export default function formulario(){

    const { loadData: shouldLoadData } = useLocalSearchParams();
    const { motorista: nomeMotorista } = useLocalSearchParams();

    const [showModalBack, setShowModalBack] = useState(false);
    const [showModalForm, setShowModalForm] = useState(false);

    const form = useFormData();

    useEffect(() => {
        if(shouldLoadData == 'true'){
            form.handleLoad();
        }
        else {
            const tempDate = (new Date());
            tempDate.setHours(0, 0, 0, 0);
            form.setDateIni(tempDate);
            form.setDateFim(tempDate);
            form.setMotorista(nomeMotorista);
        }
    }, [])

    return(
        <SafeAreaView style={styles.containerSafeView}>

            <StatusBar style="light"/>

            <Text style={styles.titleRelatorio}>{form.motorista}</Text>

            <ScrollView style={styles.containerScroll}>
                <View style={styles.containerView}>

                    <PlacaCarro
                        state={form.placa}
                        setState={form.setPlaca}
                    />

                    <DataInicio
                        dateIni={form.dateIni}
                        setDateIni={form.setDateIni}
                        dateFim={form.dateFim}
                    />
                    
                    <HoraInicio
                        timeIni={form.horaIni}
                        setTimeIni={form.setHoraIni}
                        dateIni={form.dateIni}
                        timeFim={form.horaFim}
                        dateFim={form.dateFim}
                    />

                    <DataFim
                        dateFim={form.dateFim}
                        setDateFim={form.setDateFim}
                        dateIni={form.dateIni}
                    />
                    <HoraFim
                        timeFim={form.horaFim}
                        setTimeFim={form.setHoraFim}
                        dateIni={form.dateIni}
                        timeIni={form.horaIni}
                        dateFim={form.dateFim}
                    />

                    <Job
                        job={form.job}
                        setJob={form.setJob}
                    />

                    <KmInicial
                        kmIni={form.kmIni}
                        setKmIni={form.setKmIni}
                    />

                    <KmFinal
                        kmFim={form.kmFim}
                        setKmFim={form.setKmFim}
                    />

                        <ProdutorEmpresa
                        produtorEmpresa={form.produtorEmpresa}
                        setProdutorEmpresa={form.setProdutorEmpresa}
                    />

                    <ProdutorPessoa
                        produtorPessoa={form.produtorPessoa}
                        setProdutorPessoa={form.setProdutorPessoa}
                    />

                    <Atribuicao
                        state={form.atribuicao}
                        setState={form.setAtribuicao}
                        setOutros={form.setOutrosAtribuicao}
                    />

                    <Setor
                        state={form.setor}
                        setState={form.setSetor}
                        setOutros={form.setOutrosSetor}
                    />

                    <MotoristaParceiro
                        parceiro={form.parceiro}
                        setParceiro={form.setParceiro}
                    />

                    <Pedagio
                        pedagio={form.pedagio}
                        setPedagio={form.setPedagio}
                        parceiro={form.parceiro}
                        valorPedagioParceiro={form.valorPedagioParceiro}
                        setValorPedagioParceiro={form.setValorPedagioParceiro}
                    />

                    <ZonaAzul
                        zonaAzul={form.zonaAzul}
                        setZonaAzul={form.setZonaAzul}
                        qtdZonaAzul={form.qtdZonaAzul}
                        setQtdZonaAzul={form.setQtdZonaAzul}
                        valorZonaAzul={form.valorZonaAzul}
                        setValorZonaAzul={form.setValorZonaAzul}

                    />

                    <Alimentacao
                        state={form.alimentacao}
                        setState={form.setAlimentacao}
                        array={form.arrayAlimentacao}
                        setArray={form.setArrayAlimentacao}
                    />

                    <Inversor
                        inversor={form.inversor}
                        setInversor={form.setInversor}
                    />

                    <Estacionamento
                        estacionamento={form.estacionamento}
                        valorEstacionamento={form.valorEstacionamento}
                        setEstacionamento={form.setEstacionamento}
                        setValorEstacionamento={form.setValorEstacionamento}
                    />
                    <Obs
                        obs={form.obs}
                        setObs={form.setObs}
                    />

                </View>
            </ScrollView>


            <View style={styles.containerBtns}>
                <BtnVoltar
                    showModal={showModalBack}
                    setShowModal={setShowModalBack}
                />
                <BtnEnviar
                    showModalForm={showModalForm}
                    setShowModalForm={setShowModalForm}    
                />
            </View>

            <ModalBack
                visible={showModalBack}
                setShowModal={setShowModalBack}
                saveData={form.handleSave}
            />

            <ModalForm
                visible={showModalForm}
                setShowModal={setShowModalForm}
                funcaoEnviar={form.enviarDados}
            />

        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    containerSafeView:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        paddingVertical: 10
    },
    containerScroll:{
        backgroundColor: 'rgba(197, 195, 195, 1)',
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