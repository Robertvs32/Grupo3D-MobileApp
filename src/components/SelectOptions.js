import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../assets/styles/colors';

export default function SelectOptions({object, nameSelect ,state, setState, txtContainer, setOutros}){

    const [exibir, setExibir] = useState(false);

    function select(item, index){
        setState(item[nameSelect]);
        setExibir(false);
    }

    return(
        <View style={styles.container}>
            <View style={styles.iconTxt}>
                <Text style={styles.txtIcon}>{txtContainer}</Text>
            </View>

            {!exibir && (
                <View>
                <TouchableOpacity 
                    style={styles.btnSetValue}
                    onPress={() => setExibir(true)}
                >
                <Text style={styles.btnSetValueTxt}>{state}</Text>
                </TouchableOpacity>

                {state == 'Outros' && (
                    <TextInput
                        style={styles.outrosInput}
                        placeholder="Digite aqui: "
                        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                        onChangeText={(texto) => setOutros(texto)}
                    />
                )}

                </View>
            )}
            

            {exibir && (
                <View>

                {object.map((item, index) => {
                    if(state != item[nameSelect]){
                        return(
                            <TouchableOpacity 
                                key={index + 1}
                                onPress={() => select(item, index)}
                                style={styles.btnSelect}
                            >
                                <Text style={styles.txtSelect}>{item[nameSelect]}</Text>
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
    icon: {
        width: '28px'
    },
    btnSetValue:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
        marginTop: 5,
    },
    btnSetValueTxt:{
        color: 'black',
    },
    txtIcon:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 9,
        color: 'white'
    },
    btnSelect:{
        width: '100%',
        height: 42,
        marginVertical: 3.5,
        borderRadius: 7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSelect:{
        color: 'black'
    },
    outrosInput:{
        backgroundColor: 'white',
        height: '55',
        marginTop: 10,
        borderRadius: 5,
        paddingLeft: 10
    }
});