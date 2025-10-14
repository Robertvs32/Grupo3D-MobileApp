import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from './assets/images/logo.png';
import { auth, db } from './config/firebaseconfig';
import { colors } from './styles/colors';

export default function Index() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  const handleLogin = async () => {

    if(!usuario || !senha){
        Alert.alert("Preencha os campos!");
        return;
    }

    try{ 

        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('user', '==', usuario));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.empty){
            Alert.alert("Usuário inválido!");
            return ;
        }

        let email = null;
        querySnapshot.forEach(doc => {
            email = doc.data().email;
        })

      await signInWithEmailAndPassword(auth, email, senha);

      router.replace('./screens/home');
      
    }
    catch(error){
      Alert.alert(`Não foi possível fazer login! ${error}`);
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={logo}
        style={styles.logo}
      />

      <View style={styles.containerInput}>
        <FontAwesome 
          name="user" 
          size={28} 
          color="black"
          style={styles.iconInput}
        />

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="white"
          onChangeText={textUsuario => setUsuario(textUsuario)}
        />
      </View>

      <View style={styles.containerInput}>
        <FontAwesome 
          name="lock" 
          size={28} 
          color="black"
          style={styles.iconInput}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={textSenha => setSenha(textSenha)}
        />
      </View>

      <TouchableOpacity 
        style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.buttonLoginText}>Fazer login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 140,
  },
  texto: {
    color: 'white',
  },
  buttonLogin: {
    backgroundColor: 'white',
    height: 60,
    width: '78%',
    borderRadius: 7,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLoginText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    padding: 5,
    borderRadius: 7,
    width: '78%',
    margin: 4,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'solid'
  },
  iconInput:{
    width: '20%', 
    opacity: 0.4,
    textAlign: 'center'
  },
  input: {
    padding: 10,
    borderRadius: 7,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17.5,
    width: '80%',
    paddingRight: 70
  },
  logo: {
    height: 190,
    marginBottom: 50,
    resizeMode: 'contain'
  },
  
  

});

