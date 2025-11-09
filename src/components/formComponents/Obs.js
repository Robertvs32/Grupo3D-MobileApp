import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../assets/styles/colors';

export default function Obs({setObs, obs}){

    const [focus, setFocus] = useState(false)

    return(
        <View 
            style={[
                styles.container,
                focus && styles.inputFocused
            ]}
        >

            <View style={styles.logoTxt}>
                <FontAwesome
                name="file"
                size={17}
                color="rgba(255, 255, 255, 1)"
                />

                <Text style={styles.txt}>{"Observações"}</Text>
            </View>


            <TextInput
                placeholder={"Digite aqui: "}
                onChangeText={setObs}
                onFocus={() => setFocus(!focus)}
                onBlur={() => setFocus(!focus)}
                style={styles.input}
                value={obs}
                placeholderTextColor="rgba(0, 0, 0, 0.2)"
                multiline={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        width: '100%',
        backgroundColor: 'white',
        fontSize: 14,
        color: 'black',
        padding: 15,
        borderRadius: 8,
        minHeight: 35,
    },
    txt:{
        width: '100%',
        paddingTop: 4,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 9,
        color: 'white',
    },
    logoTxt:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        backgroundColor: colors.orange,
        borderRadius: 2,
        paddingLeft: 8,
        paddingVertical: 2
    },
    container:{
        width: '100%',
        flex: 1,
        borderRadius: 7,
        backgroundColor: 'white',
        marginBottom: 17
    },
    inputFocused:{
        marginBottom : 250
    }
});