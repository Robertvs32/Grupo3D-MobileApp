import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import InputCheckBox from '../InputCheckBox';


    export default function Alimentacao({state, setState, array, setArray}){

        const [contador, setContador] = useState(array[array.length - 1].id + 1);

        function adicionarRef(){
            const novoItem = {
                id: contador,
                nome: '',
                valor: ''
            }

            setContador(contador + 1);

            const arrayTemporario = [...array, novoItem];
            setArray(arrayTemporario);
        }

        function removerRef(){
            if(array.length > 1){
                setArray(array.slice(0, -1));
            } 
            else {
                Alert.alert("O valor mínimo é de uma refeição!");
            }
        }

        function changeRef(text, id, campo){
            const arrayAtualizado = array.map(item => {
                if(item.id == id){
                    return { ...item, [campo]: text };
                }
                else {
                    return item;
                }
            });
            setArray(arrayAtualizado);
        }


        useEffect(() => {
            setContador(array[array.length - 1].id + 1);
        }, [ array ]);

        return(
            <View style={styles.containerView}>
                <InputCheckBox
                    txtInput="Alimentação"
                    btnState={state}
                    setbtnState={setState}
                    iconName="user"
                    size={19}
                />

                {(state == 'true') && (

                    <View>

                        <View style={styles.refValueTitleContainer}>
                            <Text style={styles.txtRefValue}>Refeição</Text>
                            <Text style={styles.txtRefValue}>Valor</Text>
                        </View>

                            {array.map((item, index) => {
                                return(

                                    <View 
                                        style={styles.refeicaoValor}
                                        key={index + 1}
                                    >

                                        <TextInput
                                            style={[
                                                styles.inputRefeicao,
                                                styles.borderRight
                                            ]}
                                            onChangeText={(text) => changeRef(text, item.id, 'refeicao')}
                                            value={item.refeicao}
                                        />

                                    <View style={styles.containerValor}>
                                        <Text>R$: </Text>
                                        <TextInput
                                            style={styles.inputValor}
                                            onChangeText={(text) => changeRef(text, item.id, 'valor')}
                                            value={item.valor}
                                        />
                                    </View>
                                    
                                </View>
                            )
                        })}

                        <View style={styles.containerBtnRemoveAdd}>

                            <TouchableOpacity 
                                style={styles.removeRef}
                                onPress={() => removerRef()}
                            >
                                <Text style={styles.txtRemoveRef}>Remover</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.addRef}
                                onPress={() => adicionarRef()}
                            >
                                <Text style={styles.txtAddRef}>Adicionar refeição</Text>
                            </TouchableOpacity>
                        </View> 

                    </View>
                )}
            </View>
            
        )
    }

    const styles = StyleSheet.create({
        containerView:{
            width: '100%'
        },
        refeicaoValor:{
            width: '100%',
            backgroundColor: 'red',
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 7,
            borderRadius: 4,
            marginBottom: 10
        },
        inputRefeicao:{
            textAlign: 'center',
            height: 40,
            width: '50%'
        },
        inputValor:{
            textAlign: 'center',
            height: 40,
            width: '50%',
        },
        borderRight:{
            borderRightWidth: 1,
            borderRightColor: 'black'
        },
        containerValor:{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 25,
            width: '50%'
        },
        addRef:{
            backgroundColor: 'rgba(6, 188, 0, 1)',
            alignItems: 'center',
            marginTop: 7,
            marginBottom: 20,
            height: 42,
            justifyContent: 'center',
            borderRadius: 4,
            width: '70%'
        },
        txtAddRef:{
            color: 'white',
            fontWeight: 'bold',
        },
        containerBtnRemoveAdd:{
            flexDirection: 'row',
            width: '100%',
        },
        removeRef:{
            backgroundColor: 'rgba(255, 0, 0, 1)',
            alignItems: 'center',
            marginTop: 7,
            marginBottom: 20,
            height: 42,
            justifyContent: 'center',
            borderRadius: 4,
            width: '30%'
        },
        txtRemoveRef:{
            color: 'white',
            fontWeight: 'bold'
        },
        refValueTitleContainer:{
            backgroundColor: 'black',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4
        },
        txtRefValue:{
            color: 'white',
            width: '50%',
            textAlign: 'center',
            fontWeight: 'bold'
        },

    })