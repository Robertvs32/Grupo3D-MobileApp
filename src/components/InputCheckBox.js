import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from '../assets/styles/colors';
import Icon from "./Icon";

export default function InputCheckBox({txtInput, btnState, setbtnState, source}){

    function pressYes(){
        setbtnState(true)
    }

    function pressNo(){
        setbtnState(false)
    }

    return(
        <View style={styles.container}>
            <Icon
                source={source}
            />

            <Text style={styles.txtInput}>{txtInput}</Text>

            <TouchableOpacity 
                style={[
                    styles.checkBox,
                    btnState == true && styles.checkBoxTrue
                ]}
                onPress={pressYes}
            >
                <Text style={styles.txtCheckBox}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[
                    styles.checkBox,
                    btnState == false && styles.checkBoxFalse
                ]}
                onPress={pressNo}
            >
                <Text style={styles.txtCheckBox}>Não</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: colors.orange,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 17,
        padding: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    txtInput:{
        flex: 1,
        marginLeft: 10,
        marginRight: 20,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    checkBox:{
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        fontWeight: 'bold',
        margin: 2,
        borderRadius: 5,
    },
    txtCheckBox:{
        color: 'black',
        fontWeight: 'bold'
    },
    checkBoxTrue:{
        backgroundColor: 'rgba(17, 255, 0, 1)'
    },
    checkBoxFalse:{
        backgroundColor: 'red'
    },
    img: {
        width: 25,
        height: 25,
        objectFit: 'contain',
        marginRight: 5
    }

});