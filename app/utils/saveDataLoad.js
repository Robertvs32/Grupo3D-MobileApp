    import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

    //ARQUIVO QUE ARMAZENA OS DADOS DOS FORMULÁRIOS
    const localStorage = '@dadosForm'

    //FUNÇÃO PARA SALVAR DADOS DO FORMULÁRIO NO DISPOSITIVO
    export const saveData = async (objectData) => {
        try{
            const jsonValue = JSON.stringify(objectData);
            await AsyncStorage.setItem(localStorage, jsonValue)
            Alert.alert("Salvo com sucesso!");
        } 
        catch(e) {
            Alert.alert(`Erro ${e}`);
        }
    };

    
    //FUNÇÃO PARA CARREGAR DADOS DO DISPOSITIVO E INSERIR NOS ESTADOS DO FORMULÁRIO
    export const loadData = async (setters) => {
        try{
            const jsonValue = await AsyncStorage.getItem(localStorage);
            if(jsonValue != null){
                const loadedData = JSON.parse(jsonValue)

                setters.setDateIni(new Date(loadedData.dateIni))
                setters.setDateFim(new Date(loadedData.dateFim))
                setters.setObs(loadedData.obs)
                setters.setEstacionamento(loadedData.estacionamento)
                setters.setValorEstacionamento(loadedData.valorEstacionamento)
                setters.setHoraIni(new Date(loadedData.horaIni))
                setters.setHoraFim(new Date(loadedData.horaFim))
                setters.setJob(loadedData.job)
                setters.setProdutorEmpresa(loadedData.produtorEmpresa)
                setters.setProdutorPessoa(loadedData.produtorPessoa)
                setters.setKmIni(loadedData.kmIni)
                setters.setKmFim(loadedData.kmFim)
                setters.setZonaAzul(loadedData.zonaAzul)
                setters.setQtdZonaAzul(loadedData.qtdZonaAzul)
                setters.setValorZonaAzul(loadedData.valorZonaAzul)
                setters.setInversor(loadedData.inversor)
                setters.setPedagio(loadedData.pedagio)
                setters.setParceiro(loadedData.parceiro)
                setters.setValorPedagioParceiro(loadedData.valorPedagioParceiro)
                setters.setPlaca(loadedData.placa)
                setters.setAtribuicao(loadedData.atribuicao)
                setters.setSetor(loadedData.setor)
                setters.setOutrosAtribuicao(loadedData.outrosAtribuicao)
                setters.setOutrosSetor(loadedData.outrosSetor)
                setters.setAlimentacao(loadedData.alimentacao)
                setters.setArrayAlimentacao(loadedData.arrayAlimentacao)

                Alert.alert("Carregado com sucesso");
            }
        }
        catch(e){
            Alert.alert(`Erro ${e}`);
        }
    };



    export const clearData = (setters) => {
        setters.setDateIni(new Date());
        setters.setDateFim(new Date());
        setters.setObs('');
        setters.setEstacionamento('');
        setters.setValorEstacionamento('');
        setters.setHoraIni(new Date());
        setters.setHoraFim(new Date());
        setters.setJob('');
        setters.setProdutorEmpresa('');
        setters.setProdutorPessoa('');
        setters.setKmIni('');
        setters.setKmFim('');
        setters.setZonaAzul('');
        setters.setQtdZonaAzul('');
        setters.setValorZonaAzul(0);
        setters.setInversor('');
        setters.setPedagio('');
        setters.setParceiro('');
        setters.setValorPedagioParceiro(0);
        setters.setPlaca("Selecione a placa");
        setters.setAtribuicao("Selecionar atribuição");
        setters.setSetor("Selecionar setor");
        setters.setOutrosAtribuicao('');
        setters.setOutrosSetor('');
        setters.setAlimentacao('');
        setters.setArrayAlimentacao([
            {id: 1, refeicao: '', valor: ''},
        ]);

        Alert.alert("Novo relatório criado!");
    }

    