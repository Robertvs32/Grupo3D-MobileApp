import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';

    export default function HoraInicio({timeIni, setTimeIni, dateIni, dateFim, timeFim}){

        const [showPicker, setShowPicker] = useState(false)

        // FUNCAO QUE ATUALIZA O VALOR DO TIME INICIAL NO ANDROID
        function changeTimeAndroid(event, selectedTime){
            if(dateIni.getTime() == dateFim.getTime() && timeIni.getTime() < selectedTime.getTime()){
                Alert.alert("A hora final não pode ser menor que a hora Sinicial! ");
                setShowPicker(false);
            } 
            else {
                setTimeIni(selectedTime);
                setShowPicker(false);
            }
        }

        // FUNCAO QUE ATUALIZA O VALOR DO TIME INICIAL NO IOS
        function changeTimeIos(event, selectedTime){
            setTimeIni(selectedTime);
        }

        //FUNCAO PARA CONFIRMAR O VALOR E FECHAR O DATEPICKER NO IOS
        function showPickerIos(){
            if(dateIni.getTime() == dateFim.getTime() && timeIni.getTime() > timeFim.getTime()){
                Alert.alert("A hora final não pode ser menor que a hora inicial!");
            } 
            else {
                setShowPicker(false);
            }
        }

        return(
            <View style={styles.container}>

                <View style={styles.logoTxt}>
                    <FontAwesome
                    name="user"
                    size={19}
                    color="rgba(255, 255, 255, 1)"
                    />
                
                    <Text style={styles.txt}>Hora início</Text>
                </View>
                
                <TouchableOpacity 
                    onPress={() => setShowPicker(true)} 
                    style={styles.TimeIni}
                >
                    <Text>{`${timeIni.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</Text>
                </TouchableOpacity>
                
                {showPicker && (
                    <View style={styles.containerTimePicker}>
                        <DateTimePicker
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            mode="time"
                            value={timeIni}
                            onChange={Platform.OS == 'android' ? changeTimeAndroid : changeTimeIos}
                            locale="pt-br"
                        />

                        {Platform.OS == 'ios' && (
                            <TouchableOpacity 
                                style={styles.btnTimePicker}
                                onPress={() => showPickerIos()}
                            >
                                <Text style={styles.txtTimePicker}>Selecionar hora</Text>
                            </TouchableOpacity>
                        )}
                     </View>
                )}
                        
            </View>
        )
    }

    const styles = StyleSheet.create({
        TimeIni:{
            backgroundColor: 'white',
            width: '100%',
            padding: 12,
            color: 'black',
            borderBottomStartRadius: 6,
            borderBottomEndRadius: 6
        },
        container:{
            width: '100%',
            marginBottom: 17,
        },
        logoTxt:{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.orange,
            borderRadius: 2,
            paddingLeft: 8,
            paddingVertical: 2,
            borderBottomWidth: 2,
            borderBottomColor: 'white',
            paddingBottom: 7,
            paddingTop: 5
        },
        txt:{
            width: '100%',
            paddingTop: 4,
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 9,
            color: 'white'
        },
        containerTimePicker:{
            backgroundColor: 'rgba(78, 77, 76, 1)',
            alignItems: 'center',
            paddingTop: 20,
            marginVertical: 20,
            borderRadius: 10
        },
        btnTimePicker:{
            backgroundColor: 'white',
            width: '50%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 7
        },
        txtTimePicker:{
            color: 'black',
        },

        infoTime:{
            color: 'white',
            width: '100%',
            backgroundColor: colors.orange,
            fontSize: 15,
            padding: 10,
            fontWeight: 'bold'
        }
    });