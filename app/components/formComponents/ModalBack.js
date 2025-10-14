import { useRouter } from 'expo-router';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModalBack({visible, setShowModal, saveData}){

    const Router = useRouter();

    function saveAndExit(){
        saveData();
        Router.back();
    }

    return(
        <Modal 
            visible={visible}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContainer2}>
                    <Text style={styles.txtBack}>Deseja realmente voltar?</Text>

                    <View style={styles.containerBtns}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => setShowModal(!visible)}
                        >
                            <Text style={styles.txtBtn}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => Router.back()}
                        >
                            <Text style={styles.txtBtn}>Sair sem salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => saveAndExit()}
                        >
                            <Text style={styles.txtBtn}>Salvar e sair</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer2:{
        backgroundColor: 'white',
        height: 200,
        width: 350,
        borderRadius: 15,
        padding: 6
    },
    containerBtns:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 7
    },
    txtBack:{
        fontSize: 18,
        textAlign: 'center',
        height: '75%',
        paddingTop: 25
    },
    btn:{
        height: 45,
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 7, 
    },
    txtBtn:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12.3
    }
});