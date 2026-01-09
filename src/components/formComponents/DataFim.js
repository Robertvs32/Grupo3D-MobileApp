import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import iconCalendario from '../../assets/icons/calendario.png';
import { colors } from '../../assets/styles/colors';
import Icon from '../Icon';

    export default function DataFim({dateFim, setDateFim, dateIni}){

        const [showPicker, setShowPicker] = useState(false);

        function changeDate(event, selectedDate){
            if(Platform.OS == 'android'){
                if(selectedDate.getTime() < dateIni.getTime()){
                    Alert.alert("A data final não pode ser menor que a data de inicio!")
                } 
                else {
                    setDateFim(selectedDate);
                }         
                setShowPicker(false);     
            } 
            else {
                setDateFim(selectedDate);
            }
        }

        function fecharDatePickerIOS(){
            if(dateIni.getTime() <= dateFim.getTime()){
                setShowPicker(false);
            } else {
                Alert.alert("A data final não pode ser menor que a data de início!");
            } 
        }


        return(
            <View style={styles.container}>

                <View style={styles.logoTxt}>
                    <Icon
                        source={iconCalendario}
                    />
                
                    <Text style={styles.txt}>Data Final</Text>
                </View>

                
                <TouchableOpacity 
                    onPress={() => setShowPicker(true)} 
                    style={styles.dateIni}
                >
                    <Text>{`${dateFim.toLocaleDateString()}`}</Text>
                </TouchableOpacity>
                
                {showPicker && (
                    <View style={styles.containerDateTimePicker}>
                        <DateTimePicker
                            accentColor="rgba(255, 255, 255, 1)"
                            display={Platform.OS === 'ios' ? 'inline' : 'default'}
                            mode="date"
                            value={dateFim}
                            onChange={changeDate}
                            locale="pt-br"
                        />

                        {Platform.OS == 'ios' && (
                            <TouchableOpacity 
                                style={styles.btnDateTimePicker}
                                onPress={fecharDatePickerIOS}
                            >
                                <Text style={styles.txtDateTimePicker}>Selecionar data</Text>
                            </TouchableOpacity>
                        )}
                     </View>
                )}
                        
            </View>
        )
    }

    const styles = StyleSheet.create({
        dateIni:{
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
        containerDateTimePicker:{
            backgroundColor: 'rgba(78, 77, 76, 1)',
            alignItems: 'center',
            paddingTop: 20,
            marginVertical: 20,
            borderRadius: 10,
            display: Platform.OS == 'android' ? 'none' : 'flex'
        },
        btnDateTimePicker:{
            backgroundColor: 'white',
            width: '50%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 7
        },
        txtDateTimePicker:{
            color: 'black',
        },

        infoDate:{
            color: 'white',
            width: '100%',
            backgroundColor: colors.orange,
            fontSize: 15,
            padding: 10,
            fontWeight: 'bold'
        }
    });