import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BtnVoltar({showModal, setShowModal}){

    return(
            <TouchableOpacity 
                style={styles.btnVoltar}
                onPress={() => setShowModal(!showModal)}
            >
                <Text style={styles.btnVoltarTxt}>Voltar</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnVoltar:{
        height: 46,
        backgroundColor: 'white',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    btnVoltarTxt:{
        color: 'black',
        fontWeight: 'bold'
    },
});