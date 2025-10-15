import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModalForm({visible, setShowModal}){

    return(
        <Modal 
            visible={visible}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContainer2}>
                    <Text style={styles.txtBack}>Deseja enviar o formulario?</Text>

                    <View style={styles.containerBtns}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => setShowModal(!visible)}
                        >
                            <Text style={styles.txtBtn}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.btn}
                        >
                            <Text style={styles.txtBtn}>Enviar</Text>
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
        justifyContent: 'center',
        width: '100%'
    },
    modalContainer2:{
        backgroundColor: 'white',
        height: 200,
        width: '90%',
        borderRadius: 15,
        paddingBottom: 12
    },
    containerBtns:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        borderRadius: 7,
    },
    txtBack:{
        fontSize: 20,
        textAlign: 'center',
        height: '75%',
        paddingTop: 40
    },
    btn:{
        height: 50,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 7, 
        // marginBottom: 10
    },
    txtBtn:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    }
});