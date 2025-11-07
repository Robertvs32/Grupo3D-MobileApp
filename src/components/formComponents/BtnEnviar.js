import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BtnEnviar({showModalForm, setShowModalForm}){
    return(
        <TouchableOpacity 
            style={styles.btnEnviar}
            onPress={() => setShowModalForm(!showModalForm)}
        >
            <Text style={styles.btnEnviarTxt}>Enviar Relatório</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnEnviar:{
        height: 46,
        backgroundColor: 'white',
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    btnEnviarTxt:{
        color: 'black',
        fontWeight: 'bold'
    },
})
