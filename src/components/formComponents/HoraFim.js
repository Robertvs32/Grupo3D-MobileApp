import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import iconRelogio from '../../assets/icons/relogio.png';
import { colors } from '../../assets/styles/colors';
import Icon from '../Icon';

    export default function HoraFim({timeFim, setTimeFim, dateIni, dateFim, timeIni}){

        const [showPicker, setShowPicker] = useState(false)

        function changeTimeAndroid(event, selectedTime){
            if(dateIni.getTime() == dateFim.getTime() && timeIni.getTime() > selectedTime.getTime()){
                Alert.alert("A hora final não pode ser menor que a hora inicial!");
                setShowPicker(false);
            } 
            else {
                setTimeFim(selectedTime);
                setShowPicker(false);
            }
        }

        function changeTimeIos(event, selectedTime){
            setTimeFim(selectedTime);
        }

        function showPickerIos(){
            if(dateIni.getTime() == dateFim.getTime() && timeIni.getTime() > timeFim.getTime()){
                Alert.alert("A hora final não pode ser menor que a hora inicial!");
            } 
            else {
                setShowPicker(false);
            }
        }

        useEffect(() => {
            if(dateIni.getTime() == dateFim.getTime() && timeIni.getTime() > timeFim.getTime()){
                setTimeFim(timeIni);
            } 
        }, [dateIni, dateFim])

        return(
            <View style={styles.container}>

                <View style={styles.iconTxt}>
                    <Icon
                        source={iconRelogio}
                    />
                    <Text style={styles.txt}>Hora Final</Text>
                </View>
                
                <TouchableOpacity 
                    onPress={() => setShowPicker(true)} 
                    style={styles.TimeIni}
                >
                    <Text>{`${timeFim.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</Text>
                </TouchableOpacity>
                
                {showPicker && (
                    <View style={styles.containerTimePicker}>
                        <DateTimePicker
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            mode="time"
                            value={timeFim}
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
        iconTxt:{
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
            backgroundColor: 'rgba(93, 92, 92, 1)',
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