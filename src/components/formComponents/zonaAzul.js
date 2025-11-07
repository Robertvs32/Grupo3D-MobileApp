import { StyleSheet, View } from "react-native";
import InputCheckBox from "../InputCheckBox";
import InputComponent from "../InputComponent";


export default function ZonaAzul({zonaAzul, setZonaAzul, valorZonaAzul, setValorZonaAzul, qtdZonaAzul, setQtdZonaAzul}){

    return(
        <View style={styles.container}>
            <InputCheckBox
                txtInput="Zona azul"
                btnState={zonaAzul}
                setbtnState={setZonaAzul}
                iconName="user"
                size={20}
            />

            {zonaAzul == 'true' && (
                <InputComponent
                    txtInput="Quantidade (zona azul)"
                    txtPlaceholder="Digite aqui"
                    setState={setQtdZonaAzul}
                    value={qtdZonaAzul}
                    iconName="road"
                    size={20}
                />
            )}

            {zonaAzul == 'true' && (
                <InputComponent
                    txtInput="Valor (zona azul)"
                    txtPlaceholder="Digite aqui"
                    setState={setValorZonaAzul}
                    value={valorZonaAzul}
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

