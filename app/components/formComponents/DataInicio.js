import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';


    export default function DataInicio({dateIni, setDateIni, dateFim}){

        const [showPicker, setShowPicker] = useState(false);

        function changeDate(event, selectedDate){
            if(Platform.OS == 'android'){
                if(selectedDate.getTime() > dateFim.getTime()){
                    setShowPicker(false);
                    Alert.alert("A data de inicio não pode ser maior que a data final!")
                }    
                else {
                    setDateIni(selectedDate);
                    setShowPicker(false);
                }           
            } 
            else { //Platform IOS
                setDateIni(selectedDate);
            }
        }

        function fecharDatePickerIOS(){
            if(dateIni.getTime() <= dateFim.getTime()){
                setShowPicker(false);
            } else {
                Alert.alert("A data de inicio não pode ser maior que a data final!");
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
                
                    <Text style={styles.txt}>Data início</Text>
                </View>

                
                <TouchableOpacity 
                    onPress={() => setShowPicker(true)} 
                    style={styles.dateIni}
                >
                    <Text>{`${dateIni.toLocaleDateString()}`}</Text>
                </TouchableOpacity>
                
                {showPicker && (
                    <View style={styles.containerDateTimePicker}>
                        <DateTimePicker
                            display={Platform.OS === 'ios' ? 'inline' : 'default'}
                            mode="date"
                            value={dateIni}
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
            backgroundColor: 'rgba(93, 92, 92, 1)',
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