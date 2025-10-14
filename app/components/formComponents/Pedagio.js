import { StyleSheet, View } from 'react-native';
import InputCheckBox from "../InputCheckBox";
import InputComponent from "../InputComponent";

export default function Pedagio({ pedagio, setPedagio, parceiro, valorPedagioParceiro ,setValorPedagioParceiro}){
    return(
        <View style={styles.container}>
            <InputCheckBox
                txtInput="Pedágio"
                btnState={pedagio}
                setbtnState={setPedagio}
                iconName="road"
                size={20}
            />
        
            {(parceiro == 'true' && pedagio == 'true') && (
                <InputComponent
                    txtInput="Valor pedágio"
                    txtPlaceholder="Digite aqui"
                    setState={setValorPedagioParceiro}
                    value={valorPedagioParceiro}
                    iconName="road"
                    size={20}
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