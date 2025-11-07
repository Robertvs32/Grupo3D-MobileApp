import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/colors';

export default function Placa({state, setState}){

    const [exibir, setExibir] = useState(false);

    const placas = [
        { placa: 'Placa 1' },
        { placa: 'Placa 2' },
        { placa: 'Placa 3' },
        { placa: 'Placa 4' },
    ]

    function selectPlaca(item, index){
        setState(item.placa);
        setExibir(false);
    }

    return(
        <View style={styles.container}>
            <View style={styles.iconTxt}>
                <FontAwesome
                    name="car"
                    size={18}
                    color="rgba(255, 255, 255, 1)"
                />

                <Text style={styles.txtIcon}>Placa do carro</Text>
            </View>

            {!exibir && (
                <TouchableOpacity 
                    style={styles.btnSetPlaca}
                    onPress={() => setExibir(true)}
                >
                <Text style={styles.btnSetPlacaTxt}>{state}</Text>
                </TouchableOpacity>
            )}
            

            {exibir && (
                <View>

                {placas.map((item, index) => {
                    if(state != item.placa){
                        return(
                            <TouchableOpacity 
                                key={index + 1}
                                onPress={() => selectPlaca(item, index)}
                                style={styles.btnSelectPlacas}
                            >
                                <Text style={styles.txtSelectPlacas}>{item.placa}</Text>
                            </TouchableOpacity> 
                        );
                    }          
                })}

                </View>
            )} 

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.orange,
        width: '100%',
        textAlign: 'center',
        padding: 6,
        marginBottom: 17,
        borderRadius: 5,
    },
    iconTxt:{
        flexDirection: 'row',
        marginBottom: 6,
        marginTop: 5
    },
    btnSetPlaca:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
        marginTop: 5,
    },
    btnSetPlacaTxt:{
        color: 'black',
    },
    txtIcon:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 9,
        color: 'white'
    },
    btnSelectPlacas:{
        width: '100%',
        height: 42,
        marginVertical: 3.5,
        borderRadius: 7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSelectPlacas:{
        color: 'black'
    }
});