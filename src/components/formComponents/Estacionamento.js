import { StyleSheet, View } from 'react-native';
import InputCheckBox from '../InputCheckBox';
import InputComponent from '../InputComponent';

export default function Estacionamento({estacionamento, setEstacionamento, valorEstacionamento, setValorEstacionamento}){
    return(
        <View style={styles.container}>
            <InputCheckBox
                txtInput="Estacionamento"
                btnState={estacionamento}
                setbtnState={setEstacionamento}
                iconName="car"
                size={18}
            />
        
            {estacionamento == 'true' && (
                <InputComponent
                    txtInput="Valor (estacionamento)"
                    txtPlaceholder="Digite aqui"
                    setState={setValorEstacionamento}
                    value={valorEstacionamento}
                    iconName="money"
                    size={18}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%'
    }
})