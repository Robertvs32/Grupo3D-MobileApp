import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/images/logo.png';
import { colors } from '../styles/colors';

export default function home(){

    const { usuario: motorista } = useLocalSearchParams();
    const router = useRouter();
    const localStorage = '@dadosForm';

    function novoRelatorio(){
        router.push({pathname: '../formulario', params: { motorista: motorista}});
    }

    async function carregarRelatorio(){
        if(await AsyncStorage.getItem(localStorage) == null){
            Alert.alert("Nao ha relatorio salvo!");
        } else {
            router.push({pathname: '../formulario', params: { loadData: true}});
        }
        
    }
        
    return(
        <SafeAreaView style={styles.containerView}>

            <StatusBar style="light"/>

            <Image
                source={logo}
                style={styles.logo}
            />

            <View style={styles.containerBtns}>
                <TouchableOpacity 
                    style={styles.btnNovoRelatorio}
                    onPress={carregarRelatorio}
                >
                    <Text style={styles.txtRelatorio}>Carregar relatorio</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnNovoRelatorio}
                    onPress={novoRelatorio}
                >
                    <Text style={styles.txtRelatorio}>Novo relatório</Text>
                </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerView:{
        backgroundColor: 'rgba(33, 33, 33, 1)',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        height: 160,
        resizeMode: 'contain',
        marginTop: Platform.OS === 'android' ? 50 : 10
    },
    containerBtns:{
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    btnNovoRelatorio:{
        backgroundColor: colors.orange,
        alignItems: 'center',
        borderRadius: 7,
        borderColor: 'white',
        borderStyle: 'solid',
        width: '45%',
        justifyContent: 'center',
        borderWidth: 2
    },
    txtRelatorio:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },

    

});

