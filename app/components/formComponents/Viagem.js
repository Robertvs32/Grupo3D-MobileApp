import { View } from 'react-native';
import InputCheckBox from "../InputCheckBox";
import InputComponent from "../InputComponent";

export default function Viagem({viagem, setViagem}){
    return(
        <View>
            <InputCheckBox
                txtInput="Viagem"
                btnState={viagem}
                setbtnState={setViagem}
                iconName="user"
                size={20}
            />  

            {viagem == 'true' && (
                <InputComponent
                    txtInput="Local (viagem)"
                    txtPlaceholder="Digite aqui"
                    setState={setLocalViagem}
                    value={localViagem}
                    iconName="road"
                    size={20}
                    style={{padding: 0, margin: 0}}
                />
            )}
        </View>
    );
}